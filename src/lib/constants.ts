export interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'หน้าแรก', href: '/' },
  { label: 'สินค้า', href: '/products' },
  { label: 'ผลงานติดตั้ง', href: '/preview' },
  { label: 'บทความ', href: '/blogs' },
  { label: 'ช่างทำระแนง', href: '/services' },
  { label: 'แผ่นหลังคา', href: 'https://www.xn--42cf7cl0c9a5bk1kzc.com/', external: true }
];
