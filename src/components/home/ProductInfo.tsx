'use client';

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackQualifyLead } from '@/lib/gtag'

const ProductInfoPage = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <p className='text-neutral-600'>ระแนงไวนิล วีจีเวนโต้</p>
              <h2 className="text-4xl font-bold text-neutral-900 mb-2 mt-1 leading-tight">
                ออกแบบเพื่อสภาพอากาศของประเทศไทยโดยเฉพาะ
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                เปลี่ยนบ้านของคุณด้วยบริการหลังคาพรีเมียม วัสดุคุณภาพ การติดตั้งที่เชี่ยวชาญ และการป้องกันที่ยาวนาน
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2">
              <Link
                href="https://lin.ee/8BsKFek"
                target='_blank'
                className='px-5 py-2 border-2 border-neutral-800 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors font-semibold'
                onClick={() => trackQualifyLead('line_product_order')}
              >
                สั่งซื้อสินค้า
              </Link>
              <Link
                href="/products/vg-vento"
                className='px-5 py-2 border-2 border-neutral-800 text-neutral-800 rounded-full hover:opacity-80 transition-colors font-semibold'
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              alt="Product showcase"
              src="/product/test-1.webp"
              className="object-cover rounded-sm"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfoPage
