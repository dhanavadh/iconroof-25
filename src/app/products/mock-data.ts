import { Product, Banner } from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: 'amigo',
    name: 'Product A',
    description: 'This is a detailed description of Product A. It has many features and is very useful.',
    price: 199.99,
    imageUrl: '/product/1111.webp',
    brand: 'BrandX',
    category: 'Category1',
  },
  {
    id: 'vg-vento',
    name: 'สร้างความเป็นส่วนตัวให้กับบ้าน',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    price: 299.50,
    imageUrl: '/product/1112.webp',
    brand: 'ระแนงไวนิล Amigo',
    category: 'ตกแต่งบ้าน',
  },
  {
    id: 'scg',
    name: 'Product C',
    description: 'Product C offers great value and performance. A must-have for enthusiasts.',
    price: 99.00,
    imageUrl: 'https://via.placeholder.com/400?text=ProductC',
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

const mockBanners: Banner[] = [
  {
    id: 'amigo',
    title: 'safassa',
    subtitle: 'BrandX - Category1',
    description: 'Exclusive banner content for Product A.',
    imageUrl: '/product/1111.webp',
    linkUrl: '/products/amigo'
  },
  {
    id: 'vg-vento',
    title: 'สร้างความfsadasdasเป็นส่วนตัวให้กับบ้าน',
    subtitle: 'ระแนงไวนิล Amigo',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    imageUrl: '/product/1112.webp',
    linkUrl: '/products/vg-vento'
  },
  {
    id: 'scg',
    title: 'Product C Showcase',
    subtitle: 'BrandX - Category1',
    description: 'See what Product C can do for you.',
    imageUrl: 'https://via.placeholder.com/400?text=ProductC',
    linkUrl: '/products/scg'
  },
  {
    id: '1114',
    title: 'Product D Feature',
    subtitle: 'BrandZ - Category3',
    description: 'Top of the line durability.',
    imageUrl: 'https://via.placeholder.com/400?text=ProductD',
    linkUrl: '/products/1114'
  },
];

export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export function getAllMockProducts(): Product[] {
  return mockProducts;
}

export function getMockBanner(id: string): Banner | undefined {
  return mockBanners.find(banner => banner.id === id);
}
