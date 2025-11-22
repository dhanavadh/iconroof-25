import React from "react";
import Link from "next/link";
import Menutab from "./Menutab";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const NavbarDefault = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="sticky top-0 z-50 font-sans bg-neutral-50">
      <section className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 h-[72px]">
        <Link href="/">
          <img src="/icr-n-o.svg" alt="Logo" className="h-8" />
        </Link>
        <div className="md:flex hidden gap-6 text-neutral-500">
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
            href="/test"
            className={`flex-shrink-0 transition-colors ${pathname === "/test"
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
            ผลงาน
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
        </div>
        <Link
          href="https://lin.ee/8BsKFek"
          target="_blank"
          className="flex whitespace-nowrap shrink-0 items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm"
        >
          ซื้อสินค้า
        </Link>
      </section>
      <Menutab />
    </div>
  );
};

export default NavbarDefault;
