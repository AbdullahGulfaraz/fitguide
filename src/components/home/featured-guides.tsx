import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllGuides } from "@/content/guides";
import { FeaturedGuidesBg } from "@/components/home/featured-guides-bg";

export function FeaturedGuides() {
  const guides = getAllGuides().slice(0, 3);

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16 bg-[#101010]">
      {/* Background with edge vignettes and error fallback */}
      <FeaturedGuidesBg src="/images/home/featured-guides-bg.jpg" />

      <Container className="w-full relative z-10">
        <SectionHeading
          title="Featured Training Guides"
          subtitle="Structured, step-by-step reading to help you plan routines and master gym principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <ArticleCard key={guide.slug} article={guide} basePath="guides" />
          ))}
        </div>
      </Container>
    </section>
  );
}