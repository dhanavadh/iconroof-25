'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
    image: "https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75"
  },
  {
    category: "สินค้าแนะนำ",
    title: "ระแนงไวนิล อมิโก้",
    description: "คุณภาพระดับพรีเมียม ทนทาน ติดตั้งง่าย เหมาะสำหรับทุกโครงการ",
    image: "https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2FAmigo-1%2FAmigo-132.webp&w=1080&q=75"
  },
  {
    category: "ยอดนิยม",
    title: "ระแนงไวนิล เชอร่า",
    description: "ดีไซน์สวยงาม เหมาะกับบ้านสไตล์โมเดิร์น ราคาคุ้มค่า",
    image: "https://vg-cnp.com/wp-content/uploads/2025/06/2025-M04-Leaflet-DL-Slat-TH_%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-01.jpg"
  },
  {
    category: "สินค้าพิเศษ",
    title: "ระแนงไวนิล พรีเมียม",
    description: "วัสดุคุณภาพสูง เกรดพรีเมียม สำหรับโครงการพิเศษ",
    image: "https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-1.png&w=3840&q=75"
  },
  {
    category: "โปรโมชั่น",
    title: "ระแนงไวนิล ราคาพิเศษ",
    description: "โปรโมชั่นพิเศษ ลดราคาสูงสุด พร้อมบริการติดตั้ง",
    image: "https://iconroof.co.th/_next/image?url=%2Fasset%2Fblog%2Fblog-3.png&w=3840&q=75"
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
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute w-full h-full object-cover brightness-60"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
