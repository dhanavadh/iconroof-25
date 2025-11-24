import { Product, Banner, Brand, BannerInfo } from '@/lib/types';

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

const mockBrands: Brand[] = [
  {
    id: 'amigo',
    name: 'Amigo',
    imageUrl: '/brand/amigo.jpg',
    linkUrl: '/brands/amigo'
  },
  {
    id: 'vg_cnp',
    name: 'VG CNP',
    imageUrl: '/brand/vg_cnp.jpg',
    linkUrl: '/brands/vg_cnp'
  },
  {
    id: 'scg_home',
    name: 'SCG Home',
    imageUrl: '/brand/scg_home.jpg',
    linkUrl: '/brands/scg_home'
  },
];

const mockBannerInfos: BannerInfo[] = [
  {
    id: 'info1',
    title: 'สอบถาม ปรึกษา ฟรี',
    description: 'กรุณากรอกข้อมูลให้ครบถ้วน',
    imageUrl: '/1101.webp',
    linkUrl: 'https://lin.ee/8BsKFek',
    linkText: 'ติดต่อผ่านไลน์'
  }
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

export function getMockBrands(): Brand[] {
  return mockBrands;
}

export function getMockBannerInfo(): BannerInfo {
  return mockBannerInfos[0];
}
