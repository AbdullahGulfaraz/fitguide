import { Exercise } from "@/types/exercise";

export const EXERCISES: Exercise[] = [
  {
    slug: "push-up",
    name: "Standard Push-Up",
    description: "A foundational bodyweight compound exercise that develops pushing strength in the chest, shoulders, and triceps while training core stability.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids", "Core"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 8–15 repetitions",
    instructions: [
      "Place your hands shoulder-width apart on the floor with your palms flat and fingers pointed forward or slightly outward.",
      "Extend your legs behind you and bring your body into a rigid high plank line from head to heels.",
      "Engage your glutes and brace your core so your hips neither sag toward the floor nor pike into the air.",
      "Lower your body under control by bending your elbows at roughly a 45-degree angle from your ribs until your chest hovers just above the floor.",
      "Press through your full palms to drive yourself back up into the starting locked position while maintaining full body tension."
    ],
    commonMistakes: [
      "Flaring elbows straight out to the sides at 90 degrees, creating shoulder impingement risk.",
      "Letting the lower back dip down due to relaxed core bracing.",
      "Craning the neck forward to reach the floor early instead of lowering the chest."
    ],
    safetyNotes: [
      "If you experience wrist discomfort, perform push-ups holding onto hex dumbbells or push-up handles to keep wrists neutral.",
      "Elevate your hands on a sturdy bench or counter to reduce resistance if form breaks down."
    ],
    tips: [
      "Think of actively pushing the floor away from you rather than just lifting your body.",
      "Keep your gaze focused on a spot about 12 inches ahead of your hands."
    ]
  },
  {
    slug: "goblet-squat",
    name: "Goblet Squat",
    description: "An accessible squat variation using a single front-loaded weight to reinforce upright posture, knee tracking, and hip mobility.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    difficulty: "Beginner",
    equipment: ["Dumbbell", "Kettlebell"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 8–12 repetitions",
    instructions: [
      "Stand with your feet slightly wider than shoulder-width, with toes pointed slightly outward (15–30 degrees).",
      "Hold a dumbbell or kettlebell vertically against your chest with both hands, keeping elbows pointing down toward the floor.",
      "Inhale, brace your core, and initiate the movement by hinging your hips back while bending your knees.",
      "Descend smoothly until your thighs reach parallel to the floor, ensuring your knees track in line with your middle toes.",
      "Pause briefly at the bottom, then drive through your midfoot and heel to return to the starting standing position."
    ],
    commonMistakes: [
      "Letting knees cave inward during the ascent.",
      "Allowing the upper back to round and the chest to collapse forward.",
      "Lifting heels off the floor during the descent."
    ],
    safetyNotes: [
      "Do not force depth lower than your current hip and ankle mobility comfortably permits.",
      "Stop immediately if you experience sharp knee or lower back pain."
    ],
    tips: [
      "Keep the weight in light contact with your sternum throughout the whole movement.",
      "Use your elbows to gently track between your knees at the bottom to open the hips."
    ]
  },
  {
    slug: "dumbbell-romanian-deadlift",
    name: "Dumbbell Romanian Deadlift",
    description: "A hip-hinge movement that emphasizes loaded stretching of the hamstrings and glutes while reinforcing spinal stability.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Hamstrings", "Glutes", "Lower Back", "Forearms"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 8–10 repetitions",
    instructions: [
      "Stand upright holding a pair of dumbbells in front of your thighs with an overhand grip, feet hip-width apart.",
      "Unlock your knees with a soft, fixed bend; do not squat down.",
      "Hinge at your hips, sending your pelvis backward as if trying to touch a wall behind you.",
      "Lower the dumbbells along the front of your shins, maintaining a neutral spine and packed shoulders.",
      "Once you feel a solid hamstring stretch (typically just below knee height), drive your hips forward to stand tall and squeeze your glutes."
    ],
    commonMistakes: [
      "Rounding the thoracic or lumbar spine to reach lower to the floor.",
      "Squatting the weight down rather than hinging backward through the hips.",
      "Letting the dumbbells drift away from the legs, shifting torque to the lower back."
    ],
    safetyNotes: [
      "Focus on the stretch in your hamstrings rather than touching the weights to the floor.",
      "Maintain a flat back at all times."
    ],
    tips: [
      "Imagine pinching a pencil between your shoulder blades to keep your lats locked in place.",
      "The movement stops when your hips cannot travel any further backward."
    ]
  },
  {
    slug: "dumbbell-overhead-press",
    name: "Dumbbell Overhead Press",
    description: "A vertical pressing exercise that builds shoulder mass and strength across the deltoids while promoting overhead stability.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps", "Upper Chest"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 6–10 repetitions",
    instructions: [
      "Stand or sit tall on an upright bench with dumbbells held at shoulder level, palms facing forward or slightly angled inward.",
      "Brace your core, squeeze your glutes, and ensure your lower back does not arch excessively.",
      "Press the dumbbells overhead along a smooth arc until your arms are extended without forcefully locking your elbows.",
      "Control the weight as you lower it back to shoulder level over a 2 to 3 second descent."
    ],
    commonMistakes: [
      "Arching the lower back excessively to compensate for shoulder mobility restrictions.",
      "Pressing the dumbbells too far forward rather than directly overhead.",
      "Bouncing out of the bottom position without control."
    ],
    safetyNotes: [
      "If you experience shoulder impingement, switch to a neutral grip (palms facing each other).",
      "Avoid dropping the weights abruptly."
    ],
    tips: [
      "Exhale as you press the weight upward, inhale as you lower.",
      "Keep your ribs pulled down and tight throughout."
    ]
  },
  {
    slug: "dumbbell-row",
    name: "Single-Arm Dumbbell Row",
    description: "A unilateral pulling movement designed to isolate the latissimus dorsi, rhomboids, and rear delts while equalizing bilateral strength balances.",
    muscleGroup: "Back",
    secondaryMuscles: ["Lats", "Rhomboids", "Biceps", "Rear Deltoids"],
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions per arm",
    instructions: [
      "Place your left knee and left hand flat on a sturdy bench for torso support, keeping your spine parallel to the floor.",
      "Place your right foot firmly on the floor behind you and hold a dumbbell in your right hand with arm extended.",
      "Pull the dumbbell up toward your hip, driving back with your elbow rather than simply curling with your arm.",
      "Squeeze your back muscles at the top of the rep, then lower the dumbbell with control to full extension."
    ],
    commonMistakes: [
      "Twisting the torso excessively at the top of the pull.",
      "Pulling directly up to the chest instead of sweeping back toward the hip pocket.",
      "Using momentum and jerking the weight up."
    ],
    safetyNotes: [
      "Keep your supporting hand directly below your shoulder to protect the joint.",
      "Maintain a flat back from your neck to your tailbone."
    ],
    tips: [
      "Imagine your hand is just a hook; pull through your elbow.",
      "Pause for a deliberate half-second at the top of each contraction."
    ]
  },
  {
    slug: "plank",
    name: "Forearm Plank",
    description: "An isometric core exercise that trains abdominal bracing and anti-extension stability throughout the anterior chain.",
    muscleGroup: "Core",
    secondaryMuscles: ["Rectus Abdominis", "Transverse Abdominis", "Glutes", "Shoulders"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 30–45 second holds",
    instructions: [
      "Lie face down, resting your weight on your forearms with elbows placed directly below your shoulders.",
      "Tuck your toes under and lift your body off the floor, forming a straight line from your head to your heels.",
      "Tuck your pelvis slightly (posterior tilt), squeeze your glutes hard, and draw your belly button toward your spine.",
      "Hold this rigid position while breathing evenly, never holding your breath."
    ],
    commonMistakes: [
      "Allowing the lower back to sag toward the floor.",
      "Sticking the hips up into an inverted V-shape.",
      "Tilting the head back and hyperextending the neck."
    ],
    safetyNotes: [
      "Terminate the hold the moment your lower back begins to sag or ache.",
      "Beginners can drop knees to the floor while preserving hip and torso alignment."
    ],
    tips: [
      "Actively pull your elbows toward your toes to generate maximum abdominal tension.",
      "A tight 30-second plank is far more effective than a sloppy two-minute hold."
    ]
  }
];

export function getAllExercises(): Exercise[] {
  return EXERCISES;
}

export function getExerciseBySlug(slug: string): Exercise | undefined {
  return EXERCISES.find((exercise) => exercise.slug === slug);
}

export function getRelatedExercises(currentSlug: string, muscleGroup: string): Exercise[] {
  return EXERCISES.filter(
    (exercise) => exercise.slug !== currentSlug && exercise.muscleGroup === muscleGroup
  ).slice(0, 3);
}