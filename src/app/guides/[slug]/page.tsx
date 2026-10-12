import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getAllGuides, getGuideBySlug } from "@/content/guides";
import { ArticleContent } from "@/components/articles/article-content";

interface GuideDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: GuideDetailPageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | FitGuide" };
  }

  return {
    title: `${guide.title} | FitGuide`,
    description: guide.excerpt,
  };
}

async function GuideDetailContent({ params }: GuideDetailPageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <ArticleContent
      article={guide}
      parentTitle="Guides"
      parentPath="/guides"
    />
  );
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-[#A3A3A3]">
          Loading guide...
        </div>
      }
    >
      <GuideDetailContent params={params} />
    </Suspense>
  );
}