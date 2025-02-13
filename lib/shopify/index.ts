import { env } from '@/lib/env';
import { getProductsQuery } from './queries/product';
import { Product, ShopifyProduct } from './types';

const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-01/graphql.json';

export async function shopifyFetch<T>({
  query,
  variables,
  headers,
  cache = 'force-cache'
}: {
  query: string;
  variables?: any;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<{ status: number; body: T } | never> {
  try {
    const endpoint = `https://${env.SHOPIFY_STORE_DOMAIN}${SHOPIFY_GRAPHQL_API_ENDPOINT}`;
    const key = env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key,
        ...headers
      },
      body: JSON.stringify({
        query,
        variables
      }),
      cache,
      next: { revalidate: 900 } // 15 minutes
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An error occurred while fetching from Shopify');
  }
}

export async function getProducts({
  query = '',
  reverse = false,
  sortKey = 'BEST_SELLING'
}: {
  query?: string;
  reverse?: boolean;
  sortKey?: string;
} = {}): Promise<Product[]> {
  try {
    const { body } = await shopifyFetch<{
      data: {
        products: {
          edges: {
            node: ShopifyProduct;
          }[];
        };
      };
    }>({
      query: getProductsQuery,
      variables: {
        query,
        reverse,
        sortKey
      }
    });

    const products = body.data.products.edges.map(({ node }) => node);
    return reshapeProducts(products);
  } catch (error) {
    console.error('Failed to load products:', error);
    return [];
  }
}

function reshapeProducts(products: ShopifyProduct[]): Product[] {
  return products.map(product => ({
    ...product,
    variants: product.variants.edges.map(edge => edge.node),
    images: product.images.edges.map(edge => edge.node)
  }));
}