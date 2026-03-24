"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, Download, CheckCircle, BookOpen, ClipboardList, FileSpreadsheet } from "lucide-react";

const RESOURCES = [
  {
    title: "Water Damage Scope Template",
    description: "Room-by-room water damage scoping template with moisture readings, affected materials, category/class classification, and line-item documentation for Xactimate upload.",
    type: "Template" as const,
    pages: "5 pages",
    slug: "water-damage-scope-template",
  },
  {
    title: "Fire & Smoke Damage Assessment Checklist",
    description: "Comprehensive fire damage assessment checklist covering structural, contents, and smoke damage. Includes char depth measurements, odor mapping, and salvageability ratings.",
    type: "Checklist" as const,
    pages: "4 pages",
    slug: "fire-damage-checklist",
  },
  {
    title: "Xactimate Estimating Quick Reference",
    description: "Quick reference card for common Xactimate line items, category codes, and pricing modifiers used in water, fire, and mold restoration claims.",
    type: "Guide" as const,
    pages: "3 pages",
    slug: "xactimate-quick-reference",
  },
  {
    title: "Insurance Documentation Photo Guide",
    description: "Field guide for documenting damage with photos that adjusters accept — angles, lighting, scale references, before/after protocols, and metadata requirements.",
    type: "Guide" as const,
    pages: "6 pages",
    slug: "photo-documentation-guide",
  },
  {
    title: "Supplement Writing Best Practices",
    description: "How to write supplements that get approved — documentation standards, line-item justification templates, adjuster communication scripts, and common denial rebuttals.",
    type: "Whitepaper" as const,
    pages: "10 pages",
    slug: "supplement-writing-guide",
  },
  {
    title: "Contents Pack-Out Inventory Template",
    description: "Detailed contents inventory template for pack-out jobs. Includes item condition ratings, replacement cost estimates, photo reference fields, and storage tracking.",
    type: "Template" as const,
    pages: "3 pages",
    slug: "contents-packout-template",
  },
  {
    title: "Restoration Project Timeline Template",
    description: "Gantt-style project timeline template for multi-day restoration jobs. Tracks demo, drying, rebuild, and final walkthrough milestones with crew assignments.",
    type: "Template" as const,
    pages: "1 sheet",
    slug: "project-timeline-template",
  },
  {
    title: "Mold Remediation Protocol Checklist",
    description: "Step-by-step mold remediation checklist aligned with IICRC S520 standards. Covers containment setup, air scrubbing, removal procedures, and post-remediation verification.",
    type: "Checklist" as const,
    pages: "4 pages",
    slug: "mold-remediation-checklist",
  },
];

const TYPE_CONFIG = {
  Checklist: { icon: ClipboardList, color: "bg-green-500/10 text-green-400" },
  Template: { icon: FileSpreadsheet, color: "bg-blue-500/10 text-blue-400" },
  Guide: { icon: BookOpen, color: "bg-amber-500/10 text-amber-400" },
  Whitepaper: { icon: FileText, color: "bg-purple-500/10 text-purple-400" },
};

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [globalUnlocked, setGlobalUnlocked] = useState(false);

  const handleDownload = async (slug: string) => {
    if (globalUnlocked || submitted.has(slug)) {
      setSubmitted((prev) => new Set(prev).add(slug));
      return;
    }
    setActiveResource(slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !activeResource) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `resource-${activeResource}` }),
      });
    } catch {
      // Best-effort
    }

    const newSubmitted = new Set(submitted);
    newSubmitted.add(activeResource);
    setSubmitted(newSubmitted);
    setGlobalUnlocked(true);
    setActiveResource(null);
    localStorage.setItem("claimscribe-resources-email", email);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
                { "@type": "ListItem", position: 2, name: "Resources", item: "https://claimscribe.ai/resources" },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="bg-[#0a0a12] py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Restoration Resources
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Scoping templates, damage checklists, and claims guides built by restoration professionals. Download what you need to document faster and get paid quicker.
          </p>
        </section>

        {/* Resource Grid */}
        <section className="bg-[#0a0a12] max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => {
              const config = TYPE_CONFIG[resource.type];
              const Icon = config.icon;
              const isUnlocked = globalUnlocked || submitted.has(resource.slug);

              return (
                <div
                  key={resource.slug}
                  className="border border-white/[0.08] rounded-xl p-6 hover:border-primary-400/30 hover:bg-white/[0.02] transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                      <Icon size={14} />
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-500">{resource.pages}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => handleDownload(resource.slug)}
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      isUnlocked
                        ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                        : "bg-primary-500 text-white hover:bg-primary-600"
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle size={16} />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Get Free Download
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Email Capture Modal */}
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" role="dialog" aria-modal="true" aria-label="Download resource">
            <div className="bg-[#12121a] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-2">
                Get Your Free Download
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Enter your email to unlock all resources instantly. No spam — just restoration industry content.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  aria-label="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white font-medium py-3 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Unlock All Resources
                </button>
              </form>
              <button
                onClick={() => setActiveResource(null)}
                className="mt-4 w-full text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="bg-[#080810] py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scope Faster with AI?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            ClaimScribe uses AI to turn photos into Xactimate-ready damage scopes in minutes. Start your 14-day free trial — no credit card required.
          </p>
          <a
            href="https://app.claimscribe.ai/sign-up"
            className="inline-block bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors text-lg"
          >
            Start Free Trial
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
