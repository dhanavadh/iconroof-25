import {
  Product,
  Banner,
  Brand,
  BannerInfo,
  FAQItem,
  NewsArticle,
  Testimonial,
  CustomerReview,
  SliderSection
} from '@/lib/types';

const mockProducts: Product[] = [
  {
    id: 'amigo',
    name: 'Amigo',
    description:
      'หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน',
    price: 199.99,
    imageUrl: '/product/1121.webp',
    brand: 'Amigo',
    category: 'ระแนงไวนิล'
  },
  {
    id: 'vg-vento',
    name: 'VG Vento',
    description: 'ออกแบบเพื่อสภาพอากาศของประเทศไทยโดยเฉพาะ',
    price: 299.5,
    imageUrl: '/product/test-1.jpg',
    brand: 'VG Vento',
    category: 'ระแนงไวนิล'
  },
  {
    id: 'scg',
    name: 'ระแนง SCG Box Set',
    description: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน',
    price: 99.0,
    imageUrl: '/product/1123.webp',
    brand: 'SCG',
    category: 'ระแนงไวนิล'
  }
];

const mockBanners: Banner[] = [
  {
    id: 'home-hero-banner',
    title: 'ระแนงไวนิล วีจีเวนโต้',
    subtitle: 'สินค้าใหม่',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    imageUrl: '/product/1111.webp',
    linkUrl: '/product/vg-vento'
  },
  {
    id: 'products-main-banner',
    title: 'สร้างความเป็นส่วนตัวให้กับบ้าน',
    subtitle: 'ระแนงไวนิล Amigo',
    description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
    imageUrl: '/product/1112.webp',
    linkUrl: '/product/amigo'
  },
  {
    id: 'services-banner',
    title: 'บริการติดตั้งครบวงจร',
    subtitle: 'ทีมงานมืออาชีพ',
    description: 'บริการติดตั้งระแนงและหลังคาโดยช่างผู้ชำนาญการ ประสบการณ์ยาวนาน',
    imageUrl: '/product/1122.webp',
    linkUrl: '/services'
  },
  {
    id: 'blogs-banner',
    title: 'บทความและสาระน่ารู้',
    subtitle: 'อัพเดทเทรนด์ใหม่ๆ',
    description: 'รวมบทความเกี่ยวกับบ้าน การตกแต่ง และวัสดุก่อสร้างที่น่าสนใจ',
    imageUrl: '/1103.webp',
    linkUrl: '/blogs'
  },
  {
    id: 'preview-banner',
    title: 'ตัวอย่างผลงาน',
    subtitle: 'Gallery',
    description: 'ชมภาพผลงานการติดตั้งจริงจากลูกค้าของเรา',
    imageUrl: '/product/1125.webp',
    linkUrl: '/preview'
  },
  {
    id: 'amigo',
    title: 'ระแนงไวนิล Amigo',
    subtitle: 'Amigo - ระแนงไวนิล',
    description: 'หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด',
    imageUrl: '/product/1111.webp',
    linkUrl: '/products/amigo'
  },
  {
    id: 'vg-vento',
    title: 'ระแนงไวนิล VG Vento',
    subtitle: 'VG Vento - ระแนงไวนิล',
    description: 'ออกแบบเพื่อสภาพอากาศของประเทศไทยโดยเฉพาะ',
    imageUrl: '/product/vg-img-1.webp',
    linkUrl: '/products/vg-vento'
  },
  {
    id: 'scg',
    title: 'ระแนง SCG Box Set',
    subtitle: 'SCG - ระแนง',
    description: 'สร้างสรรค์ความงามได้หลากหลาย ภายใต้คุณภาพที่เป็นมาตรฐาน',
    imageUrl: '/product/1123.webp',
    linkUrl: '/products/scg'
  }
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
  }
];

const mockBannerInfos: BannerInfo[] = [
  {
    id: 'info1',
    title: 'สอบถาม ปรึกษา ฟรี',
    description: 'สอบถามเกี่ยวกับสินค้าและงานติดตั้งได้ฟรี',
    imageUrl: '/1101.webp',
    linkUrl: 'https://lin.ee/8BsKFek',
    linkText: 'ติดต่อผ่านไลน์'
  }
];

const mockFAQItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร',
    answer:
      'คุณสามารถติดต่อทีมงานของเราผ่านช่องทางไลน์ หรือโทรศัพท์ เพื่อสอบถามข้อมูลเพิ่มเติมและทำการสั่งซื้อได้เลยค่ะ'
  },
  {
    id: 'faq2',
    question: 'มีบริการติดตั้งหรือไม่',
    answer:
      'เรามีทีมงานผู้เชี่ยวชาญพร้อมให้บริการติดตั้งสินค้าทุกประเภท เพื่อความสะดวกและรวดเร็วของลูกค้าค่ะ'
  },
  {
    id: 'faq3',
    question: 'สินค้ารับประกันกี่ปี',
    answer: 'สินค้าของเรามีการรับประกันคุณภาพนาน 10 ปี เพื่อความมั่นใจในการใช้งานของลูกค้าค่ะ'
  }
];

const mockNewsArticles: NewsArticle[] = [
  {
    id: 'news1',
    className: 'md:row-span-4 h-64 md:h-full',
    category: 'โปรโมชั่น',
    title: 'ติดตั้งระแนงไวนิลเหลือ 1,750 บาท/ตร.ม.*',
    description:
      'ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด',
    content:
      'ติดตั้งระแนงไวนิลเว้นร่อง ตั้งแต่วันนี้ – 30 มิ.ย. 2568 จาก 1,900 ลดเหลือ 1,750 บาท/ตร.ม. *เงื่อนไขเป็นไปตามบริษัทกำหนด',
    imageUrl: '/1104.svg',
    linkUrl: '/articles/amigo-launching-soon'
  },
  {
    id: 'news2',
    className: 'md:col-span-2 md:row-span-2 h-64',
    category: 'บทความ',
    title: 'วัสดุมุงหลังคายอดนิยม ที่ใช้กันในปัจจุบัน',
    description:
      'การเลือกวัสดุที่ใช้มุง หลังคา ถือว่าเป็นอย่างแรกๆ ที่เรามักต้องเลือกกันก่อน ด้วยวัสดุมีหลากหลายแบบและชนิด ซึ่งมันอาจจะไม่เหมาะกับทรงหลังคาบ้านและความต้องการของเราก็เป็นได้',
    content: 'Full content for news 2...',
    imageUrl: '/blog/blog-1.webp',
    linkUrl: '/articles/amigo-launching-soon'
  },
  {
    id: 'news3',
    className: 'md:col-span-1 md:row-span-2 h-64 md:h-full',
    category: 'Amigo',
    title: 'สาเหตุหรือปัญหาที่ต้องระวัง เวลาติดตั้งระแนงไม้',
    description: 'การตกแต่งบ้านด้วยระแนงนั้น ไม่ใช่แค่การตีไม้ยึดติดผนังหรือพื้นเป็นอันว่าจบกัน',
    content:
      'หากให้นึกถึงวัสดุที่สามารถป้องกันแสงแดด ทั้งยังพรางสายตาเพื่อนบ้านได้ เชื่อว่า "ระแนง" กับคุณสมบัติที่สามารถเพิ่มความสวยงามให้กับบ้านได้ไม่ยาก แต่การตกแต่งบ้านด้วยระแนงนั้น ไม่ใช่แค่การตีไม้ยึดติดผนังหรือพื้นเป็นอันว่าจบกัน',
    imageUrl: '/1103.webp',
    linkUrl: '/articles/amigo-launching-soon'
  },
  {
    id: 'news4',
    className: 'md:col-span-1 md:row-span-2 h-64 md:h-full',
    category: 'Amigo',
    title: 'กิริยาหมายปอง',
    description:
      'ลีเมอร์อันตรกิริยาหมายปองเพลย์บอยสไตล์ คันยิ มาร์เก็ตติ้งสโตร์แชมปิยองอุปทาน สึนามิเหมยมั้ยนิววิทย์',
    content: 'Full content for news 4...',
    imageUrl: '/1102.webp',
    linkUrl: '/articles/amigo-launching-soon'
  }
];

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    title: 'ติดตั้งง่าย ทนทาน ราคาคุ้มค่า',
    description: 'ระแนงไวนิล amigo ติดตั้งง่าย ทนทาน ราคาคุ้มค่า',
    imageUrl: '/product/1121.webp'
  },
  {
    id: '2',
    title: 'หมดปัญหาเรื่องปลวกและเชื้อรา',
    description:
      'หมดปัญหาเรื่องปลวกและเชื้อรา ไม่ปิดตัว ไม่บวมน้ำ ทนต่อแสงแดด มีอายุการใช้งานที่ยาวนาน',
    imageUrl: '/product/1126.webp'
  },
  {
    id: '3',
    title: 'ระบบอุปกรณ์ติดตั้งครบชุด',
    description: 'ระแนงอมิโก้ ระบบอุปกรณ์ติดตั้งครบชุด',
    imageUrl: '/product/1127.webp'
  },
  {
    id: '4',
    title: 'งานเรียบร้อยได้มาตรฐาน',
    description: 'ระแนงอมิโก้ งานเรียบร้อยได้มาตรฐาน',
    imageUrl: '/product/1128.webp'
  }
];

