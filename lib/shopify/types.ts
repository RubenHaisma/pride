export type Money = {
    amount: string;
    currencyCode: string;
  };
  
  export type Image = {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
  
  export type Connection<T> = {
    edges: Array<{
      node: T;
    }>;
  };
  
  export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    price: Money;
  };
  
  export type ProductOption = {
    id: string;
    name: string;
    values: string[];
  };
  
  export type SEO = {
    title: string;
    description: string;
  };
  
  export type Product = {
    id: string;
    handle: string;
    availableForSale: boolean;
    title: string;
    description: string;
    descriptionHtml: string;
    options: ProductOption[];
    priceRange: {
      maxVariantPrice: Money;
      minVariantPrice: Money;
    };
    variants: ProductVariant[];
    images: Image[];
    seo: SEO;
    tags: string[];
    updatedAt: string;
  };
  
  export type ShopifyProduct = Omit<Product, 'variants' | 'images'> & {
    variants: Connection<ProductVariant>;
    images: Connection<Image>;
  };
  
  export type CartItem = {
    id: string;
    quantity: number;
    cost: {
      totalAmount: Money;
    };
    merchandise: {
      id: string;
      title: string;
      selectedOptions: {
        name: string;
        value: string;
      }[];
      product: Product;
    };
  };
  
  export type Cart = {
    id: string;
    checkoutUrl: string;
    cost: {
      subtotalAmount: Money;
      totalAmount: Money;
      totalTaxAmount: Money;
    };
    lines: CartItem[];
    totalQuantity: number;
  };
  
  export type ShopifyCart = Omit<Cart, 'lines'> & {
    lines: Connection<CartItem>;
  };