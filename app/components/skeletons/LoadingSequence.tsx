"use client";

import { useState, useEffect, ReactNode } from "react";

import PageSpinner from "../page-spinner";

interface LoadingSequenceProps {
  skeleton: ReactNode;
  loaderDuration?: number;
}

const LoadingSequence = ({ 
  skeleton, 
  loaderDuration = 1000 
}: LoadingSequenceProps) => {
  const [stage, setStage] = useState<"loader" | "skeleton">("loader");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("skeleton");
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, [loaderDuration]);

  if (stage === "loader") {
    return (
      <div className="relative flex min-h-screen w-full flex-col pt-16 bg-background">
        <main className="flex-1 max-w-[1280px] mx-auto w-full px-6 py-8">
          <PageSpinner />
        </main>
      </div>
    );
  }

  return <>{skeleton}</>;
};

export default LoadingSequence;
