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

export default async function TipDetailPage({ params }: TipDetailPageProps) {
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