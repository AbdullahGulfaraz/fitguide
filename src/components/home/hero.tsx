import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeroImage } from "@/components/home/hero-image";
import { ArrowRight, BookOpen, Flame } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-12 lg:py-0">
      {/* Background radial gradient glow */}
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#FF6B1A]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FF6B1A] bg-[#FF6B1A]/10 border border-[#FF6B1A]/20 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
              <Flame className="w-3.5 h-3.5 text-[#FF6B1A]" />
              Train Smarter • Move Better • Get Stronger
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
              BUILD YOUR <br />
              <span className="text-[#FF6B1A]">STRONGER</span> SELF.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#A3A3A3] max-w-xl leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
              Your goals. Your workouts. Your progress. Discover practical exercise guidance, structured technique breakdowns, and healthier training habits.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
              <Button
                href="/exercises"
                variant="primary"
                size="lg"
                className="gap-2 w-full sm:w-auto shadow-lg shadow-[#FF6B1A]/20"
              >
                Explore Exercises <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                href="/guides"
                variant="secondary"
                size="lg"
                className="gap-2 w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5" /> Read Training Guides
              </Button>
            </div>
          </div>

          {/* Right Column: Athlete Portrait */}
          <div className="lg:col-span-5 w-full">
            <HeroImage
              src="/images/hero/hero-athlete.png"
              alt="Athlete training in gym"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}