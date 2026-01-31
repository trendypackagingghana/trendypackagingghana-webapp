const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ShiftSchedule() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold">Shift Schedule</h3>
        <span className="text-xs text-muted-foreground">This week</span>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-xs">
        {DAYS.map((day) => (
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
  );
}
