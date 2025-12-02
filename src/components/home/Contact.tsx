'use client';

import Link from 'next/link'
import React from 'react'
import { trackQualifyLead } from '@/lib/gtag'

const ContactInfoPage = () => {
  return (
    <div className='w-full py-8 md:py-16 px-6 md:px-8 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold mb-4'>ปรึกษา<span className='text-green-700'>ฟรี</span></h1>
                <p className='text-xl font-semibold text-center'>สอบถามเกี่ยวกับสินค้าและงานติดตั้งได้ฟรี</p>
            </div>
            <Link
              href="https://lin.ee/8BsKFek"
              target='_blank'
              className='px-5 py-2 border-2 border-green-600 bg-green-600 text-white rounded-full hover:bg-green-700 hover:border-green-700 transition-colors font-semibold'
              onClick={() => trackQualifyLead('line_contact')}
            >
                เพิ่มเพื่อนในไลน์
            </Link>
        </div>
    </div>
  )
}

export default ContactInfoPage