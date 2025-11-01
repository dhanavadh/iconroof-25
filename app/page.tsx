import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Menutab from "./components/Menutab";

export default function Home() {
  return (
    <div className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto">
      <section className="flex relative min-h-screen min-w-screen items-end">
        <div className="flex flex-col z-20 p-6 text-white md:max-w-7xl lg:mx-auto w-full lg:mb-4">
          <h1 className="text-start text-base">สินค้าใหม่</h1>
          <h1 className="text-start text-3xl font-semibold">ระแนงไวนิล วีจีเวนโต้</h1>
          <p className="my-2">บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ</p>
          <Link href="#" className="bg-white text-black px-4 py-2 rounded-full w-fit">
            ดูรายละเอียด
          </Link>
        </div>
        <img src="https://vg-cnp.com/wp-content/uploads/2025/06/2025-M04-Leaflet-DL-Slat-TH_%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-01.jpg" alt="Product 1" className="absolute w-full h-screen object-cover brightness-65 z-10" />
      </section>
      <Menutab />
      <section className="flex flex-col items-start justify-center min-w-full p-6">        
        <span className="flex items-end justify-between w-full mb-8">
          <h1 className="text-start text-2xl text-amber-950 font-semibold">บทความ</h1>
          <h1 className="text-start text-base">ดูทั้งหมด</h1>
        </span>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-4 items-center">
            <img src="https://iconroof.co.th/_next/image?url=%2Fasset%2Fblog%2Fblog-3.png&w=3840&q=75" alt="Product 1" className="mb-4 w-36 h-36 object-cover brightness-90 rounded-md flex-shrink-0" />
            <span className="flex flex-col w-full gap-2">
              <h1 className="text-lg font-semibold">ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</h1>
              <span className="flex gap-4">
                <p className="text-sm font-semibold">ระแนงบังตา</p>
                <p className="text-sm text-neutral-500">Oct 12, 2025</p>
              </span>
            </span>
          </div>          
          <div className="flex gap-4 items-center">
            <img src="https://vg-cnp.com/wp-content/uploads/2025/06/2025-M04-Leaflet-DL-Slat-TH_%E0%B9%84%E0%B8%9F%E0%B8%A5%E0%B9%8C%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95-01.jpg" alt="Product 1" className="mb-4 w-36 h-36 object-cover brightness-90 rounded-md flex-shrink-0" />
            <span className="flex flex-col w-full gap-2">
              <h1 className="text-lg font-semibold">ระแนงไวนิล ต่างจาก ไม้ระแนงเฌอร่า อย่างไร..?</h1>
              <span className="flex gap-4">
                <p className="text-sm font-semibold">Iconroof</p>
                <p className="text-sm text-neutral-500">Oct 12, 2025</p>
              </span>
            </span>
          </div>                    
          <div className="flex gap-4 items-center">
            <img src="https://iconroof.co.th/_next/image?url=https%3A%2F%2Ftvss01.iconroof.co.th%2Fe6c6f6e8-e73e-40b1-9f05-5436e5f99137%2Fasset%2Famigo-1.png&w=3840&q=75" alt="Product 1" className="mb-4 w-36 h-36 object-cover brightness-90 rounded-md flex-shrink-0" />
            <span className="flex flex-col w-full gap-2">
              <h1 className="text-lg font-semibold">วัสดุมุงหลังคายอดนิยม ที่ใช้กันในปัจจุบัน</h1>
              <span className="flex gap-4">
                <p className="text-sm font-semibold">Iconroof</p>
                <p className="text-sm text-neutral-500">Oct 12, 2025</p>
              </span>
            </span>
          </div>                    
        </div>
      </section>
      <section className="flex flex-col items-start justify-center min-w-full p-6">
        <MessageCircleQuestion className="h-12 w-12 mb-4 text-[#d9300c]" />
        <h1 className="text-start text-3xl text-[#d9300c] font-semibold">คำถามที่พบบ่อย</h1>
        <p className="mt-2 mb-4">หากสนใจแต่ไม่รู้จะเริ่มอย่างไรดี ดูที่นี่</p>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between p-2 border-b border-neutral-200">
            <p>หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร</p>
            <ChevronDown className="self-center text-neutral-500" />
          </div>
          <div className="flex justify-between p-2 border-b border-neutral-200">
            <p>หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร</p>
            <ChevronDown className="self-center text-neutral-500" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-center mt-4 min-w-full py-2 px-4">
        <MessageCircleQuestion className="h-12 w-12 mb-4 text-[#d9300c]" />
        <h1 className="text-start text-3xl text-[#d9300c] font-semibold">ติดต่อปรึกษาฟรี!</h1>
        <p className="mt-2 mb-4">หากสนใจแต่ไม่รู้จะเริ่มอย่างไรดี ดูที่นี่</p>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between p-2 border-b border-neutral-200">
            <p>หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร</p>
            <ChevronDown className="self-center text-neutral-500" />
          </div>
          <div className="flex justify-between p-2 border-b border-neutral-200">
            <p>หากสนใจสั่งซื้อสินค้าต้องทำอย่างไร</p>
            <ChevronDown className="self-center text-neutral-500" />
          </div>
        </div>
      </section>
    </div>
  );
}
