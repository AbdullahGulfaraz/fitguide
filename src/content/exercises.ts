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
  },
  {
    slug: "barbell-bench-press",
    name: "Barbell Bench Press",
    description: "The primary compound upper-body press for developing raw pressing strength across the chest, shoulders, and triceps.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: ["Barbell", "Bench"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 5–8 repetitions",
    instructions: [
      "Lie flat on the bench with eyes positioned directly under the racked bar, feet planted firmly into the floor.",
      "Grip the bar slightly wider than shoulder-width and squeeze your shoulder blades back and down into the pad.",
      "Unrack the bar and stabilize it directly over your chest with straight arms.",
      "Lower the bar smoothly toward the lower-sternum while tucking your elbows at approximately 45 degrees.",
      "Drive through the palms and press the bar back up along a slight backward arc to lockout."
    ],
    commonMistakes: [
      "Bouncing the bar forcefully off the sternum.",
      "Flaring elbows wide at a 90-degree angle to the torso.",
      "Lifting the hips or feet off the floor during the push."
    ],
    safetyNotes: [
      "Always bench with safety spotter arms set or an active spotter behind you.",
      "Avoid using a thumbless (suicide) grip."
    ],
    tips: [
      "Dig your upper back into the bench to maintain a rigid base.",
      "Push your feet through the floor to utilize whole-body leg drive."
    ]
  },
  {
    slug: "incline-dumbbell-press",
    name: "Incline Dumbbell Press",
    description: "An angled pressing exercise targeting the clavicular head (upper portion) of the pectoralis major.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Anterior Deltoids", "Triceps"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Incline Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3–4 sets of 8–12 repetitions",
    instructions: [
      "Set an adjustable bench to a 30-degree incline and sit with dumbbells resting on your knees.",
      "Kick the weights up using your knees as you lean back onto the pad, holding them at shoulder level.",
      "Set your shoulders back and press the dumbbells upward until arms are straight without clicking the weights.",
      "Lower the weights slowly until you feel a comfortable stretch across the upper chest.",
      "Press the dumbbells back up along a converging path over your upper chest."
    ],
    commonMistakes: [
      "Setting the bench incline higher than 45 degrees, which turns the movement into a shoulder press.",
      "Excessive arching in the lower back to compensate for heavy weight."
    ],
    safetyNotes: [
      "Drop the dumbbells safely to your knees or the floor to your sides rather than dropping them backward."
    ],
    tips: [
      "Keep palms angled slightly inward (semi-neutral) to reduce anterior shoulder wear."
    ]
  },
  {
    slug: "chest-dip",
    name: "Chest Dip",
    description: "A bodyweight compound movement emphasizing the lower pectoral fibers through forward torso angle.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: ["Dip Station"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 6–10 repetitions",
    instructions: [
      "Grip the dip bars and push yourself up until arms are straight.",
      "Lean your torso forward at a 30-degree angle and bend your knees behind you.",
      "Lower yourself by bending elbows until upper arms are roughly parallel to the floor.",
      "Drive through your palms and squeeze your chest to return to the starting position."
    ],
    commonMistakes: [
      "Staying completely upright, which shifts target focus primarily to the triceps.",
      "Descending too deep and placing excessive hyperextension stress on the shoulder capsules."
    ],
    safetyNotes: [
      "Avoid if you have active shoulder impingement or sternum pain."
    ],
    tips: [
      "Keep elbows pointing slightly outward rather than hugging your ribs."
    ]
  },
  {
    slug: "cable-crossover",
    name: "Standing Cable Crossover",
    description: "An isolation exercise that provides constant muscular tension across peak chest adduction.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Set pulleys at upper height, grab handles, and step forward into a staggered stance.",
      "Keep a slight bend in your elbows and lean slightly forward from your hips.",
      "Bring hands together in a downward, sweeping arc until knuckles meet in front of your waist.",
      "Squeeze the chest hard for 1 second before controlling the return to starting position."
    ],
    commonMistakes: [
      "Turning the exercise into a pressing movement by bending and straightening elbows excessively.",
      "Using torso momentum to swing the weight forward."
    ],
    safetyNotes: [
      "Do not let weights pull arms backward beyond shoulder plane."
    ],
    tips: [
      "Imagine hugging a wide barrel to keep elbow angle consistent throughout."
    ]
  },
  {
    slug: "dumbbell-chest-flye",
    name: "Flat Dumbbell Flye",
    description: "An isolation movement dedicated to loaded stretching of the pectoralis major across horizontal abduction.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions",
    instructions: [
      "Lie flat holding dumbbells straight over your chest with palms facing each other.",
      "Set a soft 15-degree bend in your elbows and maintain that bend fixed throughout.",
      "Lower dumbbells out laterally in a wide arc until your upper arms are level with the bench.",
      "Squeeze your chest muscles to reverse the movement and bring dumbbells back together."
    ],
    commonMistakes: [
      "Straightening arms completely, stressing the elbow tendons.",
      "Lowering the dumbbells far below the bench line."
    ],
    safetyNotes: [
      "Use conservative weights to prevent anterior capsule shoulder strain."
    ],
    tips: [
      "Focus on squeezing the inner side of your upper arms toward your ribs."
    ]
  },
  {
    slug: "decline-barbell-press",
    name: "Decline Barbell Bench Press",
    description: "A pressing variation focusing on lower pectoral recruitment with reduced shoulder joint stress.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: ["Barbell", "Decline Bench"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 8–10 repetitions",
    instructions: [
      "Hook your legs securely beneath the decline bench rollers and lie back.",
      "Grip the bar slightly wider than shoulder-width and unrack directly over your lower chest.",
      "Lower the bar with control to touch the bottom of your sternum.",
      "Press the bar back up to extension with a steady, smooth cadence."
    ],
    commonMistakes: [
      "Allowing the bar to drift upward toward the throat during pressing.",
      "Rushing repetitions due to feeling upside down."
    ],
    safetyNotes: [
      "Always rack the bar cleanly before unhooking legs."
    ],
    tips: [
      "The shorter range of motion allows slightly greater load, but prioritize joint control."
    ]
  },
  {
    slug: "incline-cable-flye",
    name: "Incline Cable Flye",
    description: "A continuous-tension isolation flye tailored to the upper chest fibers.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Intermediate",
    equipment: ["Cable Machine", "Incline Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Place an incline bench between two low cable pulleys.",
      "Hold handles, sit back on bench, and press arms out with a slight fixed bend in elbows.",
      "Sweep hands together in an upward arc until hands meet above the upper chest.",
      "Lower slowly until feeling an upper chest stretch before repeating."
    ],
    commonMistakes: [
      "Letting cables pull shoulders back into hyperextension.",
      "Using torso momentum off the bench."
    ],
    safetyNotes: [
      "Keep wrists rigid and aligned with forearms."
    ],
    tips: [
      "Think about bringing the inner bicep heads toward each other."
    ]
  },
  {
    slug: "diamond-push-up",
    name: "Diamond Push-Up",
    description: "A close-hand push-up variation that intensifies load on the triceps and medial chest fibers.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Core"],
    difficulty: "Intermediate",
    equipment: ["Bodyweight"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 8–15 repetitions",
    instructions: [
      "Assume a high plank with index fingers and thumbs touching to form a diamond shape under your chest.",
      "Brace core and lower chest toward your hands while keeping elbows tucked near ribs.",
      "Press through your palms to return to top plank position."
    ],
    commonMistakes: [
      "Allowing hips to drop and breaking plank integrity.",
      "Flaring elbows excessively wide."
    ],
    safetyNotes: [
      "If you experience wrist compression, separate hands 2–3 inches apart."
    ],
    tips: [
      "Keep core locked to prevent spinal sagging."
    ]
  },
  {
    slug: "machine-chest-press",
    name: "Seated Machine Chest Press",
    description: "A fixed-path pressing movement allowing high mechanical overload to failure without stabilization risks.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids"],
    difficulty: "Beginner",
    equipment: ["Chest Press Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions",
    instructions: [
      "Adjust seat height so handles align directly across mid-chest level.",
      "Sit flat against the backrest and grasp handles with knuckles facing forward.",
      "Press handles forward until arms are fully extended without locking elbows harshly.",
      "Slowly return weight stack just short of resting to keep continuous tension."
    ],
    commonMistakes: [
      "Letting shoulders round forward off the pad during extension.",
      "Letting weight plates slam at the bottom of the rep."
    ],
    safetyNotes: [
      "Adjust foot pedal or starting pin so shoulders aren't overextended on unrack."
    ],
    tips: [
      "Great finisher movement for pushing safely to absolute muscular failure."
    ]
  },
  {
    slug: "deficit-push-up",
    name: "Deficit Push-Up",
    description: "Elevated-hand push-up allowing deep chest stretch beyond the normal floor limit.",
    muscleGroup: "Chest",
    secondaryMuscles: ["Triceps", "Anterior Deltoids", "Core"],
    difficulty: "Intermediate",
    equipment: ["Push-Up Handles"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–15 repetitions",
    instructions: [
      "Place push-up handles or weight plates slightly wider than shoulder width.",
      "Assume standard push-up plank position with hands on the elevated platforms.",
      "Lower body slowly, allowing chest to drop 1–2 inches below handle level.",
      "Pause for 1 second in the deep stretch, then explosively push back to starting plank."
    ],
    commonMistakes: [
      "Hyperextending the lower back at the bottom of the deficit.",
      "Dropping down rapidly without eccentric control."
    ],
    safetyNotes: [
      "Only descend as deep as your shoulder mobility allows pain-free."
    ],
    tips: [
      "Keep scapulae moving naturally around your ribcage throughout the movement."
    ]
  },

  // ==========================================
  // BACK (10 Exercises)
  // ==========================================
  {
    slug: "barbell-bent-over-row",
    name: "Barbell Bent-Over Row",
    description: "Foundational compound horizontal pull for building overall back thickness and spinal endurance.",
    muscleGroup: "Back",
    secondaryMuscles: ["Latissimus Dorsi", "Rhomboids", "Trapezius", "Biceps", "Lower Back"],
    difficulty: "Intermediate",
    equipment: ["Barbell"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 6–10 repetitions",
    instructions: [
      "Stand hip-width apart holding a barbell with an overhand grip just outside your thighs.",
      "Hinge at the hips, bending knees slightly and keeping back flat until torso is roughly 45 degrees.",
      "Pull the bar up toward your belly button, driving backward with your elbows.",
      "Squeeze your shoulder blades together at the top, then lower the bar with control."
    ],
    commonMistakes: [
      "Jerking torso upward to gain momentum.",
      "Rounding the lumbar spine under load.",
      "Pulling high to the chest rather than the abdomen."
    ],
    safetyNotes: [
      "Maintain a neutral spine; stop set immediately if lower back rounds."
    ],
    tips: [
      "Think about pulling your elbows straight behind you rather than lifting with forearms."
    ]
  },
  {
    slug: "lat-pulldown",
    name: "Wide-Grip Lat Pulldown",
    description: "A machine vertical pull targeting the outer latissimus dorsi to develop upper back width.",
    muscleGroup: "Back",
    secondaryMuscles: ["Biceps", "Rhomboids", "Rear Deltoids"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3–4 sets of 8–12 repetitions",
    instructions: [
      "Sit at the pulldown station with thighs secured under thigh pads.",
      "Grasp the bar with an overhand grip wider than shoulder width.",
      "Lean back slightly (10–15 degrees) and pull the bar down toward upper chest.",
      "Squeeze your lats at bottom position, then guide the bar back up to full stretch."
    ],
    commonMistakes: [
      "Leaning back excessively and turning the exercise into a horizontal row.",
      "Pulling bar behind the neck, which strains cervical spine and rotators."
    ],
    safetyNotes: [
      "Never drop the weight suddenly from the bottom of the repetition."
    ],
    tips: [
      "Depress your shoulder blades before initiating elbow bend."
    ]
  },
  {
    slug: "pull-up",
    name: "Pull-Up",
    description: "A foundational bodyweight vertical pulling movement measuring relative upper-body strength.",
    muscleGroup: "Back",
    secondaryMuscles: ["Latissimus Dorsi", "Biceps", "Rhomboids", "Core"],
    difficulty: "Advanced",
    equipment: ["Pull-Up Bar"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 5–10 repetitions",
    instructions: [
      "Hang from a pull-up bar with an overhand grip slightly wider than shoulders.",
      "Engage your scapulae downward, draw core tight, and bend knees if needed.",
      "Pull yourself up until your chin completely clears the top of the bar.",
      "Lower under control back to a dead hang position before starting the next rep."
    ],
    commonMistakes: [
      "Kipping or using leg swings to gain upward momentum.",
      "Failing to descend to full arm extension."
    ],
    safetyNotes: [
      "Avoid jarring shoulder drops at bottom dead hang."
    ],
    tips: [
      "Drive elbows down toward your hips as you ascend."
    ]
  },
  {
    slug: "seated-cable-row",
    name: "Seated Cable Row",
    description: "A stable horizontal row targeting mid-back thickness, lats, and rhomboids.",
    muscleGroup: "Back",
    secondaryMuscles: ["Rhomboids", "Biceps", "Erector Spinae"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions",
    instructions: [
      "Sit on the machine bench, place feet on footrests with soft knees, and hold the close-grip attachment.",
      "Sit upright with back neutral and arms fully extended in front of you.",
      "Pull the handle into your lower abdomen while driving elbows back and pinching shoulder blades.",
      "Extend arms smoothly forward, letting lats stretch without rounding lower spine."
    ],
    commonMistakes: [
      "Rocking back and forth at the hips to heave the weight.",
      "Shrugging shoulders up toward the ears during the pull."
    ],
    safetyNotes: [
      "Keep knees slightly bent to protect hamstrings and pelvis alignment."
    ],
    tips: [
      "Pause for a count of 1 at the contraction point on each rep."
    ]
  },
  {
    slug: "chest-supported-dumbbell-row",
    name: "Chest-Supported Incline Row",
    description: "A strict upper-back row that eliminates lower back fatigue and momentum through chest support.",
    muscleGroup: "Back",
    secondaryMuscles: ["Rhomboids", "Rear Deltoids", "Biceps", "Mid Trapezius"],
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Incline Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions",
    instructions: [
      "Set bench to a 30-degree incline and lie face-down with chest resting against the pad.",
      "Hold dumbbells hanging straight toward the floor with neutral or pronated grip.",
      "Row dumbbells up toward your ribs, focusing on retracting shoulder blades.",
      "Hold briefly at top before slowly lowering dumbbells to full extension."
    ],
    commonMistakes: [
      "Lifting chest completely off the pad during the pull.",
      "Turning the exercise into an arm curl."
    ],
    safetyNotes: [
      "Excellent alternative if experiencing lower-back sensitivity."
    ],
    tips: [
      "Flare elbows slightly wider (45–60 degrees) to bias mid-traps and rear delts."
    ]
  },
  {
    slug: "barbell-deadlift",
    name: "Conventional Barbell Deadlift",
    description: "The classic full-body pull maximizing posterior-chain strength and spinal erector density.",
    muscleGroup: "Back",
    secondaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae", "Trapezius", "Forearms"],
    difficulty: "Advanced",
    equipment: ["Barbell"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 3–5 repetitions",
    instructions: [
      "Stand with feet hip-width apart with the barbell over your mid-foot.",
      "Hinge down to grip the bar outside your shins, drop hips, pull chest tall, and wedge yourself tight.",
      "Take a deep breath into your belly and brace core firmly.",
      "Drive floor away through your feet, keeping bar close to shins and standing tall with hips locked.",
      "Hinge back down under control to return bar to dead stop."
    ],
    commonMistakes: [
      "Letting the bar drift forward away from the body.",
      "Rounding the lower spine upon initiating the pull.",
      "Hyperextending the spine backward at lockout."
    ],
    safetyNotes: [
      "Reset your brace and stance between every repetition rather than bouncing."
    ],
    tips: [
      "Think of pushing the earth away with your legs rather than lifting with your arms."
    ]
  },
  {
    slug: "t-bar-row",
    name: "T-Bar Row",
    description: "A fixed-pivot row enabling heavy loads for midline back development.",
    muscleGroup: "Back",
    secondaryMuscles: ["Latissimus Dorsi", "Trapezius", "Rhomboids", "Biceps"],
    difficulty: "Intermediate",
    equipment: ["T-Bar Row Machine"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 8–10 repetitions",
    instructions: [
      "Straddle the T-bar apparatus, hinge hips at 45 degrees, and grasp handles.",
      "Maintain a flat spine and engaged core.",
      "Pull handles up toward your chest, driving elbows back and squeezing upper back.",
      "Lower weight smoothly until arms are extended."
    ],
    commonMistakes: [
      "Standing up too straight as the set gets harder.",
      "Dropping weight abruptly."
    ],
    safetyNotes: [
      "Keep core heavily braced to support lumbar load."
    ],
    tips: [
      "Use smaller diameter plates (e.g., 25s instead of 45s) for greater range of motion."
    ]
  },
  {
    slug: "straight-arm-lat-pulldown",
    name: "Straight-Arm Cable Pulldown",
    description: "An isolation movement that works the lats along their full arc without biceps involvement.",
    muscleGroup: "Back",
    secondaryMuscles: ["Teres Major", "Triceps", "Core"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Stand facing a high pulley bar, holding it with an overhand grip slightly wider than shoulders.",
      "Step back slightly, hinge torso forward 15 degrees, with arms extended and soft elbow bend.",
      "Sweep the bar down in a broad arc toward your upper thighs using pure lat contraction.",
      "Pause for a second at thighs, then slowly resist back up to head level."
    ],
    commonMistakes: [
      "Bending and extending elbows into a triceps pushdown.",
      "Using torso swinging to heave the bar."
    ],
    safetyNotes: [
      "Keep shoulders depressed away from ears."
    ],
    tips: [
      "Think of pushing down on a pair of stiff levers."
    ]
  },
  {
    slug: "neutral-single-arm-lat-pulldown",
    name: "Single-Arm Cable Lat Pulldown",
    description: "A unilateral vertical pull aligned with natural lat muscle fibers for targeted lat engagement.",
    muscleGroup: "Back",
    secondaryMuscles: ["Latissimus Dorsi", "Biceps", "Core"],
    difficulty: "Intermediate",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions per side",
    instructions: [
      "Attach a single D-handle to a high cable pulley and kneel or sit facing the machine.",
      "Grasp handle with a neutral grip and begin from full overhead stretch.",
      "Pull elbow straight down toward your hip pocket while slightly flexing your torso laterally.",
      "Squeeze lat at bottom before riding the cable back up into a full overhead stretch."
    ],
    commonMistakes: [
      "Twisting torso excessively to yank the weight down.",
      "Pulling elbow too far behind the body."
    ],
    safetyNotes: [
      "Control the stretch at top without dislocating your shoulder position."
    ],
    tips: [
      "Keep your wrist straight and focus entirely on the elbow moving toward the hip."
    ]
  },
  {
    slug: "hyperextension",
    name: "45-Degree Back Extension",
    description: "A posterior-chain exercise strengthening spinal erectors, glutes, and hamstrings against gravity.",
    muscleGroup: "Back",
    secondaryMuscles: ["Erector Spinae", "Glutes", "Hamstrings"],
    difficulty: "Beginner",
    equipment: ["Bench"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Position yourself on a 45-degree hyperextension bench with hips resting just over the top pad.",
      "Cross arms over your chest and lower your torso forward until you feel a hamstring stretch.",
      "Contract glutes and spinal erectors to lift your torso until body is in a straight line.",
      "Pause for 1 second at top before repeating."
    ],
    commonMistakes: [
      "Hyperextending spine backward past a neutral line at the top.",
      "Using jerky momentum to swing upward."
    ],
    safetyNotes: [
      "Avoid if you have acute lumbar disc herniation symptoms."
    ],
    tips: [
      "To target spinal erectors more, gently round and unroll the spine vertebra by vertebra."
    ]
  },

  // ==========================================
  // LEGS (10 Exercises)
  // ==========================================
  {
    slug: "barbell-back-squat",
    name: "Barbell Back Squat",
    description: "The staple lower-body compound movement developing quadriceps, glutes, and lower body strength.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    difficulty: "Intermediate",
    equipment: ["Barbell", "Squat Rack"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 6–8 repetitions",
    instructions: [
      "Rest the bar securely on upper traps (high bar) or rear delts (low bar), feet shoulder-width apart.",
      "Brace core firmly and break at hips and knees simultaneously.",
      "Descend smoothly until hip crease sits level with or below top of knees.",
      "Drive upward through midfoot and heels back to full standing position."
    ],
    commonMistakes: [
      "Knees caving inward (valgus collapse) on the ascent.",
      "Heels lifting up due to restricted ankle mobility.",
      "Excessive forward torso pitch."
    ],
    safetyNotes: [
      "Always squat inside safety pins adjusted to just below parallel depth."
    ],
    tips: [
      "Spread the floor apart with your feet throughout descent and ascent."
    ]
  },
  {
    slug: "barbell-hip-thrust",
    name: "Barbell Hip Thrust",
    description: "A horizontal hip-extension movement dedicated to maximizing glute recruitment and lockout strength.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Glutes", "Hamstrings", "Adductors"],
    difficulty: "Intermediate",
    equipment: ["Barbell", "Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3–4 sets of 8–12 repetitions",
    instructions: [
      "Sit on floor with upper back against a bench and a padded barbell rolled over your hips.",
      "Bend knees at 90 degrees with feet flat on the floor, hip-width apart.",
      "Drive through heels to bridge hips upward until thighs and torso align parallel to floor.",
      "Squeeze glutes hard at the top with chin tucked, then lower hips with control."
    ],
    commonMistakes: [
      "Arching lower back rather than tilting pelvis posteriorly.",
      "Placing feet too far forward or too close to hips."
    ],
    safetyNotes: [
      "Always use a thick bar pad to protect the pelvic bones."
    ],
    tips: [
      "Keep chin tucked to chest and eyes forward throughout the whole rep."
    ]
  },
  {
    slug: "bulgarian-split-squat",
    name: "Bulgarian Split Squat",
    description: "A demanding unilateral knee-dominant movement correcting left-to-right leg imbalances.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 8–10 repetitions per leg",
    instructions: [
      "Stand 2–3 feet in front of a bench, placing top of rear foot flat on the bench pad.",
      "Hold dumbbells at your sides and keep torso upright or slightly leaning forward.",
      "Lower your rear knee toward floor until front thigh reaches parallel.",
      "Drive through front heel to return to top standing position."
    ],
    commonMistakes: [
      "Stance too short causing front heel to raise off ground.",
      "Allowing front knee to collapse inward."
    ],
    safetyNotes: [
      "Master with bodyweight before adding heavy dumbbell loads."
    ],
    tips: [
      "Lean forward slightly at hips to bias glutes; stay upright to bias quads."
    ]
  },
  {
    slug: "leg-press",
    name: "45-Degree Leg Press",
    description: "A machine-supported lower body press that allows heavy quad and glute training without spinal loading.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
    difficulty: "Beginner",
    equipment: ["Leg Press Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3–4 sets of 10–12 repetitions",
    instructions: [
      "Sit back firmly into seat and place feet shoulder-width apart on platform.",
      "Release safety bars and lower platform until knees are bent at 90 degrees.",
      "Press the sled back up through whole foot, stopping just short of locking knees."
    ],
    commonMistakes: [
      "Allowing lower back/pelvis to peel off seat at bottom of movement.",
      "Violently locking knees out at the top."
    ],
    safetyNotes: [
      "Never allow knees to track inside foot line."
    ],
    tips: [
      "Place feet lower on platform to bias quads; place higher to bias glutes."
    ]
  },
  {
    slug: "lying-leg-curl",
    name: "Lying Hamstring Leg Curl",
    description: "An isolation knee-flexion exercise isolating all heads of the hamstrings.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Hamstrings", "Calves"],
    difficulty: "Beginner",
    equipment: ["Hamstring Curl Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–15 repetitions",
    instructions: [
      "Lie face down on machine with roller pad positioned just below calf muscles.",
      "Grasp machine handles and keep hips planted firmly against pad.",
      "Curl heels up toward glutes as far as possible and squeeze hamstrings.",
      "Lower weight stack slowly over 2–3 seconds back to starting extension."
    ],
    commonMistakes: [
      "Lifting hips up off bench to heave the weight up.",
      "Snapping heels back rapidly without eccentric control."
    ],
    safetyNotes: [
      "Ensure knee axis of rotation lines up with machine pivot point."
    ],
    tips: [
      "Point toes slightly away to maximize pure hamstring tension."
    ]
  },
  {
    slug: "walking-dumbbell-lunge",
    name: "Walking Dumbbell Lunge",
    description: "A functional dynamic unilateral leg exercise testing knee tracking, balance, and glute stamina.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Calves", "Core"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 steps per leg",
    instructions: [
      "Stand tall holding dumbbells at sides.",
      "Step forward and drop back knee gently toward floor until front thigh is parallel.",
      "Drive through front heel and step smoothly forward directly into the next stride."
    ],
    commonMistakes: [
      "Banging back knee hard into the floor.",
      "Taking strides that are too narrow, causing balance loss."
    ],
    safetyNotes: [
      "Maintain tall posture; do not round forward at spine."
    ],
    tips: [
      "Step out slightly wider than hip width for balanced tracking."
    ]
  },
  {
    slug: "leg-extension",
    name: "Seated Leg Extension",
    description: "An open-chain isolation exercise that targets the quadriceps at peak shortened extension.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps"],
    difficulty: "Beginner",
    equipment: ["Leg Extension Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Sit in machine with pad positioned against lower shins just above ankles.",
      "Grasp side handles and pull yourself down securely into the seat.",
      "Extend legs smoothly until knees are straight, squeezing quads for 1 second.",
      "Lower pad under full control back to starting bend."
    ],
    commonMistakes: [
      "Kicking the pad up using momentum.",
      "Setting back pad too far back, misaligning knee joints."
    ],
    safetyNotes: [
      "If you have patellofemoral pain, limit depth or use lighter controlled weight."
    ],
    tips: [
      "Control the eccentric descent to fully stimulate the rectus femoris."
    ]
  },
  {
    slug: "standing-calf-raise",
    name: "Standing Calf Raise",
    description: "A straight-knee calf isolation exercise prioritizing the gastrocnemius muscle.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Gastrocnemius", "Soleus"],
    difficulty: "Beginner",
    equipment: ["Standing Calf Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "4 sets of 12–15 repetitions",
    instructions: [
      "Position balls of feet on platform ledge with shoulder pads resting on shoulders.",
      "Drop heels below ledge level until a deep calf stretch is achieved.",
      "Press through balls of feet and raise heels as high as possible.",
      "Pause for 1 second at full plantarflexion, then descend slowly."
    ],
    commonMistakes: [
      "Bouncing fast at the bottom using Achilles tendon elasticity.",
      "Bending knees during the press."
    ],
    safetyNotes: [
      "Do not step too close to the edge to avoid slipping."
    ],
    tips: [
      "Hold the bottom stretched position for a full 2-second pause to kill bounce reflex."
    ]
  },
  {
    slug: "seated-calf-raise",
    name: "Seated Calf Raise",
    description: "A bent-knee calf movement designed to isolate the deeper soleus muscle.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Soleus"],
    difficulty: "Beginner",
    equipment: ["Seated Calf Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 15–20 repetitions",
    instructions: [
      "Sit with balls of feet on platform and lower-thigh pad securely resting over knees.",
      "Release safety lever and drop heels down to a complete calf stretch.",
      "Push upward onto toes as high as possible, squeezing calves.",
      "Lower under control over 2–3 seconds."
    ],
    commonMistakes: [
      "Using short partial ranges of motion.",
      "Rushing repetitions."
    ],
    safetyNotes: [
      "Lock safety bar before stepping feet off ledge."
    ],
    tips: [
      "Because the soleus is slow-twitch dominant, higher reps (15–20) work exceptionally well."
    ]
  },
  {
    slug: "step-up",
    name: "Dumbbell Box Step-Up",
    description: "A unilateral vertical drive developing single-leg stability and glute strength.",
    muscleGroup: "Legs",
    secondaryMuscles: ["Quadriceps", "Glutes", "Hamstrings"],
    difficulty: "Beginner",
    equipment: ["Dumbbells", "Plyo Box"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 8–10 repetitions per leg",
    instructions: [
      "Stand facing a sturdy box or bench holding dumbbells at sides.",
      "Place entire right foot flat on the box surface.",
      "Drive down through right foot to lift body up, avoiding pushing off bottom foot.",
      "Step down with control using the same leg, then repeat."
    ],
    commonMistakes: [
      "Springing off the trailing calf instead of pulling with the top leg.",
      "Letting top knee cave inward on the ascent."
    ],
    safetyNotes: [
      "Ensure box is steady and slip-resistant before loading."
    ],
    tips: [
      "Keep torso tilted forward slightly to maximize glute contraction."
    ]
  },

  // ==========================================
  // SHOULDERS (10 Exercises)
  // ==========================================
  {
    slug: "barbell-overhead-press",
    name: "Standing Barbell Overhead Press",
    description: "The premier vertical pressing test for overall shoulder power and overhead core stability.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Anterior Deltoids", "Triceps", "Upper Chest", "Core"],
    difficulty: "Advanced",
    equipment: ["Barbell"],
    workoutType: "Strength",
    setsRepsRecommendation: "3–4 sets of 5–8 repetitions",
    instructions: [
      "Clean or unrack bar onto front shoulders, grip just outside shoulder width.",
      "Squeeze glutes, brace abs, and tuck chin slightly.",
      "Press bar vertically in a straight line, pushing head forward once bar clears forehead.",
      "Lock out arms overhead with bar centered directly over midfoot."
    ],
    commonMistakes: [
      "Leaning back excessively to recruit upper chest.",
      "Failing to clear the head path properly."
    ],
    safetyNotes: [
      "Do not hyper-extend lumbar spine during lockout."
    ],
    tips: [
      "Squeeze glutes hard to provide a solid base and prevent lumbar hyperextension."
    ]
  },
  {
    slug: "dumbbell-lateral-raise",
    name: "Standing Dumbbell Lateral Raise",
    description: "The primary isolation exercise to build width across the lateral deltoid.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Lateral Deltoids", "Trapezius"],
    difficulty: "Beginner",
    equipment: ["Dumbbells"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3–4 sets of 12–15 repetitions",
    instructions: [
      "Stand holding dumbbells by sides with a slight forward torso lean.",
      "Maintain a soft bend in elbows and lift arms out to the sides.",
      "Raise dumbbells until upper arms are parallel to the floor.",
      "Lower weights slowly back to thighs with control."
    ],
    commonMistakes: [
      "Shrugging shoulders up toward ears to lift load.",
      "Swinging the torso to heave heavy weights."
    ],
    safetyNotes: [
      "Do not lift elbows higher than shoulder level to avoid impingement."
    ],
    tips: [
      "Pour invisible water pitchers at top: lead with elbows, not wrists."
    ]
  },
  {
    slug: "cable-lateral-raise",
    name: "Single-Arm Cable Lateral Raise",
    description: "A lateral deltoid exercise providing constant resistance throughout the entire range of motion.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Lateral Deltoids"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions per side",
    instructions: [
      "Set cable pulley at knee or ankle height and grab handle with outside hand.",
      "Hold machine frame with inside hand for stability.",
      "Raise arm out to the side until level with shoulder.",
      "Control the cable smoothly back down across your waist."
    ],
    commonMistakes: [
      "Yanking the cable off the bottom stack with body momentum.",
      "Rotating hand upward into external rotation."
    ],
    safetyNotes: [
      "Keep movement slow and smooth."
    ],
    tips: [
      "Route cable behind your back or between legs to keep clean line of pull."
    ]
  },
  {
    slug: "face-pull",
    name: "Cable Face Pull",
    description: "A crucial shoulder health exercise targeting rear delts, external rotators, and postural traps.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Rear Deltoids", "Infraspinatus", "Trapezius", "Rhomboids"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 15–20 repetitions",
    instructions: [
      "Set cable pulley to eye height with a rope attachment.",
      "Grasp rope ends with thumbs pointing backward toward you.",
      "Step back, pull rope directly toward your eyes while spreading hands wide apart.",
      "Externally rotate hands back behind ears and squeeze rear shoulders.",
      "Return slowly to arm extension."
    ],
    commonMistakes: [
      "Pulling downward toward throat like an upright row.",
      "Leaning back excessively to move the weight."
    ],
    safetyNotes: [
      "Use moderate weight; focus on rotation and contraction quality."
    ],
    tips: [
      "Think of showing your double-biceps at the finish of each rep."
    ]
  },
  {
    slug: "bent-over-rear-delt-flye",
    name: "Bent-Over Dumbbell Rear Delt Flye",
    description: "An isolation movement dedicated to targeting the posterior deltoid head.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Rear Deltoids", "Rhomboids"],
    difficulty: "Beginner",
    equipment: ["Dumbbells"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Hinge forward at hips until torso is nearly parallel to floor.",
      "Hold light dumbbells beneath chest with palms facing each other and soft elbows.",
      "Raise arms out wide to sides until elbows are level with back.",
      "Lower dumbbells slowly without letting back round."
    ],
    commonMistakes: [
      "Using back muscles to row the dumbbells instead of flying wide.",
      "Standing up too upright."
    ],
    safetyNotes: [
      "Support forehead against an incline bench pad if lower back tires."
    ],
    tips: [
      "Lead the motion with your pinkies pointing up slightly."
    ]
  },
  {
    slug: "arnold-press",
    name: "Arnold Dumbbell Press",
    description: "A rotational overhead press that hits all three heads of the deltoid throughout the movement.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Anterior Deltoids", "Lateral Deltoids", "Triceps"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Bench"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 8–12 repetitions",
    instructions: [
      "Sit on an upright bench holding dumbbells in front of shoulders, palms facing your chest.",
      "Begin pressing up while rotating wrists outward so palms face forward at the top.",
      "Lock out overhead, then reverse rotation as you lower back to the starting chest position."
    ],
    commonMistakes: [
      "Rushing the rotation before initiating vertical press.",
      "Arching lower spine during overhead extension."
    ],
    safetyNotes: [
      "Avoid if dealing with subacromial shoulder impingement."
    ],
    tips: [
      "Make the rotation fluid and continuous throughout the press."
    ]
  },
  {
    slug: "dumbbell-front-raise",
    name: "Alternating Dumbbell Front Raise",
    description: "An anterior deltoid isolation exercise for overhead flexion development.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Anterior Deltoids", "Upper Chest"],
    difficulty: "Beginner",
    equipment: ["Dumbbells"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions per arm",
    instructions: [
      "Stand upright holding dumbbells across front of thighs.",
      "Keep core tight and raise one arm straight out in front of you.",
      "Lift dumbbell to shoulder level, pause, and lower slowly.",
      "Repeat with opposite arm."
    ],
    commonMistakes: [
      "Rocking torso backward to swing dumbbells up.",
      "Lifting weights far above eye height."
    ],
    safetyNotes: [
      "Keep wrist straight; don't let weight bend it backward."
    ],
    tips: [
      "Use a neutral hammer grip if pronated grip causes front shoulder pinch."
    ]
  },
  {
    slug: "cable-upright-row",
    name: "Cable Upright Row",
    description: "A vertical pulling exercise emphasizing lateral delts and trapezius.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Lateral Deltoids", "Trapezius", "Biceps"],
    difficulty: "Intermediate",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions",
    instructions: [
      "Attach a straight or EZ-bar to a low cable pulley.",
      "Grasp bar with an overhand grip slightly narrower than shoulder width.",
      "Pull bar vertically along front of torso, driving elbows up and out.",
      "Stop when elbows reach shoulder height, then lower smoothly."
    ],
    commonMistakes: [
      "Gripping hands too close together, which stresses wrists and shoulders.",
      "Pulling elbows up higher than ears."
    ],
    safetyNotes: [
      "Keep elbows level with or slightly below shoulders to avoid impingement."
    ],
    tips: [
      "Keep the bar skimming close along your shirt line."
    ]
  },
  {
    slug: "reverse-pec-deck",
    name: "Reverse Pec Deck Machine Flye",
    description: "A machine isolation exercise providing strict targeting to the posterior deltoid without stabilization fatigue.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Rear Deltoids", "Rhomboids"],
    difficulty: "Beginner",
    equipment: ["Pec Deck Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Sit facing the pec deck machine pad with chest pressed flat against support.",
      "Adjust handles so arms are parallel to the floor.",
      "Grasp handles and sweep arms outward in a reverse arc until even with torso.",
      "Contract rear delts, then guide handles back without letting weight stack touch."
    ],
    commonMistakes: [
      "Shrugging traps to initiate movement.",
      "Letting chest detach from support pad."
    ],
    safetyNotes: [
      "Keep wrists neutral and elbow bend static."
    ],
    tips: [
      "Adjust seat height so handles sit directly at shoulder height."
    ]
  },
  {
    slug: "dumbbell-push-press",
    name: "Dumbbell Push Press",
    description: "A power-based vertical press incorporating leg drive to overload the shoulder lockout.",
    muscleGroup: "Shoulders",
    secondaryMuscles: ["Anterior Deltoids", "Triceps", "Quadriceps", "Core"],
    difficulty: "Intermediate",
    equipment: ["Dumbbells"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 5–8 repetitions",
    instructions: [
      "Stand holding dumbbells at shoulder level with neutral grip.",
      "Dip knees quickly into a shallow quarter-squat.",
      "Explosively extend hips and knees while driving dumbbells overhead.",
      "Lock out arms, then lower dumbbells with control back to shoulders."
    ],
    commonMistakes: [
      "Squatting too deep instead of a snappy quarter dip.",
      "Pressing before leg extension is completed."
    ],
    safetyNotes: [
      "Absorb catch at shoulders with soft knees."
    ],
    tips: [
      "Transfer momentum smoothly from lower body directly into the weights."
    ]
  },

  // ==========================================
  // CORE (10 Exercises)
  // ==========================================
  {
    slug: "hanging-leg-raise",
    name: "Hanging Leg Raise",
    description: "A high-intensity anterior core exercise that trains hip flexion and pelvic posterior rotation.",
    muscleGroup: "Core",
    secondaryMuscles: ["Rectus Abdominis", "Hip Flexors", "Forearms"],
    difficulty: "Advanced",
    equipment: ["Pull-Up Bar"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 8–12 repetitions",
    instructions: [
      "Hang from a pull-up bar with arms straight and body still.",
      "Brace core and raise straight legs in front of you until parallel to floor or higher.",
      "Tilt pelvis up at top to fully recruit rectus abdominis.",
      "Lower legs slowly back down without swinging."
    ],
    commonMistakes: [
      "Swinging legs back and forth to create momentum.",
      "Only flexing hips without rotating pelvis upward."
    ],
    safetyNotes: [
      "Bend knees (hanging knee raise) if hamstrings or lower back are tight."
    ],
    tips: [
      "Imagine rolling your pelvis upward toward your sternum."
    ]
  },
  {
    slug: "cable-woodchopper",
    name: "Cable Woodchopper",
    description: "A standing rotational core exercise that builds anti-rotation and rotational power through obliques.",
    muscleGroup: "Core",
    secondaryMuscles: ["Obliques", "Transverse Abdominis", "Shoulders"],
    difficulty: "Intermediate",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 10–12 repetitions per side",
    instructions: [
      "Set cable pulley to high position with a single handle.",
      "Stand sideways to machine with feet wider than shoulders.",
      "Grasp handle with both hands, arms extended, and rotate torso downward across opposite knee.",
      "Pivot back foot slightly and contract obliques at bottom.",
      "Return under control to high starting point."
    ],
    commonMistakes: [
      "Bending elbows and turning movement into an arm pull.",
      "Failing to pivot rear hip, putting torque on knees."
    ],
    safetyNotes: [
      "Maintain neutral spine throughout rotation."
    ],
    tips: [
      "Drive rotation from the hips and core, keeping arms as fixed levers."
    ]
  },
  {
    slug: "ab-wheel-rollout",
    name: "Ab Wheel Rollout",
    description: "An advanced anti-extension exercise training total-body core bracing and anterior stability.",
    muscleGroup: "Core",
    secondaryMuscles: ["Rectus Abdominis", "Lats", "Transverse Abdominis"],
    difficulty: "Advanced",
    equipment: ["Ab Wheel"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 6–10 repetitions",
    instructions: [
      "Kneel on a soft pad holding ab wheel handles directly under shoulders.",
      "Posteriorly tilt pelvis and round upper back slightly into hollow body.",
      "Roll the wheel slowly forward, extending hips and arms as far as core can maintain.",
      "Contract abs hard to pull wheel back under shoulders to starting position."
    ],
    commonMistakes: [
      "Letting hips drop and hyperextending lower back at extension.",
      "Initiating return by pushing hips back instead of flexing abs."
    ],
    safetyNotes: [
      "Only roll out as far as your core can sustain without lower back pinching."
    ],
    tips: [
      "Keep glutes squeezed throughout the full repetition."
    ]
  },
  {
    slug: "pallof-press",
    name: "Standing Cable Pallof Press",
    description: "A premier anti-rotation movement building transverse abdominis bracing and hip stability.",
    muscleGroup: "Core",
    secondaryMuscles: ["Transverse Abdominis", "Obliques", "Glutes"],
    difficulty: "Beginner",
    equipment: ["Cable Machine"],
    workoutType: "Strength",
    setsRepsRecommendation: "3 sets of 10–12 reps (with 2-sec hold)",
    instructions: [
      "Set cable pulley at chest height and hold handle with both hands at sternum.",
      "Step sideways from tower into an athletic stance.",
      "Press hands straight out in front of chest, resisting the cable trying to twist your torso.",
      "Hold extended position for 2 seconds, then return hands slowly to chest."
    ],
    commonMistakes: [
      "Allowing shoulders or hips to rotate toward the cable stack.",
      "Rushing repetitions without holding the anti-rotational point."
    ],
    safetyNotes: [
      "Keep feet anchored firmly into floor."
    ],
    tips: [
      "Exhale hard as you press hands forward away from your body."
    ]
  },
  {
    slug: "deadbug",
    name: "Dead Bug",
    description: "A cross-body coordination drill that reinforces ribcage depression and lumbar stability.",
    muscleGroup: "Core",
    secondaryMuscles: ["Transverse Abdominis", "Hip Flexors"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 8–10 repetitions per side",
    instructions: [
      "Lie face up with arms extended toward ceiling and knees bent 90 degrees over hips.",
      "Press lower back firmly into floor so there is zero gap.",
      "Slowly extend right arm back overhead while extending left leg straight toward floor.",
      "Pause hovering just above floor, then return and alternate sides."
    ],
    commonMistakes: [
      "Letting the lower back arch away from the floor during extension.",
      "Moving limbs too rapidly."
    ],
    safetyNotes: [
      "If back arches, don't lower leg all the way to floor."
    ],
    tips: [
      "Exhale through pursed lips as arm and leg reach out."
    ]
  },
  {
    slug: "side-plank",
    name: "Side Plank",
    description: "An isometric lateral core exercise developing lateral hip stability and quadratus lumborum endurance.",
    muscleGroup: "Core",
    secondaryMuscles: ["Obliques", "Gluteus Medius", "Shoulders"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 30–45 second holds per side",
    instructions: [
      "Lie on your side with elbow directly beneath shoulder and feet stacked or staggered.",
      "Raise hips off floor until body forms a straight line from ankles to neck.",
      "Brace core and squeeze glutes, holding position without letting hips sag."
    ],
    commonMistakes: [
      "Allowing hips to drop toward the floor.",
      "Rotating top shoulder forward out of alignment."
    ],
    safetyNotes: [
      "Drop bottom knee to floor to reduce leverage if needed."
    ],
    tips: [
      "Push hard through the supporting elbow into the floor."
    ]
  },
  {
    slug: "russian-twist",
    name: "Seated Russian Twist",
    description: "A seated rotational exercise developing dynamic oblique strength and hip stability.",
    muscleGroup: "Core",
    secondaryMuscles: ["Obliques", "Rectus Abdominis", "Hip Flexors"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 15–20 twists total",
    instructions: [
      "Sit on floor, lean torso back at 45 degrees, and elevate feet slightly off floor.",
      "Clasp hands together in front of chest.",
      "Rotate torso from side to side, bringing hands toward floor next to hips.",
      "Maintain stable knees and steady breathing."
    ],
    commonMistakes: [
      "Flapping arms across body without rotating ribcage.",
      "Rounding the lower spine excessively."
    ],
    safetyNotes: [
      "Keep feet on floor if lower back experiences strain."
    ],
    tips: [
      "Follow your hands with your eyes to ensure full thoracic rotation."
    ]
  },
  {
    slug: "cable-crunch",
    name: "Kneeling Cable Crunch",
    description: "A loaded spinal-flexion exercise that isolates the rectus abdominis under continuous resistance.",
    muscleGroup: "Core",
    secondaryMuscles: ["Rectus Abdominis"],
    difficulty: "Intermediate",
    equipment: ["Cable Machine"],
    workoutType: "Hypertrophy",
    setsRepsRecommendation: "3 sets of 12–15 repetitions",
    instructions: [
      "Kneel beneath a high pulley with a rope attachment held against your temples or crown.",
      "Lock hips in place over knees.",
      "Contract abs to curl ribs downward toward pelvis, rounding back as you crunch.",
      "Pause for 1 second at full flexion, then slowly unroll back to starting position."
    ],
    commonMistakes: [
      "Sitting hips back onto heels to pull the weight with bodyweight.",
      "Pulling rope down with arms instead of flexing abs."
    ],
    safetyNotes: [
      "Do not forcefully yank with the neck."
    ],
    tips: [
      "Imagine trying to touch your elbows to your mid-thighs."
    ]
  },
  {
    slug: "mountain-climber",
    name: "Mountain Climbers",
    description: "A dynamic plank exercise combining core stabilization, hip flexor drive, and conditioning.",
    muscleGroup: "Core",
    secondaryMuscles: ["Hip Flexors", "Shoulders", "Quadriceps"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 30–45 seconds",
    instructions: [
      "Assume a high push-up plank with hands under shoulders and core braced.",
      "Drive right knee forward toward chest without hips rising.",
      "Quickly step right foot back while simultaneously driving left knee forward.",
      "Continue alternating in a smooth, rhythmic sprint cadence."
    ],
    commonMistakes: [
      "Bouncing hips high into an inverted V.",
      "Letting shoulders drift behind wrists."
    ],
    safetyNotes: [
      "Maintain a flat plank throughout the duration."
    ],
    tips: [
      "Prioritize knee drive height and torso stability over raw speed."
    ]
  },
  {
    slug: "bird-dog",
    name: "Bird-Dog",
    description: "A foundational rehabilitation and stability exercise training contralateral core bracing and spinal alignment.",
    muscleGroup: "Core",
    secondaryMuscles: ["Erector Spinae", "Glutes", "Shoulders"],
    difficulty: "Beginner",
    equipment: ["Bodyweight"],
    workoutType: "Endurance",
    setsRepsRecommendation: "3 sets of 8–10 repetitions per side",
    instructions: [
      "Start on all fours with hands beneath shoulders and knees beneath hips.",
      "Brace core to keep spine and pelvis level.",
      "Simultaneously reach right arm forward and left leg straight backward.",
      "Hold top position for 2 seconds, then return and switch to opposite limbs."
    ],
    commonMistakes: [
      "Rotating hips or arching spine when lifting leg.",
      "Lifting limbs higher than torso level."
    ],
    safetyNotes: [
      "Keep neck neutral with eyes fixed on floor."
    ],
    tips: [
      "Reach your heel backward toward the opposite wall rather than kicking upward."
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