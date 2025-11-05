import React from 'react'
import Link from 'next/link'

const BannerInfoPage = () => {
  return (
    <div className='w-full py-8 md:py-16 px-6 md:px-8 font-sans max-w-7xl mx-auto rounded-xl overflow-hidden'>
        <section className="flex relative min-h-full w-full items-center">
          <div className="flex flex-col z-20 px-6 py-32 text-white w-full max-w-7xl mx-auto">
            <h1 className="text-start text-base">ระแนง Amigo</h1>
            <h1 className="text-start text-3xl font-semibold">หมดปัญหาเรื่องปลวก น้ำ หรือ เชื้อรา</h1>
            <p className="my-2">ระบบฝ้าระแนง Amigo ไม่มีปัญหาเรื่องปลวก ไม่ชวมน้ำ ไม่บิดโก่งงอ ไม่ขึ้นรา</p>
            <Link href="#" className="bg-white text-black px-4 py-2 rounded-full w-fit">
              ดูรายละเอียด
            </Link>
          </div>
          <img src="https://iconroof.co.th/_next/image?url=%2Fasset%2Famigo.png&w=3840&q=75" alt="Product 1" className="absolute w-full h-full object-cover brightness-65 z-10 rounded-xl" />
        </section>
    </div>
  )
}

export default BannerInfoPage