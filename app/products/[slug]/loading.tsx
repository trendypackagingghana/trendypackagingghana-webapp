"use client";

import { useState, useEffect } from "react";
import Skeleton from "../../components/skeletons/Skeleton";
import ProductSkeleton from "../../components/skeletons/ProductSkeleton";

const Spinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    <p className="text-muted-foreground font-medium animate-pulse text-sm">Loading Product Details...</p>
  </div>
);

export default function ProductLoading() {
  const [stage, setStage] = useState<"loader" | "skeleton">("loader");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("skeleton");
    }, 1000); // 1s Loader

    return () => clearTimeout(timer);
  }, []);

  if (stage === "loader") {
    return (
      <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
        <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-8">
          <Spinner />
        </main>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <main className="flex-1 flex flex-col items-center py-8">
        <div className="max-w-[1200px] w-full px-6 flex flex-col gap-6">
          {/* Breadcrumbs Placeholder */}
          <div className="flex gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-16" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
            {/* Left: Image Placeholder */}
            <div className="flex flex-col gap-4">
              <Skeleton className="w-full aspect-[4/5] rounded-xl" />
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="size-24 rounded-lg" />
                ))}
              </div>
            </div>

            {/* Right: Info Placeholder */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <div className="flex gap-3">
                  <Skeleton className="h-10 w-28 rounded-lg" />
                  <Skeleton className="h-10 w-28 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <Skeleton className="h-32 w-full rounded-xl" />
              <Skeleton className="h-14 w-full rounded-xl" />
            </div>
          </div>
        </div>

        {/* Related Products Placeholder */}
        <div className="max-w-[1200px] w-full px-6 flex flex-col gap-6 mt-20">
          <Skeleton className="h-8 w-48" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
