import React from "react";
import { Skeleton } from "../ui/Skeleton";

const ContactFAQSkeleton = () => {
  return (
    <section className="flex flex-col items-start justify-center mt-4 min-w-full py-2 px-6 md:px-8">
      <Skeleton className="h-12 w-12 mb-4 rounded-md bg-neutral-200" />
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-6 w-96 mt-2 mb-4" />
      <div className="flex flex-col gap-2 w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between p-2 border-b border-neutral-200">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFAQSkeleton;
