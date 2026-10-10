import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArticleCard } from "@/components/articles/article-card";
import { getAllGuides } from "@/content/guides";

export const metadata = {
  title: "Training Guides | FitGuide",
  description: "Comprehensive guides to workout programming, rep ranges, and gym fundamentals.",
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="Training Guides"
          subtitle="In-depth educational articles breaking down workout planning, equipment usage, and training strategy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <ArticleCard key={guide.slug} article={guide} basePath="guides" />
          ))}
        </div>
      </Container>
    </div>
  );
}