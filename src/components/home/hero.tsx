import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 border-b border-[#303030]">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B1A]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B1A] bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 mb-6">
            Train Smarter • Move Better • Get Stronger
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08]">
            BUILD YOUR <span className="text-[#FF6B1A]">STRONGER</span> SELF.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#A3A3A3] max-w-2xl leading-relaxed">
            Your goals. Your workouts. Your progress. Discover practical exercise guidance and build healthier training habits.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/exercises" variant="primary" size="lg" className="gap-2">
              Explore Exercises <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/guides" variant="secondary" size="lg" className="gap-2">
              <BookOpen className="w-5 h-5" /> Read Training Guides
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}