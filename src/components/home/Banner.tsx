import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getMockBannerInfo } from "@/app/products/mock-data";

const BannerInfoPage = () => {
  const bannerInfo = getMockBannerInfo();

  return (
    <div className="w-full py-8 md:py-16 font-sans max-w-7xl mx-auto rounded-xl overflow-hidden">
      <section className="flex relative min-h-full w-full items-center">
        <div className="flex flex-col z-20 items-center px-6 py-48 text-white w-full max-w-7xl mx-auto gap-4">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-center md:text-start text-4xl font-semibold">
              {bannerInfo.title}
            </h1>
            <p>{bannerInfo.description}</p>
          </div>
          <Link
            href={bannerInfo.linkUrl}
            className="bg-white text-black px-4 py-2 rounded-full w-fit"
          >
            {bannerInfo.linkText}
          </Link>
        </div>
        <Image
          src={bannerInfo.imageUrl}
          alt={bannerInfo.title}
          className="absolute object-cover brightness-65 z-10 rounded-xl"
          fill
          sizes="100vw"
        />
      </section>
    </div>
  );
};

export default BannerInfoPage;
