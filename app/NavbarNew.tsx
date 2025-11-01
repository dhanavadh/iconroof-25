import React from 'react'
import Link from 'next/link'

const NavbarNew = () => {
  return (
    <div className='sticky top-0 z-50 font-sans bg-neutral-50'>
      <section className='flex items-center justify-between py-2 px-4 border-b border-neutral-200 h-16'>
        <img src="/icr-n-o.svg" alt="Logo" className='h-8'/>
        <p className='flex items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm'>ซื้อสินค้า</p>

      </section>        
      <div className='relative'>
        <section 
          className='flex font-medium items-center gap-6 px-6 py-2 h-12 bg-neutral-100 border-b border-neutral-200 overflow-x-auto no-scrollbar text-neutral-500' 
          id='menu-tab'
        >
          <Link href="/" className="flex-shrink-0">หน้าแรก</Link>
          <Link href="/" className="flex-shrink-0">โปรโมชั่น</Link>
          <Link href="/test#product" className="flex-shrink-0">สินค้า</Link>
          <Link href="/test#preview" className="flex-shrink-0">ผลงานติดตั้ง</Link>
          <Link href="/" className="flex-shrink-0">ช่างทำระแนง</Link>
          <Link href="/" className="flex-shrink-0">เปรียบเทียบ</Link>
        </section>
        
        <div className='absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-100 to-transparent pointer-events-none'></div>
      </div>
    </div>
  )
}

export default NavbarNew