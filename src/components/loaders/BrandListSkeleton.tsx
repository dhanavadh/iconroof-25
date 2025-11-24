import React from 'react'
import { Skeleton } from "../ui/Skeleton";

interface BrandListSkeletonProps {
  count?: number;
}

const BrandListSkeleton = ({ count = 3 }: BrandListSkeletonProps) => {
  return (
    <div className='w-full py-8 md:py-16 max-w-7xl mx-auto'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <div className='text-center w-full flex justify-center'>
          <Skeleton className='h-10 w-64 mb-4' />
        </div>
        <div className="flex gap-4 md:gap-6">
           {Array.from({ length: count }).map((_, i) => (
             <div key={i} className="flex flex-col items-center">
                <Skeleton className="mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-md" />
                <Skeleton className="h-4 w-20" />
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}

export default BrandListSkeleton
