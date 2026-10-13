import React, { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExerciseBrowser } from "@/components/exercises/exercise-browser";
import { getAllExercises } from "@/content/exercises";
import { FeaturedExercisesBg } from "@/components/home/featured-exercises-bg";

export const metadata = {
  title: "Exercise Library | FitGuide",
  description: "Browse step-by-step exercise guides filtered by muscle group, equipment, and difficulty.",
};

export default function ExercisesPage() {
  const exercises = getAllExercises();

  return (
    <div className="relative min-h-screen py-12 sm:py-16 bg-[#101010]">
      {/* Sticky Fullscreen Background */}
      <FeaturedExercisesBg fixed={true} />

      <Container className="relative z-10">
        <SectionHeading
          title="Exercise Library"
          subtitle="Explore our catalog of movement patterns with structured execution steps, cues, and safety tips."
        />
        <Suspense
          fallback={
            <div className="text-center py-16 text-[#A3A3A3]">
              Loading exercises...
            </div>
          }
        >
          <ExerciseBrowser exercises={exercises} />
        </Suspense>
      </Container>
    </div>
  );
}