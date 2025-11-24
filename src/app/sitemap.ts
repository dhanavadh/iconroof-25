import { MetadataRoute } from 'next'
import { getAllMockProducts } from './products/mock-data'; // Import the function

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllMockProducts(); // Get all mock products

  const productRoutes = products.map((product) => ({
    url: `https://iconroof.co.th/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: 'https://iconroof.co.th',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://iconroof.co.th/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://iconroof.co.th/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://iconroof.co.th/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...productRoutes, // Spread the product routes into the sitemap array
  ];
}
