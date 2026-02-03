import PageHeader from "../_components/page-header";

export default function AnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <PageHeader title="Analytics" />
      <div className="text-center py-24 text-muted-foreground">
        <p className="text-lg font-medium">Coming Soon</p>
        <p className="text-sm mt-1">
          Analytics and reporting features are currently under development.
        </p>
      </div>
    </div>
  );
}
