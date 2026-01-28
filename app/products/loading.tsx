import Header from "../components/layout/Header";
import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import Skeleton from "../components/skeletons/Skeleton";

export default function ProductsLoading() {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16 overflow-x-hidden bg-background">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-10 py-8 pb-24 xl:pb-8 text-foreground">
        {/* Section Header Placeholder */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-9 w-48 md:w-64" />
              <Skeleton className="h-5 w-64 md:w-96" />
            </div>
            <Skeleton className="hidden sm:block h-5 w-32" />
          </div>

          {/* Filter Chips Placeholder */}
          <div className="flex flex-wrap items-center gap-3">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-8 w-28 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-16 rounded-full" />
            <Skeleton className="h-8 w-20 rounded-full" />
          </div>
        </div>

        {/* Product Grid Placeholder */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-6 h-10" />
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-10 h-10 rounded-lg" />
        </div>
      </main>
    </div>
  );
}
