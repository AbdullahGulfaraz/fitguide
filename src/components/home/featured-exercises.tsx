import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "@/components/exercises/exercise-card";
import { getAllExercises } from "@/content/exercises";

export function FeaturedExercises() {
  const exercises = getAllExercises().slice(0, 4);

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
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.slug} exercise={exercise} />
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