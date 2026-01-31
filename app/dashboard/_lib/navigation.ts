export interface NavItem {
  href: string;
  icon: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/dashboard/inventory", icon: "inventory_2", label: "Inventory" },
  { href: "/dashboard/production", icon: "precision_manufacturing", label: "Production" },
  { href: "/dashboard/staff", icon: "badge", label: "Staff" },
  { href: "/dashboard/analytics", icon: "bar_chart_4_bars", label: "Analytics" },
];
