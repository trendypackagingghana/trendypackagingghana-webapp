export default function ProductionPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
      <h2 className="text-lg font-bold mb-6">Production</h2>

      {/* Machine overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {[
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
        ].map((machine) => (
          <div
            key={machine.name}
            className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-sm font-bold">{machine.name}</p>
                <p className="text-xs text-muted-foreground">
                  {machine.product}
                </p>
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

      {/* Shift schedule placeholder */}
      <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Shift Schedule</h3>
          <span className="text-xs text-muted-foreground">This week</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-xs">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day}>
              <p className="text-muted-foreground mb-2 font-medium">{day}</p>
              <div className="bg-muted/60 rounded-lg py-3">
                <p className="font-bold">M</p>
                <p className="text-[10px] text-muted-foreground">06–14</p>
              </div>
              <div className="bg-muted/60 rounded-lg py-3 mt-1">
                <p className="font-bold">N</p>
                <p className="text-[10px] text-muted-foreground">14–22</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
