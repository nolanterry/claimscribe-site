export interface Webinar {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  duration: string;
  speaker: { name: string; title: string; company: string };
  topics: string[];
  status: "upcoming" | "on-demand";
  category: string;
}

export const WEBINARS: Webinar[] = [
  {
    slug: "ai-damage-scoping-restoration-contractors",
    title: "AI-Powered Damage Scoping: How Top Restoration Contractors Are Winning More Claims",
    description: "See how restoration contractors are using AI to generate accurate damage scopes in minutes instead of hours — and how it's transforming their approval rates and cash flow.",
    longDescription: "The restoration industry's biggest bottleneck isn't the work itself — it's the scoping process. Manual damage assessment takes 2-4 hours per job, is prone to line-item omissions, and results in supplement rates north of 60% industry-wide. This webinar demonstrates how AI-powered damage scoping is changing the game for restoration contractors. We'll show live examples of photo-to-scope workflows that generate Xactimate-ready estimates in under 15 minutes, walk through the specific AI capabilities that catch commonly missed line items (moisture mapping, structural damage indicators, contents assessment), and share data from contractors who've reduced their supplement rates by 40%+ while increasing their per-claim revenue. Whether you're running 5 jobs or 50 jobs a month, you'll see exactly how AI scoping fits into your existing workflow.",
    date: "2026-04-08",
    time: "1:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "ClaimScribe" },
    topics: [
      "Photo-to-scope AI workflows demonstrated live",
      "Commonly missed line items that AI catches",
      "Reducing supplement rates by 40%+",
      "Integrating AI scoping with Xactimate export",
      "ROI data from contractors using AI scoping",
    ],
    status: "upcoming",
    category: "Technology",
  },
  {
    slug: "insurance-negotiation-restoration-contractors",
    title: "Insurance Carrier Negotiation Strategies for Restoration Contractors",
    description: "Battle-tested tactics for negotiating with adjusters, winning supplement approvals, and getting paid what your work is actually worth.",
    longDescription: "Every restoration contractor knows the frustration: you do the work right, submit a detailed scope, and the carrier cuts your line items, disputes your pricing, or delays payment for weeks. This webinar covers the negotiation strategies that top-performing restoration companies use to consistently win claim approvals at full value. We'll cover how to document damage in a way that's difficult for adjusters to dispute, the specific Xactimate line items that carriers most frequently cut (and how to justify them), supplement writing techniques that get approved on first submission, and escalation paths when initial negotiation fails. Includes real examples of successful supplement negotiations with dollar amounts and the documentation that made the difference.",
    date: "2026-05-06",
    time: "2:00 PM ET",
    duration: "50 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "ClaimScribe" },
    topics: [
      "Documentation techniques that prevent adjuster disputes",
      "Most frequently cut Xactimate line items (and how to justify them)",
      "First-submission supplement writing techniques",
      "Escalation paths when negotiation fails",
      "Real supplement negotiation case studies with dollar amounts",
    ],
    status: "upcoming",
    category: "Business",
  },
  {
    slug: "water-damage-scoping-best-practices",
    title: "Water Damage Scoping: The Complete Guide to Missing Nothing",
    description: "A detailed walkthrough of water damage scoping best practices — from initial moisture mapping through structural drying scope to contents assessment.",
    longDescription: "Water damage claims represent the largest category for most restoration contractors, yet water scoping has some of the highest supplement rates in the industry. The reason: moisture damage is often invisible, extends beyond obvious boundaries, and involves complex interactions between materials, drying science, and Xactimate pricing. This on-demand webinar provides a systematic approach to water damage scoping that ensures nothing gets missed. We cover moisture mapping protocols using thermal imaging and moisture meters, structural vs. contents damage categorization, IICRC S500 standards for documentation, drying equipment placement calculations, and the specific Xactimate line items that most contractors under-scope. Includes a downloadable water damage scoping checklist organized by room and material type.",
    date: "2026-02-18",
    time: "1:00 PM ET",
    duration: "40 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "ClaimScribe" },
    topics: [
      "Moisture mapping protocols (thermal + meter)",
      "Structural vs. contents damage categorization",
      "IICRC S500 documentation standards",
      "Drying equipment placement calculations",
      "Commonly under-scoped Xactimate line items",
    ],
    status: "on-demand",
    category: "Technical",
  },
  {
    slug: "scaling-restoration-business-operations",
    title: "Scaling from $1M to $5M: Operations Playbook for Restoration Contractors",
    description: "The operational changes, systems, and team structures that successful restoration companies implement to scale past the $1M revenue ceiling.",
    longDescription: "Most restoration companies plateau between $1M and $2M in annual revenue — not because of demand, but because of operational bottlenecks. The owner is still scoping jobs, managing crews, and handling carrier negotiations personally. This on-demand webinar provides the operational playbook for breaking through that ceiling. We cover the five key hires that unlock scale (and the order to make them), how to systematize scoping and documentation so it doesn't require the owner, technology stacks that enable multi-crew operations, financial metrics you must track to grow profitably, and the marketing/sales systems that generate predictable lead flow. Based on interviews with 20+ restoration company owners who've successfully scaled past $5M.",
    date: "2026-01-22",
    time: "2:00 PM ET",
    duration: "50 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "ClaimScribe" },
    topics: [
      "Five key hires that unlock scale (in order)",
      "Systematizing scoping and documentation",
      "Technology stacks for multi-crew operations",
      "Financial metrics for profitable growth",
      "Predictable lead generation systems",
    ],
    status: "on-demand",
    category: "Business",
  },
];

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return WEBINARS.find((w) => w.slug === slug);
}

export function getUpcomingWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "upcoming");
}

export function getOnDemandWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "on-demand");
}
