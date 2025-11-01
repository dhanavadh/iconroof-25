'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HamburgerIcon, Home, Menu, MenuIcon, MessageCircle, MessageCircleDashed, MessageCircleHeart, PanelLeftOpen, ShoppingCart } from 'lucide-react'

const NavbarMain = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 z-50 flex items-center p-4 h-16 justify-between w-full transition-colors duration-300 font-sans ${scrolled ? 'bg-[#fffcfa] border-b border-neutral-200' : ''}`}>
        <img src={scrolled ? "/icr-n-o.svg" : "/icr-n-w.svg"} alt="Logo" className='h-8'/>
        <p className='flex items-center bg-white border border-neutral-100 py-1 px-3 text-neutral-700 rounded-full text-sm font-semibold shadow-sm'>ซื้อสินค้า</p>
    </div>
  )
}

export default NavbarMain