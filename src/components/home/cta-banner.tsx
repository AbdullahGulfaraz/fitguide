import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CtaBannerBg } from "@/components/home/cta-banner-bg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center bg-[#101010] py-16 border-b border-[#303030]">
      {/* Background with edge vignettes and spotlight blur */}
      <CtaBannerBg src="/images/home/cta-banner-bg.jpg" />

      <Container className="w-full relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            Ready to Begin Training?
          </h2>
          <p className="mt-4 text-[#A3A3A3] leading-relaxed text-base sm:text-lg">
            Browse our complete exercise directory with step-by-step instructions, equipment details, and muscle breakdowns.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/exercises" variant="primary" size="lg" className="gap-2">
              Browse Exercise Library <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}