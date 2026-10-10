export interface NutritionPillar {
  title: string;
  category: string;
  summary: string;
  keyPoints: string[];
  recommendation: string;
}

export const NUTRITION_PILLARS: NutritionPillar[] = [
  {
    title: "Macronutrient Balance",
    category: "Fuel Foundations",
    summary: "Adequate distribution of protein, carbohydrates, and dietary fats supports energy and tissue synthesis.",
    keyPoints: [
      "Protein provides the essential amino acids necessary for muscle repair and immune function.",
      "Carbohydrates are your muscles' primary energy substrate for high-intensity lifting and movement.",
      "Dietary fats regulate hormone production and support vitamin absorption (A, D, E, K)."
    ],
    recommendation: "Aim for a source of complete protein with every main meal and prioritize minimally processed whole carbohydrates like oats, rice, and potatoes."
  },
  {
    title: "Hydration & Electrolytes",
    category: "Performance",
    summary: "Even minor dehydration can drop muscular endurance, focus, and core temperature regulation.",
    keyPoints: [
      "Water constitutes approximately 75% of skeletal muscle tissue.",
      "Sweating depletes sodium, potassium, and magnesium during prolonged training.",
      "Thirst is a lagging indicator of fluid loss."
    ],
    recommendation: "Drink water consistently throughout the day, aiming for pale yellow urine, and consider a pinch of salt or electrolyte fluids for intense sessions exceeding 60 minutes."
  },
  {
    title: "Pre & Post-Workout Nutrition",
    category: "Nutrient Timing",
    summary: "Fueling appropriately around sessions maximizes training capacity and jumpstarts muscle protein synthesis.",
    keyPoints: [
      "Pre-workout: Consume easily digestible carbs and moderate protein 60–90 minutes prior to training.",
      "Post-workout: Ingest a balanced meal containing 20–40g of protein within a couple of hours after training.",
      "Avoid excessively high-fat meals immediately before lifting, as fats slow down gastric emptying."
    ],
    recommendation: "Focus on overall daily intake first; nutrient timing provides fine-tuning once baseline nutrition habits are solid."
  },
  {
    title: "Sustainable Habits vs. Extreme Diets",
    category: "Long-Term Health",
    summary: "Consistency over months and years will always outperform severe, restrictive short-term dieting.",
    keyPoints: [
      "Crash diets trigger metabolic slowdown and rapid rebound weight gain.",
      "Overly restrictive food lists promote an unhealthy psychological relationship with eating.",
      "Sustainability means an eating pattern you can envision following indefinitely."
    ],
    recommendation: "Build meals around whole foods 80–90% of the time, allowing room for personal preferences and social meals without guilt."
  }
];