export const generateProductSchema = (product: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images[0]?.url,
    sku: product.id,
    offers: {
      '@type': 'Offer',
      price: product.priceRange.minVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  });
  
  export const generateEventSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Pride Amsterdam 2025',
    startDate: '2025-07-27',
    endDate: '2025-08-04',
    location: {
      '@type': 'Place',
      name: 'Amsterdam City Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Amsterdam',
        addressCountry: 'NL',
      },
    },
    description: 'Amsterdam Pride 2025 - A celebration of love, diversity, and unity in the heart of Amsterdam.',
    organizer: {
      '@type': 'Organization',
      name: 'Pride Amsterdam',
      url: 'https://pride2025.amsterdam',
    },
    image: 'https://images.unsplash.com/photo-1561612217-e5147162fd31',
    offers: {
      '@type': 'Offer',
      url: 'https://pride2025.amsterdam/shop',
      availability: 'https://schema.org/InStock',
    },
  });