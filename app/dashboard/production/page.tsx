import { Suspense } from "react";
import PageHeader from "../_components/page-header";
import {
  ProductionRunsList,
  StatusFilter,
  CardsSkeleton,
  CreateRunFab,
} from "../_features/production-runs";

export default async function ProductionPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <section>
        <PageHeader title="Production Runs">
          <StatusFilter />
        </PageHeader>
        <Suspense key={status ?? "all"} fallback={<CardsSkeleton />}>
          <ProductionRunsList status={status} />
        </Suspense>
      </section>

      <CreateRunFab />
    </div>
  );
}
