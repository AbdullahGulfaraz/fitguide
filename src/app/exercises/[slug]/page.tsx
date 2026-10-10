import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExerciseCard } from "@/components/exercises/exercise-card";
import {
  getAllExercises,
  getExerciseBySlug,
  getRelatedExercises,
} from "@/content/exercises";
import {
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react";

interface ExerciseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const exercises = getAllExercises();
  return exercises.map((exercise) => ({
    slug: exercise.slug,
  }));
}

export async function generateMetadata({ params }: ExerciseDetailPageProps) {
  const { slug } = await params;
  const exercise = getExerciseBySlug(slug);

  if (!exercise) {
    return { title: "Exercise Not Found | FitGuide" };
  }

  return {
    title: `${exercise.name} Technique & Instructions | FitGuide`,
    description: exercise.description,
  };
}

export default async function ExerciseDetailPage({ params }: ExerciseDetailPageProps) {
  const { slug } = await params;
  const exercise = getExerciseBySlug(slug);

  if (!exercise) {
    notFound();
  }

  const related = getRelatedExercises(exercise.slug, exercise.muscleGroup);

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#A3A3A3] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/exercises" className="hover:text-white transition-colors">
            Exercises
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#FF6B1A] font-medium truncate">{exercise.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Button href="/exercises" variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Library
          </Button>
        </div>

        {/* Exercise Header */}
        <div className="rounded-2xl bg-[#1C1C1C] border border-[#303030] p-6 sm:p-10 mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="accent">{exercise.muscleGroup}</Badge>
            <Badge variant="surface">{exercise.difficulty}</Badge>
            <Badge variant="outline">{exercise.workoutType}</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4">
            {exercise.name}
          </h1>

          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-3xl">
            {exercise.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#303030]">
            <div>
              <p className="text-xs uppercase text-[#A3A3A3] font-semibold">Equipment</p>
              <p className="text-sm sm:text-base font-bold text-white mt-1">
                {exercise.equipment.join(", ")}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-[#A3A3A3] font-semibold">Secondary Muscles</p>
              <p className="text-sm sm:text-base font-bold text-white mt-1">
                {exercise.secondaryMuscles.join(", ")}
              </p>
            </div>
            {exercise.setsRepsRecommendation && (
              <div>
                <p className="text-xs uppercase text-[#A3A3A3] font-semibold">Recommendation</p>
                <p className="text-sm sm:text-base font-bold text-[#FF6B1A] mt-1">
                  {exercise.setsRepsRecommendation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Instructions (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Step-by-Step Instructions */}
            <section className="rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B1A]" /> Step-by-Step Execution
              </h2>
              <ol className="space-y-4">
                {exercise.instructions.map((step, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#FF6B1A] text-white font-bold text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Common Mistakes */}
            <section className="rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#EF4444]" /> Common Mistakes
              </h2>
              <ul className="space-y-3">
                {exercise.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-[#A3A3A3]">
                    <span className="text-[#EF4444] font-bold">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar: Safety & Coaching Tips (Right 1 col) */}
          <div className="space-y-6">
            {/* Technique Tips */}
            <section className="rounded-xl bg-[#1C1C1C] border border-[#303030] p-6">
              <h3 className="text-lg font-bold text-white mb-4 uppercase flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#FF6B1A]" /> Pro Tips
              </h3>
              <ul className="space-y-3">
                {exercise.tips.map((tip, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    👉 {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* Safety Reminder */}
            <section className="rounded-xl bg-[#252525] border border-[#303030] p-6">
              <h3 className="text-lg font-bold text-white mb-3 uppercase flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#EF4444]" /> Safety Guidance
              </h3>
              <ul className="space-y-2 mb-4">
                {exercise.safetyNotes.map((note, idx) => (
                  <li key={idx} className="text-xs text-[#A3A3A3] leading-relaxed">
                    • {note}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-[#A3A3A3] italic pt-3 border-t border-[#303030]">
                Always terminate a set immediately if you feel sharp or abnormal pain. Seek advice from a qualified fitness or medical professional.
              </p>
            </section>
          </div>
        </div>

        {/* Related Exercises */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#303030]">
            <h2 className="text-2xl font-bold text-white uppercase mb-6">
              More {exercise.muscleGroup} Exercises
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <ExerciseCard key={rel.slug} exercise={rel} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}