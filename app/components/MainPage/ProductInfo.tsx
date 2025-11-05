import React from 'react'
import Link from 'next/link'

const ProductInfoPage = () => {
  return (
    <section className="py-8 md:py-16 px-6 md:px-8">
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
                <Link href="https://line.me/ti/p/@plk2013" target='_blank' className='px-5 py-2 border-2 border-neutral-800 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors font-semibold'>
                    สั่งซื้อสินค้า
                </Link>
                <Link href="https://line.me/ti/p/@plk2013" target='_blank' className='px-5 py-2 border-2 border-neutral-800 text-neutral-800 rounded-full hover:opacity-80 transition-colors font-semibold'>
                    ดูรายละเอียด
                </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              alt="Product showcase"
              src="/product/test-1.jpg"
              loading="lazy"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfoPage
