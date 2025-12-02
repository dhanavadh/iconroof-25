import { Suspense } from "react";
import Menutab from "@/components/home/Menutab";
import ProductBanner from "@/components/products/ProductBanner";
import Slider from "@/components/home/Slider";
import ProductBannerSkeleton from "@/components/loaders/ProductBannerSkeleton";
import { getMockBannerAsync, getMockSliderSectionAsync } from "@/app/products/mock-data";
import type { Metadata } from "next";

const BASE_URL = 'https://iconroof.co.th';

export const metadata: Metadata = {
  title: "บริการติดตั้งระแนงไวนิล ช่างทำระแนงมืออาชีพ | Iconroof",
  description: "บริการติดตั้งระแนงไวนิลครบวงจร โดยทีมช่างผู้ชำนาญการ ประสบการณ์ยาวนาน งานคุณภาพ รับประกันผลงาน ติดต่อ Iconroof",
  keywords: ["ติดตั้งระแนง", "ช่างทำระแนง", "บริการติดตั้ง", "ระแนงไวนิล", "Iconroof"],
  openGraph: {
    title: "บริการติดตั้งระแนงไวนิล | Iconroof",
    description: "บริการติดตั้งระแนงไวนิลครบวงจร โดยทีมช่างผู้ชำนาญการ",
    url: `${BASE_URL}/services`,
    siteName: "Iconroof",
    locale: "th_TH",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

async function ServicesBanner() {
  const banner = await getMockBannerAsync("services-banner");
  if (!banner) return null;
  return <ProductBanner banner={banner} />;
}

async function ServicesSlider() {
  const slider = await getMockSliderSectionAsync("services-slider");
  if (!slider) return null;
  return (
    <Slider
      sectionTitle={slider.title}
      sectionSubtitle={slider.subtitle}
      articles={slider.articles}
    />
  );
}

export default function ServicePage() {
  return (
    <>
      <Suspense fallback={<ProductBannerSkeleton />}>
        <ServicesBanner />
      </Suspense>
      <Menutab />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 p-6 px-6 py-8 font-sans md:gap-24 md:px-8 md:py-16">
        <Suspense fallback={<div className="h-96 animate-pulse bg-neutral-100 rounded-lg" />}>
          <ServicesSlider />
        </Suspense>
        <div>
          <p className="text-neutral-600">ผลงาน</p>
          <h2 className="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">
            รีวิวจากลูกค้า
          </h2>
        </div>
      </div>
    </>
  );
}
