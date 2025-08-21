"use client";
import { useState, useEffect } from "react";

export function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/visits");
        const data = await response.json();
        setVisits(data.visits);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching visits:", error);
      }
    };

    fetchVisits();
  }, []);

  if (isLoading) {
    return (
      <div className="visit-counter animate-pulse">
        <div className="h-6 w-20 rounded-full bg-gray-300"></div>
      </div>
    );
  }

  return (
    <div className="visit-counter">
      <div className="relative flex items-center gap-2">
        <div className="relative">
          <div className="absolute -top-0.5 -right-0.5 h-4 w-4 animate-ping rounded-full bg-green-400"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>

        <span className="text-sm text-gray-700">
          {visits} personas han entrado a la web
        </span>
      </div>
    </div>
  );
}
