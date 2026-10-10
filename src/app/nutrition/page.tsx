import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { NUTRITION_PILLARS } from "@/content/nutrition";
import { Utensils, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Nutrition & Recovery Guidance | FitGuide",
  description: "General educational principles covering macronutrients, hydration, and recovery habits.",
};

export default function NutritionPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Nutrition & Recovery"
          subtitle="Foundational nutritional principles to fuel physical training, support muscle repair, and sustain long-term energy."
        />

        {/* Educational Disclaimer Banner */}
        <div className="mb-10 p-5 rounded-xl bg-[#1C1C1C] border border-[#303030] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#FF6B1A] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
            FitGuide provides general nutritional education for informational purposes only. We do not provide individualized medical nutrition therapy or personalized meal plans. Consult a registered dietitian or healthcare provider for clinical medical conditions.
          </p>
        </div>

        {/* Four Educational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {NUTRITION_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="accent">{pillar.category}</Badge>
                  <Utensils className="w-4 h-4 text-[#A3A3A3]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h2>
                <p className="text-sm text-[#A3A3A3] mb-6 leading-relaxed">
                  {pillar.summary}
                </p>

                <h3 className="text-xs font-semibold uppercase text-white tracking-wider mb-3">
                  Core Scientific Principles
                </h3>
                <ul className="space-y-2 mb-6">
                  {pillar.keyPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex gap-2.5 text-xs sm:text-sm text-[#A3A3A3]">
                      <span className="text-[#FF6B1A] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#303030] bg-[#252525] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-xl">
                <p className="text-xs text-[#A3A3A3]">
                  <strong className="text-white">Practical Takeaway:</strong> {pillar.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}