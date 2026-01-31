const ACTIVITY = [
  { event: "Production Run #412 completed", time: "2 hours ago", icon: "check_circle" },
  { event: "Low stock alert: PET Pellets", time: "5 hours ago", icon: "warning" },
  { event: "Line C entered maintenance", time: "1 day ago", icon: "build" },
  { event: "New staff member added: Ama Darko", time: "2 days ago", icon: "person_add" },
];

export default function ActivityFeed() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
      <h3 className="text-sm font-bold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {ACTIVITY.map((item, i) => (
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
  );
}
