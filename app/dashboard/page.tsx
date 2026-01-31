import { Suspense } from "react";
import PageHeader from "./_components/page-header";
import AlertBar from "./_features/alerts/alert-bar";
import {
  ProductionRunsList,
  StatusFilter,
  CardsSkeleton,
  CreateRunFab,
} from "./_features/production-runs";
import StockChart from "./_features/insights/stock-chart";
import StaffOverview from "./_features/insights/staff-overview";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8 max-w-7xl">
      <AlertBar />

      <section>
        <PageHeader title="Production Runs">
          <StatusFilter />
        </PageHeader>
        <Suspense key={status ?? "all"} fallback={<CardsSkeleton />}>
          <ProductionRunsList status={status} />
        </Suspense>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <StockChart />
        </div>
        <StaffOverview />
      </section>

      <CreateRunFab />
    </div>
  );
}
