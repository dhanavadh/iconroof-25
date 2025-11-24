import React from "react";
import { Skeleton } from "../ui/Skeleton";

export default function ProductBannerSkeleton() {
  return (
    <section className="flex relative h-full min-w-screen items-end -mt-16 md:-mt-20 font-sans min-h-[600px]">
      <div className="flex flex-col z-20 p-6 w-full md:max-w-7xl lg:mx-auto lg:mb-4 pt-96 gap-4">
        <Skeleton className="h-6 w-48 bg-white/20" />
        <Skeleton className="h-10 w-3/4 md:w-1/2 bg-white/20" />
        <Skeleton className="h-6 w-full md:w-2/3 bg-white/20" />
        <Skeleton className="h-10 w-32 rounded-full bg-white/20" />
      </div>
      <div className="absolute inset-0 z-10 bg-neutral-300 animate-pulse" />
    </section>
  );
}
