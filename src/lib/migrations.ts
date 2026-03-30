export interface Migration {
  slug: string;
  name: string;
  tagline: string;
  steps: { title: string; description: string; time: string }[];
  featureMap: { feature: string; them: string; us: string }[];
  faqs: { q: string; a: string }[];
}

export const MIGRATIONS: Migration[] = [
  {
    slug: "xactimate",
    name: "Xactimate (Manual Scoping)",
    tagline:
      "Keep using Xactimate for pricing — but let ClaimScribe's AI handle the damage scoping, photo analysis, and line item generation that takes hours to do manually.",
    steps: [
      {
        title: "Sign up for ClaimScribe",
        description:
          "Create your free 14-day trial account. No credit card required. Enter your Xactimate credentials to connect your account.",
        time: "3 min",
      },
      {
        title: "Connect your Xactimate account",
        description:
          "Link your Xactimate/XactAnalysis credentials. ClaimScribe reads your pricing data and exports directly to Xactimate format — no double entry.",
        time: "5 min",
      },
      {
        title: "Upload your first loss photos",
        description:
          "Take photos of a current job and upload them to ClaimScribe. Our AI identifies damage types, affected areas, and generates a preliminary scope.",
        time: "5 min",
      },
      {
        title: "Review AI-generated scope",
        description:
          "ClaimScribe generates Xactimate-ready line items with room dimensions, damage categories, and quantity estimates. Review and adjust before exporting.",
        time: "10 min",
      },
      {
        title: "Export to Xactimate",
        description:
          "Push your ClaimScribe scope directly into Xactimate. Line items, categories, and quantities transfer automatically. Add pricing in Xactimate as usual.",
        time: "2 min",
      },
      {
        title: "Invite your estimating team",
        description:
          "Add project managers and estimators. Each team member gets mobile access for field documentation — unlimited users included.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Damage scoping", them: "Manual inspection + notes", us: "AI photo analysis + auto-scope" },
      { feature: "Line item generation", them: "Manual entry from memory", us: "AI-generated from photos" },
      { feature: "Time per scope", them: "2-4 hours", us: "15-30 minutes" },
      { feature: "Photo documentation", them: "Separate camera + labeling", us: "In-app capture + auto-tagging" },
      { feature: "Missed items", them: "Common (memory-based)", us: "AI catches overlooked damage" },
      { feature: "Supplement support", them: "Manual re-inspection", us: "AI supplement package generation" },
      { feature: "Team collaboration", them: "Email/phone coordination", us: "Real-time project sharing" },
      { feature: "Xactimate integration", them: "Native (pricing only)", us: "Full scope → export pipeline" },
    ],
    faqs: [
      {
        q: "Does ClaimScribe replace Xactimate?",
        a: "No. ClaimScribe handles the damage scoping and documentation that happens before you open Xactimate. Think of it as the AI assistant that generates your Xactimate estimate — you still price and submit in Xactimate.",
      },
      {
        q: "How accurate is the AI scoping?",
        a: "ClaimScribe's AI is trained on hundreds of thousands of restoration scopes. It catches damage patterns that estimators commonly miss, especially in water damage (moisture migration) and fire damage (smoke travel).",
      },
      {
        q: "Will adjusters accept ClaimScribe-generated scopes?",
        a: "ClaimScribe outputs standard Xactimate line items with proper categorization. Adjusters see the same format they're used to — they don't know or care that AI helped generate it.",
      },
      {
        q: "Can I use ClaimScribe without Xactimate?",
        a: "Yes. ClaimScribe generates standalone scope reports with line items, photos, and measurements. The Xactimate export is optional — you can also export to PDF or CSV.",
      },
    ],
  },
  {
    slug: "encircle",
    name: "Encircle",
    tagline:
      "Move from Encircle's documentation-only approach to ClaimScribe's AI-powered scoping. Keep the field documentation you love, add the AI intelligence you need.",
    steps: [
      {
        title: "Export your Encircle data",
        description:
          "Download your project documentation, photo libraries, and job records from Encircle. Export as PDF or use their API for bulk download.",
        time: "10 min",
      },
      {
        title: "Create your ClaimScribe account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Set up your company profile and restoration specialties.",
        time: "3 min",
      },
      {
        title: "Import your project history",
        description:
          "Upload your Encircle exports. ClaimScribe preserves your photo documentation, job notes, and project timeline for continuity.",
        time: "10 min",
      },
      {
        title: "Try AI scoping on a current job",
        description:
          "Upload photos from an active project. Compare ClaimScribe's AI-generated scope against what you'd manually write — most teams see 30%+ more line items captured.",
        time: "15 min",
      },
      {
        title: "Connect your Xactimate account",
        description:
          "Link Xactimate for direct scope export. ClaimScribe generates the line items that Encircle never could.",
        time: "5 min",
      },
      {
        title: "Invite your field team",
        description:
          "Add project managers, estimators, and field techs. Mobile app works offline for loss sites without WiFi.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "AI damage scoping", them: "Not available", us: "Photo-to-scope AI engine" },
      { feature: "Line item generation", them: "Manual documentation only", us: "AI-generated Xactimate items" },
      { feature: "Photo documentation", them: "Excellent capture + tagging", us: "Capture + AI analysis" },
      { feature: "Xactimate export", them: "No direct export", us: "1-click Xactimate integration" },
      { feature: "Supplement generation", them: "Not available", us: "AI-powered supplement packages" },
      { feature: "Pricing", them: "Per-user monthly", us: "Flat rate, unlimited users" },
      { feature: "Contents inventory", them: "Strong contents features", us: "AI contents + room estimation" },
      { feature: "Offline capability", them: "Full offline support", us: "Full offline with sync" },
    ],
    faqs: [
      {
        q: "Encircle is great for documentation. Why switch?",
        a: "Encircle documents damage — ClaimScribe documents AND scopes it. You get the same field documentation workflow plus AI that generates actual Xactimate line items from your photos. It's documentation that does the work for you.",
      },
      {
        q: "What about Encircle's contents inventory features?",
        a: "ClaimScribe includes AI-powered contents documentation that can identify and categorize items from photos. For complex contents losses, it generates room-by-room inventories automatically.",
      },
      {
        q: "Can I run both during the transition?",
        a: "Yes. Many teams use ClaimScribe for AI scoping on new jobs while maintaining Encircle for in-progress projects. Transition at your own pace.",
      },
      {
        q: "Is ClaimScribe more expensive than Encircle?",
        a: "ClaimScribe is a flat monthly rate with unlimited users — no per-seat charges. For teams of 5+, it's typically cheaper than Encircle while doing significantly more.",
      },
    ],
  },
  {
    slug: "manual-scoping",
    name: "Manual Scoping & Paper Notes",
    tagline:
      "Stop writing scopes from memory at 10pm after a full day on the job site. ClaimScribe's AI turns your loss photos into accurate Xactimate-ready scopes in minutes.",
    steps: [
      {
        title: "Sign up for ClaimScribe",
        description:
          "Create your free 14-day trial account. No credit card required. Works on your phone, tablet, or computer.",
        time: "3 min",
      },
      {
        title: "Photograph your next loss",
        description:
          "Use ClaimScribe's mobile app to capture photos during your site visit. Take wide shots, detail shots, and moisture readings as usual.",
        time: "10 min",
      },
      {
        title: "Let AI generate your scope",
        description:
          "Upload your photos and ClaimScribe's AI identifies damage types, estimates affected areas, and generates Xactimate-ready line items.",
        time: "5 min",
      },
      {
        title: "Review and refine",
        description:
          "Check the AI-generated scope against your field notes. Add items the AI missed, adjust quantities, and approve the scope.",
        time: "15 min",
      },
      {
        title: "Export to Xactimate or PDF",
        description:
          "Push directly to Xactimate, or generate a professional PDF scope report for insurance carriers. Either way, it's done in minutes instead of hours.",
        time: "2 min",
      },
      {
        title: "Invite your team",
        description:
          "Add your project managers, estimators, and technicians. Everyone gets mobile access. Unlimited users included.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Scope creation", them: "Memory + handwritten notes", us: "AI photo analysis + auto-scope" },
      { feature: "Time per estimate", them: "2-4 hours (after site visit)", us: "15-30 min (during site visit)" },
      { feature: "Missed line items", them: "Common — memory gaps", us: "AI catches overlooked damage" },
      { feature: "Photo organization", them: "Camera roll chaos", us: "Auto-tagged by room + damage type" },
      { feature: "Supplement tracking", them: "Sticky notes + spreadsheets", us: "Automated supplement packages" },
      { feature: "Adjuster presentation", them: "Variable formatting", us: "Professional, consistent reports" },
      { feature: "Team visibility", them: "Ask the PM", us: "Real-time project dashboard" },
      { feature: "Record keeping", them: "Filing cabinets / lost notes", us: "Searchable digital archive" },
    ],
    faqs: [
      {
        q: "I've been scoping manually for 20 years. Why change now?",
        a: "Because AI doesn't forget line items at 10pm after a 12-hour day. ClaimScribe catches the damage patterns your eyes see but your tired brain misses when writing the scope later. More captured damage = higher estimates = more revenue.",
      },
      {
        q: "I'm not tech-savvy. Can I use this?",
        a: "If you can take photos with your phone, you can use ClaimScribe. Upload photos, review the AI scope, export. That's it. Most estimators are comfortable within their first job.",
      },
      {
        q: "Will this work for all types of restoration?",
        a: "ClaimScribe handles water damage, fire/smoke damage, mold remediation, storm damage, and contents losses. The AI is trained on hundreds of thousands of real restoration scopes.",
      },
      {
        q: "What if the AI misses something?",
        a: "ClaimScribe is a starting point, not a replacement for your expertise. The AI generates a comprehensive first draft — you review, refine, and approve. You'll spend 15 minutes refining instead of 3 hours writing from scratch.",
      },
    ],
  },
];
