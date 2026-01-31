"use client";

import { useState } from "react";
import CompleteProductionRunDialog from "./CompleteProductionRunDialog";

interface ProductionRunCardProps {
  run: Record<string, unknown>;
}

const STATUS_STYLES: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  Completed: "bg-blue-100 text-blue-700",
};

export default function ProductionRunCard({ run }: ProductionRunCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const status = run.status as string;
  const isCompleted = status === "Completed";

  const plannedDate = new Date(run.planned_start_time as string);
  const dateStr = plannedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
  const timeStr = plannedDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // For completed runs, compute a rough "progress" representation
  const targetQty = run.target_quantity as number;
  const actualPieces = (run.actual_pieces as number) ?? 0;
  const progressPct = isCompleted
    ? Math.min(Math.round((actualPieces / targetQty) * 100), 100)
    : 0;

  return (
    <>
      <div
        onClick={() => setDialogOpen(true)}
        className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-sm cursor-pointer
                   hover:shadow-md transition-shadow active:scale-[0.98] active:transition-transform"
      >
        {/* Header: title + badge */}
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className="min-w-0 mr-3">
            <p className="text-sm font-bold mb-0.5 truncate">
              {run.finished_good_sku as string}
            </p>
            <p className="text-xs text-muted-foreground">
              {dateStr} • {timeStr} Start
            </p>
          </div>
          <span
            className={`shrink-0 px-2 py-1 text-[10px] font-bold rounded uppercase ${
              STATUS_STYLES[status] ?? "bg-muted text-muted-foreground"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2 mb-3 sm:mb-4">
          <div className="bg-muted/60 rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
              Target
            </p>
            <p className="text-sm font-bold">{targetQty.toLocaleString()}</p>
          </div>
          <div className="bg-muted/60 rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
              Pcs/Hr
            </p>
            <p className="text-sm font-bold">{run.pieces_per_hour as number}</p>
          </div>
          <div className="bg-muted/60 rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
              Shift
            </p>
            <p className="text-sm font-bold capitalize">
              {run.shift as string}
            </p>
          </div>
        </div>

        {/* Expected costs row */}
        <div className="flex justify-between text-xs mb-3 sm:mb-4">
          <div>
            <span className="text-muted-foreground">Raw </span>
            <span className="font-semibold">
              {run.expected_raw_kg as number} kg
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">MB </span>
            <span className="font-semibold">
              {run.expected_masterbatch_kg as number} kg
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Cost </span>
            <span className="font-semibold">
              ₵
              {(
                (run.expected_labour_cost as number) +
                (run.expected_material_cost as number)
              ).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Progress / status bar */}
        {isCompleted ? (
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span>Completed</span>
              <span>{actualPieces.toLocaleString()} pcs ({progressPct}%)</span>
            </div>
            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">
              Est.{" "}
              <span className="text-foreground font-semibold">
                {run.expected_hours as number} hrs
              </span>
            </span>
            <span className="material-symbols-outlined text-base text-muted-foreground">
              visibility
            </span>
          </div>
        )}
      </div>

      <CompleteProductionRunDialog
        run={{
          id: run.id as string,
          finished_good_sku: run.finished_good_sku as string,
          target_quantity: targetQty,
          pieces_per_hour: run.pieces_per_hour as number,
          expected_raw_kg: run.expected_raw_kg as number,
          expected_masterbatch_kg: run.expected_masterbatch_kg as number,
          expected_labour_cost: run.expected_labour_cost as number,
          expected_material_cost: run.expected_material_cost as number,
        }}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
