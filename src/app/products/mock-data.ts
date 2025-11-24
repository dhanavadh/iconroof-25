import { Product, Banner, Brand, BannerInfo, FAQItem, NewsArticle } from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: 'amigo',
    name: 'Amigo',
    description: 'This is a detailed description of Product A. It has many features and is very useful.',
    price: 199.99,
    imageUrl: '/product/1121.webp',
    brand: 'amigo',
    category: 'ระแนงไวนิล',
  },
  {
    id: 'vg-vento',
    name: 'VG Vento',
    description: 'ออกแบบเพื่อสภาพอากาศของประเทศไทยโดยเฉพาะ',
    price: 299.50,
    imageUrl: '/product/test-1.jpg',
    brand: 'vg-vento',
    category: 'ระแนงไวนิล',
  },
  {
    id: 'scg',
    name: 'ระแนง SCG Box Set',
    description: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน',
    price: 99.00,
    imageUrl: '/product/1123.webp',
    brand: 'BrandX',
    category: 'ระแนง',
  },
];

const mockBanners: Banner[] = [
  {
    id: 'home-hero-banner',
    title: 'ระแนงไวนิล วีจีเวนโต้',
    subtitle: 'สินค้าใหม่',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    imageUrl: '/product/1111.webp',
    linkUrl: '#'
  },
  {
    id: 'products-main-banner',
    title: 'สร้างความเป็นส่วนตัวให้กับบ้าน',
    subtitle: 'ระแนงไวนิล Amigo',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    imageUrl: '/product/1112.webp',
    linkUrl: '#'
  },
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
    imageUrl: '/product/vg-img-1.webp',
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
    imageUrl: '/product/1114.webp',
    linkUrl: '/products/1114'
  },
];

const mockBrands: Brand[] = [
  {
    id: 'amigo',
    name: 'Amigo',
    imageUrl: '/brand/amigo.jpg',
    linkUrl: '/products/amigo'
  },
  {
    id: 'vg-vento',
    name: 'VG Vento',
    imageUrl: '/brand/vg_cnp.jpg',
    linkUrl: '/products/vg-vento'
  },
  {
    id: 'scg_home',
    name: 'SCG Home',
    imageUrl: '/brand/scg_home.jpg',
    linkUrl: '/products/scg_home'
  },
  {
    id: 'component',
    name: 'ชิ้นส่วนระแนง',
    imageUrl: '/brand/components.svg',
    linkUrl: '/products/components'
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

const mockFAQItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร',
    answer: 'คุณสามารถติดต่อทีมงานของเราผ่านช่องทางไลน์ หรือโทรศัพท์ เพื่อสอบถามข้อมูลเพิ่มเติมและทำการสั่งซื้อได้เลยค่ะ'
  },
  {
    id: 'faq2',
    question: 'มีบริการติดตั้งหรือไม่',
    answer: 'เรามีทีมงานผู้เชี่ยวชาญพร้อมให้บริการติดตั้งสินค้าทุกประเภท เพื่อความสะดวกและรวดเร็วของลูกค้าค่ะ'
  },
  {
    id: 'faq3',
    question: 'สินค้ารับประกันกี่ปี',
    answer: 'สินค้าของเรามีการรับประกันคุณภาพนาน 10 ปี เพื่อความมั่นใจในการใช้งานของลูกค้าค่ะ'
  }
];

export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find(product => product.id === id);
}

export async function getMockProductAsync(id: string): Promise<Product | undefined> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return mockProducts.find(product => product.id === id);
}

export function getAllMockProducts(): Product[] {
  return mockProducts;
}

export async function getAllMockProductsAsync(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return mockProducts;
}

export function getMockBanner(id: string): Banner | undefined {
  return mockBanners.find(banner => banner.id === id);
}

export async function getMockBannerAsync(id: string): Promise<Banner | undefined> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return mockBanners.find(banner => banner.id === id);
}

export function getMockBrands(): Brand[] {
  return mockBrands;
}

export async function getMockBrandsAsync(): Promise<Brand[]> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return mockBrands;
}

export function getMockBannerInfo(): BannerInfo {
  return mockBannerInfos[0];
}

export async function getMockBannerInfoAsync(): Promise<BannerInfo> {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return mockBannerInfos[0];
}

export async function getMockFAQItemsAsync(): Promise<FAQItem[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockFAQItems;
}

const mockNewsArticles: NewsArticle[] = [
  {
    id: 'news1',
    className: "md:row-span-4 h-64 md:h-full",
    category: "โปรโมชั่น",
    title: "ติดตั้งระแนงไวนิลเหลือ 1,750 บาท/ตร.ม.*",
    description: "ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด",
    content: "ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด",
    imageUrl: "/1104.svg",
    linkUrl: "/articles/amigo-launching-soon"
  },
  {
    id: 'news2',
    className: "md:col-span-2 md:row-span-2 h-64",
    category: "บทความ",
    title: "มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน",
    description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
    content: "Full content for news 2...",
    imageUrl: "/1101.webp",
    linkUrl: "/articles/amigo-launching-soon"
  },
  {
    id: 'news3',
    className: "md:col-span-1 md:row-span-2 h-64 md:h-full",
    category: "Amigo",
    title: "ลีเมอร์อันตร",
    description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
    content: "Full content for news 3...",
    imageUrl: "/1103.webp",
    linkUrl: "/articles/amigo-launching-soon"
  },
  {
    id: 'news4',
    className: "md:col-span-1 md:row-span-2 h-64 md:h-full",
    category: "Amigo",
    title: "กิริยาหมายปอง",
    description: "ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์",
    content: "Full content for news 4...",
    imageUrl: "/1102.webp",
    linkUrl: "/articles/amigo-launching-soon"
  }
];

export async function getMockNewsArticlesAsync(): Promise<NewsArticle[]> {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return mockNewsArticles;
}

