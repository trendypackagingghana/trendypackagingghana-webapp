import ProductSkeleton from "./components/skeletons/ProductSkeleton";
import LoadingSequence from "./components/skeletons/LoadingSequence";

export default function Loading() {
  const skeleton = (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8 pb-24 xl:pb-8">
        {/* Hero Area Placeholder */}
        <div className="w-full h-[400px] mb-12 rounded-2xl animate-pulse bg-muted/60" />

        {/* Categories Placeholder */}
        <div className="flex gap-4 mb-12 overflow-hidden">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-80 h-48 flex-shrink-0 rounded-xl animate-pulse bg-muted/60" />
          ))}
        </div>

        {/* Product Grid Area */}
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
