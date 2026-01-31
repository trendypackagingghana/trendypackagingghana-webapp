"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const STATUSES = ["All", "Active", "Completed"] as const;

export default function StatusFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("status") || "All";

  function handleFilter(status: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (status === "All") {
      params.delete("status");
    } else {
      params.set("status", status);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
      {STATUSES.map((status) => {
        const isActive = status === current;
        return (
          <button
            key={status}
            onClick={() => handleFilter(status)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
              isActive
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {status}
          </button>
        );
      })}
    </div>
  );
}
