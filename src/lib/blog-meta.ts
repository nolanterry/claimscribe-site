export interface BlogMeta {
  slug: string;
  title: string;
  tags: string[];
}

export const BLOG_META: BlogMeta[] = [
  { slug: "ai-damage-assessment-restoration", title: "How AI Damage Assessment Is Changing Restoration Contracting", tags: ["ai", "damage-assessment", "technology"] },
  { slug: "ai-restoration-damage-assessment", title: "AI-Powered Restoration Damage Assessment: Complete Guide", tags: ["ai", "damage-assessment", "scoping"] },
  { slug: "contents-cleaning-pack-out-guide", title: "Contents Cleaning & Pack-Out Guide for Restoration Contractors", tags: ["scoping", "documentation", "restoration-process"] },
  { slug: "fire-damage-restoration-scoping-guide", title: "Fire Damage Restoration Scoping Guide: Step by Step", tags: ["fire-damage", "scoping", "documentation"] },
  { slug: "how-to-write-restoration-scope-of-work", title: "How to Write a Restoration Scope of Work That Gets Approved", tags: ["scoping", "documentation", "insurance"] },
  { slug: "insurance-claim-documentation-tips", title: "Insurance Claim Documentation Tips for Restoration Contractors", tags: ["insurance", "documentation", "claims"] },
  { slug: "insurance-companies-using-ai-against-contractors", title: "Insurance Companies Are Using AI Against Contractors", tags: ["ai", "insurance", "industry-trends"] },
  { slug: "mold-remediation-scope-of-work", title: "Mold Remediation Scope of Work: Template & Best Practices", tags: ["mold", "scoping", "documentation"] },
  { slug: "restoration-contractor-profit-margins", title: "Restoration Contractor Profit Margins: Industry Benchmarks", tags: ["business", "profitability", "industry-trends"] },
  { slug: "restoration-contractor-software-2026", title: "Best Restoration Contractor Software in 2026 (Compared)", tags: ["technology", "comparison", "restoration-process"] },
  { slug: "restoration-contractors-leaving-money", title: "Why Restoration Contractors Are Leaving Money on the Table", tags: ["business", "scoping", "profitability"] },
  { slug: "storm-damage-assessment-checklist", title: "Storm Damage Assessment Checklist for Restoration Contractors", tags: ["damage-assessment", "templates", "scoping"] },
  { slug: "supplement-writing-restoration-contractors", title: "Supplement Writing for Restoration Contractors: Get Paid More", tags: ["insurance", "claims", "profitability"] },
  { slug: "water-damage-documentation-best-practices", title: "Water Damage Documentation Best Practices for Contractors", tags: ["water-damage", "documentation", "compliance"] },
  { slug: "water-damage-scope-of-work-template", title: "Water Damage Scope of Work Template: Free Download", tags: ["water-damage", "scoping", "templates"] },
  { slug: "xactimate-estimating-tips", title: "Xactimate Estimating Tips: Write Faster, More Accurate Estimates", tags: ["xactimate", "documentation", "claims"] },
  { slug: "xactimate-tips-faster-claims", title: "Xactimate Tips for Faster Claims Processing", tags: ["xactimate", "insurance", "claims"] },
];

export function getRelatedPosts(currentSlug: string, count = 3): BlogMeta[] {
  const current = BLOG_META.find((p) => p.slug === currentSlug);
  if (!current) return BLOG_META.filter((p) => p.slug !== currentSlug).slice(0, count);

  const scored = BLOG_META
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  return scored.slice(0, count);
}