const mockCustomerReviews: CustomerReview[] = [
  {
    id: '1',
    name: 'Supachai W.',
    reviewAt: 'Facebook',
    comment:
      'เป็นเวลา 2 วันที่ติดตั้งระแนงไวนิลจากช่างของ ICONROOF ได้รับการบริการที่ดีเยี่ยมเลยครับ ช่างทั้งสามคนที่เข้ามาติดตั้งฝีมือดีมาก งานเนี๊ยบ ใจเย็น พูดจาสุภาพ ขอแนะนำเลยครับ ชอบผลงานมาก ๆ เลยครับ',
    rating: 5,
    imageUrl: '/review/re-1.webp',
    linkUrl: 'https://www.facebook.com/share/p/1D3pLsWs1f/'
  },
  {
    id: '2',
    name: 'Natalie S.',
    reviewAt: 'Facebook',
    comment:
      'งานดี มีคุณภาพ ติดตั้งไวและสวย ทีมงานติดตั้งชำนาญ มีประสบการณ์ จบงานได้ไว ส่วนตัวกับแฟน ชอบมากๆ ค่ะ ติดแล้ว บ้านก็ยังดูสวย ดูทันสมัย และดูแพง',
    rating: 5,
    imageUrl: '/review/re-2.webp',
    linkUrl: 'https://www.facebook.com/share/p/16XC85rjqo/'
  },
  {
    id: '3',
    name: 'AuTing W.',
    reviewAt: 'Facebook',
    comment:
      'งานระแนง งานหลังคาโรงรถ เรียบร้อย สวยงาม ทีมช่างมีความชำนาญ ทำงาน เก็บงานเรียบร้อยมากค่ะ',
    rating: 4,
    imageUrl: '/review/re-3.webp',
    linkUrl: 'https://www.facebook.com/share/p/1E7BUrY35V/'
  },
  {
    id: '4',
    name: 'Atitaya T.',
    reviewAt: 'Facebook',
    comment:
      'เราติดระแนงบังตาไปค่ะ ช่างสุภาพ ทำงานเรียบร้อย เก็บงานดี มีเก็บสีด้านหลังระแนงให้ด้วย ทำไวดี วันเดียวเสร็จ หลังจากทำงานเสร็จ ก็เก็บกวาดบ้าน บริเวณนั้นให้อีก ประทับใจค่ะ',
    rating: 5,
    imageUrl: '/review/re-4.webp',
    linkUrl: 'https://www.facebook.com/share/p/14TUa4FT8r9/'
  }
];

