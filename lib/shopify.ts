import { createStorefrontClient } from '@shopify/hydrogen-react';

export interface ShopifyImage {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  price: string;
  images: ShopifyImage[];
  variants: ShopifyVariant[];
  reviews: {
    id: string;
    rating: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
  }[];
}

const client = createStorefrontClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  publicStorefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
  storefrontApiVersion: '2024-01',
});

const getStorefront = client.getStorefront;

export async function getProducts(
  sortKey = 'TITLE',
  reverse = false,
  query = ''
): Promise<ShopifyProduct[]> {
  try {
    const { products } = await getStorefront().query({
      query: `
        query GetProducts($sortKey: ProductSortKeys!, $reverse: Boolean!, $query: String!) {
          products(
            first: 24,
            sortKey: $sortKey,
            reverse: $reverse,
            query: $query
          ) {
            edges {
              node {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 5) {
                  edges {
                    node {
                      url
                      altText
                      width
                      height
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      availableForSale
                      selectedOptions {
                        name
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        sortKey,
        reverse,
        query,
      },
    });

    return products.edges.map(({ node }: any) => ({
      id: node.id,
      title: node.title,
      description: node.description,
      price: `€${parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2)}`,
      images: node.images.edges.map(({ node: image }: any) => ({
        url: image.url,
        altText: image.altText,
        width: image.width,
        height: image.height,
      })),
      variants: node.variants.edges.map(({ node: variant }: any) => ({
        id: variant.id,
        title: variant.title,
        price: `€${parseFloat(variant.price.amount).toFixed(2)}`,
        availableForSale: variant.availableForSale,
        selectedOptions: variant.selectedOptions,
      })),
      reviews: [], // Reviews will be handled separately as Shopify doesn't provide this natively
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getProduct(id: string): Promise<ShopifyProduct> {
  try {
    const { product } = await getStorefront().query({
      query: `
        query GetProduct($id: ID!) {
          product(id: $id) {
            id
            title
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                  width
                  height
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }
      `,
      variables: {
        id,
      },
    });

    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: `€${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}`,
      images: product.images.edges.map(({ node: image }: any) => ({
        url: image.url,
        altText: image.altText,
        width: image.width,
        height: image.height,
      })),
      variants: product.variants.edges.map(({ node: variant }: any) => ({
        id: variant.id,
        title: variant.title,
        price: `€${parseFloat(variant.price.amount).toFixed(2)}`,
        availableForSale: variant.availableForSale,
        selectedOptions: variant.selectedOptions,
      })),
      reviews: [], // Reviews will be handled separately
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

export async function createCheckout(
  variantId: string,
  quantity: number
): Promise<any> {
  try {
    const { checkoutCreate } = await getStorefront().mutate({
      mutation: `
        mutation CreateCheckout($variantId: ID!, $quantity: Int!) {
          checkoutCreate(input: {
            lineItems: [{ variantId: $variantId, quantity: $quantity }]
          }) {
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
        variantId,
        quantity,
      },
    });

    return checkoutCreate;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
}