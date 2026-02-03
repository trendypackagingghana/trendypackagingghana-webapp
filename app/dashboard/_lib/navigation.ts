import type { UserRole } from "@/lib/auth";

export interface NavItem {
  href: string;
  label: string;
  roles?: UserRole[];
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export type NavEntry = NavItem | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "items" in entry;
}

export const NAV_ITEMS: NavEntry[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/analytics", label: "Analytics", roles: ["admin"] },
  {
    label: "Operations",
    items: [
      { href: "/dashboard/inventory", label: "Inventory" },
      { href: "/dashboard/production", label: "Production" },
      { href: "/dashboard/staff", label: "Staff" },
    ],
  },
  {
    label: "Commerce",
    items: [
      { href: "/dashboard/customers", label: "Customers" },
      { href: "/dashboard/sales", label: "Sales" },
    ],
  },
];
