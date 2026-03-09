import type { MetadataRoute } from "next";

const blogSlugs = [
  "insurance-companies-using-ai-against-contractors",
  "ai-damage-assessment-restoration",
  "ai-restoration-damage-assessment",
  "how-to-write-restoration-scope-of-work",
  "insurance-claim-documentation-tips",
  "restoration-contractor-software-2026",
  "restoration-contractors-leaving-money",
  "water-damage-documentation-best-practices",
  "water-damage-scope-of-work-template",
  "xactimate-estimating-tips",
  "xactimate-tips-faster-claims",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://claimscribe.ai";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/compare/xactimate`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/compare/encircle`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];
}
