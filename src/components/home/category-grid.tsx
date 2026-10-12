"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MUSCLE_CATEGORIES } from "@/content/sample-previews";
import { CategoryBg } from "@/components/home/category-bg";
import { ArrowUpRight, Dumbbell } from "lucide-react";

function MusclePreviewImage({ id, name }: { id: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#141414] border border-[#303030]/60 mb-5">
      {!hasError ? (
        <Image
          src={`/images/muscles/${id}.jpg`}
          alt={`${name} muscle group`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-[#555] bg-[#171717]">
          <Dumbbell className="w-10 h-10 text-[#FF6B1A]/40 mb-2" />
          <span className="text-xs uppercase font-mono tracking-wider text-[#737373]">
            {name}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
    </div>
  );
}

export function CategoryGrid() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center border-b border-[#303030] py-16">
      {/* Background Component */}
      <CategoryBg src="/images/categories/categories-bg.jpg" />

      <Container className="w-full relative z-10">
        <SectionHeading
          title="Explore By Muscle Group"
          subtitle="Target specific areas with clear movement standards and detailed execution cues."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MUSCLE_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/exercises?muscle=${category.id}`}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-[#1C1C1C]/90 hover:bg-[#1C1C1C] border border-[#303030] hover:border-[#FF6B1A]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 block shadow-lg"
            >
              <div>
                <MusclePreviewImage id={category.id} name={category.name} />

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B1A] transition-colors">
                    {category.name}
                  </h3>
                  <span className="p-2 rounded-lg bg-[#252525] border border-[#303030] text-[#A3A3A3] group-hover:text-white group-hover:bg-[#FF6B1A] group-hover:border-[#FF6B1A] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#303030]/60 text-xs font-semibold text-[#A3A3A3] group-hover:text-white transition-colors">
                {category.count} Exercises Available
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}