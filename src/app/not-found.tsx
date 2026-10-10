import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <Container>
        <div className="max-w-md mx-auto">
          <AlertCircle className="w-16 h-16 text-[#FF6B1A] mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-2 uppercase">
            404 - Not Found
          </h1>
          <p className="text-[#A3A3A3] mb-8 text-sm">
            The exercise or page you requested could not be found. It may have been moved or does not exist.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/exercises" variant="primary">
              Browse Exercises
            </Button>
            <Button href="/" variant="secondary">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}