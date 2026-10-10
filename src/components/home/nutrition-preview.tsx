import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Apple, Droplets, Moon, Utensils } from "lucide-react";

export function NutritionPreview() {
  const pillars = [
    {
      icon: Utensils,
      title: "Balanced Fuel",
      desc: "Adequate protein for repair, carbs for training energy, and healthy fats.",
    },
    {
      icon: Droplets,
      title: "Hydration Habits",
      desc: "Water and electrolyte balance before, during, and after strenuous activity.",
    },
    {
      icon: Moon,
      title: "Recovery & Sleep",
      desc: "Rest days and sleep architecture are where adaptation and growth occur.",
    },
    {
      icon: Apple,
      title: "Sustainable Nutrition",
      desc: "Long-term adherence over restrictive or extreme short-term dieting.",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16">
      <Container className="w-full">
        <div className="rounded-2xl bg-[#1C1C1C] border border-[#303030] p-8 lg:p-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B1A]">
              Fuel & Recovery
            </span>
            <h2 className="text-3xl font-extrabold text-white uppercase mt-2">
              Training Is Only Half The Equation
            </h2>
            <p className="text-[#A3A3A3] mt-3 leading-relaxed">
              Exercise triggers stimulus, but nutrition and sleep dictate recovery. FitGuide provides educational insights into building sustainable nutrition routines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="p-4 rounded-lg bg-[#252525] border border-[#303030]">
                  <Icon className="w-6 h-6 text-[#FF6B1A] mb-3" />
                  <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          <Button href="/nutrition" variant="primary" size="md">
            Explore Nutrition & Recovery Guide
          </Button>
        </div>
      </Container>
    </section>
  );
}