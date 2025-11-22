'use client'

import { usePathname } from 'next/navigation'
import NavbarDefault from './NavbarDefault'
import NavbarMain from './NavbarMain'

export default function ConditionalNavbar() {
  const pathname = usePathname()

  // Use NavbarMain for home page ('/'), NavbarDefault for all other pages
  return pathname === '/' ? <NavbarMain /> : <NavbarDefault />
}