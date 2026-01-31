import PageHeader from "../_components/page-header";
import InventoryStats from "./_components/inventory-stats";
import MaterialsList from "./_components/materials-list";

export default function InventoryPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl space-y-8">
      <PageHeader title="Inventory" />
      <InventoryStats />
      <MaterialsList />
    </div>
  );
}
