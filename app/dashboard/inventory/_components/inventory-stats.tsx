const STATS = [
  { label: "Total SKUs", value: "48", icon: "category" },
  { label: "Low Stock Items", value: "3", icon: "warning" },
  { label: "Reorder Pending", value: "5", icon: "local_shipping" },
];

export default function InventoryStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm flex items-center gap-4"
        >
          <div className="size-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-muted-foreground">
              {stat.icon}
            </span>
          </div>
          <div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground font-medium">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
