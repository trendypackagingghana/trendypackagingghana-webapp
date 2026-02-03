import { InventoryStats } from "@/types/inventory";

export function InventoryStatsCards({ stats }: { stats: InventoryStats }) {
  // Using hardcoded values to match design for now where data isn't available
  // The 'stats' prop will be used once the aggregation logic is in place.
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-card p-5 rounded-xl border border-destructive/20 shadow-sm flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">
            Items Below Reorder Point
          </p>
          <p className="text-2xl font-bold mt-1 text-destructive">-- Items</p>
        </div>
        <div className="flex items-center gap-1 mt-3 text-destructive text-xs font-bold">
          <span>Urgent Attention Required</span>
        </div>
      </div>
      <div className="bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Finished Goods</p>
          <p className="text-2xl font-bold mt-1">-- Units</p>
        </div>
        <div className="flex items-center gap-1 mt-3 text-primary text-xs font-bold">
          <span>Across categories</span>
        </div>
      </div>
      <div className="bg-card p-5 rounded-xl border border-border shadow-sm flex flex-col justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">Raw Materials</p>
          <p className="text-2xl font-bold mt-1">-- kg</p>
        </div>
      </div>
    </div>
  );
}
