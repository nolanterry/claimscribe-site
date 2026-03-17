import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Restoration Contractor Profit Margins: How to Hit 40%+ Net on Every Job",
  description:
    "Breakdown of restoration contractor profit margins by job type. Learn where margins leak, how top contractors hit 40%+ net profit, and the pricing strategies that separate profitable shops from struggling ones.",
  keywords: [
    "restoration contractor profit margins",
    "restoration business profitability",
    "restoration contractor pricing",
    "water damage profit margin",
    "fire restoration profit",
    "restoration business revenue",
    "restoration contractor overhead",
  ],
  alternates: { canonical: "/blog/restoration-contractor-profit-margins" },
};

export default function RestorationProfitMargins() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Restoration Contractor Profit Margins: How to Hit 40%+ Net on Every Job",
    description: "Breakdown of restoration contractor profit margins by job type. Learn where margins leak and how top contractors hit 40%+ net profit.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/restoration-contractor-profit-margins" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Restoration Contractor Profit Margins", item: "https://claimscribe.ai/blog/restoration-contractor-profit-margins" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />16 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Restoration Contractor Profit Margins: How to Hit 40%+ Net on Every Job
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Most restoration contractors operate at 8-15% net profit margins. The best operators — the ones who understand scoping, supplementing, and overhead management — consistently hit 35-45%. The difference isn&apos;t volume. It&apos;s how much of each dollar you keep. Let&apos;s break down where the money goes and where the opportunities are.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Industry Benchmarks by Job Type</h2>
            <p className="text-gray-300">
              Not all restoration work is created equal. Here&apos;s what typical margins look like across job types:
            </p>

            <div className="overflow-x-auto mt-6 mb-8">
              <table className="w-full text-gray-300 text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white">Job Type</th>
                    <th className="text-left py-3 text-white">Avg. Job Size</th>
                    <th className="text-left py-3 text-white">Typical Margin</th>
                    <th className="text-left py-3 text-white">Top Performer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5"><td className="py-2">Water mitigation</td><td>$3K-$8K</td><td>45-55%</td><td>60%+</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Water reconstruction</td><td>$10K-$40K</td><td>25-35%</td><td>40%+</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Fire restoration</td><td>$30K-$150K+</td><td>20-30%</td><td>38%+</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Mold remediation</td><td>$5K-$25K</td><td>35-45%</td><td>50%+</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Storm/wind damage</td><td>$8K-$50K</td><td>25-35%</td><td>42%+</td></tr>
                  <tr><td className="py-2">Contents cleaning</td><td>$5K-$30K</td><td>40-55%</td><td>60%+</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-300">
              Notice the pattern: mitigation and contents work have the highest margins because they&apos;re equipment and labor-intensive with minimal material costs. Reconstruction has lower margins because you&apos;re buying materials and managing subcontractors.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Where Margins Leak</h2>
            <p className="text-gray-300">
              The gap between a 12% operator and a 40% operator usually comes down to five leaks:
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">1. Under-Scoping</h3>
            <p className="text-gray-300">
              The #1 margin killer. If your initial scope misses line items, you either eat the cost or fight for supplements after the fact. Contractors who use detailed scoping checklists and AI-assisted line item generation capture 15-25% more per job than those who eyeball it.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">2. Not Supplementing</h3>
            <p className="text-gray-300">
              Carriers&apos; initial estimates are intentionally conservative. Every job over $10K should have at least one supplement for hidden damage discovered during demo. Contractors who supplement consistently recover $5K-$15K more per job. That goes straight to the bottom line.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">3. Accepting Carrier Cuts Without Pushback</h3>
            <p className="text-gray-300">
              When the adjuster cuts line items, too many contractors accept it. If the line item is legitimate and documented, push back with evidence. O&amp;P denials alone cost the average restoration company $50K-$100K per year in lost revenue.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">4. Poor Job Costing</h3>
            <p className="text-gray-300">
              If you don&apos;t know your true cost per job — including overhead allocation, equipment depreciation, and indirect labor — you can&apos;t identify which jobs are profitable and which are losing money. Track every hour, every material receipt, every sub invoice against the original scope.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">5. Equipment Utilization</h3>
            <p className="text-gray-300">
              Your dehumidifiers, air movers, and air scrubbers are profit centers — but only when they&apos;re deployed. Equipment sitting in your warehouse costs you money. Track utilization rates. If equipment is deployed less than 60% of the time, you either have too much or aren&apos;t closing enough jobs.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The O&amp;P Battle</h2>
            <p className="text-gray-300">
              Overhead &amp; Profit (typically 10% overhead + 10% profit on the total estimate) is the single biggest margin item most contractors forfeit. Carriers will deny O&amp;P unless you can demonstrate you&apos;re acting as a general contractor managing multiple trades. The threshold is typically 3+ trades on a single loss.
            </p>
            <p className="text-gray-300">
              Document every sub you manage: demolition crew, plumber, electrician, drywall, painter, flooring, HVAC. If you&apos;re coordinating 3+ of these, O&amp;P applies. Submit a trade coordination letter listing every sub, their scope, and your supervisory role.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Pricing Strategy: Program vs. Non-Program Work</h2>
            <p className="text-gray-300">
              Program work (TPA/insurance company referral programs) trades margin for volume. Typical program rates are 15-20% below market, but the lead flow is consistent. Non-program work (direct-to-homeowner, commercial) allows full pricing but requires marketing spend.
            </p>
            <p className="text-gray-300">
              The healthiest restoration businesses run a 60/40 or 50/50 split: enough program work to cover overhead, enough non-program work to drive actual profit. If you&apos;re 100% program work, you&apos;re running a low-margin volume play. If you&apos;re 100% non-program, you&apos;re vulnerable to slow months.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Role of Technology in Margin Improvement</h2>
            <p className="text-gray-300">
              The fastest way to improve margins without increasing revenue is to reduce the time between job start and payment collection. Every day a job sits unpaid is a day you&apos;re financing the carrier&apos;s obligation.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Faster scoping</strong> — AI-assisted scoping cuts scope writing from 3-4 hours to 30 minutes. That&apos;s your estimator handling 4x more jobs.</li>
              <li><strong className="text-white">Automated documentation</strong> — photo labeling, moisture maps, and progress reports generated automatically instead of manually.</li>
              <li><strong className="text-white">Supplement identification</strong> — AI that compares your scope to the carrier estimate and flags missed items before you start the job.</li>
              <li><strong className="text-white">Faster collection</strong> — complete, well-documented scopes get approved faster. Faster approval = faster payment.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How ClaimScribe Impacts Your Bottom Line</h2>
            <p className="text-gray-300">
              ClaimScribe attacks margin leaks at the source: incomplete scoping and slow documentation. The AI catches missed line items (average $4,200 per job), identifies supplement opportunities during demolition, and generates carrier-ready documentation in minutes instead of hours. For a contractor running 10 jobs per month, that&apos;s $40K+ in recovered revenue annually — pure margin improvement with no additional overhead.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">Your margins are a scoping problem</h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe catches what you miss. Contractors using AI-assisted scoping recover thousands more per job. Start your free 14-day trial.
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
