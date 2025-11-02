import React from 'react'
import Link from 'next/link'

const BrandListPage = () => {
  return (    
    <div className='w-full py-12 px-6 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mb-4'>เลือกดูตามแบรนด์</h1>                
            </div>
            <div className="flex gap-4 md:gap-6">
                <img src="/brand/amigo.jpg" alt="Product 1" className="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-md flex-shrink-0" />
                <img src="/brand/vg_cnp.jpg" alt="Product 1" className="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover brightness-90 rounded-md flex-shrink-0" />
                <img src="/brand/scg_home.jpg" alt="Product 1" className="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-md flex-shrink-0" />
            </div>
        </div>
    </div>
  )
}

export default BrandListPage