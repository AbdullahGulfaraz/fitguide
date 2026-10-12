import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllGuides } from "@/content/guides";

export function FeaturedGuides() {
  const guides = getAllGuides().slice(0, 3);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16">
      <Container className="w-full">
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