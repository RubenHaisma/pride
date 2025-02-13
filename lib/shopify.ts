import { createStorefrontClient } from '@shopify/hydrogen-react';

const client = createStorefrontClient({
  storeDomain: 'pride-2025.myshopify.com',
  publicStorefrontToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
  storefrontApiVersion: '2024-01',
});

export const getStorefront = client.getStorefront;