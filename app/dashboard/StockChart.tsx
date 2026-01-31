const STOCK_DATA = [
  { label: "500ml PET", value: 85, count: "12.5k", low: false },
  { label: "200g Jar", value: 60, count: "8.2k", low: false },
  { label: "1L Bottle", value: 15, count: "LOW", low: true },
  { label: "Cap 28mm", value: 70, count: "10.1k", low: false },
  { label: "Spray Head", value: 45, count: "6.4k", low: false },
];

export default function StockChart() {
  return (
    <div className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold">
            High-Performance Stock
          </h3>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Inventory levels for top-selling SKUs
          </p>
        </div>
        <button className="text-foreground text-[10px] sm:text-xs font-bold flex items-center gap-0.5">
          View All
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>

      <div className="flex-1 flex items-end gap-3 sm:gap-6 pt-4 min-h-[180px] sm:min-h-[250px]">
        {STOCK_DATA.map((item) => (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-full rounded-t-lg transition-all relative flex items-end justify-center ${
                item.low
                  ? "bg-red-100 hover:bg-red-200"
                  : "bg-foreground/10 hover:bg-foreground/15"
              }`}
              style={{ height: `${item.value}%` }}
            >
              <div
                className={`w-2/3 rounded-t-lg ${
                  item.low ? "bg-red-500" : "bg-foreground"
                }`}
                style={{ height: "100%" }}
              />
              <span
                className={`absolute -top-5 text-[10px] font-bold transition-opacity ${
                  item.low
                    ? "text-red-500 opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.count}
              </span>
            </div>
            <span
              className={`text-[10px] text-center font-medium leading-tight ${
                item.low ? "text-red-500 font-bold" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
