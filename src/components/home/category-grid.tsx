import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MUSCLE_CATEGORIES } from "@/content/sample-previews";
import { ArrowUpRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16">
      <Container className="w-full">
        <SectionHeading
          title="Explore By Muscle Group"
          subtitle="Target specific areas with clear movement standards and detailed execution cues."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MUSCLE_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/exercises?muscle=${category.id}`}
              className="group relative p-6 rounded-xl bg-[#1C1C1C] border border-[#303030] hover:border-[#FF6B1A]/60 transition-all duration-200 hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                  {category.name}
                </h3>
                <span className="p-2 rounded-lg bg-[#252525] text-[#A3A3A3] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {category.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#303030]/60 text-xs font-semibold text-[#A3A3A3]">
                {category.count} Exercises Available
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}