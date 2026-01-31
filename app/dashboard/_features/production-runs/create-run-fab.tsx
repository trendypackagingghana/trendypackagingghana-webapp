"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import CreateRunForm from "./create-run-form";

export default function CreateRunFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        size="icon-lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl z-40 size-14"
        aria-label="Create production run"
      >
        <span className="material-symbols-outlined text-2xl">add</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>New Production Run</DialogTitle>
            <DialogDescription>
              Configure and preview expected values before creating.
            </DialogDescription>
          </DialogHeader>
          <CreateRunForm onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
