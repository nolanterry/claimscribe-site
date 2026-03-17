import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Supplement Writing for Restoration Contractors: Get Paid What You're Owed",
  description:
    "Master the art of writing insurance claim supplements as a restoration contractor. Learn when to supplement, what documentation adjusters need, and how to recover $5K-$20K+ per job.",
  keywords: [
    "supplement writing restoration",
    "insurance claim supplement",
    "restoration contractor supplement",
    "Xactimate supplement tips",
    "claim supplement documentation",
    "restoration supplement process",
    "insurance supplement approval",
  ],
  alternates: { canonical: "/blog/supplement-writing-restoration-contractors" },
};

export default function SupplementWritingGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supplement Writing for Restoration Contractors: Get Paid What You're Owed",
    description: "Master the art of writing insurance claim supplements. Learn when to supplement, what documentation adjusters need, and how to recover $5K-$20K+ per job.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/supplement-writing-restoration-contractors" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Supplement Writing for Restoration Contractors", item: "https://claimscribe.ai/blog/supplement-writing-restoration-contractors" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />March 17, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />15 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Supplement Writing for Restoration Contractors: Get Paid What You&apos;re Owed
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              The average restoration contractor leaves $8,000-$15,000 per job on the table by not supplementing — or by supplementing poorly. Insurance carriers underpay initial estimates by design. Supplements aren&apos;t optional; they&apos;re how you get paid fairly. Here&apos;s how to write them so they actually get approved.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Is a Supplement (And Why Adjusters Expect Them)?</h2>
            <p className="text-gray-300">
              A supplement is a revised estimate submitted after the initial scope when additional damage is discovered or when the carrier&apos;s estimate missed legitimate line items. This isn&apos;t an adversarial process — adjusters know initial estimates are incomplete. Most carriers expect supplements on any job over $10K. The difference is whether you submit a professional, documented supplement that gets approved in one round or a vague request that gets denied and drags out for months.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">When to Write a Supplement</h2>
            <p className="text-gray-300">There are five legitimate triggers for a supplement:</p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Hidden damage discovered during demo</strong> — mold behind walls, rotted subfloor under tile, additional water migration found during tear-out. This is the most common and most defensible reason.</li>
              <li><strong className="text-white">Line items cut from the carrier&apos;s estimate</strong> — the adjuster&apos;s estimate excluded legitimate scope items. Compare their estimate to yours line-by-line.</li>
              <li><strong className="text-white">Code upgrades required</strong> — local building codes require upgrades beyond like-kind replacement (GFCI outlets, arc-fault breakers, tempered glass, etc.).</li>
              <li><strong className="text-white">Material or trade cost increases</strong> — if material prices spiked between the original estimate date and actual repair.</li>
              <li><strong className="text-white">Scope expansion</strong> — additional rooms or areas affected beyond the original scope (common with water migration and smoke damage).</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Anatomy of a Winning Supplement</h2>
            <p className="text-gray-300">
              Every supplement that gets approved fast has the same structure:
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Cover Letter</h3>
            <p className="text-gray-300">
              One page. State the claim number, insured name, date of loss, and the reason for the supplement. Be specific: &quot;During demolition on March 12, we discovered mold growth on the subfloor and bottom plate in the master bathroom, extending 4 feet beyond the original scope area.&quot; Not: &quot;We found more damage.&quot;
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Photo Documentation</h3>
            <p className="text-gray-300">
              Photos are the evidence that makes or breaks your supplement:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Before demo</strong> — show the area before tear-out (establishes baseline)</li>
              <li><strong className="text-white">During demo</strong> — show the hidden damage as discovered (the money shot)</li>
              <li><strong className="text-white">Context shots</strong> — wide angles showing where the damage is relative to the original scope</li>
              <li><strong className="text-white">Measurements</strong> — tape measure in frame, moisture readings on screen</li>
              <li>Label every photo. Unlabeled photos get ignored.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Revised Xactimate Estimate</h3>
            <p className="text-gray-300">
              Submit a complete revised estimate, not just the additional items. The adjuster needs to see the full scope in context. Highlight or annotate the new/changed line items so they can quickly identify what changed.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Supporting Documentation</h3>
            <p className="text-gray-300">Include whatever strengthens your case:</p>
            <ul className="text-gray-300 space-y-2">
              <li>Moisture readings and maps showing additional affected areas</li>
              <li>IH (Industrial Hygienist) reports for mold findings</li>
              <li>Code requirement references (specific ordinance numbers)</li>
              <li>Subcontractor estimates for specialty work</li>
              <li>Material price documentation if claiming cost increases</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Top 10 Most Underpaid Line Items</h2>
            <p className="text-gray-300">
              These are the line items carriers consistently cut or omit. Build your supplements around these:
            </p>
            <ol className="text-gray-300 space-y-2">
              <li><strong className="text-white">Overhead &amp; Profit (O&amp;P)</strong> — carriers often strip O&amp;P on jobs that clearly qualify. If you&apos;re managing 3+ trades, O&amp;P applies.</li>
              <li><strong className="text-white">Content manipulation</strong> — moving, storing, and returning contents</li>
              <li><strong className="text-white">Demolition vs. removal</strong> — demo labor and haul-off are separate line items</li>
              <li><strong className="text-white">Matching</strong> — you can&apos;t replace 30% of a floor and leave the rest; matching applies</li>
              <li><strong className="text-white">General conditions</strong> — dumpster, portable toilet, temporary protection, job site setup</li>
              <li><strong className="text-white">Permits</strong> — if the job requires a building permit, it&apos;s a reimbursable cost</li>
              <li><strong className="text-white">Code upgrades</strong> — electrical, plumbing, and structural code requirements</li>
              <li><strong className="text-white">Equipment charges</strong> — dehumidifiers, air movers, air scrubbers beyond the drying estimate</li>
              <li><strong className="text-white">Supervision / project management</strong> — legitimate on complex multi-phase jobs</li>
              <li><strong className="text-white">After-hours / emergency rates</strong> — if the initial response was outside normal business hours</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Supplement Timing: Don&apos;t Wait</h2>
            <p className="text-gray-300">
              The biggest mistake contractors make is waiting until the job is done to supplement. Submit supplements as soon as additional damage is discovered — ideally within 48 hours. Call the adjuster before sending the written supplement so they&apos;re not blindsided. Adjusters who are surprised tend to deny; adjusters who are informed tend to approve.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How ClaimScribe Streamlines Supplements</h2>
            <p className="text-gray-300">
              ClaimScribe&apos;s AI compares your scope against the carrier&apos;s estimate and automatically identifies missing line items, underpaid categories, and supplement opportunities. Upload photos of hidden damage during demo — the AI generates supplement documentation with labeled photos, revised line items, and a professional cover letter ready to submit. Contractors using ClaimScribe report recovering an average of $6,200 more per supplemented claim.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">Stop leaving money on the table</h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe identifies supplement opportunities automatically and builds carrier-ready documentation in minutes. Start your free 14-day trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
