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

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
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