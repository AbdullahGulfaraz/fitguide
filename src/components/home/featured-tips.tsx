import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllTips } from "@/content/tips";

export function FeaturedTips() {
  const tips = getAllTips().slice(0, 3);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16">
      <Container className="w-full">
        <SectionHeading
          title="Latest Fitness Tips"
          subtitle="Quick, practical takeaways you can apply directly to your next training session."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <ArticleCard key={tip.slug} article={tip} basePath="tips" />
          ))}
        </div>
      </Container>
    </section>
  );
}