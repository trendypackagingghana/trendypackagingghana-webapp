const MATERIALS = [
  { name: "PET Pellets", stock: "1,200 kg", level: 15 },
  { name: "HDPE Granules", stock: "3,800 kg", level: 72 },
  { name: "Masterbatch — Blue", stock: "180 kg", level: 45 },
  { name: "Masterbatch — Clear", stock: "420 kg", level: 84 },
];

export default function MaterialsList() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
      <h3 className="text-sm font-bold mb-4">Raw Materials</h3>
      <div className="space-y-4">
        {MATERIALS.map((item) => (
          <div key={item.name} className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium truncate">{item.name}</span>
                <span className="text-muted-foreground shrink-0 ml-2">
                  {item.stock}
                </span>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.level < 25 ? "bg-red-500" : "bg-foreground"
                  }`}
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
