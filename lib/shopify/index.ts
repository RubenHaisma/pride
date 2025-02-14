import { env } from '@/lib/env';
import { getProductsQuery } from './queries/product';
import { Product, ShopifyProduct } from './types';
import { removeEdgesAndNodes, reshapeProduct } from './utils';

const domain = env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = env.SHOPIFY_STOREFRONT_TOKEN!;
const apiVersion = env.SHOPIFY_API_VERSION;

if (!domain || !storefrontToken) {
  throw new Error('Missing Shopify environment variables');
}

const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

async function shopifyFetch<T>({
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
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontToken,
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
      throw new Error(body.errors[0].message);
    }

    return {
      status: result.status,
      body
    };
  } catch (error) {
    console.error('Shopify fetch error:', error);
    throw error;
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
      },
      cache: 'no-store' // Disable caching to always get fresh data
    });

    const products = body.data.products.edges.map(({ node }) => node);
    return reshapeProducts(products);
  } catch (error) {
    console.error('Failed to load products:', error);
    return [];
  }
}

export async function getProduct(handle: string): Promise<Product | null> {
  try {
    const { body } = await shopifyFetch<{
      data: {
        product: ShopifyProduct;
      };
    }>({
      query: `
        query getProduct($handle: String!) {
          product(handle: $handle) {
            id
            handle
            availableForSale
            title
            description
            descriptionHtml
            options {
              id
              name
              values
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 250) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
            images(first: 20) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            seo {
              title
              description
            }
            tags
            updatedAt
          }
        }
      `,
      variables: {
        handle
      }
    });

    return reshapeProduct(body.data.product);
  } catch (error) {
    console.error('Failed to load product:', error);
    return null;
  }
}

function reshapeProducts(products: ShopifyProduct[]): Product[] {
  return products.map(product => {
    const reshapedProduct = reshapeProduct(product);
    return reshapedProduct as Product;
  }).filter((product): product is Product => product !== null);
}