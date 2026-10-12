import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastModified);

  return [
    { url: `${site.url}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
