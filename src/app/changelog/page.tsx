import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new in ClaimScribe. Product updates, new features, and improvements to AI damage scoping software.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog | ClaimScribe",
    description:
      "See what's new in ClaimScribe. Product updates, new features, and improvements to AI damage scoping software.",
    url: "https://claimscribe.ai/changelog",
  },
};

type ChangeCategory = "new" | "improved" | "fixed";

interface Change {
  category: ChangeCategory;
  text: string;
}

interface Release {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
}

const RELEASES: Release[] = [
  {
    version: "1.2.0",
    date: "March 10, 2026",
    summary: "Xactimate integration, multi-room scoping, and AI accuracy improvements",
    changes: [
      { category: "new", text: "Direct Xactimate export — generate XM8 files from AI-scoped damage assessments with one click" },
      { category: "new", text: "Multi-room scoping workflow — walk through an entire property and scope room-by-room with automatic totaling" },
      { category: "improved", text: "AI damage detection accuracy improved 22% for water damage class identification (Class 1–4)" },
      { category: "improved", text: "Photo documentation now supports batch upload with auto-tagging by room and damage type" },
      { category: "fixed", text: "Resolved an issue where supplement line items occasionally duplicated in the final scope report" },
      { category: "fixed", text: "Fixed Xactimate pricing database not updating for users in Canadian provinces" },
    ],
  },
  {
    version: "1.1.0",
    date: "February 3, 2026",
    summary: "Supplement writing, contents tracking, and team collaboration",
    changes: [
      { category: "new", text: "AI-powered supplement writer — generate insurance supplement narratives backed by photo evidence and industry standards" },
      { category: "new", text: "Contents pack-out tracking with barcode scanning, condition logging, and restoration status updates" },
      { category: "new", text: "Team workspace — share scopes across your crew with role-based editing and comment threads" },
      { category: "improved", text: "Scope report PDF layout redesigned for faster adjuster review with highlighted line items and photo callouts" },
      { category: "improved", text: "Offline mode now caches Xactimate pricing data for field use without connectivity" },
      { category: "fixed", text: "Corrected square footage calculations when rooms have non-standard angles or alcoves" },
      { category: "fixed", text: "Fixed an issue where photo timestamps didn't match device timezone on Android devices" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 6, 2026",
    summary: "ClaimScribe launches — AI damage scoping for restoration contractors",
    changes: [
      { category: "new", text: "AI-powered damage assessment — photograph damage and get instant scope of work recommendations with line items" },
      { category: "new", text: "Smart photo documentation with automatic damage type classification and severity scoring" },
      { category: "new", text: "Scope of work builder with industry-standard line items for water, fire, mold, and storm damage" },
      { category: "new", text: "PDF and Excel report generation with professional formatting for insurance adjuster submissions" },
      { category: "new", text: "Project management dashboard to track active jobs, pending supplements, and claim status" },
      { category: "new", text: "Mobile-first design — scope damage on-site from any phone or tablet with real-time cloud sync" },
    ],
  },
];

const CATEGORY_CONFIG: Record<ChangeCategory, { label: string; emoji: string; color: string }> = {
  new: { label: "New", emoji: "🆕", color: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20" },
  improved: { label: "Improved", emoji: "✨", color: "bg-primary/10 text-blue-400 ring-1 ring-primary/20" },
  fixed: { label: "Fixed", emoji: "🐛", color: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20" },
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] text-white">
        {/* Hero */}
        <section className="hero-gradient py-20 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything new in ClaimScribe — features, improvements, and fixes shipped to help restoration contractors scope faster and get paid fairly.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {RELEASES.map((release) => (
              <article key={release.version} className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full bg-primary border-2 border-[#080810]" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm font-semibold ring-1 ring-primary/20">
                    v{release.version}
                  </span>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>
                <p className="text-gray-300 font-medium mb-4">{release.summary}</p>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => {
                    const cfg = CATEGORY_CONFIG[change.category];
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium shrink-0 mt-0.5 ${cfg.color}`}>
                          {cfg.emoji} {cfg.label}
                        </span>
                        <span className="text-gray-400 text-sm">{change.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
