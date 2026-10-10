import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FEATURED_TIPS } from "@/content/sample-previews";
import { ArrowRight, Sparkles } from "lucide-react";

export function FeaturedTips() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#303030]">
      <Container>
        <SectionHeading
          title="Latest Fitness Tips"
          subtitle="Quick, practical takeaways you can apply directly to your next training session."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TIPS.map((tip) => (
            <div
              key={tip.slug}
              className="p-6 rounded-xl bg-[#1C1C1C] border border-[#303030] flex flex-col justify-between hover:border-[#FF6B1A]/50 transition-all duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="surface">{tip.category}</Badge>
                  <Sparkles className="w-4 h-4 text-[#FF6B1A]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#303030]">
                <Link
                  href={`/tips/${tip.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1 transition-colors"
                >
                  Read Tip <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}