"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const Menutab = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="sticky top-[72px] z-40 w-full md:hidden bg-neutral-50">
      <div className="relative max-w-7xl mx-auto">
        <section
          className="flex font-medium items-center gap-6 h-12 bg-neutral-50 border-y border-neutral-200 overflow-x-auto no-scrollbar text-neutral-500 px-4"
          id="menu-tab"
        >
          <Link
            href="/"
            className={`flex-shrink-0 transition-colors ${isActive("/")
              ? "text-neutral-700 font-medium"
              : "hover:text-neutral-700"
              }`}
          >
            หน้าแรก
          </Link>
          <Link
            href="/products"
            className={`flex-shrink-0 transition-colors ${pathname === "/products"
              ? "text-neutral-700 font-medium"
              : "hover:text-neutral-700"
              }`}
          >
            สินค้า
          </Link>
          <Link
            href="/preview"
            className={`flex-shrink-0 transition-colors ${pathname === "/no"
              ? "text-neutral-700 font-medium"
              : "hover:text-neutral-700"
              }`}
          >
            ผลงานติดตั้ง
          </Link>
          <Link
            href="/"
            className="flex-shrink-0 hover:text-neutral-700 transition-colors"
          >
            ช่างทำระแนง
          </Link>
          <Link
            href="https://www.xn--42cf7cl0c9a5bk1kzc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hover:text-neutral-700 transition-colors"
          >
            แผ่นหลังคา
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </section>

        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Menutab;
