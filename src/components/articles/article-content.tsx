"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/article";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, ChevronRight, ArrowLeft } from "lucide-react";
import { getExerciseBySlug } from "@/content/exercises";
import { ExerciseCard } from "@/components/exercises/exercise-card";

interface ArticleContentProps {
  article: Article;
  parentTitle: string;
  parentPath: string;
}

export function ArticleContent({
  article,
  parentTitle,
  parentPath,
}: ArticleContentProps) {
  const [imgError, setImgError] = useState(false);

  const relatedExercises = (article.relatedExerciseSlugs || [])
    .map((slug) => getExerciseBySlug(slug))
    .filter(Boolean);

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-[#A3A3A3] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={parentPath} className="hover:text-white transition-colors">
            {parentTitle}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#FF6B1A] font-medium truncate">{article.title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Button href={parentPath} variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to {parentTitle}
          </Button>
        </div>

        {/* Article Header with Optional Preview Thumbnail */}
        <header className="rounded-2xl bg-[#1C1C1C] border border-[#303030] p-6 sm:p-10 mb-10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={article.image && !imgError ? "lg:col-span-8" : "lg:col-span-12"}>
              <Badge variant="accent" className="mb-4">
                {article.category}
              </Badge>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-3xl mb-6">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#303030] text-xs text-[#A3A3A3]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF6B1A]" /> {article.readTimeMinutes} min read
                </span>
                {article.lastReviewed && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#FF6B1A]" /> Last Reviewed: {article.lastReviewed}
                  </span>
                )}
              </div>
            </div>

            {article.image && !imgError && (
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#303030]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="350px"
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-3xl space-y-8">
          {article.sections.map((section, idx) => (
            <section
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#1C1C1C] border border-[#303030]"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase">
                {section.heading}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-sm text-[#A3A3A3]">
                      <span className="text-[#FF6B1A] font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Related Exercises */}
        {relatedExercises.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#303030]">
            <h3 className="text-2xl font-bold text-white uppercase mb-6">
              Recommended Exercises Mentioned
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedExercises.map(
                (ex) => ex && <ExerciseCard key={ex.slug} exercise={ex} />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}