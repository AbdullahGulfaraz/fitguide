"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Exercise } from "@/types/exercise";
import { ExerciseCard } from "@/components/exercises/exercise-card";
import { Search, RotateCcw } from "lucide-react";

interface ExerciseBrowserProps {
  exercises: Exercise[];
}

export function ExerciseBrowser({ exercises }: ExerciseBrowserProps) {
  const searchParams = useSearchParams();
  const muscleParam = searchParams.get("muscle");

  // Muscle groups dropdown options
  const muscleGroups = useMemo(() => {
    return ["All", ...Array.from(new Set(exercises.map((e) => e.muscleGroup)))];
  }, [exercises]);

  // Resolve matching muscle group from URL query
  const resolvedUrlMuscle = useMemo(() => {
    if (!muscleParam) return "All";
    const found = muscleGroups.find(
      (m) => m.toLowerCase() === muscleParam.toLowerCase()
    );
    return found || "All";
  }, [muscleParam, muscleGroups]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState(resolvedUrlMuscle);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedEquipment, setSelectedEquipment] = useState("All");

  // Re-sync state whenever URL param changes (card click, back/forward button)
  useEffect(() => {
    setSelectedMuscle(resolvedUrlMuscle);
  }, [resolvedUrlMuscle]);

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  const equipmentOptions = useMemo(() => {
    const allEq = exercises.flatMap((e) => e.equipment);
    return ["All", ...Array.from(new Set(allEq))];
  }, [exercises]);

  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      // Query filter
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        ex.name.toLowerCase().includes(query) ||
        ex.muscleGroup.toLowerCase().includes(query) ||
        ex.description.toLowerCase().includes(query) ||
        ex.equipment.some((eq) => eq.toLowerCase().includes(query));

      // Muscle group filter
      const matchesMuscle =
        selectedMuscle === "All" ||
        ex.muscleGroup.toLowerCase() === selectedMuscle.toLowerCase();

      // Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === "All" || ex.difficulty === selectedDifficulty;

      // Equipment filter
      const matchesEquipment =
        selectedEquipment === "All" ||
        ex.equipment.some((eq) => eq.toLowerCase() === selectedEquipment.toLowerCase());

      return matchesQuery && matchesMuscle && matchesDifficulty && matchesEquipment;
    });
  }, [exercises, searchQuery, selectedMuscle, selectedDifficulty, selectedEquipment]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedMuscle !== "All" ||
    selectedDifficulty !== "All" ||
    selectedEquipment !== "All";

  const handleReset = () => {
    setSearchQuery("");
    setSelectedMuscle("All");
    setSelectedDifficulty("All");
    setSelectedEquipment("All");
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="p-6 rounded-xl bg-[#1C1C1C] border border-[#303030] space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3A3A3]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search exercises by name, muscle, equipment..."
            className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#252525] border border-[#303030] text-white placeholder-[#A3A3A3] focus:outline-none focus:border-[#FF6B1A] transition-colors text-sm"
          />
        </div>

        {/* Filter Selects */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase mb-1">
              Muscle Group
            </label>
            <select
              value={selectedMuscle}
              onChange={(e) => setSelectedMuscle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#252525] border border-[#303030] text-white text-sm focus:outline-none focus:border-[#FF6B1A]"
            >
              {muscleGroups.map((group) => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase mb-1">
              Difficulty
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#252525] border border-[#303030] text-white text-sm focus:outline-none focus:border-[#FF6B1A]"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#A3A3A3] uppercase mb-1">
              Equipment
            </label>
            <select
              value={selectedEquipment}
              onChange={(e) => setSelectedEquipment(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg bg-[#252525] border border-[#303030] text-white text-sm focus:outline-none focus:border-[#FF6B1A]"
            >
              {equipmentOptions.map((eq) => (
                <option key={eq} value={eq}>
                  {eq}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button and status count */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[#A3A3A3]">
            Showing <span className="text-white font-semibold">{filteredExercises.length}</span> of {exercises.length} exercises
          </p>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#FF6B1A] hover:underline font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.slug} exercise={exercise} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 p-8 rounded-xl bg-[#1C1C1C] border border-[#303030]">
          <h3 className="text-lg font-bold text-white mb-2">No exercises found</h3>
          <p className="text-sm text-[#A3A3A3] max-w-md mx-auto mb-6">
            We couldn&apos;t find any exercises matching your active search terms or filters.
          </p>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-[#FF6B1A] text-white text-sm font-semibold hover:bg-[#e05b12] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}