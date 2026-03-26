import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Large Loss Commercial Restoration: Managing $500K+ Projects",
  description:
    "How to manage large loss commercial restoration projects. Covers multi-phase scoping, subcontractor coordination, business interruption claims, and documentation at scale.",
  keywords: [
    "large loss restoration",
    "commercial restoration project management",
    "large loss scoping",
    "commercial fire restoration",
    "business interruption claims",
    "multi-unit restoration",
    "commercial water damage restoration",
  ],
  alternates: { canonical: "/blog/large-loss-commercial-restoration" },
};

export default function LargeLossPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Large Loss Commercial Restoration: Managing $500K+ Projects",
    description:
      "How to manage large loss commercial restoration projects. Covers multi-phase scoping, subcontractor coordination, business interruption claims, and documentation at scale.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/large-loss-commercial-restoration" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Large Loss Commercial Restoration", item: "https://claimscribe.ai/blog/large-loss-commercial-restoration" },
    ],
  };

  return (
    <>
      <ReadingProgressBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />March 26, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />16 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Large Loss Commercial Restoration: Managing $500K+ Projects
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              A $500K commercial restoration job isn&apos;t just a bigger
              version of a residential loss — it&apos;s a fundamentally
              different animal. Multiple stakeholders, phased scoping,
              business interruption claims, union labor considerations, and
              documentation requirements that can bury a team that&apos;s
              used to $30K water damage jobs. Here&apos;s how top restoration
              contractors manage large commercial losses without drowning in
              complexity.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Qualifies as a Large Loss
            </h2>
            <p className="text-gray-300">
              There&apos;s no official threshold, but in the restoration
              industry, &quot;large loss&quot; generally means:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">$250K+ in total scope value</strong> — some carriers set the bar at $500K</li>
              <li><strong className="text-white">Multi-building or multi-floor</strong> — apartment complexes, office buildings, hotels, warehouses</li>
              <li><strong className="text-white">Multiple damage types</strong> — fire + water + smoke + contents + business interruption</li>
              <li><strong className="text-white">Extended timeline</strong> — 3-12 months from start to completion</li>
              <li><strong className="text-white">Specialty trades required</strong> — structural engineers, environmental consultants, industrial hygienists</li>
            </ul>
            <p className="text-gray-300">
              Carriers handle large losses differently. You&apos;re usually
              dealing with a dedicated large-loss adjuster or a third-party
              adjusting firm like Crawford, Sedgwick, or McLarens — not the
              field adjuster who handles residential claims.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Multi-Phase Scoping Approach
            </h2>
            <p className="text-gray-300">
              You cannot scope a large commercial loss in one visit. The
              approach is phased:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Phase 1: Emergency services</strong> —
                Board-up, water extraction, temporary power, temporary HVAC.
                This is billed separately and immediately. Don&apos;t wait for
                the full scope to start emergency billing.
              </li>
              <li>
                <strong className="text-white">Phase 2: Assessment and testing</strong> —
                Environmental testing (asbestos, lead paint in pre-1980
                buildings, mold), structural engineering evaluation, HVAC
                contamination assessment. These reports drive the scope.
              </li>
              <li>
                <strong className="text-white">Phase 3: Mitigation scope</strong> —
                Demo, drying, contents pack-out, hazmat abatement. This gets
                approved and started while you&apos;re still building the
                reconstruction scope.
              </li>
              <li>
                <strong className="text-white">Phase 4: Reconstruction scope</strong> —
                The big number. Rebuild specs, finish schedules, MEP (mechanical/
                electrical/plumbing) coordination. This is where supplements
                will happen — plan for them.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Stakeholder Management
            </h2>
            <p className="text-gray-300">
              On a residential loss, you have the homeowner and the adjuster.
              On a commercial large loss, you might have:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Building owner / property management company</li>
              <li>Tenant(s) with separate policies and attorneys</li>
              <li>Carrier&apos;s large-loss adjuster (internal or TPA)</li>
              <li>Public adjuster representing the building owner</li>
              <li>Consulting engineer hired by the carrier</li>
              <li>Environmental consultant</li>
              <li>City/county building inspector and fire marshal</li>
              <li>Your own subcontractors and specialty trades</li>
            </ul>
            <p className="text-gray-300">
              Weekly status meetings with all parties aren&apos;t optional —
              they&apos;re required. Document everything discussed, agreed to,
              and disputed. Email a recap within 24 hours. This paper trail
              protects you when (not if) disagreements arise.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Business Interruption Claims
            </h2>
            <p className="text-gray-300">
              Commercial policies almost always include business interruption
              (BI) coverage. This is the building owner&apos;s or tenant&apos;s
              lost income during the restoration period. As the contractor,
              you need to understand BI because:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Your timeline affects the payout</strong> — Every day of delay extends the BI claim. The carrier wants you done fast to limit BI exposure.</li>
              <li><strong className="text-white">Acceleration may be justified</strong> — If overtime or additional crews reduce the project by 60 days and the BI savings exceed the acceleration cost, the carrier may approve premium time.</li>
              <li><strong className="text-white">Document delays you don&apos;t cause</strong> — Weather, permit delays, carrier-side approval lag, environmental abatement hold-ups. If the BI claim is disputed later, your daily logs prove which delays were yours and which weren&apos;t.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Documentation at Scale
            </h2>
            <p className="text-gray-300">
              A large loss can generate 500-2,000+ photos, dozens of moisture
              readings, environmental reports, engineering evaluations, change
              orders, and daily logs across months of work. Without a system,
              you&apos;ll lose track.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Daily logs</strong> — Crew count, hours, activities completed, weather conditions, any issues or delays. Non-negotiable on large losses.</li>
              <li><strong className="text-white">Photo organization</strong> — By date, by floor/unit, by category (before/during/after). Timestamp and geotag everything.</li>
              <li><strong className="text-white">Moisture documentation</strong> — Moisture maps updated daily during drying, with readings at the same locations each time to show progression.</li>
              <li><strong className="text-white">Change order tracking</strong> — Every scope change goes through a formal change order with carrier approval before you start the additional work.</li>
              <li><strong className="text-white">Financial tracking</strong> — Job costing by phase, by trade, by floor. You need to know your actual costs vs. the scope value in real time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Subcontractor Coordination
            </h2>
            <p className="text-gray-300">
              On a $500K+ job, you&apos;re probably self-performing demo,
              drying, and maybe drywall — everything else is subbed out.
              Managing subs on a large loss requires:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Pre-qualified sub list</strong> — Don&apos;t scramble to find an electrician mid-project. Have vetted subs with current COIs for every trade.</li>
              <li><strong className="text-white">Scope sheets per sub</strong> — Each sub gets a specific, written scope with quantities, completion dates, and payment terms tied to milestones.</li>
              <li><strong className="text-white">Schedule coordination</strong> — Gantt chart or critical path schedule showing who&apos;s on site when. Electrical rough-in can&apos;t happen while demo is still running in the same area.</li>
              <li><strong className="text-white">Lien waivers</strong> — Collect conditional lien waivers with every sub payment. Unconditional waivers after final payment. No exceptions.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Common Large Loss Mistakes
            </h2>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Under-scoping emergency services</strong> — You&apos;re on site the first night with 3 trucks. Don&apos;t forget to bill after-hours rates, equipment charges, and travel for the initial response. This sets the tone for the whole claim.</li>
              <li><strong className="text-white">Starting reconstruction before mitigation is approved</strong> — If the carrier disputes your demo or drying scope, and you&apos;ve already started rebuilding over it, you have no leverage.</li>
              <li><strong className="text-white">No general conditions line items</strong> — Project management, temporary facilities, dumpsters, portable toilets, temporary fencing — these are real costs on a multi-month project. Include them.</li>
              <li><strong className="text-white">Skipping the pre-construction meeting</strong> — Walk the site with the adjuster, building owner, and your project manager before reconstruction starts. Agree on finish levels, materials, and any upgrades the owner is paying for out of pocket.</li>
              <li><strong className="text-white">Cash flow mismanagement</strong> — A $500K job with net-60 sub payments and a carrier that pays in 45 days can create a $200K cash hole. Bill monthly progress payments. Invoice emergency services separately and immediately.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Scales for Large Losses
            </h2>
            <p className="text-gray-300">
              ClaimScribe handles multi-phase scoping with separate estimate
              packages per phase (emergency, mitigation, reconstruction), each
              with its own photo set and line items. The AI organizes
              documentation by floor, unit, and damage category automatically
              — so when you&apos;re managing a 40-unit apartment fire,
              you&apos;re not drowning in a single flat photo library. Change
              orders, supplements, and progress tracking are built into the
              workflow.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Ready for your first large loss?
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe scales from a single-room water damage to a
                $2M commercial fire. Multi-phase scoping, organized
                documentation, and AI-powered line items at any scale.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="large-loss-commercial-restoration" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