const mockSliderSections: SliderSection[] = [
  {
    id: 'services-slider',
    title: 'ผลงานติดตั้งระแนงไวนิล',
    subtitle: 'ผลงาน',
    articles: [
      {
        id: '1',
        imageUrl: '/1101.webp',
        title: 'ระแนงไวนิล AMIGO 1',
        description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
        linkUrl: '#'
      },
      {
        id: '2',
        imageUrl: '/1103.webp',
        title: 'ระแนงไวนิล AMIGO 2',
        description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
        linkUrl: '#'
      },
      {
        id: '3',
        imageUrl: '/1102.webp',
        title: 'ระแนงไวนิล AMIGO 3',
        description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
        linkUrl: '#'
      },
      {
        id: '4',
        imageUrl: '/1103.webp',
        title: 'ระแนงไวนิล AMIGO 4',
        description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
        linkUrl: '#'
      },
      {
        id: '5',
        imageUrl: '/1101.webp',
        title: 'ระแนงไวนิล AMIGO 5',
        description: 'บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ',
        linkUrl: '#'
      }
    ]
  },
  {
    id: 'blogs-slider',
    title: 'บทความยอดนิยม',
    subtitle: 'บทความ',
    articles: [
      {
        id: 'b1',
        imageUrl: '/blog/blog-1.webp',
        title: 'เทคนิคการเลือกวัสดุหลังคา',
        description: 'รวมเทคนิคดีๆ ในการเลือกวัสดุมุงหลังคาให้เหมาะกับบ้านของคุณ',
        linkUrl: '#'
      },
      {
        id: 'b2',
        imageUrl: '/1104.svg',
        title: 'โปรโมชั่นพิเศษประจำเดือน',
        description: 'พบกับข้อเสนอสุดพิเศษสำหรับการติดตั้งระแนงไวนิล',
        linkUrl: '#'
      },
      {
        id: 'b3',
        imageUrl: '/1103.webp',
        title: 'การดูแลรักษาระแนงไวนิล',
        description: 'วิธีการดูแลรักษาระแนงไวนิลให้สวยงามยาวนาน',
        linkUrl: '#'
      }
    ]
  },
  {
    id: 'preview-slider',
    title: 'ผลงานแนะนำ',
    subtitle: 'ไฮไลท์',
    articles: [
      {
        id: 'p1',
        imageUrl: '/product/1111.webp',
        title: 'งานติดตั้งบ้านคุณสมชาย',
        description: 'ระแนงไวนิลรุ่น VG Vento สีโอ๊ค สวยงาม ทนทาน',
        linkUrl: '#'
      },
      {
        id: 'p2',
        imageUrl: '/product/1112.webp',
        title: 'งานติดตั้งร้านกาแฟ Coffee Home',
        description: 'ตกแต่งร้านกาแฟด้วยระแนงไวนิล ให้บรรยากาศอบอุ่น',
        linkUrl: '#'
      },
      {
        id: 'p3',
        imageUrl: '/product/1125.webp',
        title: 'งานกั้นห้องพระ',
        description: 'ใช้ระแนงไวนิลกั้นห้องพระ เพิ่มความเป็นสัดส่วน',
        linkUrl: '#'
      }
    ]
  }
];

// Sync getters
export function getMockProduct(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id);
}

export function getAllMockProducts(): Product[] {
  return mockProducts;
}

export function getMockBanner(id: string): Banner | undefined {
  return mockBanners.find((banner) => banner.id === id);
}

export function getMockBrands(): Brand[] {
  return mockBrands;
}

export function getMockBannerInfo(): BannerInfo {
  return mockBannerInfos[0];
}

// Async getters
export async function getMockProductAsync(id: string): Promise<Product | undefined> {
  return mockProducts.find((product) => product.id === id);
}

export async function getAllMockProductsAsync(): Promise<Product[]> {
  return mockProducts;
}

export async function getMockBannerAsync(id: string): Promise<Banner | undefined> {
  return mockBanners.find((banner) => banner.id === id);
}

export async function getMockBrandsAsync(): Promise<Brand[]> {
  return mockBrands;
}

export async function getMockBannerInfoAsync(): Promise<BannerInfo> {
  return mockBannerInfos[0];
}

export async function getMockFAQItemsAsync(): Promise<FAQItem[]> {
  return mockFAQItems;
}

export async function getMockNewsArticlesAsync(): Promise<NewsArticle[]> {
  return mockNewsArticles;
}

export async function getMockTestimonialsAsync(): Promise<Testimonial[]> {
  return mockTestimonials;
}

export async function getMockCustomerReviewsAsync(): Promise<CustomerReview[]> {
  return mockCustomerReviews;
}

export async function getMockSliderSectionAsync(id: string): Promise<SliderSection | undefined> {
  return mockSliderSections.find((section) => section.id === id);
}
