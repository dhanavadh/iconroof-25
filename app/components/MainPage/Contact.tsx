import Link from 'next/link'
import React from 'react'

const ContactInfoPage = () => {
  return (
    <div className='w-full py-12 px-6 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold mb-4'>ปรึกษา<a className='text-green-700'>ฟรี</a></h1>
                <p className='text-xl font-semibold text-center'>สอบถามเกี่ยวกับสินค้าและงานติดตั้งได้ฟรี</p>
            </div>
            <Link href="https://line.me/ti/p/@plk2013" target='_blank' className='px-5 py-2 border-2 border-green-600 bg-green-600 text-white rounded-full hover:bg-green-700 hover:border-green-700 transition-colors font-semibold'>
                เพิ่มเพื่อนในไลน์
            </Link>
        </div>
    </div>
  )
}

export default ContactInfoPage