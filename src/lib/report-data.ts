export interface Report {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  readTime: string;
  publishDate: string;
  category: string;
  highlights: string[];
  sections: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const REPORTS: Report[] = [
  {
    slug: "2026-restoration-industry-technology-report",
    title: "2026 State of Technology in Restoration Contracting",
    subtitle: "How restoration contractors are using AI, mobile tools, and automation to win more claims and scale operations",
    description: "A comprehensive analysis of technology adoption in the restoration contracting industry. Based on surveys of 180+ restoration companies covering damage scoping, Xactimate workflows, supplement management, and business operations. Reveals the gap between technology leaders and laggards in claim approval rates and profitability.",
    pages: 30,
    readTime: "16 min read",
    publishDate: "March 2026",
    category: "Industry Report",
    highlights: [
      "Only 18% of restoration contractors use AI-powered damage scoping tools",
      "Companies using AI scoping have 34% higher first-submission approval rates",
      "Average restoration company loses $127K/year to under-scoped claims",
      "Supplement rate for AI-assisted scopes is 23% vs 47% for manual scopes",
      "Digital documentation reduces carrier dispute resolution time by 61%",
    ],
    sections: [
      { title: "Technology Adoption Landscape", description: "Survey results on tool adoption rates across company sizes, from single-truck operators to national franchises." },
      { title: "AI in Damage Assessment", description: "How computer vision and AI are transforming initial damage scoping, material identification, and scope completeness." },
      { title: "Xactimate Workflow Optimization", description: "Best practices and tool integrations that reduce estimate creation time and improve line-item accuracy." },
      { title: "Supplement Management", description: "Technology-driven approaches to reducing supplement rates and accelerating approval cycles." },
      { title: "Scaling with Technology", description: "Case studies of contractors who scaled from $1M to $5M+ using technology investments." },
    ],
    stats: [
      { value: "180+", label: "Companies Surveyed" },
      { value: "$127K", label: "Avg Annual Loss" },
      { value: "30 Pages", label: "Full Report" },
    ],
  },
  {
    slug: "ai-damage-scoping-roi-analysis",
    title: "The ROI of AI-Powered Damage Scoping",
    subtitle: "Quantifying revenue recovery, time savings, and competitive advantage from AI-assisted restoration estimates",
    description: "A detailed financial analysis of AI damage scoping tools for restoration contractors. Includes revenue recovery calculations, time-per-scope comparisons, supplement rate impacts, and a framework for measuring ROI by company size and claim volume.",
    pages: 22,
    readTime: "12 min read",
    publishDate: "February 2026",
    category: "Whitepaper",
    highlights: [
      "AI scoping identifies 31% more line items than manual scoping on average",
      "Average contractor recovers $4,200 in additional revenue per claim with AI-assisted scoping",
      "Time to complete initial scope drops from 3.2 hours to 1.1 hours with AI tools",
      "ROI payback period for AI scoping tools averages 1.8 months for contractors doing 15+ claims/month",
      "Photo-to-scope AI reduces return site visits by 43%",
    ],
    sections: [
      { title: "The Under-Scoping Problem", description: "Analysis of revenue left on the table through incomplete damage documentation and missed line items." },
      { title: "AI Scoping Performance Data", description: "Head-to-head comparison of AI-assisted vs manual scoping across water, fire, and storm damage categories." },
      { title: "Financial Impact by Company Size", description: "ROI models for small (5-15 claims/mo), medium (15-50), and large (50+) restoration operations." },
      { title: "Implementation Guide", description: "How to integrate AI scoping into existing Xactimate workflows with minimal disruption." },
    ],
    stats: [
      { value: "31%", label: "More Line Items" },
      { value: "$4,200", label: "Per Claim Recovery" },
      { value: "1.8 mo", label: "ROI Payback" },
    ],
  },
  {
    slug: "insurance-carrier-negotiation-guide",
    title: "The Restoration Contractor's Guide to Carrier Negotiations",
    subtitle: "Documentation strategies, supplement techniques, and dispute resolution frameworks that maximize claim approvals",
    description: "A practical guide for restoration contractors navigating insurance carrier negotiations. Covers documentation standards that carriers can't dispute, supplement writing techniques, escalation procedures, and technology tools that strengthen your position in claim disputes.",
    pages: 26,
    readTime: "14 min read",
    publishDate: "January 2026",
    category: "Best Practice Guide",
    highlights: [
      "Contractors with photo documentation of every line item win 78% of carrier disputes",
      "Proper moisture mapping documentation increases water damage approvals by 52%",
      "Average supplement approval increases from $2,100 to $5,800 with structured documentation",
      "Time-stamped digital records reduce fraud accusations by 89%",
      "Contractors who cite IICRC S500/S520 standards in supplements get 41% fewer pushbacks",
    ],
    sections: [
      { title: "Documentation That Wins", description: "Photo standards, moisture readings, atmospheric conditions, and material identification that carriers cannot dispute." },
      { title: "Supplement Writing Mastery", description: "Structure, language, code references, and supporting evidence that maximize supplement approval rates." },
      { title: "Escalation Framework", description: "When and how to escalate disputes: desk adjuster → field adjuster → supervisor → umpire/appraisal." },
      { title: "Technology as Evidence", description: "How digital tools, AI scoping, and automated documentation strengthen your negotiating position." },
    ],
    stats: [
      { value: "78%", label: "Dispute Win Rate" },
      { value: "52%", label: "Higher Approvals" },
      { value: "$5,800", label: "Avg Supplement" },
    ],
  },
];
