import ProductSkeleton from "../components/skeletons/ProductSkeleton";
import Skeleton from "../components/skeletons/Skeleton";
import LoadingSequence from "../components/skeletons/LoadingSequence";

export default function ProductsLoading() {
  const skeleton = (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-8 pb-24 xl:pb-8 text-foreground">
        {/* Section Header Placeholder */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-96 text-muted-foreground" />
            </div>
          </div>
          
          {/* Filter Chips Placeholder */}
          <div className="flex flex-wrap items-center gap-3">
             <Skeleton className="h-4 w-20" />
             <Skeleton className="h-10 w-32 rounded-full" />
             <Skeleton className="h-10 w-24 rounded-full" />
             <Skeleton className="h-10 w-24 rounded-full" />
             <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </div>

        {/* Product Grid Placeholder */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </main>
    </div>
  );

  return (
    <LoadingSequence 
      skeleton={skeleton} 
    />
  );
}
