export default function InventoryPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
      <h2 className="text-lg font-bold mb-6">Inventory</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {[
          { label: "Total SKUs", value: "48", icon: "category" },
          { label: "Low Stock Items", value: "3", icon: "warning" },
          { label: "Reorder Pending", value: "5", icon: "local_shipping" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm flex items-center gap-4"
          >
            <div className="size-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-muted-foreground">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-xl border border-border shadow-sm p-4 sm:p-6">
        <h3 className="text-sm font-bold mb-4">Raw Materials</h3>
        <div className="space-y-4">
          {[
            { name: "PET Pellets", stock: "1,200 kg", level: 15 },
            { name: "HDPE Granules", stock: "3,800 kg", level: 72 },
            { name: "Masterbatch — Blue", stock: "180 kg", level: 45 },
            { name: "Masterbatch — Clear", stock: "420 kg", level: 84 },
          ].map((item) => (
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
    </div>
  );
}
