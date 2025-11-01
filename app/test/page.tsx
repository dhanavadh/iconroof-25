import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const TestPage = () => {
  return (
    <div className='font-sans'>
    <section>
        <div className='flex w-full h-96 overflow-hidden relative'>
            <div className="flex flex-col z-20 p-6 text-white bottom-0 left-0 absolute">
                <h1 className="text-start text-base">สินค้าใหม่</h1>
                <h1 className="text-start text-3xl font-semibold">ระแนงไวนิล วีจีเวนโต้</h1>
                <p className="mt-2">บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>
            </div>
            <img src="https://vg-cnp.com/wp-content/uploads/2025/06/2025-M04-Leaflet-DL-Slat-TH_%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-01.jpg" alt="Product 1" className="absolute w-full h-full object-cover brightness-60" />
        </div>
    </section>    
    {/* <div className='p-6 w-full'>
        <p className='text-neutral-500'>สินค้าใหม่</p>
        <p className='text-3xl font-semibold mt-1'>ระแนงบังตาไวนิล</p>
        <div className='w-full h-96 my-4 rounded-md overflow-hidden'>
            <img src="https://vg-cnp.com/wp-content/uploads/2025/06/2025-M04-Leaflet-DL-Slat-TH_%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-01.jpg" alt="Product 1" className="w-full h-full object-cover" />
        </div>
        <p>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>
        <Link href="#" className="bg-amber-950 font-semibold text-white px-4 py-2 rounded-full w-fit mt-4 inline-block">
            ดูรายละเอียด
        </Link>        
    </div> */}
    <span className="flex items-end justify-between w-full p-6" id='product'>
        <h1 className="text-start text-2xl text-amber-950 font-semibold">สินค้า</h1>
        <h1 className="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
    </span>        
    
    <section className='flex items-start gap-6 overflow-x-auto no-scrollbar px-6 brightness-90'>
        <div className='w-full' id='product-amigo'>
            <div className='w-64 h-96 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p> 
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        <div className='w-full'>
            <div className='w-64 h-86 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FIMG_2842.JPG&w=3840&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>    
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        <div className='w-full'>
            <div className='w-64 h-92 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FLINE_ALBUM_%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%20%E0%B8%9E%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%20%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%A24%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97_250426_22.jpg&w=1080&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        
        
    </section>
    <span className="flex items-end justify-between w-full p-6" id='preview'>
        <h1 className="text-start text-2xl text-amber-950 font-semibold">ผลงาน</h1>
        <h1 className="text-start text-base text-neutral-500">ดูทั้งหมด</h1>
    </span>        
    
    <section className='flex items-start gap-6 overflow-x-auto no-scrollbar px-6 brightness-90'>
        <div className='w-full' id='product-amigo'>
            <div className='w-64 h-96 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Fpreview-amigo-1.jpg&w=3840&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p> 
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        <div className='w-full'>
            <div className='w-64 h-86 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FIMG_2842.JPG&w=3840&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>    
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        <div className='w-full'>
            <div className='w-64 h-92 mb-4 rounded-sm overflow-hidden'>
                <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2FLINE_ALBUM_%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%20%E0%B8%9E%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B8%A2%E0%B8%99%20%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%A24%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%97_250426_22.jpg&w=1080&q=75" alt="Product 1" className="w-full h-full object-cover" />
            </div>
            <p className='font-semibold text-neutral-700'>ระแนงไวนิล AMIGO</p>
            <p className='text-neutral-400 text-sm mb-2'>บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>
            <Link href="#" className="text-sm font-medium text-neutral-600">
                ดูรายละเอียด
                <ArrowUpRight className='inline-block ml-1 h-4 w-4'/>
            </Link>        
        </div>
        
        
    </section>
    </div>
  )
}

export default TestPage