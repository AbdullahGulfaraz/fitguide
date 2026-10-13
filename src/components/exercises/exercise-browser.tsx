"use client";

import React, { useState, useMemo } from "react";
import { Exercise } from "@/types/exercise"; // adjust to your exercise interface path
import { ExerciseCard } from "@/components/exercises/exercise-card";
import { Search, SlidersHorizontal, RotateCcw, Dumbbell } from "lucide-react";

interface ExerciseBrowserProps {
  exercises: Exercise[];
}

const MUSCLE_GROUPS = [
  "All",
  "Chest",
  "Back",
  "Legs",
  "Shoulders",
  "Arms",
  "Core",
];

const DIFFICULTIES = ["All", "Beginner", "Intermediate", "Advanced"];

export function ExerciseBrowser({ exercises }: ExerciseBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      const matchesSearch =
        ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.muscleGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.equipment.some((eq) =>
          eq.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesMuscle =
        selectedMuscle === "All" ||
        ex.muscleGroup.toLowerCase() === selectedMuscle.toLowerCase();

      const matchesDiff =
        selectedDifficulty === "All" ||
        ex.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

      return matchesSearch && matchesMuscle && matchesDiff;
    });
  }, [exercises, searchQuery, selectedMuscle, selectedDifficulty]);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedMuscle !== "All" ||
    selectedDifficulty !== "All";

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedMuscle("All");
    setSelectedDifficulty("All");
  };

  return (
    <div className="space-y-8">
      {/* Control Panel Container */}
      <div className="rounded-2xl bg-[#171717]/80 backdrop-blur-md border border-[#303030] p-4 sm:p-6 shadow-2xl">
        {/* Search input & Select controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {/* Search bar */}
          <div className="md:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercise, target muscle, or equipment..."
              className="w-full bg-[#111111] border border-[#2D2D2D] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-[#737373] focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
            />
          </div>

          {/* Difficulty Dropdown */}
          <div className="md:col-span-4 relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full appearance-none bg-[#111111] border border-[#2D2D2D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B1A] transition-all cursor-pointer"
            >
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d} className="bg-[#171717] text-white">
                  {d === "All" ? "All Difficulties" : `${d} Level`}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
          </div>
        </div>

        {/* Muscle Group Pills Bar */}
        <div className="mt-5 pt-4 border-t border-[#262626] flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {MUSCLE_GROUPS.map((group) => {
              const isActive = selectedMuscle.toLowerCase() === group.toLowerCase();
              return (
                <button
                  key={group}
                  onClick={() => setSelectedMuscle(group)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#FF6B1A] text-white border-[#FF6B1A] shadow-md shadow-[#FF6B1A]/20"
                      : "bg-[#1F1F1F] text-[#A3A3A3] border-[#303030] hover:text-white hover:border-[#444]"
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  {group}
                </button>
              );
            })}
          </div>

          {/* Reset Filters trigger */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex-shrink-0 flex items-center gap-1 text-xs text-[#A3A3A3] hover:text-[#FF6B1A] transition-colors font-medium ml-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#737373] px-1">
        <span>
          Showing <strong className="text-white font-semibold">{filteredExercises.length}</strong> movements
        </span>
      </div>

      {/* Exercises Grid or Empty State */}
      {filteredExercises.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExercises.map((exercise) => (
            <ExerciseCard key={exercise.slug} exercise={exercise} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#2E2E2E] bg-[#171717]/60 py-16 text-center">
          <Dumbbell className="w-12 h-12 text-[#FF6B1A]/40 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white mb-1">No movements found</h3>
          <p className="text-xs text-[#A3A3A3] max-w-sm mx-auto mb-5">
            Try adjusting your search terms, muscle group selection, or difficulty filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-[#262626] border border-[#3A3A3A] text-xs font-semibold text-white hover:border-[#FF6B1A] transition-all"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}