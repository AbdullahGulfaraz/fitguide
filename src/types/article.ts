export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  lastReviewed: string;
  sections: ArticleSection[];
  relatedExerciseSlugs?: string[];
}