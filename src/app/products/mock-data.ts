import { Product } from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: '1111',
    name: 'Product A',
    description: 'This is a detailed description of Product A. It has many features and is very useful.',
    price: 199.99,
    imageUrl: '/product/1111.webp',
    brand: 'BrandX',
    category: 'Category1',
  },
  {
    id: '1112',
    name: 'Product B',
    description: 'This is a detailed description of Product B. It is an excellent choice for various needs.',
    price: 299.50,
    imageUrl: '/product/1112.webp',
    brand: 'BrandY',
    category: 'Category2',
  },
  {
    id: '1113',
    name: 'Product C',
    description: 'Product C offers great value and performance. A must-have for enthusiasts.',
    price: 99.00,
    imageUrl: '/product/1112.webp',
    brand: 'BrandX',
    category: 'Category1',
  },
  {
    id: '1114',
    name: 'Product D',
    description: 'Discover the amazing features of Product D. Designed for efficiency and durability.',
    price: 450.75,
    imageUrl: 'https://via.placeholder.com/400?text=ProductD',
    brand: 'BrandZ',
    category: 'Category3',
  },
];

export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export function getAllMockProducts(): Product[] {
  return mockProducts;
}
