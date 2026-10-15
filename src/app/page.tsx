import { Hero } from "@/components/home/hero";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedExercises } from "@/components/home/featured-exercises";
import { FeaturedGuides } from "@/components/home/featured-guides";
import { FeaturedTips } from "@/components/home/featured-tips";
import { NutritionPreview } from "@/components/home/nutrition-preview";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FeaturedExercises />
      <FeaturedGuides />
      <FeaturedTips />
      <NutritionPreview />
      <CtaBanner />
    </div>
  );
}