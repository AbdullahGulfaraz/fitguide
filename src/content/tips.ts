import { Article } from "@/types/article";

export const TIPS: Article[] = [
  {
    slug: "why-technique-matters-more-than-rushing",
    title: "Why Technique Matters More Than Rushing",
    excerpt: "Lifting heavier with compromised form gives diminished returns while significantly spiking injury risk.",
    category: "Mindset",
    readTimeMinutes: 3,
    lastReviewed: "October 2026",
    relatedExerciseSlugs: ["push-up", "goblet-squat"],
    sections: [
      {
        heading: "Ego Lifting vs. Muscular Loading",
        paragraphs: [
          "The purpose of resistance training is to place targeted mechanical tension onto specific muscle fibers. When you rush or use momentum, you transfer that tension away from the target muscle and directly into joints and ligaments.",
          "Focus on mastering the eccentric (lowering) phase under full control. A lighter dumbbell lifted with deliberate tempo builds significantly more muscle than a heavy weight swung with momentum."
        ]
      }
    ]
  },
  {
    slug: "how-sleep-supports-recovery",
    title: "How Sleep Drives Muscle Repair",
    excerpt: "Muscles are stimulated in the gym, but tissue repair, hormonal balance, and nervous system recovery occur in bed.",
    category: "Recovery",
    readTimeMinutes: 3,
    lastReviewed: "October 2026",
    sections: [
      {
        heading: "The Physiology of Rest",
        paragraphs: [
          "During non-REM deep sleep, human growth hormone (HGH) releases at peak rates, facilitating tissue repair and glycogen replenishment. Chronic sleep deprivation elevates cortisol, reducing your body's ability to synthesize new muscle tissue.",
          "Aim for 7 to 9 hours of uninterrupted sleep in a dark, cool environment to ensure your nervous system rebounds between tough training sessions."
        ]
      }
    ]
  },
  {
    slug: "increasing-training-volume-gradually",
    title: "Progressive Overload Without Overreaching",
    excerpt: "Principles for adding reps, improving tempo, and adding load safely over extended training blocks.",
    category: "Progression",
    readTimeMinutes: 4,
    lastReviewed: "October 2026",
    relatedExerciseSlugs: ["dumbbell-overhead-press"],
    sections: [
      {
        heading: "Multiple Paths to Overload",
        paragraphs: [
          "Most trainees assume progressive overload only means adding weight to the bar. In reality, adding load is only one of many ways to challenge your body:"
        ],
        bullets: [
          "Repetition progression: Performing 10 reps with the same weight you did 8 reps with last week.",
          "Tempo control: Slowing the eccentric descent from 2 seconds to 3 seconds.",
          "Reduced rest times: Performing the same volume with slightly shorter rest periods.",
          "Improved range of motion: Performing deeper, crisper squats with total control."
        ]
      }
    ]
  }
];

export function getAllTips(): Article[] {
  return TIPS;
}

export function getTipBySlug(slug: string): Article | undefined {
  return TIPS.find((tip) => tip.slug === slug);
}