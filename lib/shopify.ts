import { env } from '@/lib/env';
import { isShopifyError } from './shopify/helpers';
import { getProductsQuery } from './shopify/queries/product';
import { Product, ShopifyProduct } from './shopify/types';
import { reshapeProduct } from './shopify/utils';

const domain = env.SHOPIFY_STORE_DOMAIN;
const storefrontToken = env.SHOPIFY_STOREFRONT_TOKEN;
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
        'X-Shopify-Storefront-Access-Token': storefrontToken as string,
        ...headers
      },
      body: JSON.stringify({
        query,
        variables
      }),
      cache
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0].message);
    }

    if (!body.data) {
      throw new Error('No data returned from Shopify');
    }

    return {
      status: result.status,
      body
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An error occurred while fetching from Shopify');
  }
}

export async function createCheckout(
  variantId: string,
  quantity: number
): Promise<any> {
  try {
    const { body } = await shopifyFetch<{
      data: {
        checkoutCreate: {
          checkoutUserErrors: any[];
          checkout: {
            id: string;
            webUrl: string;
          };
        };
      };
    }>({
      query: `
        mutation checkoutCreate($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkoutUserErrors {
              code
              field
              message
            }
            checkout {
              id
              webUrl
            }
          }
        }
      `,
      variables: {
        input: {
          lineItems: [{ 
            variantId: `gid://shopify/ProductVariant/${variantId}`,
            quantity 
          }]
        }
      },
      cache: 'no-store'
    });

    return body.data.checkoutCreate;
  } catch (error) {
    console.error('Error creating checkout:', error);
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
      }
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