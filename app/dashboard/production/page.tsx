import PageHeader from "../_components/page-header";
import { CreateRunFab } from "../_features/production-runs";
import MachineGrid from "./_components/machine-grid";
import ShiftSchedule from "./_components/shift-schedule";

export default function ProductionPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <PageHeader title="Production" />
      <MachineGrid />
      <ShiftSchedule />
      <CreateRunFab />
    </div>
  );
}
