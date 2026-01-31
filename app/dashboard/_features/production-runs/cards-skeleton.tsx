export default function CardsSkeleton() {
  return (
    <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-thin">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="min-w-[280px] max-w-[320px] flex-shrink-0 bg-card rounded-xl border border-border shadow-sm p-5 animate-pulse"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-2">
              <div className="h-4 w-28 bg-muted rounded" />
              <div className="h-3 w-36 bg-muted rounded" />
            </div>
            <div className="h-5 w-16 bg-muted rounded" />
          </div>
          <div className="space-y-3 mb-4">
            <div className="h-3 w-full bg-muted rounded" />
            <div className="h-3 w-full bg-muted rounded" />
            <div className="h-3 w-3/4 bg-muted rounded" />
          </div>
          <div className="h-3 w-24 bg-muted rounded" />
        </div>
      ))}
    </div>
  );
}
