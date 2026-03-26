import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Services Billing for Restoration Contractors: After-Hours, Board-Up & Water Extraction",
  description:
    "How to bill emergency restoration services correctly. Covers after-hours rates, board-up and tarp pricing, water extraction equipment charges, and Xactimate line items for emergency response.",
  keywords: [
    "emergency services billing restoration",
    "after-hours restoration rates",
    "board-up pricing",
    "water extraction billing",
    "restoration emergency response",
    "Xactimate emergency line items",
    "restoration contractor billing",
  ],
  alternates: { canonical: "/blog/emergency-services-billing-restoration" },
};

export default function EmergencyServicesBillingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Emergency Services Billing for Restoration Contractors: After-Hours, Board-Up & Water Extraction",
    description:
      "How to bill emergency restoration services correctly. Covers after-hours rates, board-up and tarp pricing, water extraction equipment charges, and Xactimate line items for emergency response.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/emergency-services-billing-restoration" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Emergency Services Billing", item: "https://claimscribe.ai/blog/emergency-services-billing-restoration" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />13 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Emergency Services Billing for Restoration Contractors: After-Hours, Board-Up &amp; Water Extraction
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Emergency services are the highest-margin work in restoration —
              and the most commonly under-billed. After-hours callouts,
              board-up labor, emergency water extraction, and equipment
              charges have specific billing protocols that many contractors
              either don&apos;t know or don&apos;t enforce. If you&apos;re
              rolling a truck at 2 AM and billing it the same as a Tuesday
              afternoon job, you&apos;re subsidizing carriers with your crew&apos;s
              sleep.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Emergency Services Deserve Separate Billing
            </h2>
            <p className="text-gray-300">
              Emergency response isn&apos;t part of the restoration scope — it&apos;s
              a separate service that precedes it. The IICRC S500 and S520
              standards distinguish between emergency mitigation (stabilize
              the loss) and restoration (return to pre-loss condition).
              Carriers recognize this distinction, which is why emergency
              services should always be invoiced separately from the
              mitigation and reconstruction scopes.
            </p>
            <p className="text-gray-300">
              Separate invoicing has practical benefits: you get paid faster
              (emergency invoices are typically approved within days, not
              weeks), and it doesn&apos;t get tangled up in scope disputes
              that delay the larger claim.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              After-Hours and Weekend Rates
            </h2>
            <p className="text-gray-300">
              Xactimate and most carrier guidelines recognize premium rates
              for after-hours emergency response. The standard markups:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Time Period</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Rate Premium</th>
                    <th className="text-left py-3 text-white font-semibold">When It Applies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Regular hours</td>
                    <td className="py-3 pr-4">Base rate</td>
                    <td className="py-3">Mon–Fri, 8 AM – 5 PM</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">After-hours</td>
                    <td className="py-3 pr-4">1.5x (time and a half)</td>
                    <td className="py-3">Mon–Fri, 5 PM – 8 AM</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Weekends</td>
                    <td className="py-3 pr-4">1.5x – 2x</td>
                    <td className="py-3">Saturday and Sunday</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Holidays</td>
                    <td className="py-3 pr-4">2x (double time)</td>
                    <td className="py-3">Federal holidays</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300">
              To bill premium time in Xactimate, use the overtime/premium
              time modifier on labor line items. Don&apos;t just inflate the
              base rate — use the proper modifier so the adjuster sees a
              transparent premium applied to standard labor pricing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Board-Up and Temporary Protection
            </h2>
            <p className="text-gray-300">
              Board-up billing has multiple components that contractors often
              collapse into a single line item, losing revenue:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Board-up labor</strong> — Per opening, measured by size. A 3&apos;x5&apos; window is a different line item than a 6&apos;x8&apos; sliding door.</li>
              <li><strong className="text-white">Materials</strong> — Plywood (per sheet), screws, and any framing needed for oversized openings.</li>
              <li><strong className="text-white">Tarp installation</strong> — Billed per square (100 SF) of roof covered. Includes the tarp, battens, and fastening.</li>
              <li><strong className="text-white">Scaffolding/lift rental</strong> — If you need a ladder truck or scaffold to reach the roof or upper-story windows, that&apos;s a separate charge.</li>
              <li><strong className="text-white">Trip charge</strong> — If the board-up is a standalone callout (not part of an ongoing project), charge a trip/mobilization fee.</li>
              <li><strong className="text-white">Board removal</strong> — When the permanent repair is ready, removing boards and tarps is a separate billable event.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Water Extraction Equipment Billing
            </h2>
            <p className="text-gray-300">
              Water extraction and drying equipment has two billing
              components: setup/removal labor and daily equipment charges.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Extraction labor</strong> — Billed per hour of actual extraction time. Don&apos;t estimate — track actual time from arrival to completion.</li>
              <li><strong className="text-white">Truck-mount use</strong> — If using a truck-mounted extractor, bill the equipment use separately from labor.</li>
              <li><strong className="text-white">Air movers</strong> — Per unit per day. Document the number placed and the start/end dates.</li>
              <li><strong className="text-white">Dehumidifiers</strong> — Per unit per day, sized to the space (LGR vs. conventional). Commercial dehu rates are higher than residential units.</li>
              <li><strong className="text-white">Air scrubbers</strong> — Per unit per day, required during demo and when airborne particulate is a concern.</li>
              <li><strong className="text-white">Moisture monitoring</strong> — Daily moisture readings and documentation are billable as monitoring visits.</li>
              <li><strong className="text-white">Setup and takedown</strong> — Placing equipment is a labor charge. Picking it up is a separate labor charge. These aren&apos;t included in the daily rate.</li>
            </ul>
            <p className="text-gray-300">
              Common mistake: billing 3 days of equipment when the drying took 5 days. Document drying goal met (readings at or below baseline) and bill every day the equipment ran. If the adjuster questions it, your daily moisture logs justify the timeline.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Minimum Charges and Trip Fees
            </h2>
            <p className="text-gray-300">
              Many carriers accept minimum charges for emergency callouts:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">2-hour minimum</strong> — Even if the job takes 45 minutes, you mobilized a crew and equipment. Two-hour minimums are standard.</li>
              <li><strong className="text-white">Trip/mobilization charge</strong> — Covers vehicle wear, fuel, and travel time. Bill based on distance from your shop to the site.</li>
              <li><strong className="text-white">Service call fee</strong> — A flat fee for showing up, separate from labor. Some carriers push back on this if you&apos;re also billing a trip charge — pick one.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Xactimate Line Items for Emergency Services
            </h2>
            <p className="text-gray-300">
              Key Xactimate categories and selectors for emergency billing:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">WTR EXTRT</strong> — Water extraction, per SF</li>
              <li><strong className="text-white">WTR EXTRCPT</strong> — Water extraction from carpet, per SF</li>
              <li><strong className="text-white">WTR DRYEQ</strong> — Drying equipment charge, per unit per day</li>
              <li><strong className="text-white">WTR MONIT</strong> — Moisture monitoring, per visit</li>
              <li><strong className="text-white">GNL BOARDUP</strong> — Board-up, per opening</li>
              <li><strong className="text-white">GNL TARP</strong> — Temporary tarp, per square</li>
              <li><strong className="text-white">GNL EMRGCLN</strong> — Emergency cleaning, per hour</li>
              <li><strong className="text-white">Premium time modifier</strong> — Apply to labor lines for after-hours work</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Documentation That Supports Emergency Billing
            </h2>
            <p className="text-gray-300">
              Adjusters scrutinize emergency invoices because the rates are
              higher. Protect your billing with:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Time-stamped arrival/departure</strong> — GPS logs, dispatch records, or a timestamped arrival photo.</li>
              <li><strong className="text-white">Crew manifest</strong> — Who was on site, their roles, and their hours.</li>
              <li><strong className="text-white">Conditions found</strong> — Document standing water depth, active leaks, unsecured openings, safety hazards. This justifies the emergency nature of the call.</li>
              <li><strong className="text-white">Work performed</strong> — Itemize: &quot;Extracted standing water from kitchen and hallway (approx. 400 SF), placed 6 air movers and 1 LGR dehumidifier, boarded up 2 broken windows.&quot;</li>
              <li><strong className="text-white">Equipment placed</strong> — Photo each piece of equipment with its serial number and location.</li>
              <li><strong className="text-white">After-hours justification</strong> — Note the time of dispatch and arrival. If it was a 2 AM callout, the invoice should clearly show the time.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Handles Emergency Invoicing
            </h2>
            <p className="text-gray-300">
              ClaimScribe generates separate emergency service invoices with
              automatic after-hours rate application based on your dispatch
              time. The AI populates equipment charges per unit per day,
              calculates trip fees, and builds the documentation package
              (timestamped photos, crew manifest, conditions report) that
              adjusters need to approve emergency billing without pushback.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Bill emergency services at what they&apos;re worth
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe automates after-hours rates, equipment charges,
                and the documentation that gets emergency invoices paid fast.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="emergency-services-billing-restoration" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
