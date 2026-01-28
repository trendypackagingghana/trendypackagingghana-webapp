import Skeleton from "../components/skeletons/Skeleton";

export default function ServicesLoading() {
  return (
    <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12 pb-24 xl:pb-12">
        {/* Page Heading Placeholder */}
        <section className="mb-16">
          <div className="max-w-3xl flex flex-col gap-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </section>

        {/* Services Grid Placeholder */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-sm flex flex-col gap-4">
              <Skeleton className="w-14 h-14 rounded-xl" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </section>

        {/* Facility Placeholder */}
        <section className="mb-20">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col gap-3">
                 <Skeleton className="h-6 w-3/4" />
                 <Skeleton className="h-4 w-full" />
               </div>
             ))}
          </div>
        </section>
      </main>
    </div>
  );
}
