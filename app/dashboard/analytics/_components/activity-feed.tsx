const ACTIVITY = [
  { event: "Production Run #412 completed", time: "2 hours ago" },
  { event: "Low stock alert: PET Pellets", time: "5 hours ago" },
  { event: "Line C entered maintenance", time: "1 day ago" },
  { event: "New staff member added: Ama Darko", time: "2 days ago" },
];

export default function ActivityFeed() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
      <h3 className="text-sm font-bold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {ACTIVITY.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
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
