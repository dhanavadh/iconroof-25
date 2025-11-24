import React from "react";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-neutral-200 ${className}`}
      {...props}
    />
  );
}
