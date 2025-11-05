import Link from "next/link";
import Image from "next/image";
import { ChevronDown, MessageCircleQuestion, ArrowUpRight, Pointer } from "lucide-react";
import Menutab from "./components/Menutab";
import TestimonialSlider from "./components/TestimonialSlider";
import Navbar from "./components/Navbar";
import ContactInfoPage from "./components/MainPage/Contact";
import BrandListPage from "./components/MainPage/Brand";
import ProductInfoPage from "./components/MainPage/ProductInfo";
import LatestArticlePage from "./components/MainPage/Article";
import BannerInfoPage from "./components/MainPage/Banner";

export default function Home() {
  return (
    <>
      <div className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
        <section className="flex relative min-h-screen min-w-screen items-end -mt-16 md:-mt-20">
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

      <ProductInfoPage />

      <BrandListPage />

      <TestimonialSlider />

      <LatestArticlePage />

      <ContactInfoPage />

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

      <BannerInfoPage />
    </>
  );
}
