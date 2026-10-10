import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllTips } from "@/content/tips";

export const metadata = {
  title: "Fitness Tips | FitGuide",
  description: "Actionable cues, mindset advice, and quick tips for everyday training.",
};

export default function TipsPage() {
  const tips = getAllTips();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Fitness Tips"
          subtitle="Bite-sized, practical advice designed to help you train with higher quality and avoid common mistakes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <ArticleCard key={tip.slug} article={tip} basePath="tips" />
          ))}
        </div>
      </Container>
    </div>
  );
}