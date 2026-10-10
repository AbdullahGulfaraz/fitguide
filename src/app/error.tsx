"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="py-24 text-center">
      <Container>
        <div className="max-w-md mx-auto">
          <AlertTriangle className="w-12 h-12 text-[#EF4444] mx-auto mb-4" />
          <h1 className="text-3xl font-extrabold text-white mb-2 uppercase">
            Something went wrong
          </h1>
          <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed">
            An unexpected error occurred while rendering this page. You can try reloading the view.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => reset()} variant="primary">
              Try Again
            </Button>
            <Button href="/" variant="secondary">
              Go to Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}