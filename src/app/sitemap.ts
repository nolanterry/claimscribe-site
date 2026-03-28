import type { MetadataRoute } from "next";
import { getAllTags } from "@/lib/blog-posts";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";

const blogSlugs = [
  "acv-vs-rcv-depreciation-recovery",
  "large-loss-commercial-restoration",
  "emergency-services-billing-restoration",
  "roof-damage-scoping-hail-wind",
  "subcontractor-management-restoration",
  "smoke-damage-classes-cleaning-methods",
  "drying-equipment-placement-science",
  "scaling-restoration-business-1m-to-5m",
  "fire-damage-restoration-scoping-guide",
  "mold-remediation-scope-of-work",
  "supplement-writing-restoration-contractors",
  "storm-damage-assessment-checklist",
  "restoration-contractor-profit-margins",
  "contents-cleaning-pack-out-guide",
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
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/customers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/status`, lastModified: now, changeFrequency: "daily" as const, priority: 0.5 },
    { url: `${base}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/water-damage-restoration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/fire-damage-contractors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/multi-location-franchises`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/blog/authors`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/blog/authors/nolan-terry`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/blog/authors/claimscribe-team`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/compare/xactimate`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/compare/encircle`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/changelog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/blog/tag`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 },
    ...getAllTags().map(({ tag }) => ({ url: `${base}/blog/tag/${tag}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...GLOSSARY_TERMS.map((term) => ({ url: `${base}/glossary/${term.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
