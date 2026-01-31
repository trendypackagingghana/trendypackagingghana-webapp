"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/dashboard/inventory", icon: "inventory_2", label: "Inventory" },
  { href: "/dashboard/production", icon: "precision_manufacturing", label: "Production" },
  { href: "/dashboard/staff", icon: "badge", label: "Staff" },
  { href: "/dashboard/analytics", icon: "bar_chart_4_bars", label: "Analytics" },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/login");
  }

  const nav = (
    <div className="flex flex-col h-full p-4 sm:p-6 justify-between">
      <div className="flex flex-col gap-6 sm:gap-8">
        {/* Branding */}
        <div className="flex flex-col">
          <h1 className="text-sm font-bold leading-tight">Trendy Packaging</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
            Ghana Limited
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-foreground/10 text-foreground font-semibold border-r-4 border-foreground"
                    : "text-muted-foreground hover:bg-muted font-medium"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom: user + sign out */}
      <div className="border-t border-border pt-4">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-card border-r border-border h-screen sticky top-0 overflow-y-auto">
        {nav}
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          {/* Drawer */}
          <aside className="absolute inset-y-0 left-0 w-64 bg-card border-r border-border overflow-y-auto animate-in slide-in-from-left duration-200">
            {nav}
          </aside>
        </div>
      )}
    </>
  );
}
