export interface MuscleCategory {
  id: string;
  name: string;
  description: string;
  count: number;
}

export interface FeaturedExerciseItem {
  slug: string;
  name: string;
  muscleGroup: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  equipment: string;
  description: string;
}

export interface FeaturedArticleItem {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
}

export const MUSCLE_CATEGORIES: MuscleCategory[] = [
  { id: "chest", name: "Chest", description: "Pushing strength & upper torso development", count: 8 },
  { id: "back", name: "Back", description: "Lats, rhomboids, traps, and spinal erectors", count: 9 },
  { id: "legs", name: "Legs", description: "Quadriceps, hamstrings, glutes, and calves", count: 12 },
  { id: "shoulders", name: "Shoulders", description: "Deltoid stability, overhead power, and posture", count: 7 },
  { id: "arms", name: "Arms", description: "Biceps, triceps, and forearm grip strength", count: 6 },
  { id: "core", name: "Core", description: "Abdominal bracing, obliques, and midsection stability", count: 6 },
];

export const FEATURED_EXERCISES: FeaturedExerciseItem[] = [
  {
    slug: "push-up",
    name: "Standard Push-Up",
    muscleGroup: "Chest",
    difficulty: "Beginner",
    equipment: "Bodyweight",
    description: "Fundamental compound movement building upper body pushing power and core tension.",
  },
  {
    slug: "goblet-squat",
    name: "Goblet Squat",
    muscleGroup: "Legs",
    difficulty: "Beginner",
    equipment: "Dumbbell or Kettlebell",
    description: "An accessible squat variation reinforcing upright torso mechanics and deep hip drive.",
  },
  {
    slug: "dumbbell-romanian-deadlift",
    name: "Dumbbell RDL",
    muscleGroup: "Back & Hamstrings",
    difficulty: "Intermediate",
    equipment: "Dumbbells",
    description: "Hinged movement prioritizing hamstring load, glute activation, and lower back stability.",
  },
  {
    slug: "dumbbell-overhead-press",
    name: "Dumbbell Overhead Press",
    muscleGroup: "Shoulders",
    difficulty: "Intermediate",
    equipment: "Dumbbells",
    description: "Vertical pressing exercise that develops deltoids, triceps, and upper chest.",
  },
];

export const FEATURED_GUIDES: FeaturedArticleItem[] = [
  {
    slug: "beginners-guide-starting-at-the-gym",
    title: "Beginner’s Guide to Starting at the Gym",
    category: "Getting Started",
    readTime: "6 min read",
    excerpt: "Everything you need to know about gym etiquette, basic equipment, and pacing your first 30 days.",
  },
  {
    slug: "how-to-structure-a-workout",
    title: "How to Structure an Effective Workout",
    category: "Programming",
    readTime: "5 min read",
    excerpt: "Learn how to order warmup sets, primary compound lifts, and accessory work without burnout.",
  },
  {
    slug: "understanding-sets-and-repetitions",
    title: "Understanding Sets and Repetitions",
    category: "Fundamentals",
    readTime: "4 min read",
    excerpt: "Demystifying rep ranges, training to technical fatigue, and finding the right resistance.",
  },
];

export const FEATURED_TIPS: FeaturedArticleItem[] = [
  {
    slug: "why-technique-matters-more-than-rushing",
    title: "Why Technique Matters More Than Rushing",
    category: "Mindset",
    readTime: "3 min read",
    excerpt: "Lifting heavier with poor form yields diminished returns and heightened injury risk.",
  },
  {
    slug: "how-sleep-supports-recovery",
    title: "How Sleep Drives Muscle Repair",
    category: "Recovery",
    readTime: "3 min read",
    excerpt: "Muscles are stimulated during training, but tissue adaptation and growth occur while resting.",
  },
  {
    slug: "increasing-training-volume-gradually",
    title: "Progressive Overload Without Overreaching",
    category: "Progression",
    readTime: "4 min read",
    excerpt: "Simple principles for adding reps, improving tempo, or slightly increasing load over time.",
  },
];