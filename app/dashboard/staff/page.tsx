const STAFF = [
  { name: "Sarah Adjei", role: "Area A Lead", shift: "Morning", status: "On Duty" },
  { name: "Kofi Boateng", role: "Inventory Supervisor", shift: "Morning", status: "On Duty" },
  { name: "Abena Osei", role: "Quality Control", shift: "Morning", status: "On Duty" },
  { name: "Yaw Mensah", role: "Machine Operator", shift: "Morning", status: "On Duty" },
  { name: "Ama Darko", role: "Machine Operator", shift: "Night", status: "Off Duty" },
  { name: "Kwesi Appiah", role: "Packaging Lead", shift: "Night", status: "Off Duty" },
];

export default function StaffPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
      <h2 className="text-lg font-bold mb-6">Staff</h2>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: "Total Staff", value: "45" },
          { label: "On Duty", value: "42" },
          { label: "On Leave", value: "2" },
          { label: "Absent", value: "1" },
        ].map((stat) => (
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

      {/* Staff list */}
      <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 py-3 border-b border-border">
          <h3 className="text-sm font-bold">All Staff</h3>
        </div>

        {/* Mobile: card list */}
        <div className="divide-y divide-border sm:hidden">
          {STAFF.map((person) => (
            <div key={person.name} className="p-4 flex items-center gap-3">
              <div className="size-9 rounded-full bg-muted shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{person.name}</p>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </div>
              <span
                className={`shrink-0 px-2 py-1 text-[10px] font-bold rounded uppercase ${
                  person.status === "On Duty"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {person.status}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <table className="hidden sm:table w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Role</th>
              <th className="px-6 py-3 font-medium">Shift</th>
              <th className="px-6 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {STAFF.map((person) => (
              <tr key={person.name}>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-muted shrink-0" />
                    <span className="font-medium">{person.name}</span>
                  </div>
                </td>
                <td className="px-6 py-3 text-muted-foreground">
                  {person.role}
                </td>
                <td className="px-6 py-3 text-muted-foreground">
                  {person.shift}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-[10px] font-bold rounded uppercase ${
                      person.status === "On Duty"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {person.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
