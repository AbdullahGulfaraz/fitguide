import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getAllTips, getTipBySlug } from "@/content/tips";
import { ArticleContent } from "@/components/articles/article-content";

interface TipDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllTips().map((tip) => ({
    slug: tip.slug,
  }));
}

export async function generateMetadata({ params }: TipDetailPageProps) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    return { title: "Tip Not Found | FitGuide" };
  }

  return {
    title: `${tip.title} | FitGuide`,
    description: tip.excerpt,
  };
}

async function TipDetailContent({ params }: TipDetailPageProps) {
  const { slug } = await params;
  const tip = getTipBySlug(slug);

  if (!tip) {
    notFound();
  }

  return (
    <ArticleContent
      article={tip}
      parentTitle="Tips"
      parentPath="/tips"
    />
  );
}

export default function TipDetailPage({ params }: TipDetailPageProps) {
  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-[#A3A3A3]">
          Loading tip...
        </div>
      }
    >
      <TipDetailContent params={params} />
    </Suspense>
  );
}