import React from "react";
import { Skeleton } from "../ui/Skeleton";

const InformationCompSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-64" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-none md:grid-flow-col md:grid-rows-4 gap-4 w-full h-[800px] md:h-[600px]">
             {/* Mimic the grid layout: 
                - Item 1: row-span-4 (big tall on left)
                - Item 2: col-span-2 row-span-2 (big wide on top right)
                - Item 3: col-span-1 row-span-2 (small bottom middle)
                - Item 4: col-span-1 row-span-2 (small bottom right)
             */}
            <Skeleton className="md:row-span-4 h-64 md:h-full rounded-lg" />
            <Skeleton className="md:col-span-2 md:row-span-2 h-64 rounded-lg" />
            <Skeleton className="md:col-span-1 md:row-span-2 h-64 md:h-full rounded-lg" />
            <Skeleton className="md:col-span-1 md:row-span-2 h-64 md:h-full rounded-lg" />
        </div>
    </div>
  );
};

export default InformationCompSkeleton;
