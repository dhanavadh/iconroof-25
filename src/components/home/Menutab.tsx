"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  { label: "หน้าแรก", href: "/" },
  { label: "สินค้า", href: "/products" },
  { label: "ผลงานติดตั้ง", href: "/preview" },
  { label: "ช่างทำระแนง", href: "#" }, // Adjusted to '#' as per original, or update if needed
  { label: "แผ่นหลังคา", href: "https://www.xn--42cf7cl0c9a5bk1kzc.com/", external: true },
];

const Menutab = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <div className="sticky top-[72px] z-40 w-full md:hidden bg-neutral-50 font-sans px-6 md:px-8">
      <div className="relative max-w-7xl mx-auto">
        <section
          className="flex font-medium items-center gap-6 h-12 bg-neutral-50 border-y border-neutral-200 overflow-x-auto no-scrollbar text-neutral-500 px-4"
          id="menu-tab"
        >
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex-shrink-0 transition-colors ${!item.external && isActive(item.href)
                  ? "text-neutral-700 font-medium"
                  : "hover:text-neutral-700"
                }`}
            >
              {item.label}
              {item.external && <ArrowUpRight className="inline-block ml-1 h-4 w-4" />}
            </Link>
          ))}
        </section>

        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Menutab;
