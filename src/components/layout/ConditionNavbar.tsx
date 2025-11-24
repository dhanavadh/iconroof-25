"use client"
import { usePathname } from 'next/navigation'
import NavbarDefault from './NavbarDefault'
import NavbarMain from './NavbarMain'

export default function ConditionalNavbar() {
  const pathname = usePathname()

  // Use NavbarMain for home page ('/'), and any path starting with '/product'
  return (pathname === '/' || pathname.startsWith('/product') || pathname.startsWith('/blogs')) ? <NavbarMain /> : <NavbarDefault />
}