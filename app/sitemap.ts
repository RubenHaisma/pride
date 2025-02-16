import { MetadataRoute } from 'next';
import { getProducts } from '@/lib/shopify';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pride2025.amsterdam';

  // Static routes
  const routes = [
    '',
    '/shop',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/shipping',
    '/events',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes
  const products = await getProducts();
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/shop/${product.handle}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Blog routes (to be implemented)
  const blogRoutes = [
    '/blog/pride-2025-guide',
    '/blog/canal-parade-tips',
    '/blog/lgbtq-rights-netherlands',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...routes, ...productRoutes, ...blogRoutes];
}