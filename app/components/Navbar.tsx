'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HamburgerIcon, Home, Menu, MenuIcon, MessageCircle, MessageCircleDashed, MessageCircleHeart, PanelLeftOpen, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 z-50 flex p-4 justify-between w-full transition-colors duration-300 ${scrolled ? 'bg-[#fffcfa]' : ''}`}>
        <img src={scrolled ? "/icr-n-o.svg" : "/icr-n-w.svg"} alt="Logo" className='h-8'/>
        <div className='flex gap-2'>
            <Link href="/" className='ml-3 self-center'>
                <ShoppingCart className={scrolled ? 'text-neutral-900' : 'text-neutral-100'}/>
            </Link>
            <Link href="/" className='ml-3 self-center'>
                <Menu className={scrolled ? 'text-neutral-900' : 'text-neutral-100'}/>
            </Link>            
        </div>
    </div>
  )
}

export default Navbar