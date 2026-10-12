"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/article";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Lightbulb, Clock } from "lucide-react";

interface TipCardProps {
  tip: Article;
}

export function TipCard({ tip }: TipCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="group p-5 rounded-2xl bg-[#1C1C1C] border border-[#303030] flex flex-col justify-between hover:border-[#FF6B1A]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
      <div>
        {/* 1:1 Aspect Ratio Preview Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#141414] border border-[#303030]/60 mb-5">
          {!hasError && tip.image ? (
            <Image
              src={tip.image}
              alt={tip.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#555] bg-[#171717]">
              <Lightbulb className="w-10 h-10 text-[#FF6B1A]/40 mb-2" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#737373]">
                {tip.category}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
        </div>

        {/* Metadata Header */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="surface">{tip.category}</Badge>
          <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3]">
            {tip.readTimeMinutes && (
              <>
                <Clock className="w-3.5 h-3.5" />
                <span>{tip.readTimeMinutes} min</span>
              </>
            )}
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B1A] ml-1" />
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B1A] transition-colors">
          {tip.title}
        </h3>

        <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
          {tip.excerpt}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-[#303030]/60">
        <Link
          href={`/tips/${tip.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1.5 transition-colors group/link"
        >
          Read Tip{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}