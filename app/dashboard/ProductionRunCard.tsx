"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CompleteProductionRunDialog from "./CompleteProductionRunDialog";

interface ProductionRunCardProps {
  run: Record<string, unknown>;
}

export default function ProductionRunCard({ run }: ProductionRunCardProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const status = run.status as string;
  const isActive = status === "Active";

  return (
    <>
      <Card
        className="hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setDialogOpen(true)}
      >
        <CardHeader>
          <CardTitle className="font-mono text-sm">
            {run.finished_good_sku as string}
          </CardTitle>
          <CardAction>
            <Badge variant={isActive ? "default" : "secondary"}>
              {status}
            </Badge>
          </CardAction>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-2xl font-bold">
            {(run.target_quantity as number).toLocaleString()}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              pieces
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shift</span>
            <span className="capitalize">{run.shift as string}</span>
          </div>

          <Separator />

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              Expected Values
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hours</span>
                <span>{run.expected_hours as number} hrs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pcs/Hr</span>
                <span>{run.pieces_per_hour as number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Raw Material</span>
                <span>{run.expected_raw_kg as number} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Masterbatch</span>
                <span>{run.expected_masterbatch_kg as number} kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Labour Cost</span>
                <span>
                  ₵{(run.expected_labour_cost as number).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material Cost</span>
                <span>
                  ₵{(run.expected_material_cost as number).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="text-xs text-muted-foreground border-t pt-4">
          Planned:{" "}
          {new Date(run.planned_start_time as string).toLocaleString()}
        </CardFooter>
      </Card>

      <CompleteProductionRunDialog
        run={{
          id: run.id as string,
          finished_good_sku: run.finished_good_sku as string,
          target_quantity: run.target_quantity as number,
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
