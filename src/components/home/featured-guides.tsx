import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { getAllGuides } from "@/content/guides";
import { ArrowRight, Clock } from "lucide-react";

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
            <article
              key={guide.slug}
              className="flex flex-col justify-between rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 transition-all duration-200 hover:border-[#FF6B1A]/50 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="surface">{guide.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-[#A3A3A3]">
                    <Clock className="w-3.5 h-3.5" /> {guide.readTimeMinutes} min read
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {guide.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#303030]">
                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1 transition-colors"
                >
                  Read Full Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}