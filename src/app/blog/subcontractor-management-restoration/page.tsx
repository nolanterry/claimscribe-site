import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Subcontractor Management for Restoration Contractors: Vetting, Scheduling & Payment",
  description:
    "How to manage subcontractors on restoration jobs. Covers vetting, insurance requirements, scheduling, scope sheets, payment terms, and lien waiver protocols.",
  keywords: [
    "subcontractor management restoration",
    "restoration subcontractor vetting",
    "managing subs restoration jobs",
    "restoration subcontractor insurance",
    "subcontractor scheduling restoration",
    "restoration project management",
  ],
  alternates: { canonical: "/blog/subcontractor-management-restoration" },
};

export default function SubcontractorManagementPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Subcontractor Management for Restoration Contractors: Vetting, Scheduling & Payment",
    description:
      "How to manage subcontractors on restoration jobs. Covers vetting, insurance requirements, scheduling, scope sheets, payment terms, and lien waiver protocols.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/subcontractor-management-restoration" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Subcontractor Management", item: "https://claimscribe.ai/blog/subcontractor-management-restoration" },
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
            Subcontractor Management for Restoration Contractors: Vetting, Scheduling &amp; Payment
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              The average restoration company subs out 40-60% of its
              reconstruction work — roofing, plumbing, electrical, HVAC,
              flooring, and paint. Your profit margin on these jobs depends
              entirely on how well you manage subs: their quality, their
              timeline, their billing, and their paperwork. A $50K
              reconstruction scope with sloppy sub management can net you
              less than a $20K job you self-performed.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Building Your Sub Bench
            </h2>
            <p className="text-gray-300">
              Don&apos;t wait until you need a sub to find one. Build your bench
              during slow periods so you have vetted options when a large loss
              hits:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">2-3 subs per trade</strong> — You need backups. If your primary electrician is booked, you shouldn&apos;t be scrambling on Google.</li>
              <li><strong className="text-white">Trades to cover:</strong> Roofing, plumbing, electrical, HVAC, flooring (hardwood, tile, carpet), painting, drywall (if you don&apos;t self-perform), cabinetry, countertops, fencing, concrete, landscaping</li>
              <li><strong className="text-white">Specialty trades:</strong> Asbestos/lead abatement, structural engineers, environmental consultants, tree removal, elevator repair (commercial)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Vetting Requirements
            </h2>
            <p className="text-gray-300">
              Before a sub sets foot on your job site, verify these non-negotiables:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Requirement</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Minimum</th>
                    <th className="text-left py-3 text-white font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">General liability</td>
                    <td className="py-3 pr-4">$1M/$2M</td>
                    <td className="py-3">Your carrier will require this</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Workers&apos; comp</td>
                    <td className="py-3 pr-4">State statutory</td>
                    <td className="py-3">You&apos;re liable if an uninsured sub&apos;s employee is hurt</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Auto insurance</td>
                    <td className="py-3 pr-4">$1M combined</td>
                    <td className="py-3">Driving to your job site in a company vehicle</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">License</td>
                    <td className="py-3 pr-4">State/local</td>
                    <td className="py-3">Unlicensed work can void permits and warranties</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">W-9 on file</td>
                    <td className="py-3 pr-4">Before first payment</td>
                    <td className="py-3">1099 reporting compliance</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Additional insured endorsement</td>
                    <td className="py-3 pr-4">Your company named</td>
                    <td className="py-3">Extends their coverage to claims arising from your job</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300">
              Set COI (Certificate of Insurance) expiration reminders. A sub
              whose GL expired two months ago is an uninsured sub on your
              job site.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Writing Sub Scope Sheets
            </h2>
            <p className="text-gray-300">
              Never give a sub a verbal scope. Every sub gets a written scope
              sheet that includes:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Specific work description</strong> — &quot;Install 1,200 SF of LVP flooring in living room, hallway, and 3 bedrooms per attached floor plan&quot; — not &quot;install flooring.&quot;</li>
              <li><strong className="text-white">Materials responsibility</strong> — Who buys materials? If you&apos;re providing materials, specify exactly what. If they&apos;re providing, specify brand/grade/color.</li>
              <li><strong className="text-white">Start and completion dates</strong> — Firm dates with a per-day liquidated damages clause for jobs where timing matters.</li>
              <li><strong className="text-white">Quality standards</strong> — &quot;Match existing finish,&quot; &quot;per manufacturer installation instructions,&quot; or reference a specific spec.</li>
              <li><strong className="text-white">Cleanup responsibility</strong> — Subs clean up their own debris daily. This should be explicit.</li>
              <li><strong className="text-white">Payment terms</strong> — Amount, milestones (if applicable), payment timeline (net-15, net-30), and required documentation (invoice, lien waiver).</li>
              <li><strong className="text-white">Change order process</strong> — No additional work without a signed change order. Period.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Scheduling and Sequencing
            </h2>
            <p className="text-gray-300">
              The biggest sub-related profit killer is scheduling gaps — days
              where no one is working because Trade A finished early and
              Trade B doesn&apos;t start until Monday. On a reconstruction
              job, the typical sequence is:
            </p>
            <ol className="text-gray-300 space-y-2">
              <li>Demo and debris removal</li>
              <li>Structural repairs (framing, subfloor)</li>
              <li>Rough-in: plumbing, electrical, HVAC</li>
              <li>Insulation and vapor barrier</li>
              <li>Drywall hang, tape, and finish</li>
              <li>Paint (primer + finish coats)</li>
              <li>Flooring installation</li>
              <li>Cabinetry and countertops</li>
              <li>Finish plumbing and electrical (fixtures, devices)</li>
              <li>Final paint touch-up</li>
              <li>Final clean</li>
            </ol>
            <p className="text-gray-300">
              Each trade needs the previous trade complete and inspected
              before they start. Build 1-2 buffer days between trades for
              inspections, punch list items, and scheduling reality.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Lien Waiver Protocol
            </h2>
            <p className="text-gray-300">
              Lien waivers protect you from a sub filing a mechanic&apos;s
              lien on your client&apos;s property after you&apos;ve paid them.
              The protocol:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Conditional waiver with every payment request</strong> — The sub signs a conditional lien waiver stating &quot;upon receipt and clearing of payment in the amount of $X, lien rights are waived for work through [date].&quot;</li>
              <li><strong className="text-white">Unconditional waiver after payment clears</strong> — Once the check clears, collect an unconditional waiver confirming payment was received.</li>
              <li><strong className="text-white">Final unconditional waiver at project completion</strong> — Before your final invoice to the carrier/homeowner, collect final unconditional waivers from every sub who touched the job.</li>
              <li><strong className="text-white">No waiver, no payment</strong> — Make this policy clear from the start. It protects everyone.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Payment Structures That Work
            </h2>
            <p className="text-gray-300">
              How you pay subs affects your cash flow and your leverage:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Pay-when-paid</strong> — You pay the sub when you get paid by the carrier. Common but requires strong sub relationships and clear contract language.</li>
              <li><strong className="text-white">Milestone payments</strong> — Split the scope into milestones (rough-in complete, drywall hung, flooring installed) and pay at each completion. Maintains cash flow and gives you quality checkpoints.</li>
              <li><strong className="text-white">Net-30 from invoice</strong> — Standard terms. Sub invoices upon completion, you pay within 30 days.</li>
              <li><strong className="text-white">10% retention</strong> — Hold back 10% until punch list is complete. Controversial with subs but effective for quality assurance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Quality Control Checkpoints
            </h2>
            <p className="text-gray-300">
              Don&apos;t inspect sub work only at completion. Check in at
              critical milestones:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Before drywall covers framing</strong> — Is the framing straight? Are blocking and backing installed for fixtures? Is the rough-in correct?</li>
              <li><strong className="text-white">After drywall finish, before paint</strong> — Seams, corners, screw pops. Much cheaper to fix before paint.</li>
              <li><strong className="text-white">After flooring, before trim</strong> — Transitions, thresholds, pattern alignment. Once trim is in, the flooring sub is gone.</li>
              <li><strong className="text-white">Final walkthrough</strong> — Room by room with a punch list. Document issues with photos. Sub corrects before final payment.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Helps Manage Sub Coordination
            </h2>
            <p className="text-gray-300">
              ClaimScribe generates trade-specific scope sheets directly from
              the approved insurance scope, breaking down the estimate into
              sub-ready work packages with quantities, materials, and
              completion requirements. The platform tracks sub assignments
              per phase, stores COIs with expiration alerts, and ties sub
              invoices back to specific scope line items for clean job costing.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Manage subs without the chaos
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe generates trade-specific scope sheets, tracks
                COIs, and ties sub costs back to your insurance estimate.
                Start your free trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="subcontractor-management-restoration" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
