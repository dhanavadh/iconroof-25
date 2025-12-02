import { Suspense } from "react";
import Menutab from "@/components/home/Menutab";
import ProductBanner from "@/components/products/ProductBanner";
import Slider from "@/components/home/Slider";
import ProductBannerSkeleton from "@/components/loaders/ProductBannerSkeleton";
import { getMockBannerAsync, getMockSliderSectionAsync } from "@/app/products/mock-data";
import type { Metadata } from "next";

const BASE_URL = 'https://iconroof.co.th';

export const metadata: Metadata = {
  title: "ตัวอย่างผลงานติดตั้งระแนงไวนิล Gallery | Iconroof",
  description: "ชมภาพผลงานการติดตั้งระแนงไวนิลจริงจากลูกค้าของ Iconroof ตัวอย่างงานติดตั้งคุณภาพ รีวิวจากลูกค้าจริง",
  keywords: ["ผลงานติดตั้ง", "ตัวอย่างระแนง", "รีวิวลูกค้า", "ระแนงไวนิล", "Iconroof"],
  openGraph: {
    title: "ตัวอย่างผลงานติดตั้ง | Iconroof",
    description: "ชมภาพผลงานการติดตั้งระแนงไวนิลจริงจากลูกค้าของ Iconroof",
    url: `${BASE_URL}/preview`,
    siteName: "Iconroof",
    locale: "th_TH",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/preview`,
  },
};

async function PreviewBanner() {
  const banner = await getMockBannerAsync("preview-banner");
  if (!banner) return null;
  return <ProductBanner banner={banner} />;
}

async function PreviewSlider() {
  const slider = await getMockSliderSectionAsync("preview-slider");
  if (!slider) return null;
  return (
    <Slider
      sectionTitle={slider.title}
      sectionSubtitle={slider.subtitle}
      articles={slider.articles}
    />
  );
}

export default function PreviewPage() {
  return (
    <>
      <Suspense fallback={<ProductBannerSkeleton />}>
        <PreviewBanner />
      </Suspense>
      <Menutab />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 p-6 px-6 py-8 font-sans md:gap-24 md:px-8 md:py-16">
        <Suspense fallback={<div className="h-96 animate-pulse bg-neutral-100 rounded-lg" />}>
          <PreviewSlider />
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
