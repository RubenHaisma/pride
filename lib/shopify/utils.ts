import { Cart, Connection, Product, ShopifyCart, ShopifyProduct } from './types';

/**
 * Ensures a string starts with a specific prefix
 */
export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

/**
 * Removes Shopify's GraphQL edges and nodes structure
 */
export function removeEdgesAndNodes<T>(connection: Connection<T>): T[] {
  return connection.edges.map((edge) => edge.node);
}

/**
 * Formats a monetary amount into a localized string
 */
export function formatMoney(amount: string, currency: string) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(parseFloat(amount));
}

/**
 * Reshapes a Shopify product into our application's format
 */
export function reshapeProduct(product: ShopifyProduct | null): Product | null {
  if (!product) {
    return null;
  }

  return {
    ...product,
    variants: removeEdgesAndNodes(product.variants),
    images: removeEdgesAndNodes(product.images)
  };
}

/**
 * Reshapes multiple Shopify products into our application's format
 */
export function reshapeProducts(products: ShopifyProduct[]): Product[] {
  return products.map((product) => {
    const reshapedProduct = reshapeProduct(product);
    return reshapedProduct as Product;
  }).filter((product): product is Product => product !== null);
}

/**
 * Reshapes a Shopify cart into our application's format
 */
export function reshapeCart(cart: ShopifyCart): Cart {
  if (!cart.cost.totalTaxAmount) {
    cart.cost.totalTaxAmount = {
      amount: '0',
      currencyCode: 'EUR'
    };
  }

  return {
    ...cart,
    lines: removeEdgesAndNodes(cart.lines)
  };
}

/**
 * Validates a discount code format
 */
export function isValidDiscountCode(code: string): boolean {
  return /^[A-Za-z0-9_-]+$/.test(code);
}

/**
 * Creates a URL-friendly handle from a string
 */
export function createHandle(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}