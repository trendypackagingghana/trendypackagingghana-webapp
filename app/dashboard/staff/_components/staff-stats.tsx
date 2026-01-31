const STATS = [
  { label: "Total Staff", value: "45" },
  { label: "On Duty", value: "42" },
  { label: "On Leave", value: "2" },
  { label: "Absent", value: "1" },
];

export default function StaffStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-card p-4 rounded-xl border border-border shadow-sm text-center"
        >
          <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
