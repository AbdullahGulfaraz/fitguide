import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Target, Compass, Award } from "lucide-react";

export const metadata = {
  title: "About Us | FitGuide",
  description: "Learn about FitGuide's mission to provide honest, accessible exercise and fitness education.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="About FitGuide"
          subtitle="Demystifying fitness through clear, accessible instruction and responsible educational content."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-xl bg-[#1C1C1C] border border-[#303030]">
            <Target className="w-8 h-8 text-[#FF6B1A] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              We believe anyone should be able to walk into a gym or exercise at home with confidence. FitGuide strips away noise and misleading trends in favor of timeless movement fundamentals.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#1C1C1C] border border-[#303030]">
            <Compass className="w-8 h-8 text-[#FF6B1A] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Gimmicks</h3>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              No mandatory logins, paid paywalls, fake member metrics, or unrealistic promises of instant transformation. Just clear, responsible movement instructions.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#1C1C1C] border border-[#303030]">
            <Award className="w-8 h-8 text-[#FF6B1A] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Form Over Ego</h3>
            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Longevity in training comes from mastering mechanical execution before adding load. We emphasize joint safety, proper muscle recruitment, and sensible recovery.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}