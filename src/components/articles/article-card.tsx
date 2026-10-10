import React from "react";
import Link from "next/link";
import { Article } from "@/types/article";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  basePath: "guides" | "tips";
}

export function ArticleCard({ article, basePath }: ArticleCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-xl bg-[#1C1C1C] border border-[#303030] p-6 transition-all duration-200 hover:border-[#FF6B1A]/60 hover:-translate-y-1">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="surface">{article.category}</Badge>
          <span className="flex items-center gap-1 text-xs text-[#A3A3A3]">
            <Clock className="w-3.5 h-3.5" /> {article.readTimeMinutes} min read
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">
          {article.title}
        </h3>

        <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#303030] flex items-center justify-between">
        <span className="text-[11px] text-[#A3A3A3]">
          Reviewed: {article.lastReviewed}
        </span>
        <Link
          href={`/${basePath}/${article.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#FF6B1A] hover:text-[#e05b12] gap-1 transition-colors"
        >
          Read {basePath === "guides" ? "Guide" : "Tip"} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}