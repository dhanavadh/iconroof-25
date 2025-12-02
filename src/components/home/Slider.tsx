"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArticleItem } from "@/lib/types";

interface SliderProps {
  sectionTitle: string;
  sectionSubtitle: string;
  articles?: ArticleItem[];
}

export default function Slider({ sectionTitle, sectionSubtitle, articles = [] }: SliderProps) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="flex w-full items-start justify-between" id="product">
          <div>
            <p className="text-neutral-600">{sectionSubtitle}</p>
            <h2 className="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">
              {sectionTitle}
            </h2>
            {/* Navigation Buttons */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                  !canScrollLeft
                    ? "cursor-not-allowed border-gray-300 text-gray-300"
                    : "border-gray-800 text-gray-800 hover:bg-gray-100"
                }`}
                aria-label="Previous article"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                  !canScrollRight
                    ? "cursor-not-allowed border-gray-300 text-gray-300"
                    : "border-gray-800 text-gray-800 hover:bg-gray-100"
                }`}
                aria-label="Next article"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <h1 className="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
        </span>
        <section
          ref={scrollContainerRef}
          className="no-scrollbar flex w-full items-start gap-6 overflow-x-auto brightness-90"
        >
          {articles.map((article) => (
            <div key={article.id} className="w-76 shrink-0" id={`product-${article.id}`}>
              <div className="relative mb-4 h-96 w-76 overflow-hidden rounded-sm">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <p className="font-semibold text-neutral-700">{article.title}</p>
              <p className="mb-2 text-sm text-neutral-400">{article.description}</p>
              <Link href={article.linkUrl} className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className="ml-1 inline-block h-4 w-4" />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
