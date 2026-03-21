import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write a Mold Remediation Scope of Work That Gets Approved",
  description:
    "Step-by-step guide to writing mold remediation scopes that insurance adjusters approve. Covers containment, HEPA filtration, antimicrobial treatment, post-remediation verification, and common Xactimate line items.",
  keywords: [
    "mold remediation scope of work",
    "mold remediation estimate",
    "mold removal insurance claim",
    "mold scoping guide contractor",
    "IICRC S520 mold remediation",
    "mold damage restoration",
    "mold remediation Xactimate",
  ],
  alternates: { canonical: "/blog/mold-remediation-scope-of-work" },
};

export default function MoldRemediationScopeOfWork() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Write a Mold Remediation Scope of Work That Gets Approved",
    description:
      "Step-by-step guide to writing mold remediation scopes that insurance adjusters approve. Covers containment, HEPA filtration, antimicrobial treatment, and post-remediation verification.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/mold-remediation-scope-of-work" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Mold Remediation Scope of Work", item: "https://claimscribe.ai/blog/mold-remediation-scope-of-work" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />13 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            How to Write a Mold Remediation Scope of Work That Gets Approved
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Mold claims are the most frequently denied category in restoration insurance work. Not because the damage isn&apos;t real — but because the scopes are incomplete, the documentation is weak, or the contractor didn&apos;t follow IICRC S520 protocol. This guide walks you through writing a mold remediation scope that adjusters can actually approve.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Mold Scopes Get Denied</h2>
            <p className="text-gray-300">
              Insurance carriers look for three things before approving mold remediation:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Causation</strong> — Was the mold caused by a covered peril? A burst pipe (covered) vs. long-term neglect (not covered) determines whether the claim is payable.</li>
              <li><strong className="text-white">Protocol compliance</strong> — Does the scope follow IICRC S520 standards? Adjusters use this as the benchmark.</li>
              <li><strong className="text-white">Third-party verification</strong> — Is there an Industrial Hygienist (IH) assessment? Many carriers require pre- and post-remediation air sampling by an independent IH.</li>
            </ol>
            <p className="text-gray-300">
              If your scope doesn&apos;t address all three, expect a denial or a heavily cut estimate.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The 7 Phases of a Mold Remediation Scope</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 1: Initial Assessment &amp; IH Referral</h3>
            <p className="text-gray-300">
              Before you write a single line item, you need a mold assessment from a qualified Industrial Hygienist. This establishes the type of mold, concentration levels, and affected areas. Your scope should reference the IH report by name, date, and findings. Never scope mold remediation without this — it&apos;s the foundation adjusters use to evaluate your estimate.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 2: Containment Setup</h3>
            <p className="text-gray-300">
              Containment is non-negotiable. Your scope should include:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>6-mil poly sheeting with sealed seams (double-layer for large areas)</li>
              <li>Negative air pressure using HEPA-filtered air scrubbers</li>
              <li>Critical barriers at all openings — doors, HVAC registers, windows</li>
              <li>Decontamination chamber for entry/exit (on larger jobs)</li>
              <li>Worker PPE — N95 minimum, full-face respirator for Stachybotrys</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 3: Source Elimination</h3>
            <p className="text-gray-300">
              Mold remediation without fixing the water source is pointless. Your scope must identify and address the moisture source: leaking pipe, roof intrusion, condensation issue, or drainage failure. Include the repair or clearly note that a separate trade (plumber, roofer) is handling it.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 4: Removal &amp; Demolition</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Remove all porous materials with visible mold growth — drywall, insulation, carpet pad, ceiling tiles</li>
              <li>Cut drywall 2 feet beyond the last visible mold growth (IICRC S520 guidance)</li>
              <li>HEPA vacuum all exposed framing and subfloor before treatment</li>
              <li>Bag and remove contaminated materials through containment — never carry through clean areas</li>
              <li>Debris disposal — mold-contaminated waste may require special handling depending on jurisdiction</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 5: Antimicrobial Treatment</h3>
            <p className="text-gray-300">
              After removal, treat all exposed surfaces within the containment:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Apply EPA-registered antimicrobial to all framing, subfloor, and sheathing</li>
              <li>Allow proper dwell time per product specifications</li>
              <li>Encapsulate remaining structural surfaces with mold-resistant coating</li>
              <li>Document products used, application method, and dwell time</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 6: Post-Remediation Verification</h3>
            <p className="text-gray-300">
              The IH returns to verify remediation was successful before you rebuild. Your scope should include:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Post-remediation air sampling by the same IH (or equivalent independent party)</li>
              <li>Visual inspection confirming all visible mold removed</li>
              <li>Clearance letter/report — this is what the adjuster needs to approve the rebuild phase</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Phase 7: Rebuild</h3>
            <p className="text-gray-300">
              Rebuild only begins after clearance. Use mold-resistant materials where possible: mold-resistant drywall (greenboard or paperless), mold-resistant paint, and proper vapor barriers. Include these upgrades in your scope — adjusters often approve them for mold losses since they reduce recurrence risk.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Xactimate Line Items for Mold</h2>
            <p className="text-gray-300">These are the line items that separate a complete mold scope from an incomplete one:</p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Containment setup and teardown</strong> — poly, tape, air scrubbers, negative pressure</li>
              <li><strong className="text-white">HEPA air scrubber rental</strong> — per day, per unit (size based on containment area CFM)</li>
              <li><strong className="text-white">Antimicrobial application</strong> — per square foot of treated surface</li>
              <li><strong className="text-white">HEPA vacuuming</strong> — separate line from demolition</li>
              <li><strong className="text-white">Content manipulation / move-out</strong> — moving contents out of the work area</li>
              <li><strong className="text-white">Air monitoring</strong> — pre- and post-remediation sampling</li>
              <li><strong className="text-white">PPE and disposable suits</strong> — per-worker cost for the job duration</li>
              <li><strong className="text-white">Mold-resistant materials upgrade</strong> — drywall, paint, insulation</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes That Kill Mold Claims</h2>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Scoping without an IH report</strong> — adjusters reject self-diagnosed mold scopes</li>
              <li><strong className="text-white">Not documenting the moisture source</strong> — no source fix = denial</li>
              <li><strong className="text-white">Skipping post-remediation verification</strong> — no clearance = no rebuild approval</li>
              <li><strong className="text-white">Using bleach instead of EPA-registered antimicrobials</strong> — bleach is not an accepted remediation method</li>
              <li><strong className="text-white">Combining remediation and rebuild in one scope</strong> — keep them separate; rebuild requires clearance first</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How ClaimScribe Helps with Mold Scoping</h2>
            <p className="text-gray-300">
              ClaimScribe&apos;s AI generates mold remediation scopes that follow IICRC S520 protocol automatically. Upload your IH report and site photos — the AI identifies affected areas, calculates containment requirements, generates phase-by-phase line items, and flags missing documentation. What used to take 3+ hours of scope writing takes 15 minutes.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">Write mold scopes that get approved</h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe builds IICRC S520-compliant mold remediation scopes from your photos and IH reports. Start your free 14-day trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
    </article>
    </>
  );
}
