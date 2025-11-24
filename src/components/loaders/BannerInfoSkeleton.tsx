import React from "react";
import { Skeleton } from "../ui/Skeleton";

const BannerInfoSkeleton = () => {
  return (
    <div className="w-full py-8 md:py-16 font-sans max-w-7xl mx-auto rounded-xl overflow-hidden">
      <section className="flex relative min-h-full w-full items-center min-h-[400px]">
        <div className="flex flex-col z-20 items-center px-6 py-48 w-full max-w-7xl mx-auto gap-4">
          <div className="flex flex-col gap-2 items-center w-full">
            <Skeleton className="h-10 w-64 bg-white/20" />
            <Skeleton className="h-6 w-48 bg-white/20" />
          </div>
          <Skeleton className="h-10 w-32 rounded-full bg-white/20" />
        </div>
        <div className="absolute inset-0 z-10 bg-neutral-300 animate-pulse" />
      </section>
    </div>
  );
};

export default BannerInfoSkeleton;
