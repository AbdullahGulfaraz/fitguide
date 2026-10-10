import { Article } from "@/types/article";

export const GUIDES: Article[] = [
  {
    slug: "beginners-guide-starting-at-the-gym",
    title: "Beginner’s Guide to Starting at the Gym",
    excerpt: "Essential gym etiquette, basic equipment navigation, and pacing your first 30 days of consistent training.",
    category: "Getting Started",
    readTimeMinutes: 6,
    lastReviewed: "October 2026",
    relatedExerciseSlugs: ["goblet-squat", "push-up"],
    sections: [
      {
        heading: "1. Overcoming the First-Day Hesitation",
        paragraphs: [
          "Stepping into a fitness facility for the first time can feel overwhelming. The key is understanding that everyone in the weight room is focused on their own workout, not judging yours.",
          "For your first week, prioritize familiarizing yourself with the layout, locating the basic stations, and building the simple habit of showing up consistently."
        ]
      },
      {
        heading: "2. Essential Gym Etiquette",
        paragraphs: [
          "Following standard gym courtesy keeps the space safe, clean, and welcoming for everyone:"
        ],
        bullets: [
          "Always re-rack dumbbells and weight plates in their designated slots when finished.",
          "Wipe down equipment seats and handles with disinfectant spray or wipes after use.",
          "Allow others to work in on equipment during long rest intervals when the gym is crowded.",
          "Keep walkways clear of gym bags and stray dumbbells."
        ]
      },
      {
        heading: "3. Pacing Your First Month",
        paragraphs: [
          "The biggest beginner pitfall is training with maximum intensity right away, which leads to debilitating soreness and missed sessions.",
          "Aim for 2 to 3 full-body sessions per week, keeping 2–3 reps in reserve on every set. Allow 48 hours of recovery between sessions to let joints and connective tissue adapt."
        ]
      }
    ]
  },
  {
    slug: "how-to-structure-a-workout",
    title: "How to Structure an Effective Workout",
    excerpt: "Learn how to sequence warmups, primary compound lifts, and accessory work without junk volume.",
    category: "Programming",
    readTimeMinutes: 5,
    lastReviewed: "October 2026",
    relatedExerciseSlugs: ["dumbbell-romanian-deadlift", "dumbbell-overhead-press"],
    sections: [
      {
        heading: "1. The Anatomy of a Session",
        paragraphs: [
          "A productive training session should have a distinct beginning, middle, and end. Randomly moving between machines wastes energy and makes tracking progress nearly impossible.",
          "A balanced workout consists of three phases: general/specific warmup, primary multi-joint movements, and secondary accessory work."
        ]
      },
      {
        heading: "2. Step-by-Step Exercise Order",
        paragraphs: [
          "Always place the most technically demanding exercises first when your nervous system is fresh:"
        ],
        bullets: [
          "Phase 1 (5–10 mins): Dynamic mobility, core activation, and light elevation of body temperature.",
          "Phase 2 (15–20 mins): Primary compound lift (e.g., Squat, Push-Up, or Row) performed for 3–4 quality work sets.",
          "Phase 3 (15–20 mins): Secondary accessory movements and unilateral exercises to address muscle balances.",
          "Phase 4 (5 mins): Brief cooldown and nervous system down-regulation."
        ]
      },
      {
        heading: "3. Managing Volume and Fatigue",
        paragraphs: [
          "More is not always better. 3 to 5 well-chosen exercises performed with high focus and technical accuracy will always beat 8 exercises rushed with deteriorating technique."
        ]
      }
    ]
  },
  {
    slug: "understanding-sets-and-repetitions",
    title: "Understanding Sets and Repetitions",
    excerpt: "Demystifying rep brackets, mechanical tension, and how to choose appropriate resistance.",
    category: "Fundamentals",
    readTimeMinutes: 4,
    lastReviewed: "October 2026",
    sections: [
      {
        heading: "1. Repetition Ranges Explained",
        paragraphs: [
          "Repetition brackets produce slightly different muscular adaptations, but all build strength when sets are taken close to technical fatigue:"
        ],
        bullets: [
          "1–5 Reps: Heavily emphasizes maximal neuromuscular strength and power output.",
          "6–12 Reps: The classic hypertrophy sweet spot balancing mechanical tension with adequate metabolic stress.",
          "12–20 Reps: Muscular endurance and stamina, particularly beneficial for smaller muscle groups and bodyweight movements."
        ]
      },
      {
        heading: "2. What Does 'Technical Failure' Mean?",
        paragraphs: [
          "Technical failure means terminating a set the moment you can no longer complete another repetition with safe, textbook form.",
          "Never push to absolute failure where you must contort your spine or recruit unintentional momentum to grind out the weight."
        ]
      }
    ]
  }
];

export function getAllGuides(): Article[] {
  return GUIDES;
}

export function getGuideBySlug(slug: string): Article | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}