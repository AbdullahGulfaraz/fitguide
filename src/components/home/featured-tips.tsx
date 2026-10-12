import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllTips } from "@/content/tips";
import { FeaturedTipsBg } from "@/components/home/featured-tips-bg";

export function FeaturedTips() {
  const tips = getAllTips().slice(0, 3);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16 bg-[#101010]">
      {/* Background layer */}
      <FeaturedTipsBg src="/images/home/featured-tips-bg.jpg" />

      <Container className="w-full relative z-10">
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