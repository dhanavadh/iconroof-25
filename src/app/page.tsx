import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import Menutab from "@/components/home/Menutab";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import BrandListPage from "@/components/home/Brand";
import ProductInfoPage from "@/components/home/ProductInfo";
import LatestArticlePage from "@/components/home/Article";
import BannerInfoPage from "@/components/home/Banner";
import InformationComp from "@/components/home/InformationComp";
import BrandListSkeleton from "@/components/loaders/BrandListSkeleton";
import BannerInfoSkeleton from "@/components/loaders/BannerInfoSkeleton";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Iconroof",
    description:
      "จำหน่ายและติดตั้งระแนงบังตาไวนิล AMIGO ระแนงชิด ระแนงเว้นร่อง ระแนงบานเกล็ด",
    url: "https://iconroof.co.th/",
    telephone: "+66-89-154-3355",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "หมู่บ้าน คนึงทิพย์ (โกดัง) ถนน บางกรวย-ไทรน้อย กาญจนาภิเษก ตำบล บางบัวทอง",
      addressLocality: "อำเภอบางบัวทอง",
      addressRegion: "นนทบุรี",
      postalCode: "11110",
      addressCountry: "TH",
    },
    image:
      "https://tvss01.iconroof.co.th/e6c6f6e8-e73e-40b1-9f05-5436e5f99137/asset/og-img.jpg",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:30",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex font-sans flex-col items-center justify-start min-h-screen bg-[var(--background)] text-[var(--foreground)] max-w-7xl mx-auto pt-16 md:pt-20">
        <section className="flex relative min-h-screen min-w-screen items-end -mt-16 md:-mt-20">
          <div className="flex flex-col z-20 p-6 text-white md:max-w-7xl lg:mx-auto w-full lg:mb-4">
            <h1 className="text-start text-base">สินค้าใหม่</h1>
            <h1 className="text-start text-3xl font-semibold">
              ระแนงไวนิล วีจีเวนโต้
            </h1>
            <p className="my-2">
              บริการลูกค้าการนำเข้าธุรกิจค้าส่งมอบองค์กรการบรรลุเป้าหมายโทรบัญชีงบประมาณ
            </p>
            <Link
              href="#"
              className="bg-white text-black px-4 py-2 rounded-full w-fit"
            >
              ดูรายละเอียด
            </Link>
          </div>
          <Image
            src="/product/1111.webp"
            alt="Product 1"
            className="absolute object-cover brightness-65 z-10"
            fill
            sizes="100vw"
          />
        </section>

        <div className="w-full px-6 md:px-8 flex flex-col">
          <Menutab />

          <ProductInfoPage />

          <Suspense fallback={<BrandListSkeleton />}>
            <BrandListPage />
          </Suspense>

          <TestimonialSlider />

          <LatestArticlePage />
          
          <Suspense fallback={<BannerInfoSkeleton />}>
            <BannerInfoPage />
          </Suspense>

          <InformationComp />
        </div>

        <section className="flex flex-col items-start justify-center mt-4 min-w-full py-2 px-6 md:px-8">
          <MessageCircleQuestion className="h-12 w-12 mb-4 text-[#d9300c]" />
          <h1 className="text-start text-3xl text-[#d9300c] font-semibold">
            ติดต่อปรึกษาฟรี!
          </h1>
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
    </>
  );
}
