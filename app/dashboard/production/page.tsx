import { Suspense } from "react";
import PageHeader from "../_components/page-header";
import {
  ProductionRunsList,
  StatusFilter,
  DateRangeFilter,
  CardsSkeleton,
  CreateRunFab,
} from "../_features/production-runs";

export default async function ProductionPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; dateFrom?: string; dateTo?: string }>;
}) {
  const { status, dateFrom, dateTo } = await searchParams;
  const suspenseKey = `${status ?? "all"}-${dateFrom ?? ""}-${dateTo ?? ""}`;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <section>
        <PageHeader title="Production Runs">
          <div className="flex items-center gap-2 flex-wrap">
            <StatusFilter />
            <DateRangeFilter />
          </div>
        </PageHeader>
        <Suspense key={suspenseKey} fallback={<CardsSkeleton />}>
          <ProductionRunsList
            status={status}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        </Suspense>
      </section>

      <CreateRunFab />
    </div>
  );
}
