"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { MENU_ITEMS } from "@/lib/constants";

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (href: string, external?: boolean) => {
    const active = !external && isActive(href);
    if (active) {
      return scrolled
        ? "text-neutral-950 font-medium"
        : "text-neutral-50 font-medium";
    }
    return scrolled ? "hover:text-neutral-700" : "hover:text-neutral-100";
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full font-sans transition-colors duration-300 ${scrolled ? "bg-neutral-50" : ""}`}
      >
        <section className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4 h-[72px]">
          <Link href="/">
            <Image
              src={scrolled ? "/icr-n-o.svg" : "/icr-n-w.svg"}
              alt="Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <div
            className={`md:flex gap-6 transition-colors hidden ${scrolled ? "text-neutral-500" : "text-neutral-200"}`}
          >
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`flex-shrink-0 transition-colors ${getLinkClassName(item.href, item.external)}`}
              >
                {item.label}
                {item.external && <ArrowUpRight className="inline-block ml-1 h-4 w-4" />}
              </Link>
            ))}
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
