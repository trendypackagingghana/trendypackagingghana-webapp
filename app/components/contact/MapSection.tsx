"use client";

import { useState } from "react";
import { company } from "@/app/config/company";

const MapSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-16 w-full">
      <div className="rounded-2xl overflow-hidden border border-border h-[400px] relative">
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center gap-4">
            <div className="animate-pulse flex flex-col items-center gap-3">
              <svg
                className="w-12 h-12 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium text-muted-foreground">
                Loading map...
              </span>
            </div>
          </div>
        )}

        {/* Map iframe */}
        <iframe
          src={company.map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${company.name} location`}
          onLoad={() => setIsLoading(false)}
          className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"}
        />
      </div>
    </div>
  );
};

export default MapSection;
