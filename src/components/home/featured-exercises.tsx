import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURED_EXERCISES } from "@/content/sample-previews";
import { ArrowRight } from "lucide-react";

export function FeaturedExercises() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#303030]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            title="Featured Exercises"
            subtitle="Essential foundational movements for building strength, control, and mobility."
          />
          <Button href="/exercises" variant="secondary" size="sm" className="hidden sm:inline-flex self-start">
            View All Exercises
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_EXERCISES.map((exercise) => (
            <div
              key={exercise.slug}
              className="flex flex-col justify-between rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 transition-all duration-200 hover:border-[#FF6B1A]/50 hover:-translate-y-1"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="accent">{exercise.muscleGroup}</Badge>
                  <Badge variant="surface">{exercise.difficulty}</Badge>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {exercise.name}
                </h3>
                <p className="text-xs text-[#A3A3A3] mb-4">
                  Equipment: {exercise.equipment}
                </p>
                <p className="text-sm text-[#A3A3A3] line-clamp-3">
                  {exercise.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#303030]">
                <Link
                  href={`/exercises/${exercise.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1 transition-colors"
                >
                  View Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/exercises" variant="secondary" size="md" className="w-full">
            View All Exercises
          </Button>
        </div>
      </Container>
    </section>
  );
}