const KPIS = [
  { label: "Total Output", value: "124,500", sub: "pieces this month", trend: "+12%" },
  { label: "Efficiency", value: "87%", sub: "avg. machine utilization", trend: "+3%" },
  { label: "Defect Rate", value: "1.2%", sub: "below 2% target", trend: "-0.4%" },
  { label: "Downtime", value: "14 hrs", sub: "total this month", trend: "-2 hrs" },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {KPIS.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm"
        >
          <p className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
            {kpi.label}
          </p>
          <p className="text-xl sm:text-2xl font-bold">{kpi.value}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] sm:text-xs text-emerald-600 font-bold">
              {kpi.trend}
            </span>
            <span className="text-[10px] text-muted-foreground">{kpi.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
