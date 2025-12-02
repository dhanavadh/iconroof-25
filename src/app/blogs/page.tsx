import { Suspense } from "react";
import Menutab from "@/components/home/Menutab";
import ProductBanner from "@/components/products/ProductBanner";
import Slider from "@/components/home/Slider";
import ProductBannerSkeleton from "@/components/loaders/ProductBannerSkeleton";
import { getMockBannerAsync, getMockSliderSectionAsync } from "@/app/products/mock-data";

async function BlogsBanner() {
  const banner = await getMockBannerAsync("blogs-banner");
  if (!banner) return null;
  return <ProductBanner banner={banner} />;
}

async function BlogsSlider() {
  const slider = await getMockSliderSectionAsync("blogs-slider");
  if (!slider) return null;
  return (
    <Slider
      sectionTitle={slider.title}
      sectionSubtitle={slider.subtitle}
      articles={slider.articles}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <Suspense fallback={<ProductBannerSkeleton />}>
        <BlogsBanner />
      </Suspense>
      <Menutab />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 p-6 px-6 py-8 font-sans md:gap-24 md:px-8 md:py-16">
        <Suspense fallback={<div className="h-96 animate-pulse bg-neutral-100 rounded-lg" />}>
          <BlogsSlider />
        </Suspense>
        <div>
          <p className="text-neutral-600">บทความ</p>
          <h2 className="mt-1 mb-2 text-4xl leading-tight font-bold text-neutral-900">
            บทความทั้งหมด
          </h2>
        </div>
      </div>
    </>
  );
}
