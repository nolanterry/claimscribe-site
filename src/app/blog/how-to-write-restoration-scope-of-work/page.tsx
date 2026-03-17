import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Write a Restoration Scope of Work in 2026",
  description:
    "Learn how to write a thorough, professional restoration scope of work that gets approved by insurance adjusters on the first submission. Complete guide with examples and best practices.",
  keywords: [
    "restoration scope of work",
    "how to write scope of work",
    "insurance claim scope",
    "restoration contractor scope writing",
    "scope of work template",
    "Xactimate scope",
  ],
  alternates: { canonical: "/blog/how-to-write-restoration-scope-of-work" },
};

export default function HowToWriteRestorationScopeOfWork() {

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Write a Restoration Scope of Work in 2026",
    "description": "Learn how to write a thorough, professional restoration scope of work that gets approved by insurance adjusters on the first submission. Complete guide with examples and best practices.",
    "datePublished": "2026-02-18",
    "dateModified": "2026-02-18",
    "author": {
      "@type": "Organization",
      "name": "ClaimScribe",
      "url": "https://claimscribe.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ClaimScribe",
      "url": "https://claimscribe.ai"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://claimscribe.ai/blog/how-to-write-restoration-scope-of-work"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://claimscribe.ai" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://claimscribe.ai/blog" },
      { "@type": "ListItem", "position": 3, "name": "How to Write a Restoration Scope of Work in 2026", "item": "https://claimscribe.ai/blog/how-to-write-restoration-scope-of-work" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="px-2 py-0.5 rounded-full border border-primary-600/20 text-primary-400">
              Guides
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              February 18, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              10 min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How to Write a Restoration Scope of Work in 2026
          </h1>
          <p className="text-lg text-gray-400">
            A comprehensive guide to writing thorough, professional scopes of
            work that get approved by insurance adjusters on the first
            submission.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            For restoration contractors, the scope of work is the single most
            important document in the insurance claims process. A well-written
            scope is the difference between a fully funded restoration project
            and a claim that gets cut, delayed, or disputed. In 2026, with
            rising material costs and tighter adjuster scrutiny, writing a
            thorough scope has never been more critical.
          </p>
          <p>
            This guide walks you through every section of a professional
            restoration scope of work, with practical tips and common mistakes
            to avoid. Whether you are writing your first scope or refining a
            process you have used for years, these principles will help you get
            more claims approved faster.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            What Is a Restoration Scope of Work?
          </h2>
          <p>
            A scope of work (SOW) is a detailed document that describes every
            repair, replacement, and remediation task required to restore a
            property to its pre-loss condition. For insurance-funded
            restoration, the scope serves as the basis for the claim
            estimate. It tells the adjuster exactly what needs to be done,
            what materials are involved, and how the work is measured.
          </p>
          <p>
            Think of the scope as your argument for funding. Each line item
            is a specific piece of evidence that supports the total cost of
            the project. Miss a line item, and that cost comes out of your
            margin — or out of the property owner&apos;s pocket.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 1: Document the Loss Thoroughly Before Writing
          </h2>
          <p>
            Before you write a single line item, you need thorough
            documentation of the damage. This is where most scopes start to
            go wrong. Contractors who rush through the documentation phase
            end up missing damage that only becomes apparent during repairs,
            leading to costly supplements that delay the project.
          </p>
          <p>
            Your documentation should include photographs of every affected
            area from multiple angles. Take wide shots that show the full
            room and close-ups that show material damage, staining patterns,
            or structural issues. Use a moisture meter and document readings
            in a grid pattern for water losses. For fire damage, photograph
            char depth, soot patterns, and smoke odor boundaries.
          </p>
          <p>
            Voice narration is increasingly valuable here. As you walk the
            property, record your observations out loud: room names,
            dimensions, damage descriptions, and any special conditions you
            notice. Modern AI-powered tools like ClaimScribe can transcribe
            these narrations directly into structured scope data, saving
            hours of manual data entry later.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 2: Organize by Room and Area
          </h2>
          <p>
            Insurance adjusters review scopes room by room. Organizing your
            scope the same way makes it easy for the adjuster to follow your
            logic and cross-reference against their own inspection notes.
            Start with the most heavily damaged areas and work outward to
            secondary and tertiary damage zones.
          </p>
          <p>
            For each room, include a header with the room name and general
            description of the damage. Then list each line item beneath it.
            Group related items together: demolition tasks first, then
            repairs, then finish work. This logical flow helps adjusters
            understand the sequence of work and why each task is necessary.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 3: Write Detailed, Specific Line Items
          </h2>
          <p>
            Vague line items get denied. Instead of writing &ldquo;repair
            drywall in kitchen,&rdquo; write &ldquo;remove and replace 1/2
            inch drywall on north wall of kitchen, 8 feet by 10 feet (80
            SF), due to Category 2 water damage from dishwasher supply line
            failure. Includes taping, mudding, texturing to match existing
            orange peel texture, and priming.&rdquo;
          </p>
          <p>
            Every line item should answer five questions: What material or
            component is affected? What action is required (remove, repair,
            replace, clean)? What is the quantity and unit of measurement?
            What caused the damage? What finish or specification is required
            to match the existing property?
          </p>
          <p>
            Measurements should always be included in the standard unit for
            that trade. Drywall is measured in square feet, baseboard in
            linear feet, carpet in square yards, and painting in square
            feet. Using the wrong unit of measurement is a common reason for
            adjuster pushback.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 4: Map to Xactimate Codes
          </h2>
          <p>
            Over 85% of insurance carriers in the United States use
            Xactimate for claim estimating. Mapping your line items to the
            correct Xactimate pricing codes (from the XM8 database) is
            essential for fast approvals. When your scope aligns with
            Xactimate, the adjuster can import your estimate directly
            instead of rebuilding it from scratch.
          </p>
          <p>
            Common Xactimate categories include WTR (water extraction), DRY
            (drying equipment), DML (demolition), DRW (drywall), PNT
            (painting), FLR (flooring), and CLN (cleaning). Knowing the
            right code for each task speeds up the review process
            significantly. Tools like ClaimScribe automatically map your
            line items to the correct Xactimate codes, eliminating the
            manual lookup process entirely.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 5: Include Supporting Documentation
          </h2>
          <p>
            A scope is stronger when it is backed by evidence. Include
            moisture readings, thermal imaging if available, atmospheric
            data logs for drying, and before-and-after photographs for each
            area. Reference industry standards like IICRC S500 for water
            damage or S520 for mold remediation to justify your approach.
          </p>
          <p>
            For specialty items or tasks that fall outside standard pricing,
            include manufacturer specifications, subcontractor quotes, or
            published labor rates. The more documentation you provide
            upfront, the less likely the adjuster is to dispute individual
            line items.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Step 6: Review, Export, and Submit
          </h2>
          <p>
            Before submitting, review every line item for accuracy. Check
            measurements against your field notes, verify Xactimate codes
            are current, and ensure no rooms or damage areas were missed.
            Read through the scope as if you were the adjuster seeing the
            property for the first time — does it paint a complete picture?
          </p>
          <p>
            Export the scope as a professional PDF with your company
            branding, or as an ESX file for direct import into Xactimate.
            Include a cover page with the property address, date of loss,
            claim number, and your company contact information. A polished
            presentation builds credibility and signals professionalism to
            the carrier.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Common Mistakes That Delay Approvals
          </h2>
          <p>
            After working with hundreds of restoration contractors, we see
            the same mistakes repeatedly. Missing line items for general
            conditions like content manipulation, temporary protection, or
            equipment setup. Using outdated Xactimate codes from a previous
            pricing period. Failing to document the causal relationship
            between the loss event and each area of damage. Submitting
            scopes without photographs or with photos that do not clearly
            show the damage described.
          </p>
          <p>
            Each of these mistakes results in questions from the adjuster,
            which means delays, supplements, and lost time. A thorough scope
            submitted upfront almost always results in faster payment than a
            quick scope that requires multiple rounds of revision.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            How AI Is Changing Scope Writing in 2026
          </h2>
          <p>
            The biggest shift in scope writing over the past two years has
            been the adoption of AI-powered tools. Instead of spending three
            to four hours at a desk manually writing line items and looking
            up Xactimate codes, contractors can now capture photos and voice
            notes on-site and have a complete scope generated in minutes.
          </p>
          <p>
            ClaimScribe AI, for example, uses computer vision to analyze
            damage photos and natural language processing to parse voice
            narrations into structured line items. The AI maps each item to
            Xactimate codes, organizes the scope by room, and exports a
            professional PDF or ESX file. Contractors report saving 80% or
            more of their scope writing time while actually producing more
            thorough documentation.
          </p>
          <p>
            The result is not just faster scopes — it is better scopes.
            AI tools catch line items that humans commonly miss, ensure
            consistent formatting, and produce documentation that adjusters
            can review quickly. For restoration companies looking to scale,
            AI-powered scoping is quickly becoming a competitive necessity.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
            <p className="text-white font-semibold mb-2">
              Ready to write scopes faster?
            </p>
            <p className="text-gray-400 text-sm mb-4">
              ClaimScribe AI generates professional scopes of work from
              photos and voice notes in minutes. Try it free for 14 days.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors"
            >
              Start your free trial <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
