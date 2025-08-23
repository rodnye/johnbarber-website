"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";

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
    <Styled>
      <div className="relative flex items-center gap-2">
        <div className="relative">
          <div className="absolute -top-0.5 -right-0.5 h-4 w-4 animate-ping rounded-full bg-green-400"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </div>

        <span className="text-sm text-gray-700">
          {visits} personas han entrado a la web
        </span>
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 8px 12px;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 30px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.2);
  }
`;
