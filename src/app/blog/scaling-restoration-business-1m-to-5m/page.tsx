import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Scaling a Restoration Business from $1M to $5M: The Operational Playbook",
  description:
    "How to scale a restoration company from $1M to $5M in revenue. Covers hiring, systems, fleet, insurance program work, marketing, and the operational changes that make growth sustainable.",
  keywords: [
    "scaling restoration business",
    "grow restoration company",
    "restoration business growth",
    "restoration company hiring",
    "restoration business systems",
    "restoration marketing strategy",
    "restoration company operations",
  ],
  alternates: { canonical: "/blog/scaling-restoration-business-1m-to-5m" },
};

export default function ScalingRestorationPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scaling a Restoration Business from $1M to $5M: The Operational Playbook",
    description:
      "How to scale a restoration company from $1M to $5M in revenue. Covers hiring, systems, fleet, insurance program work, and the operational changes that make growth sustainable.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/scaling-restoration-business-1m-to-5m" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Scaling a Restoration Business", item: "https://claimscribe.ai/blog/scaling-restoration-business-1m-to-5m" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />17 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Scaling a Restoration Business from $1M to $5M: The Operational Playbook
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              The $1M restoration company is the owner doing estimates,
              managing jobs, answering the phone, and running equipment at
              night. It works because one person can hold everything in their
              head. The $5M company can&apos;t operate that way — it needs
              systems, people, and processes that function without the
              owner&apos;s direct involvement in every job. The gap between
              $1M and $5M isn&apos;t more marketing. It&apos;s operational
              maturity.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The $1M Ceiling: Why Growth Stalls
            </h2>
            <p className="text-gray-300">
              Most restoration companies plateau between $800K and $1.5M
              because the owner becomes the bottleneck. You know the
              symptoms:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Every estimate goes through you</li>
              <li>You&apos;re the only person who talks to adjusters</li>
              <li>Job quality drops when you&apos;re not on site</li>
              <li>You say no to after-hours calls because you&apos;re burned out</li>
              <li>There&apos;s no formal onboarding — new hires learn by watching</li>
              <li>Financial data is in your head or a spreadsheet you update quarterly</li>
            </ul>
            <p className="text-gray-300">
              Breaking through $1M means the owner shifts from technician
              to manager. Breaking through $3M means the owner shifts from
              manager to executive. Each transition is painful and requires
              giving up control of things you&apos;re good at.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Hiring Sequence
            </h2>
            <p className="text-gray-300">
              Hire in this order. Each role unlocks the next growth stage:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Lead technician / crew lead ($1M → $1.5M)</strong> —
                Someone who can run a mitigation job without you on site. This
                person frees you to sell and estimate instead of running
                equipment.
              </li>
              <li>
                <strong className="text-white">Office coordinator ($1.5M → $2M)</strong> —
                Answers phones, dispatches, manages scheduling, handles
                paperwork. This is the hire owners resist most and need most.
                You cannot grow if you&apos;re answering every call.
              </li>
              <li>
                <strong className="text-white">Second crew ($2M → $3M)</strong> —
                Now you can run two jobs simultaneously. The lead tech runs
                one crew, you hire a second crew lead. You&apos;re estimating,
                selling, and managing adjusters full time.
              </li>
              <li>
                <strong className="text-white">Estimator / project manager ($3M → $4M)</strong> —
                Someone who can scope and supplement without you. This is the
                hardest hire because estimating is where your expertise lives.
                Train them on your process. Accept that their first 20
                estimates won&apos;t be as good as yours.
              </li>
              <li>
                <strong className="text-white">Production manager ($4M → $5M)</strong> —
                Oversees all active jobs, manages crews, handles sub
                coordination and quality control. You&apos;re now focused on
                business development, insurance program relationships, and
                strategy.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Systems That Scale
            </h2>
            <p className="text-gray-300">
              At $1M, &quot;the system&quot; is the owner&apos;s brain. At $5M,
              you need documented processes that anyone can follow:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Job management software</strong> — Every job from first call to final invoice lives in one system. DASH, PSA, Next Gear, or ClaimScribe. Non-negotiable past $1.5M.</li>
              <li><strong className="text-white">Standard operating procedures</strong> — Written SOPs for: water damage response, fire loss protocol, mold remediation, equipment setup/teardown, photo documentation, moisture monitoring, estimate creation, supplement submission.</li>
              <li><strong className="text-white">Financial dashboard</strong> — Real-time visibility into: revenue by month, gross margin by job type, accounts receivable aging, work in progress (WIP), equipment utilization. QuickBooks or Sage integrated with your job management platform.</li>
              <li><strong className="text-white">On-call rotation</strong> — You cannot be on call 365 days. Build a rotation with at least 2-3 people qualified to handle after-hours calls and dispatch.</li>
              <li><strong className="text-white">Training program</strong> — IICRC WRT for every tech, ASD for project managers, FSRT for fire loss teams. Budget $3,000-5,000 per employee per year for training. It&apos;s an investment, not an expense.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Insurance Program Work
            </h2>
            <p className="text-gray-300">
              Program work — being on a carrier&apos;s or TPA&apos;s preferred
              vendor list — is the difference between feast-or-famine
              referrals and predictable pipeline:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Major programs:</strong> State Farm (through Master Service Providers like ATI, Cotton), USAA, Travellers, Liberty Mutual, Erie, Chubb</li>
              <li><strong className="text-white">TPAs:</strong> Contractor Connection, Sedgwick, Alacrity, HiTouch</li>
              <li><strong className="text-white">Requirements:</strong> Current IICRC certifications, background checks, COI meeting program minimums, response time SLAs (usually &lt;4 hours), reporting compliance, customer satisfaction scores</li>
              <li><strong className="text-white">Tradeoff:</strong> Program work pays less per job (managed pricing) but provides volume and reduces marketing spend. A healthy mix is 40-60% program work, 40-60% retail/TPA.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Fleet and Equipment
            </h2>
            <p className="text-gray-300">
              Your fleet and equipment capacity determines your revenue
              ceiling:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Revenue Stage</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Vehicles</th>
                    <th className="text-left py-3 text-white font-semibold">Key Equipment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">$1M</td>
                    <td className="py-3 pr-4">1-2 vans/trucks</td>
                    <td className="py-3">20 air movers, 4 dehus, 2 extractors</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">$2M</td>
                    <td className="py-3 pr-4">3-4 vehicles</td>
                    <td className="py-3">40 air movers, 8 dehus, truck-mount extractor</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">$3M</td>
                    <td className="py-3 pr-4">5-6 vehicles</td>
                    <td className="py-3">60+ air movers, 12+ dehus, 2 truck-mounts</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">$5M</td>
                    <td className="py-3 pr-4">8-10 vehicles</td>
                    <td className="py-3">100+ air movers, 20+ dehus, specialized equipment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300">
              Consider renting during surge events (storms, catastrophes)
              rather than owning equipment that sits idle 80% of the year.
              BlueLine Rental, Sunbelt, and restoration-specific rental
              companies offer daily rates on air movers and dehus.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Marketing That Drives Growth
            </h2>
            <p className="text-gray-300">
              At $1M, most of your work comes from referrals, insurance
              programs, and maybe a plumber who sends you water losses. At
              $5M, you need diversified lead sources:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Google Business Profile</strong> — The single most important free marketing asset. Reviews drive local search ranking. Ask for a review on every completed job.</li>
              <li><strong className="text-white">Google Ads</strong> — &quot;Water damage restoration near me&quot; and &quot;emergency water damage&quot; are the highest-converting keywords. Budget $2,000-5,000/month depending on market.</li>
              <li><strong className="text-white">Agent/adjuster relationships</strong> — Take agents to lunch. Sponsor their CE events. Be the contractor they think of first when a policyholder calls with a claim. This is relationship selling, not marketing — but it&apos;s the most effective growth channel in restoration.</li>
              <li><strong className="text-white">Plumber and property manager referrals</strong> — Formalize referral relationships with a referral fee or reciprocal agreement. A plumber who sends you 3 water losses a month is worth more than any ad campaign.</li>
              <li><strong className="text-white">SEO and content</strong> — Blog content targeting &quot;[your city] water damage restoration&quot; and related terms. Builds organic traffic over time. Low cost, high long-term ROI.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Cash Flow at Scale
            </h2>
            <p className="text-gray-300">
              Cash flow kills more growing restoration companies than lack of
              work. At $5M, you might have $800K-$1.2M in receivables at any
              given time. Manage it:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Bill emergency services immediately</strong> — Don&apos;t wait to bundle them with the full scope.</li>
              <li><strong className="text-white">Monthly progress billing on large jobs</strong> — Carrier and policy allow it. Don&apos;t wait until completion.</li>
              <li><strong className="text-white">Collections process</strong> — If a carrier hasn&apos;t paid in 60 days, someone is following up weekly. Assign this to your office coordinator with a standard script.</li>
              <li><strong className="text-white">Line of credit</strong> — Secure a $200K-500K line of credit before you need it. During a storm event, you&apos;ll have $300K in expenses before the first carrier check arrives.</li>
              <li><strong className="text-white">Separate emergency fund</strong> — 3 months of fixed expenses in cash reserves. Payroll, rent, insurance, vehicle payments — everything that&apos;s due regardless of revenue.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Supports Growth
            </h2>
            <p className="text-gray-300">
              ClaimScribe reduces the estimating bottleneck that caps most
              restoration companies at $1-2M. Instead of the owner spending
              4 hours on every scope, AI generates a detailed first draft in
              minutes — so your first estimator hire can be productive from
              week one. The platform standardizes documentation, tracks
              equipment days, and generates supplement packages that your
              team can submit without the owner reviewing every line item.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Ready to scale past the ceiling?
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe removes the estimating bottleneck that keeps
                restoration companies stuck. AI-powered scoping that your
                team can use from day one.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="scaling-restoration-business-1m-to-5m" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
