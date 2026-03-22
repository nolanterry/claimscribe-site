export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  POSTS.forEach((p) => p.tags.forEach((t) => tagMap.set(t, (tagMap.get(t) || 0) + 1)));
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return POSTS.filter((p) => p.tags.includes(tag));
}

export const TAG_LABELS: Record<string, string> = {
  "scoping": "Scoping",
  "water-damage": "Water Damage",
  "fire-damage": "Fire Damage",
  "mold": "Mold",
  "storm-damage": "Storm Damage",
  "xactimate": "Xactimate",
  "documentation": "Documentation",
  "insurance": "Insurance",
  "supplements": "Supplements",
  "estimating": "Estimating",
  "business": "Business",
  "profit": "Profit",
  "ai": "AI",
  "contents": "Contents",
  "claims": "Claims",
  "software": "Software",
  "best-practices": "Best Practices",
  "templates": "Templates",
};

export const POSTS: BlogPost[] = [
  {
    slug: "fire-damage-restoration-scoping-guide",
    title: "Fire Damage Restoration Scoping Guide: Room-by-Room Checklist",
    excerpt:
      "Complete fire damage scoping checklist covering structure, smoke, water from suppression, contents, and odor treatment — plus the Xactimate line items that separate a $40K scope from a $65K scope.",
    date: "2026-03-17",
    readTime: "14 min read",
    category: "Scoping Guides",
    tags: ["scoping", "fire-damage", "xactimate", "documentation"],
    author: "nolan-terry",
  },
  {
    slug: "mold-remediation-scope-of-work",
    title: "How to Write a Mold Remediation Scope of Work That Gets Approved",
    excerpt:
      "Step-by-step guide to IICRC S520-compliant mold remediation scopes. Covers containment, HEPA filtration, antimicrobial treatment, and post-remediation verification.",
    date: "2026-03-17",
    readTime: "13 min read",
    category: "Scoping Guides",
    tags: ["scoping", "mold", "documentation", "insurance"],
    author: "nolan-terry",
  },
  {
    slug: "supplement-writing-restoration-contractors",
    title: "Supplement Writing for Restoration Contractors: Get Paid What You're Owed",
    excerpt:
      "Master insurance claim supplements. When to supplement, documentation adjusters need, and how to recover $5K-$20K+ per job with professional supplement packages.",
    date: "2026-03-17",
    readTime: "15 min read",
    category: "Claims & Billing",
    tags: ["supplements", "claims", "insurance", "business"],
    author: "nolan-terry",
  },
  {
    slug: "storm-damage-assessment-checklist",
    title: "Storm Damage Assessment Checklist for Restoration Contractors",
    excerpt:
      "Complete storm damage checklist covering wind, hail, rain intrusion, and debris impact. Exterior and interior inspection workflows with photo documentation protocol.",
    date: "2026-03-17",
    readTime: "12 min read",
    category: "Scoping Guides",
    tags: ["storm-damage", "scoping", "documentation", "insurance"],
    author: "nolan-terry",
  },
  {
    slug: "restoration-contractor-profit-margins",
    title: "Restoration Contractor Profit Margins: How to Hit 40%+ Net on Every Job",
    excerpt:
      "Breakdown of profit margins by job type. Where margins leak, how top contractors hit 40%+ net, and the pricing strategies that separate profitable shops from struggling ones.",
    date: "2026-03-17",
    readTime: "16 min read",
    category: "Business Growth",
    tags: ["business", "profit", "estimating"],
    author: "nolan-terry",
  },
  {
    slug: "contents-cleaning-pack-out-guide",
    title: "Contents Cleaning & Pack-Out Guide for Restoration Contractors",
    excerpt:
      "Complete guide to contents cleaning and pack-out operations. Inventory documentation, cleaning methods by material type, storage protocols, and the Xactimate line items that maximize claim value.",
    date: "2026-03-17",
    readTime: "14 min read",
    category: "Scoping Guides",
    tags: ["contents", "scoping", "xactimate", "documentation"],
    author: "nolan-terry",
  },
  {
    slug: "insurance-companies-using-ai-against-contractors",
    title: "Insurance Companies Are Using AI to Write Estimates — Here's How Contractors Can Fight Back",
    excerpt:
      "Carriers are deploying AI to generate damage estimates, bypassing adjusters entirely. Contractors without AI tools are at a growing disadvantage in claim disputes.",
    date: "2026-03-09",
    readTime: "9 min read",
    category: "Industry Trends",
    tags: ["ai", "insurance", "claims", "estimating"],
    author: "nolan-terry",
  },
  {
    slug: "ai-damage-assessment-restoration",
    title: "How AI Damage Assessment Is Changing Restoration Contracting",
    excerpt:
      "How AI photo analysis speeds up scoping, reduces missed items, and gets claims approved faster than traditional manual assessment methods.",
    date: "2026-03-05",
    readTime: "12 min read",
    category: "Industry Innovation",
    tags: ["ai", "scoping", "documentation", "software"],
    author: "nolan-terry",
  },
  {
    slug: "ai-restoration-damage-assessment",
    title: "AI in Restoration: How Technology is Changing Damage Assessment",
    excerpt:
      "From computer vision to natural language processing, explore how AI tools are transforming the way restoration contractors assess and document damage.",
    date: "2026-03-05",
    readTime: "11 min read",
    category: "Industry Innovation",
    tags: ["ai", "documentation", "software"],
    author: "nolan-terry",
  },
  {
    slug: "how-to-write-restoration-scope-of-work",
    title: "How to Write a Restoration Scope of Work in 2026",
    excerpt:
      "Step-by-step framework for writing restoration scopes that adjusters approve on the first submission. Covers structure, detail level, and common formatting mistakes.",
    date: "2026-03-04",
    readTime: "13 min read",
    category: "Scoping Guides",
    tags: ["scoping", "documentation", "best-practices", "insurance"],
    author: "claimscribe-team",
  },
  {
    slug: "xactimate-estimating-tips",
    title: "Xactimate Estimating Tips: Stop Leaving Money on the Table",
    excerpt:
      "Common line items restoration contractors miss, how AI catches them, and proven supplement strategies that maximize your claim values.",
    date: "2026-03-01",
    readTime: "14 min read",
    category: "Estimating Tips",
    tags: ["xactimate", "estimating", "supplements", "claims"],
    author: "claimscribe-team",
  },
  {
    slug: "xactimate-tips-faster-claims",
    title: "Xactimate Tips for Faster Insurance Claims",
    excerpt:
      "Speed up your Xactimate workflow with these practical tips. Reduce estimate turnaround time and get claims processed faster without sacrificing line item accuracy.",
    date: "2026-03-01",
    readTime: "10 min read",
    category: "Estimating Tips",
    tags: ["xactimate", "estimating", "claims", "insurance"],
    author: "claimscribe-team",
  },
  {
    slug: "water-damage-scope-of-work-template",
    title: "Water Damage Scope of Work Template: What Every Claim Needs",
    excerpt:
      "Walk through a complete water damage scope: demo, mitigation, reconstruction, contents. Learn how ClaimScribe automates this process.",
    date: "2026-02-28",
    readTime: "16 min read",
    category: "Templates & Guides",
    tags: ["water-damage", "scoping", "templates", "xactimate"],
    author: "claimscribe-team",
  },
  {
    slug: "water-damage-documentation-best-practices",
    title: "Water Damage Documentation Best Practices for Contractors",
    excerpt:
      "Best practices for documenting water damage losses from first response through final billing. Moisture mapping, photo protocols, and drying logs that adjusters trust.",
    date: "2026-02-27",
    readTime: "12 min read",
    category: "Documentation Guide",
    tags: ["water-damage", "documentation", "best-practices", "insurance"],
    author: "claimscribe-team",
  },
  {
    slug: "restoration-contractors-leaving-money",
    title: "Why Restoration Contractors Leave Money on the Table (And How to Fix It)",
    excerpt:
      "The most common revenue leaks in restoration contracting — from under-scoping and missed supplements to slow collections and poor job costing.",
    date: "2026-02-26",
    readTime: "11 min read",
    category: "Business Growth",
    tags: ["business", "profit", "supplements", "estimating"],
    author: "claimscribe-team",
  },
  {
    slug: "restoration-contractor-software-2026",
    title: "Best Restoration Contractor Software in 2026",
    excerpt:
      "Compare tools restoration contractors use: Xactimate, CoreLogic, Encircle, DASH, and ClaimScribe. Position ClaimScribe as the AI-first alternative.",
    date: "2026-02-25",
    readTime: "18 min read",
    category: "Software Reviews",
    tags: ["software", "xactimate", "ai"],
    author: "claimscribe-team",
  },
  {
    slug: "insurance-claim-documentation-tips",
    title: "Insurance Claim Documentation: A Contractor's Guide to Getting Paid",
    excerpt:
      "Photo documentation best practices, what adjusters look for, and how to avoid claim denials that delay payment and damage customer relationships.",
    date: "2026-02-22",
    readTime: "15 min read",
    category: "Documentation Guide",
    tags: ["documentation", "insurance", "claims", "best-practices"],
    author: "claimscribe-team",
  },
];
