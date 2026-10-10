import React from "react";
import Link from "next/link";
import { Exercise } from "@/types/exercise";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Dumbbell } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 transition-all duration-200 hover:border-[#FF6B1A]/60 hover:-translate-y-1">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="accent">{exercise.muscleGroup}</Badge>
          <Badge variant="surface">{exercise.difficulty}</Badge>
          <span className="text-xs text-[#A3A3A3] font-medium ml-auto">
            {exercise.workoutType}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B1A] transition-colors">
          {exercise.name}
        </h3>

        <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3] mb-4">
          <Dumbbell className="w-3.5 h-3.5 text-[#FF6B1A]" />
          <span>{exercise.equipment.join(", ")}</span>
        </div>

        <p className="text-sm text-[#A3A3A3] line-clamp-3 leading-relaxed">
          {exercise.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#303030]">
        <Link
          href={`/exercises/${exercise.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1.5 transition-colors"
        >
          View Guide <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}