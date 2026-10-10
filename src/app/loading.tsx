import React from "react";
import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <div className="py-24">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#303030] border-t-[#FF6B1A]" />
          <p className="text-sm font-medium text-[#A3A3A3] animate-pulse">
            Loading FitGuide content...
          </p>
        </div>
      </Container>
    </div>
  );
}