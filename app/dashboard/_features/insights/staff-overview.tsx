const SHIFT_LEADS = [
  { name: "Sarah Adjei", role: "Area A Lead" },
  { name: "Kofi Boateng", role: "Inventory Supervisor" },
  { name: "Abena Osei", role: "Quality Control" },
];

export default function StaffOverview() {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col">
      <h3 className="text-base sm:text-lg font-bold mb-0.5">Staff Overview</h3>
      <p className="text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-6">
        Current Morning Shift
      </p>

      {/* Attendance summary */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-muted/60 rounded-xl mb-4 sm:mb-6">
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold">42/45</span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Attendance
          </span>
        </div>
        <div className="size-12 sm:size-14 relative flex items-center justify-center">
          <svg className="size-12 sm:size-14 -rotate-90">
            <circle
              className="text-muted"
              cx="50%"
              cy="50%"
              fill="transparent"
              r="40%"
              stroke="currentColor"
              strokeWidth="5"
            />
            <circle
              className="text-foreground"
              cx="50%"
              cy="50%"
              fill="transparent"
              r="40%"
              stroke="currentColor"
              strokeDasharray="150"
              strokeDashoffset="10"
              strokeWidth="5"
            />
          </svg>
          <span className="absolute text-[10px] font-bold">93%</span>
        </div>
      </div>

      {/* Shift leads */}
      <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 sm:mb-4">
        Shift Leads On-Duty
      </h4>
      <div className="flex flex-col gap-3 sm:gap-4">
        {SHIFT_LEADS.map((lead) => (
          <div key={lead.name} className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-muted shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-bold truncate">{lead.name}</span>
              <span className="text-[10px] text-emerald-500 font-medium">
                {lead.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-auto pt-4 sm:pt-6 w-full text-center text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
        View All Staffing
      </button>
    </div>
  );
}
