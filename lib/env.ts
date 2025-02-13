export const env = {
    SITE_NAME: process.env.SITE_NAME || 'Pride 2025',
    COMPANY_NAME: process.env.COMPANY_NAME || 'Pride Amsterdam',
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN || '',
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    SHOPIFY_REVALIDATION_SECRET: process.env.SHOPIFY_REVALIDATION_SECRET || ''
  } as const;