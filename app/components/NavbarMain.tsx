"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full font-sans transition-colors duration-300 ${scrolled ? "bg-neutral-50" : ""}`}
      >
        <section className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 h-[72px]">
          <Link href="/">
            <img
              src={scrolled ? "/icr-n-o.svg" : "/icr-n-w.svg"}
              alt="Logo"
              className="h-8"
            />
          </Link>

          <div
            className={`md:flex gap-6 transition-colors hidden ${scrolled ? "text-neutral-500" : "text-neutral-200"}`}
          >
            <Link
              href="/"
              className={`flex-shrink-0 transition-colors ${isActive("/")
                ? scrolled
                  ? "text-neutral-950 font-medium"
                  : "text-neutral-50 font-medium"
                : scrolled
                  ? "hover:text-neutral-700"
                  : "hover:text-neutral-100"
                }`}
            >
              หน้าแรก
            </Link>
            <Link
              href="/test"
              className={`flex-shrink-0 transition-colors ${isActive("/test")
                ? scrolled
                  ? "text-neutral-950 font-medium"
                  : "text-neutral-50 font-medium"
                : scrolled
                  ? "hover:text-neutral-700"
                  : "hover:text-neutral-100"
                }`}
            >
              สินค้า
            </Link>
            <Link
              href="/preview"
              className={`flex-shrink-0 transition-colors ${isActive("/preview")
                ? scrolled
                  ? "text-neutral-950 font-medium"
                  : "text-neutral-50 font-medium"
                : scrolled
                  ? "hover:text-neutral-700"
                  : "hover:text-neutral-100"
                }`}
            >
              ผลงาน
            </Link>
            <Link
              href="/"
              className={`flex-shrink-0 transition-colors ${scrolled ? "hover:text-neutral-700" : "hover:text-neutral-100"}`}
            >
              ช่างทำระแนง
            </Link>
            <Link
              href="https://www.xn--42cf7cl0c9a5bk1kzc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 transition-colors ${scrolled ? "hover:text-neutral-700" : "hover:text-neutral-100"}`}
            >
              แผ่นหลังคา
              <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>

          <Link
            href="https://lin.ee/8BsKFek"
            target="_blank"
            className="flex items-center bg-white border whitespace-nowrap shrink-0 border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm"
          >
            ซื้อสินค้า
          </Link>
        </section>
      </nav>
    </>
  );
};

export default NavbarMain;
