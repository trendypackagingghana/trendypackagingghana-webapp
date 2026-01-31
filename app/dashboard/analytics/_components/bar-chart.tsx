const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

interface BarChartProps {
  title: string;
  subtitle: string;
  data: number[];
  barClass?: string;
}

export default function BarChart({
  title,
  subtitle,
  data,
  barClass = "bg-foreground",
}: BarChartProps) {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
      <h3 className="text-sm font-bold mb-1">{title}</h3>
      <p className="text-[10px] sm:text-xs text-muted-foreground mb-4">
        {subtitle}
      </p>
      <div className="flex items-end gap-2 h-40 sm:h-48">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full rounded-t ${barClass}`}
              style={{ height: `${v}%` }}
            />
            <span className="text-[10px] text-muted-foreground">
              {DAY_LABELS[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
