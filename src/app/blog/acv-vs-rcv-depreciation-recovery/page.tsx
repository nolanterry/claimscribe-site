import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ACV vs RCV: How Restoration Contractors Recover Full Replacement Cost",
  description:
    "Understand actual cash value vs replacement cost value on insurance claims. Learn how depreciation works, when to file for recoverable depreciation, and how to maximize claim payouts.",
  keywords: [
    "ACV vs RCV",
    "actual cash value vs replacement cost",
    "recoverable depreciation",
    "insurance claim depreciation",
    "restoration contractor billing",
    "replacement cost value",
    "depreciation recovery",
  ],
  alternates: { canonical: "/blog/acv-vs-rcv-depreciation-recovery" },
};

export default function ACVvsRCVPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ACV vs RCV: How Restoration Contractors Recover Full Replacement Cost",
    description:
      "Understand actual cash value vs replacement cost value on insurance claims. Learn how depreciation works, when to file for recoverable depreciation, and how to maximize claim payouts.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: {
      "@type": "Person",
      name: "Nolan Terry",
      url: "https://claimscribe.ai/blog/authors/nolan-terry",
    },
    publisher: {
      "@type": "Organization",
      name: "ClaimScribe",
      url: "https://claimscribe.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://claimscribe.ai/blog/acv-vs-rcv-depreciation-recovery",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "ACV vs RCV: Depreciation Recovery", item: "https://claimscribe.ai/blog/acv-vs-rcv-depreciation-recovery" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />14 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            ACV vs RCV: How Restoration Contractors Recover Full Replacement Cost
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Every restoration contractor has watched a homeowner panic when
              their insurance company sends a check that&apos;s 30-40% less
              than the estimate. The adjuster isn&apos;t lowballing — they&apos;re
              paying ACV first, holding back depreciation until repairs are
              complete. Understanding this process and structuring your billing
              around it is the difference between getting paid in full and
              leaving thousands on every job.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What ACV and RCV Actually Mean
            </h2>
            <p className="text-gray-300">
              <strong className="text-white">Replacement Cost Value (RCV)</strong> is
              what it costs to replace or repair damaged property with materials
              of like kind and quality at today&apos;s prices. This is the full
              scope value — your estimate total.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Actual Cash Value (ACV)</strong> is
              RCV minus depreciation. It&apos;s what the item is &quot;worth&quot;
              given its age and condition before the loss. A 15-year-old roof
              with a 25-year shingle has 40% of its life left, so the carrier
              depreciates 60% of the roof replacement cost.
            </p>
            <p className="text-gray-300">
              Most homeowner policies are RCV policies — meaning the
              policyholder is entitled to the full replacement cost, but the
              carrier pays in two installments: ACV first, then recoverable
              depreciation after repairs are documented as complete.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How Depreciation Is Calculated
            </h2>
            <p className="text-gray-300">
              Carriers depreciate based on the age, condition, and expected
              useful life of each item. There&apos;s no universal depreciation
              schedule — each carrier uses their own tables (sometimes powered
              by Xactimate&apos;s depreciation module). Common examples:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Item</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Useful Life</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Age</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Depreciation</th>
                    <th className="text-left py-3 text-white font-semibold">ACV Payout</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Architectural shingles</td>
                    <td className="py-3 pr-4">30 years</td>
                    <td className="py-3 pr-4">12 years</td>
                    <td className="py-3 pr-4">40%</td>
                    <td className="py-3">60% of RCV</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Carpet (residential)</td>
                    <td className="py-3 pr-4">10 years</td>
                    <td className="py-3 pr-4">6 years</td>
                    <td className="py-3 pr-4">60%</td>
                    <td className="py-3">40% of RCV</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Interior paint</td>
                    <td className="py-3 pr-4">5 years</td>
                    <td className="py-3 pr-4">3 years</td>
                    <td className="py-3 pr-4">60%</td>
                    <td className="py-3">40% of RCV</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">HVAC system</td>
                    <td className="py-3 pr-4">20 years</td>
                    <td className="py-3 pr-4">8 years</td>
                    <td className="py-3 pr-4">40%</td>
                    <td className="py-3">60% of RCV</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Hardwood flooring</td>
                    <td className="py-3 pr-4">25 years</td>
                    <td className="py-3 pr-4">5 years</td>
                    <td className="py-3 pr-4">20%</td>
                    <td className="py-3">80% of RCV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300">
              Labor is generally not depreciable — only materials. Some states
              (Florida, Texas, others) have enacted anti-depreciation-of-labor
              statutes. Know your state&apos;s rules; this alone can swing a
              claim by thousands.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Two-Payment Process
            </h2>
            <p className="text-gray-300">
              Here&apos;s how the money actually flows on an RCV policy:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Initial payment (ACV)</strong> —
                Carrier issues a check for the actual cash value minus the
                deductible. On a $50,000 RCV scope with $15,000 in
                depreciation and a $2,500 deductible, the first check is
                $32,500.
              </li>
              <li>
                <strong className="text-white">Repairs completed</strong> —
                Contractor finishes the work and submits proof of completion:
                final invoice, photos, certificate of completion.
              </li>
              <li>
                <strong className="text-white">Depreciation recovery</strong> —
                Carrier releases the held-back depreciation ($15,000 in this
                example). Total payout: $47,500 ($50,000 minus the deductible).
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Contractors Lose Money on Depreciation
            </h2>
            <p className="text-gray-300">
              The most common mistakes contractors make with depreciation:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Never filing for recoverable depreciation</strong> — Some contractors don&apos;t know they need to submit proof of completion to trigger the second payment. The homeowner may pocket the ACV check and never tell the carrier repairs are done.</li>
              <li><strong className="text-white">Missing the deadline</strong> — Most policies require depreciation recovery within 180 days of the loss date (some states allow 365 days). Miss it and the money is gone.</li>
              <li><strong className="text-white">Incomplete documentation</strong> — A final invoice alone may not be enough. Carriers want before/after photos, line-item matching to the original estimate, and sometimes a signed certificate of satisfaction.</li>
              <li><strong className="text-white">Not challenging depreciation rates</strong> — Carriers sometimes over-depreciate. A roof with 20 years of life left shouldn&apos;t be depreciated at 50%. Challenge it with manufacturer warranty documentation.</li>
              <li><strong className="text-white">Depreciating labor in non-exempt states</strong> — If your state prohibits labor depreciation, the carrier can only depreciate materials. Verify the breakdown on every estimate.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              State-by-State Labor Depreciation Rules
            </h2>
            <p className="text-gray-300">
              As of 2026, these states prohibit or restrict depreciation of labor costs on property insurance claims:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Prohibited:</strong> Arkansas, Florida, Georgia, Kentucky, Mississippi, Nebraska, North Dakota, Oklahoma, Tennessee, Texas, West Virginia, Wisconsin</li>
              <li><strong className="text-white">Restricted/contested:</strong> Louisiana, Ohio, South Carolina (case law varies)</li>
              <li><strong className="text-white">Allowed:</strong> Most other states permit labor depreciation per policy language</li>
            </ul>
            <p className="text-gray-300">
              If you operate in a labor-depreciation-prohibited state and the carrier&apos;s estimate depreciates labor, that&apos;s a supplement opportunity right there. File it.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How to Structure Your Billing for Maximum Recovery
            </h2>
            <p className="text-gray-300">
              Smart contractors structure their contracts and billing to make depreciation recovery seamless:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Collect ACV + deductible upfront</strong> — Your contract should specify that the homeowner pays the deductible out of pocket and assigns the insurance proceeds to you (or at minimum, commits to releasing the depreciation recovery).
              </li>
              <li>
                <strong className="text-white">Document as you go</strong> — Take progress photos at each phase. When you submit for depreciation recovery, you need to show the work matches the approved scope line by line.
              </li>
              <li>
                <strong className="text-white">Submit depreciation recovery immediately</strong> — The day you complete repairs, send the carrier: final invoice, certificate of completion, before/after photos, and a formal request to release recoverable depreciation.
              </li>
              <li>
                <strong className="text-white">Track deadlines in your CRM</strong> — Set a reminder 30 days before the depreciation recovery deadline. If the homeowner is dragging on signing off, call them.
              </li>
              <li>
                <strong className="text-white">Separate labor and material on invoices</strong> — In labor-depreciation-prohibited states, this makes it easy to verify the carrier only depreciated materials.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              ACV-Only Policies: What Changes
            </h2>
            <p className="text-gray-300">
              Some policyholders — especially those with older homes, lower-tier
              policies, or in catastrophe-prone areas — have ACV-only policies.
              There&apos;s no recoverable depreciation. What the carrier pays
              is all there is.
            </p>
            <p className="text-gray-300">
              For contractors, this means:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>The homeowner will likely need to pay a significant out-of-pocket difference</li>
              <li>Set expectations early — show them the RCV scope and the ACV payout gap</li>
              <li>Consider offering a &quot;repair to ACV&quot; scope option — use existing materials where possible, patch instead of replace, prioritize functional repairs over cosmetic perfection</li>
              <li>Never reduce your scope quality or skip line items — the estimate should reflect full RCV even on an ACV policy (it establishes the baseline for any disputes)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Handles Depreciation
            </h2>
            <p className="text-gray-300">
              ClaimScribe automatically separates labor and material costs in
              generated scopes, flags items where depreciation rates seem
              excessive based on the documented condition, and generates
              depreciation recovery documentation packages when repairs are
              marked complete. The AI tracks state-specific labor depreciation
              rules so your scopes are always structured correctly for
              maximum recovery.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Stop leaving depreciation on the table
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe structures every scope for maximum depreciation
                recovery — with labor/material separation, state-specific
                rules, and automated recovery documentation.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
              >
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="acv-vs-rcv-depreciation-recovery" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
