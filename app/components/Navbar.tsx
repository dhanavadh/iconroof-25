'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MenuItem {
  title: string;
  href: string;
  submenu?: {
    featured?: {
      title: string;
      description: string;
      image: string;
      href: string;
    };
    sections: {
      title: string;
      items: SubMenuItem[];
    }[];
  };
}

const menuItems: MenuItem[] = [
  {
    title: 'ผลิตภัณฑ์',
    href: '/products',
    submenu: {
      featured: {
        title: 'ระแนงไวนิล วีจีเวนโต้',
        description: 'ระแนงไวนิลคุณภาพสูง ทนทาน สวยงาม เหมาะสำหรับทุกโครงการ',
        image: 'https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75',
        href: '/products/vg-vento'
      },
      sections: [
        {
          title: 'ประเภทผลิตภัณฑ์',
          items: [
            { title: 'ระแนงไวนิล', href: '/products/vinyl-slat' },
            { title: 'ระแนงไม้', href: '/products/wood-slat' },
            { title: 'ฝ้าเพดาน', href: '/products/ceiling' },
            { title: 'วัสดุมุงหลังคา', href: '/products/roofing' }
          ]
        },
        {
          title: 'แบรนด์',
          items: [
            { title: 'วีจีเวนโต้', href: '/brands/vg-vento' },
            { title: 'อมิโก้', href: '/brands/amigo' },
            { title: 'เชอร่า', href: '/brands/shera' }
          ]
        }
      ]
    }
  },
  {
    title: 'บริการ',
    href: '/services',
    submenu: {
      sections: [
        {
          title: 'บริการของเรา',
          items: [
            { title: 'ติดตั้งและออกแบบ', href: '/services/installation' },
            { title: 'ปรึกษาโครงการ', href: '/services/consultation' },
            { title: 'บริการหลังการขาย', href: '/services/after-sales' }
          ]
        }
      ]
    }
  },
  {
    title: 'โปรเจค',
    href: '/projects'
  },
  {
    title: 'บทความ',
    href: '/blog'
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-900">
              Iconroof
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 flex items-center gap-1 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.title && (
                  <div className="absolute left-0 top-full pt-2 w-screen max-w-4xl -ml-32">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Featured Item */}
                        {item.submenu.featured && (
                          <Link
                            href={item.submenu.featured.href}
                            className="col-span-1 group"
                          >
                            <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                              <img
                                src={item.submenu.featured.image}
                                alt={item.submenu.featured.title}
                                className="w-full h-full object-cover brightness-75 group-hover:brightness-60 transition-all"
                              />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                              {item.submenu.featured.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.submenu.featured.description}
                            </p>
                          </Link>
                        )}

                        {/* Menu Sections */}
                        <div className={`${item.submenu.featured ? 'col-span-2' : 'col-span-3'} grid grid-cols-${item.submenu.sections.length} gap-6`}>
                          {item.submenu.sections.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                {section.title}
                              </h3>
                              <ul className="space-y-2">
                                {section.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      href={subItem.href}
                                      className="text-sm text-gray-700 hover:text-emerald-600 transition-colors block py-1"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
            >
              ติดต่อเรา
            </Link>
            <Link
              href="/quote"
              className="px-6 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors"
            >
              ขอใบเสนอราคา
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-4">
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-200">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileActiveMenu(
                          mobileActiveMenu === item.title ? null : item.title
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-base font-semibold text-gray-900"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          mobileActiveMenu === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {mobileActiveMenu === item.title && (
                      <div className="pb-4 space-y-4">
                        {/* Featured */}
                        {item.submenu.featured && (
                          <Link
                            href={item.submenu.featured.href}
                            className="block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                              <img
                                src={item.submenu.featured.image}
                                alt={item.submenu.featured.title}
                                className="w-full h-full object-cover brightness-75"
                              />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.submenu.featured.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.submenu.featured.description}
                            </p>
                          </Link>
                        )}

                        {/* Sections */}
                        {item.submenu.sections.map((section) => (
                          <div key={section.title}>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="text-sm text-gray-700 block py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-4 text-base font-semibold text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Actions */}
            <div className="pt-4 space-y-3">
              <Link
                href="/contact"
                className="block w-full px-4 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ติดต่อเรา
              </Link>
              <Link
                href="/quote"
                className="block w-full px-4 py-3 text-center text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ขอใบเสนอราคา
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
