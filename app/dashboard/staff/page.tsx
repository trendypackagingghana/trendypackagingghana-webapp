import PageHeader from "../_components/page-header";
import StaffStats from "./_components/staff-stats";
import StaffList from "./_components/staff-list";

export default function StaffPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <PageHeader title="Staff" />
      <StaffStats />
      <StaffList />
    </div>
  );
}
