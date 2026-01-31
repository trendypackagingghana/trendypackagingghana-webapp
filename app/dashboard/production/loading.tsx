import Skeleton from "../../components/skeletons/Skeleton";
import LoadingSequence from "../../components/skeletons/LoadingSequence";

export default function ProductionLoading() {
  const skeleton = (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <div className="flex justify-between items-center">
        <Skeleton className="h-9 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-14 rounded-lg" />
          <Skeleton className="h-8 w-16 rounded-lg" />
          <Skeleton className="h-8 w-20 rounded-lg" />
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="min-w-[280px] max-w-[320px] flex-shrink-0 bg-card p-4 sm:p-5 rounded-xl border border-border"
          >
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-3 w-24 mb-4" />
            <div className="grid grid-cols-3 gap-2 mb-4">
              <Skeleton className="h-12 rounded-lg" />
              <Skeleton className="h-12 rounded-lg" />
              <Skeleton className="h-12 rounded-lg" />
            </div>
            <Skeleton className="h-3 w-full" />
          </div>
        ))}
      </div>
    </div>
  );

  return <LoadingSequence skeleton={skeleton} />;
}
