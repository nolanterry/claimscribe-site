export interface CaseStudy {
  slug: string;
  companyName: string;
  industry: string;
  companySize: string;
  products: string[];
  hero: {
    summary: string;
    keyMetric: string;
  };
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    implementation: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  quote: {
    text: string;
    author: string;
    title: string;
  };
  atAGlance: {
    companySize: string;
    industry: string;
    products: string[];
    keyResults: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "apex-restoration-group",
    companyName: "Apex Restoration Group",
    industry: "Multi-Location Restoration",
    companySize: "$8M revenue, 6 project managers",
    products: ["ClaimScribe Enterprise"],
    hero: {
      summary: "Multi-location restoration contractor increases average claim value by 35% and standardizes documentation across all project managers using AI-powered scoping.",
      keyMetric: "35% increase in claim value",
    },
    challenge: {
      title: "Inconsistent Scoping Leaving Money on the Table",
      description: "Apex Restoration Group's six project managers were producing wildly different scope quality, with some missing significant damage that resulted in lower claim values and customer dissatisfaction.",
      painPoints: [
        "Inconsistent damage scoping across 6 project managers, leaving money on the table",
        "Newer PMs missing critical line items that experienced staff would catch",
        "No standardized process for documenting damage severity and scope",
        "Frequent scope supplements required due to incomplete initial assessments",
      ],
    },
    solution: {
      title: "AI-Powered Standardization with Xactimate Integration",
      description: "ClaimScribe Enterprise provided AI-powered damage analysis and standardized scoping workflows that ensured consistent quality across all project managers.",
      implementation: [
        "Deployed ClaimScribe across all 6 project managers with standardized workflows",
        "Implemented AI photo analysis for consistent damage identification",
        "Set up direct Xactimate integration with ESX export functionality",
        "Established quality control dashboards for management oversight",
      ],
    },
    results: {
      title: "Dramatic Increase in Claim Values",
      description: "Apex achieved consistent high-quality scoping across all PMs and dramatically increased their average claim values through complete damage capture.",
      metrics: [
        { value: "35%", label: "Increase in Average Claim Value" },
        { value: "50%", label: "Faster Scope Completion" },
        { value: "6", label: "PMs with Standardized Process" },
        { value: "Unified", label: "Documentation Standard" },
      ],
    },
    quote: {
      text: "ClaimScribe transformed our entire scoping process. Now every PM produces the same high-quality scopes our most experienced estimators used to create, and we're capturing damage we used to miss.",
      author: "Jennifer Martinez",
      title: "Operations Director, Apex Restoration Group",
    },
    atAGlance: {
      companySize: "$8M revenue, 6 project managers",
      industry: "Multi-Location Restoration",
      products: ["ClaimScribe Enterprise"],
      keyResults: [
        "35% increase in average claim value",
        "50% faster scope completion",
        "Standardized process across all PMs",
        "Eliminated scope quality variance"
      ],
    },
  },
  {
    slug: "coastal-emergency-services",
    companyName: "Coastal Emergency Services",
    industry: "Water & Fire Damage Restoration",
    companySize: "15 technicians, single location",
    products: ["ClaimScribe Pro"],
    hero: {
      summary: "Water and fire damage specialist accelerates estimate turnaround from 3-5 days to same-day delivery, winning 28% more jobs with AI-powered mobile scoping.",
      keyMetric: "Same-day estimates",
    },
    challenge: {
      title: "Slow Estimate Turnaround Losing Jobs",
      description: "Coastal Emergency Services was losing jobs to competitors who could provide faster estimates, with their manual scoping process taking 3-5 days to deliver comprehensive damage assessments.",
      painPoints: [
        "Slow turnaround on estimates losing jobs to faster competitors",
        "Manual scoping process taking 3-5 days from initial assessment to delivery",
        "Technicians struggling with on-site damage documentation accuracy",
        "Missed opportunities for immediate supplement identification",
      ],
    },
    solution: {
      title: "Mobile AI Scoping with Real-Time Processing",
      description: "ClaimScribe Pro enabled real-time damage assessment and scope generation directly from mobile devices, with AI-powered line item suggestions for immediate estimate delivery.",
      implementation: [
        "Equipped all 15 technicians with mobile ClaimScribe Pro access",
        "Implemented real-time AI damage analysis from job site photos",
        "Set up automated line item suggestions based on damage patterns",
        "Created immediate supplement identification workflows",
      ],
    },
    results: {
      title: "Competitive Advantage Through Speed",
      description: "Coastal achieved same-day estimate delivery and significantly improved their job win rate through rapid response capabilities.",
      metrics: [
        { value: "Same-Day", label: "Estimate Delivery (was 3-5 days)" },
        { value: "28%", label: "More Jobs Won" },
        { value: "Automated", label: "Supplement Identification" },
        { value: "15", label: "Mobile-Enabled Technicians" },
      ],
    },
    quote: {
      text: "ClaimScribe completely changed our competitive position. We can now deliver comprehensive estimates the same day while our competitors are still measuring. It's been a game-changer for our close rate.",
      author: "Mike Rodriguez",
      title: "Owner, Coastal Emergency Services",
    },
    atAGlance: {
      companySize: "15 technicians, single location",
      industry: "Water & Fire Damage Restoration",
      products: ["ClaimScribe Pro"],
      keyResults: [
        "Same-day estimate delivery",
        "28% improvement in job win rate",
        "Automated supplement identification",
        "Real-time mobile scoping capability"
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(study => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map(study => study.slug);
}