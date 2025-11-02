'use client';

import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'

const LatestArticlePage = () => {
  const scrollContainerRef = useRef<HTMLElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      return () => container.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Approximate width of one card plus gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='w-full py-12 px-6 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <span
                className="flex items-start justify-between w-full"
                id="product"
            >
                <div>
                <p className='text-neutral-600'>บทความ</p>
                <h2 className="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
                    ข่าวสารและโปรโมชั่น
                </h2>
                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-4">
                    <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        !canScrollLeft
                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                        : 'border-gray-800 text-gray-800 hover:bg-gray-100'
                    }`}
                    aria-label="Previous article"
                    >
                    <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                        !canScrollRight
                        ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                        : 'border-gray-800 text-gray-800 hover:bg-gray-100'
                    }`}
                    aria-label="Next article"
                    >
                    <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                </div>
                <h1 className="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
            </span>
            <section ref={scrollContainerRef} className="flex items-start gap-6 overflow-x-auto no-scrollbar brightness-90 w-full">
        <div className="w-76" id="product-amigo">
          <div className="w-76 h-96 mb-4 rounded-sm overflow-hidden">
            <img
              src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
          <p className="text-neutral-400 text-sm mb-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link href="#" className="text-sm font-medium text-neutral-600">
            ดูรายละเอียด
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="w-76">
          <div className="w-76 h-86 mb-4 rounded-sm overflow-hidden">
            <img
              src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FIMG_2842.JPG&w=3840&q=75"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
          <p className="text-neutral-400 text-sm mb-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link href="#" className="text-sm font-medium text-neutral-600">
            ดูรายละเอียด
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="w-76">
          <div className="w-76 h-64 mb-4 rounded-sm overflow-hidden">
            <img
              src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-2.png&w=640&q=75"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
          <p className="text-neutral-400 text-sm mb-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link href="#" className="text-sm font-medium text-neutral-600">
            ดูรายละเอียด
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="w-76">
          <div className="w-76 h-92 mb-4 rounded-sm overflow-hidden">
            <img
              src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FLINE_ALBUM_%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%20%E0%B8%9E%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%20%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%A24%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97_250426_22.jpg&w=1080&q=75"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
          <p className="text-neutral-400 text-sm mb-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link href="#" className="text-sm font-medium text-neutral-600">
            ดูรายละเอียด
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>

        
        <div className="w-76">
          <div className="w-76 h-92 mb-4 rounded-sm overflow-hidden">
            <img
              src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-1.png&w=640&q=75"
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-semibold text-neutral-700">ระแนงไวนิล AMIGO</p>
          <p className="text-neutral-400 text-sm mb-2">
            บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
          </p>
          <Link href="#" className="text-sm font-medium text-neutral-600">
            ดูรายละเอียด
            <ArrowUpRight className="inline-block ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>      
        </div>
    </div>
  )
}

export default LatestArticlePage