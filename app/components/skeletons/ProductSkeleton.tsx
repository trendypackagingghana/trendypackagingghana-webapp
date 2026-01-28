import Skeleton from "./Skeleton";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col bg-card rounded-xl overflow-hidden border border-border shadow-sm">
      <div className="aspect-square p-8">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
