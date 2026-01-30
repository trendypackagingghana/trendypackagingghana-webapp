import { createClient } from "@/lib/supabase/server";
import ProductionRunCard from "./ProductionRunCard";

export default async function ProductionRunsList() {
  const supabase = await createClient();

  const { data: runs, error } = await supabase
    .from("production_runs")
    .select("*")
    .in("status", ["Active", "In Progress"])
    .order("planned_start_time", { ascending: true });

  if (error) {
    console.error("Production runs error:", error);
    return (
      <div className="text-center py-12 text-destructive">
        Failed to load production runs: {error.message}
      </div>
    );
  }

  if (!runs || runs.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        <span className="material-symbols-outlined text-5xl mb-4 block">
          manufacturing
        </span>
        <p className="text-lg font-medium">No active production runs</p>
        <p className="text-sm mt-1">
          Tap the + button to create a new production run.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {runs.map((run: Record<string, unknown>) => (
        <ProductionRunCard key={run.id as string} run={run} />
      ))}
    </div>
  );
}
