import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string; feature: string }[];
  metrics: { stat: string; label: string }[];
}

const USE_CASES: UseCase[] = [
  {
    slug: "water-damage-restoration",
    title: "ClaimScribe for Water Damage Restoration",
    metaTitle: "ClaimScribe for Water Damage Restoration — AI-Powered Moisture Mapping & Scoping",
    metaDescription:
      "Water damage restoration companies use ClaimScribe to create accurate IICRC S500-compliant scopes, document moisture readings, and generate Xactimate-ready estimates in minutes instead of hours.",
    heroHeadline: "Accurate Water Damage Scopes in Minutes, Not Hours",
    heroSub:
      "Water damage restoration is a race against time — and against the adjuster's red pen. ClaimScribe uses AI to document moisture readings, map affected areas, and generate IICRC S500-compliant scopes that adjusters approve on the first submission. No more supplements. No more scope cuts.",
    painPoints: [
      {
        title: "Scopes get cut because documentation is weak",
        desc: "Adjusters cut line items when documentation doesn't support the scope. If you can't prove moisture intrusion affected a wall cavity, they won't pay for it. Traditional scoping methods leave gaps that adjusters exploit — costing you thousands per claim.",
      },
      {
        title: "Moisture mapping is inconsistent across technicians",
        desc: "Every technician documents moisture readings differently. Some use paper logs, others use apps, and some don't document at all. Inconsistent documentation means inconsistent scopes — and inconsistent revenue recovery.",
      },
      {
        title: "IICRC S500 compliance is hard to prove",
        desc: "S500 requires documented drying goals, moisture readings, equipment placement, and daily monitoring logs. Most restoration companies struggle to maintain this level of documentation across every job, creating compliance gaps that weaken their position in disputes.",
      },
      {
        title: "Scope writing takes too long",
        desc: "A thorough water damage scope can take 2–4 hours to write manually. Your estimators are your most expensive employees — and they're spending half their time on documentation instead of winning new work.",
      },
    ],
    solutions: [
      {
        title: "AI-powered moisture documentation",
        desc: "Capture moisture readings with your phone or moisture meter integration. ClaimScribe automatically maps affected areas, documents reading locations, and creates visual moisture maps that adjusters can't argue with.",
        feature: "Smart Moisture Mapping",
      },
      {
        title: "S500-compliant scope generation",
        desc: "ClaimScribe generates scopes that follow IICRC S500 standards — including category and class classification, drying goals, equipment requirements, and monitoring protocols. Every scope is defensible.",
        feature: "S500 Scope Engine",
      },
      {
        title: "Xactimate-ready estimates",
        desc: "Export your scope directly to Xactimate with proper line items, pricing, and documentation. No more re-keying data or translating field notes into estimate format. From job site to submission in minutes.",
        feature: "Xactimate Export",
      },
      {
        title: "Photo-verified room-by-room documentation",
        desc: "Document every room with timestamped photos, moisture readings, and affected material callouts. ClaimScribe organizes everything by room and creates a visual narrative that tells the story of the loss.",
        feature: "Visual Documentation",
      },
    ],
    metrics: [
      { stat: "73%", label: "reduction in scope writing time" },
      { stat: "41%", label: "fewer adjuster scope cuts" },
      { stat: "94%", label: "first-submission approval rate" },
      { stat: "$4,200", label: "average additional recovery per claim" },
    ],
  },
  {
    slug: "fire-damage-contractors",
    title: "ClaimScribe for Fire & Smoke Damage",
    metaTitle: "ClaimScribe for Fire & Smoke Damage — AI Char/Soot Assessment & Scoping",
    metaDescription:
      "Fire damage contractors use ClaimScribe to document char depth, soot patterns, content pack-out inventories, and generate comprehensive fire loss scopes that maximize claim recovery.",
    heroHeadline: "Comprehensive Fire Loss Scoping — Every Detail Captured",
    heroSub:
      "Fire and smoke damage claims are the most complex in restoration. Multiple damage categories, content pack-outs, structural assessments, and smoke migration documentation — all requiring meticulous detail. ClaimScribe's AI captures everything and builds scopes that hold up against the toughest adjusters.",
    painPoints: [
      {
        title: "Fire damage scoping is the most time-intensive work in restoration",
        desc: "A single fire loss can take 8–12 hours to scope properly. Char depth assessment, soot classification, content inventories, structural damage documentation — the level of detail required is enormous, and rushing it costs you money.",
      },
      {
        title: "Content pack-out inventories are a documentation nightmare",
        desc: "Documenting hundreds of items for content cleaning or replacement is tedious, error-prone, and often incomplete. Missing items mean uncollected revenue. But manually cataloging every item in a smoke-damaged home takes hours.",
      },
      {
        title: "Smoke migration is hard to prove without proper documentation",
        desc: "Smoke travels through HVAC systems, wall cavities, and between floors. Adjusters often challenge smoke damage claims in adjacent rooms unless you can document the migration path and affected surfaces systematically.",
      },
      {
        title: "Structural vs. cosmetic damage distinctions drive disputes",
        desc: "Adjusters want to pay for cleaning when the damage requires replacement. Without documented char depth, soot penetration levels, and material degradation evidence, you're fighting an uphill battle on every line item.",
      },
    ],
    solutions: [
      {
        title: "AI-assisted char and soot assessment",
        desc: "Document char depth, soot classification (wet, dry, protein, fuel oil), and smoke damage severity with structured templates. ClaimScribe guides your technicians through a consistent assessment process that captures every detail.",
        feature: "Damage Assessment AI",
      },
      {
        title: "Content pack-out with AI item recognition",
        desc: "Photograph contents and let ClaimScribe's AI assist with item identification, categorization, and replacement value estimation. Generate complete pack-out inventories in a fraction of the traditional time.",
        feature: "Content Inventory AI",
      },
      {
        title: "Smoke migration documentation",
        desc: "Map smoke migration paths room by room. Document HVAC contamination, interstitial space penetration, and secondary damage in adjacent areas with visual evidence that adjusters can follow.",
        feature: "Migration Mapper",
      },
      {
        title: "Comprehensive fire loss scope builder",
        desc: "ClaimScribe combines structural damage, content inventories, smoke migration, and cleaning requirements into a single, cohesive scope. Every line item is supported by photo evidence and field documentation.",
        feature: "Fire Loss Scope Engine",
      },
    ],
    metrics: [
      { stat: "65%", label: "faster fire loss scoping" },
      { stat: "3x", label: "more content items captured per pack-out" },
      { stat: "$12K", label: "average additional recovery on fire claims" },
      { stat: "88%", label: "first-submission approval rate on fire losses" },
    ],
  },
  {
    slug: "multi-location-franchises",
    title: "ClaimScribe for Multi-Location Franchises",
    metaTitle: "ClaimScribe for Multi-Location Franchises — Standardized Scoping at Scale",
    metaDescription:
      "Multi-location restoration franchises use ClaimScribe to standardize scoping across all locations, ensure consistent documentation quality, and generate franchise-wide performance reporting.",
    heroHeadline: "Consistent Scoping Quality Across Every Location",
    heroSub:
      "When you're running 10, 50, or 200 franchise locations, scoping quality varies wildly. Your best location captures everything and recovers every dollar. Your worst location leaves money on the table on every job. ClaimScribe eliminates that variance — giving every location the same AI-powered scoping tools and documentation standards.",
    painPoints: [
      {
        title: "Scoping quality varies wildly across locations",
        desc: "Your top-performing locations write detailed, defensible scopes. Your underperforming locations leave gaps, miss line items, and get scope cuts. The difference isn't talent — it's tooling and process consistency.",
      },
      {
        title: "No visibility into franchise-wide scoping performance",
        desc: "You know your total revenue, but you don't know which locations are under-scoping, which are getting the most adjuster pushback, or which are leaving the most money on the table. You can't fix what you can't measure.",
      },
      {
        title: "Training new estimators takes months",
        desc: "Every new estimator at every location goes through months of on-the-job training before they can write a reliable scope. That ramp-up time costs revenue and creates quality gaps while they learn.",
      },
      {
        title: "Inconsistent documentation creates brand risk",
        desc: "When a franchise location submits a poorly documented scope, it reflects on your entire brand. Adjusters and insurance carriers form opinions about your franchise based on the quality of your documentation — one bad location can damage the whole network.",
      },
    ],
    solutions: [
      {
        title: "Standardized scoping templates",
        desc: "Deploy consistent scoping templates across every location. ClaimScribe ensures every technician follows the same documentation process — regardless of location, experience level, or loss type.",
        feature: "Template Manager",
      },
      {
        title: "Franchise-wide analytics dashboard",
        desc: "See scoping performance across every location in real time. Track average scope values, first-submission approval rates, supplement frequency, and adjuster pushback by location, region, or franchise group.",
        feature: "Franchise Analytics",
      },
      {
        title: "AI-guided scoping for faster training",
        desc: "New estimators get AI guidance through every scope. ClaimScribe prompts for missing documentation, suggests line items based on damage type, and flags incomplete scopes before submission. Training time drops from months to weeks.",
        feature: "Guided Scoping AI",
      },
      {
        title: "Centralized quality control",
        desc: "Corporate QC teams can review scopes from any location before submission. Set minimum documentation standards, require photo counts, and enforce scope completeness rules franchise-wide.",
        feature: "QC Review Portal",
      },
    ],
    metrics: [
      { stat: "34%", label: "increase in average scope value across locations" },
      { stat: "60%", label: "faster new estimator ramp-up time" },
      { stat: "92%", label: "franchise-wide first-submission approval rate" },
      { stat: "100%", label: "location visibility for corporate teams" },
    ],
  },
];

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ slug: uc.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) return {};
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    openGraph: { title: uc.metaTitle, description: uc.metaDescription },
  };
}

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) notFound();

  const otherCases = USE_CASES.filter((u) => u.slug !== uc.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Case</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{uc.heroHeadline}</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">{uc.heroSub}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">The Challenges You Face</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Without the right tools, these problems eat into your revenue on every single claim.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {uc.painPoints.map((pp, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-white">{pp.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{pp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">How ClaimScribe Solves It</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              AI-powered tools designed specifically for restoration professionals.
            </p>
            <div className="space-y-8">
              {uc.solutions.map((sol, i) => (
                <div key={i} className="flex gap-5 items-start rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-semibold text-white text-lg">{sol.title}</h3>
                      <span className="text-xs font-medium bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full">
                        {sol.feature}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-blue-600/10 border-y border-blue-500/20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-10 text-center">Results That Matter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {uc.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-blue-400">{m.stat}</p>
                  <p className="text-sm text-gray-400 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Scope Smarter?</h2>
            <p className="text-blue-100 mb-8">
              Join restoration companies recovering thousands more per claim with AI-powered scoping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore More Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/use-cases/${other.slug}`}
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/30 rounded-xl p-6 transition-all"
                >
                  <div>
                    <h3 className="font-semibold text-white">{other.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{other.metaDescription.slice(0, 80)}…</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://claimscribe.ai/use-cases" },
              { "@type": "ListItem", position: 3, name: uc.title, item: `https://claimscribe.ai/use-cases/${uc.slug}` },
            ],
          }),
        }}
      />
    </>
  );
}
