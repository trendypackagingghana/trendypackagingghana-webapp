"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import type { DateRange } from "react-day-picker";

export default function DateRangeFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dateFromParam = searchParams.get("dateFrom");
  const dateToParam = searchParams.get("dateTo");

  const [range, setRange] = useState<DateRange | undefined>(() => {
    if (dateFromParam || dateToParam) {
      return {
        from: dateFromParam ? new Date(dateFromParam + "T00:00:00") : undefined,
        to: dateToParam ? new Date(dateToParam + "T00:00:00") : undefined,
      };
    }
    return undefined;
  });

  const [open, setOpen] = useState(false);

  function applyRange(newRange: DateRange | undefined) {
    setRange(newRange);
    const params = new URLSearchParams(searchParams.toString());

    if (newRange?.from) {
      params.set("dateFrom", format(newRange.from, "yyyy-MM-dd"));
    } else {
      params.delete("dateFrom");
    }

    if (newRange?.to) {
      params.set("dateTo", format(newRange.to, "yyyy-MM-dd"));
    } else {
      params.delete("dateTo");
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  function handleClear() {
    setRange(undefined);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("dateFrom");
    params.delete("dateTo");
    router.push(`${pathname}?${params.toString()}`);
    setOpen(false);
  }

  const label =
    range?.from && range?.to
      ? `${format(range.from, "dd MMM")} – ${format(range.to, "dd MMM yyyy")}`
      : range?.from
        ? `From ${format(range.from, "dd MMM yyyy")}`
        : "Pick a date range";

  const hasFilter = !!(dateFromParam || dateToParam);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
            hasFilter
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {label}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={range}
          onSelect={(newRange) => applyRange(newRange)}
          numberOfMonths={1}
          defaultMonth={range?.from}
        />
        {hasFilter && (
          <div className="p-3 pt-0 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs"
              onClick={handleClear}
            >
              Clear dates
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
