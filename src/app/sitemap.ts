import { MetadataRoute } from "next";
import { getAllExercises } from "@/content/exercises";
import { getAllGuides } from "@/content/guides";
import { getAllTips } from "@/content/tips";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fitguide.vercel.app";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/exercises",
    "/guides",
    "/tips",
    "/nutrition",
    "/about",
    "/contact",
    "/privacy",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic exercise routes
  const exerciseRoutes: MetadataRoute.Sitemap = getAllExercises().map((ex) => ({
    url: `${baseUrl}/exercises/${ex.slug}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic guide routes
  const guideRoutes: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic tip routes
  const tipRoutes: MetadataRoute.Sitemap = getAllTips().map((tip) => ({
    url: `${baseUrl}/tips/${tip.slug}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...exerciseRoutes, ...guideRoutes, ...tipRoutes];
}