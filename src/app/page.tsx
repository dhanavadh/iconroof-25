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
import ProductBannerContainer from "@/components/products/ProductBannerContainer";
import ProductBannerSkeleton from "@/components/loaders/ProductBannerSkeleton";
import { getMockBrands } from "@/app/products/mock-data";
import ContactFAQ from "@/components/home/ContactFAQ";
import ContactFAQSkeleton from "@/components/loaders/ContactFAQSkeleton";
import InformationCompSkeleton from "@/components/loaders/InformationCompSkeleton";
import CustomerReview from "@/components/home/CustomerReview";

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
    priceRange: "$",
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
        <Suspense fallback={<ProductBannerSkeleton fullScreen={true} />}>
          <ProductBannerContainer id="home-hero-banner" fullScreen={true} />
        </Suspense>
        <Menutab />

        <div className="w-full px-6 md:px-8 py-8 md:py-16 flex flex-col gap-16 md:gap-24">


          <ProductInfoPage />

          <Suspense fallback={<BrandListSkeleton count={getMockBrands().length} />}>
            <BrandListPage />
          </Suspense>

          <TestimonialSlider />

          {/* <LatestArticlePage /> */}



          <Suspense fallback={<InformationCompSkeleton />}>
            <InformationComp />
          </Suspense>

          <Suspense fallback={<ContactFAQSkeleton />}>
            <ContactFAQ />
          </Suspense>

          <CustomerReview />

          <Suspense fallback={<BannerInfoSkeleton />}>
            <BannerInfoPage />
          </Suspense>
        </div>
      </div>
    </>
  );
}

