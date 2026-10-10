import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-[#101010] py-16">
      <Container className="w-full">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            Ready to Begin Training?
          </h2>
          <p className="mt-4 text-[#A3A3A3] leading-relaxed text-base sm:text-lg">
            Browse our complete exercise directory with step-by-step instructions, equipment details, and muscle breakdowns.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/exercises" variant="primary" size="lg" className="gap-2">
              Browse Exercise Library <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}