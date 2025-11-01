import React from 'react'
import Link from 'next/link'
import Menutab from '../Menutab'

const NavbarDefault = () => {
  return (
    <div className='sticky top-0 z-50 font-sans bg-neutral-50'>
      <section className='flex items-center justify-between py-2 px-4 border-b border-neutral-200 h-16'>
        <img src="/icr-n-o.svg" alt="Logo" className='h-8'/>
        <p className='flex items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm'>ซื้อสินค้า</p>

      </section>        
      <Menutab />
    </div>
  )
}

export default NavbarDefault