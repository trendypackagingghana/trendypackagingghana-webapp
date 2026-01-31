import PageHeader from "../_components/page-header";
import KpiCards from "./_components/kpi-cards";
import BarChart from "./_components/bar-chart";
import ActivityFeed from "./_components/activity-feed";

export default function AnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <PageHeader title="Analytics" />
      <KpiCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <BarChart
          title="Daily Output"
          subtitle="Pieces produced per day — last 7 days"
          data={[65, 72, 58, 80, 75, 90, 85]}
        />
        <BarChart
          title="Material Consumption"
          subtitle="Raw material usage trend — last 7 days"
          data={[45, 55, 40, 60, 50, 70, 65]}
          barClass="bg-foreground/70"
        />
      </div>

      <ActivityFeed />
    </div>
  );
}
