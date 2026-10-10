export type ExerciseDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Exercise {
  slug: string;
  name: string;
  description: string;
  muscleGroup: string;
  secondaryMuscles: string[];
  difficulty: ExerciseDifficulty;
  equipment: string[];
  workoutType: string;
  instructions: string[];
  commonMistakes: string[];
  safetyNotes: string[];
  tips: string[];
  setsRepsRecommendation?: string;
}