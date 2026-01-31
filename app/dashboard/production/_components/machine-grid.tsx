const MACHINES = [
  {
    name: "Line A",
    product: "500ml PET Bottle",
    status: "Running",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Line B",
    product: "200g Jar",
    status: "Running",
    statusColor: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Line C",
    product: "1L HDPE Bottle",
    status: "Maintenance",
    statusColor: "bg-amber-100 text-amber-700",
  },
  {
    name: "Line D",
    product: "—",
    status: "Idle",
    statusColor: "bg-muted text-muted-foreground",
  },
];

export default function MachineGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {MACHINES.map((machine) => (
        <div
          key={machine.name}
          className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-sm font-bold">{machine.name}</p>
              <p className="text-xs text-muted-foreground">{machine.product}</p>
            </div>
            <span
              className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${machine.statusColor}`}
            >
              {machine.status}
            </span>
          </div>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Uptime: —</span>
            <span>Output: —</span>
          </div>
        </div>
      ))}
    </div>
  );
}
