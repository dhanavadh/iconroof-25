'use client';

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";



interface Slide {
  category: string;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    category: "สินค้าใหม่",
    title: "ระแนงไวนิล วีจีเวนโต้",
    description: "บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ",
    image: "/1101.webp"
  },
  {
    category: "สินค้าแนะนำ",
    title: "ระแนงไวนิล อมิโก้",
    description: "คุณภาพระดับพรีเมียม ทนทาน ติดตั้งง่าย เหมาะสำหรับทุกโครงการ",
    image: "/1103.webp"
  },
  {
    category: "ยอดนิยม",
    title: "ระแนงไวนิล เชอร่า",
    description: "ดีไซน์สวยงาม เหมาะกับบ้านสไตล์โมเดิร์น ราคาคุ้มค่า",
    image: "/1102.webp"
  },
  {
    category: "สินค้าพิเศษ",
    title: "ระแนงไวนิล พรีเมียม",
    description: "วัสดุคุณภาพสูง เกรดพรีเมียม สำหรับโครงการพิเศษ",
    image: "/1101.webp"
  },
  {
    category: "โปรโมชั่น",
    title: "ระแนงไวนิล ราคาพิเศษ",
    description: "โปรโมชั่นพิเศษ ลดราคาสูงสุด พร้อมบริการติดตั้ง",
    image: "/1103.webp"
  }
];

export default function TestimonialSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth; // Scroll one full card width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-8 md:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Header & Controls */}
        <div className="flex flex-col justify-between h-full md:col-span-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <p className='text-neutral-600'>ระแนงไวนิล วีจีเวนโต้</p>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              สร้างความเป็นส่วนตัวให้กับบ้านคุณ
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${!canScrollLeft
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-gray-800 text-gray-800 hover:bg-gray-100'
                }`}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${!canScrollRight
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-gray-800 text-gray-800 hover:bg-gray-100'
                }`}
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column - Scrollable Carousel */}
        <div className="relative w-full md:col-span-2">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-start"
              >
                <div className="flex w-full h-[450px] overflow-hidden relative rounded-2xl">
                  <div className="flex flex-col z-20 p-6 text-white bottom-0 left-0 absolute">
                    <h1 className="text-start text-base">{slide.category}</h1>
                    <h1 className="text-start text-3xl font-semibold">
                      {slide.title}
                    </h1>
                    <p className="mt-2">
                      {slide.description}
                    </p>
                  </div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="absolute object-cover brightness-60"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


