export default function AnalyticsPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
      <h2 className="text-lg font-bold mb-6">Analytics</h2>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: "Total Output", value: "124,500", sub: "pieces this month", trend: "+12%" },
          { label: "Efficiency", value: "87%", sub: "avg. machine utilization", trend: "+3%" },
          { label: "Defect Rate", value: "1.2%", sub: "below 2% target", trend: "-0.4%" },
          { label: "Downtime", value: "14 hrs", sub: "total this month", trend: "-2 hrs" },
        ].map((kpi) => (
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
              <span className="text-[10px] text-muted-foreground">
                {kpi.sub}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts placeholder row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-8">
        <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
          <h3 className="text-sm font-bold mb-1">Daily Output</h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-4">
            Pieces produced per day — last 7 days
          </p>
          <div className="flex items-end gap-2 h-40 sm:h-48">
            {[65, 72, 58, 80, 75, 90, 85].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-foreground rounded-t"
                  style={{ height: `${v}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
          <h3 className="text-sm font-bold mb-1">Material Consumption</h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground mb-4">
            Raw material usage trend — last 7 days
          </p>
          <div className="flex items-end gap-2 h-40 sm:h-48">
            {[45, 55, 40, 60, 50, 70, 65].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full bg-foreground/70 rounded-t"
                  style={{ height: `${v}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
        <h3 className="text-sm font-bold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { event: "Production Run #412 completed", time: "2 hours ago", icon: "check_circle" },
            { event: "Low stock alert: PET Pellets", time: "5 hours ago", icon: "warning" },
            { event: "Line C entered maintenance", time: "1 day ago", icon: "build" },
            { event: "New staff member added: Ama Darko", time: "2 days ago", icon: "person_add" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <div className="size-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-base text-muted-foreground">
                  {item.icon}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{item.event}</p>
              </div>
              <span className="text-xs text-muted-foreground shrink-0">
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
