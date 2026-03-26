import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Drying Equipment Placement: Air Movers, Dehumidifiers & the Science of Water Restoration",
  description:
    "Master drying equipment placement for water damage restoration. Learn air mover positioning, dehumidifier sizing, psychrometric principles, and how to document drying for insurance claims.",
  keywords: [
    "drying equipment placement water damage",
    "air mover placement restoration",
    "dehumidifier sizing water damage",
    "IICRC S500 drying",
    "psychrometric drying",
    "water damage drying science",
    "restoration drying documentation",
  ],
  alternates: { canonical: "/blog/drying-equipment-placement-science" },
};

export default function DryingEquipmentPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Drying Equipment Placement: Air Movers, Dehumidifiers & the Science of Water Restoration",
    description:
      "Master drying equipment placement for water damage restoration. Learn air mover positioning, dehumidifier sizing, psychrometric principles, and how to document drying for insurance claims.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/drying-equipment-placement-science" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Drying Equipment Placement", item: "https://claimscribe.ai/blog/drying-equipment-placement-science" },
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
            Drying Equipment Placement: Air Movers, Dehumidifiers &amp; the Science of Water Restoration
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              You can place 20 air movers in a room and still not dry it if
              they&apos;re in the wrong positions with inadequate
              dehumidification. Water damage drying isn&apos;t just &quot;point
              fans at wet stuff&quot; — it&apos;s applied psychrometrics, and
              the contractors who understand the science dry faster, use
              fewer equipment days, and have bulletproof documentation when
              adjusters question their billing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Three Principles of Drying
            </h2>
            <p className="text-gray-300">
              All structural drying follows three interdependent principles
              from the IICRC S500:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Evaporation</strong> — Moving air
                across wet surfaces to convert liquid water to vapor. This is
                what air movers do. Faster airflow = faster evaporation, but
                only if the air can absorb more moisture.
              </li>
              <li>
                <strong className="text-white">Dehumidification</strong> — Removing
                moisture from the air so it can absorb more from wet surfaces.
                Without dehumidification, the air saturates and evaporation
                stops — no matter how many air movers you have.
              </li>
              <li>
                <strong className="text-white">Temperature</strong> — Warmer air
                holds more moisture and accelerates evaporation. This is why
                drying in winter (cold, dry air) takes longer without
                supplemental heat, and why summer drying with air conditioning
                running can be counterproductive (AC cools and dehumidifies,
                but the cooling slows evaporation).
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Air Mover Placement
            </h2>
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              General Rules
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">1 air mover per 10-16 linear feet of wall</strong> — This is the IICRC guideline for standard residential drying (Class 1 or 2 water loss)</li>
              <li><strong className="text-white">Angled at 15-30° toward the wall</strong> — Not pointed straight at the wall. The angle creates a vortex that moves air along the wall surface and across the floor simultaneously.</li>
              <li><strong className="text-white">Create a circular airflow pattern</strong> — Place air movers so they create a clockwise (or counterclockwise) flow pattern around the room. Each unit feeds airflow into the next.</li>
              <li><strong className="text-white">Never blow air movers directly into each other</strong> — Opposing airflows create dead zones where air stagnates.</li>
              <li><strong className="text-white">Elevate for wall drying</strong> — If walls are wet above 24 inches, angle air movers upward or use axial fans mounted high to address upper wall sections.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              By Surface Type
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Hardwood floors:</strong> Place air movers at the perimeter blowing across the floor surface. Don&apos;t concentrate airflow on one area — even drying prevents cupping and crowning.</li>
              <li><strong className="text-white">Carpet (pad removed):</strong> Float the carpet by tenting it with air movers underneath, or use carpet clamps and blow air between the carpet and subfloor.</li>
              <li><strong className="text-white">Carpet (pad in place):</strong> Top-down drying with air movers on the surface. Less effective than removing pad, but sometimes the pad is salvageable (Class 1 only).</li>
              <li><strong className="text-white">Walls (drywall):</strong> Angled at the base of the wall. For severe wicking, consider flood cuts to expose the wall cavity, then direct airflow into the cavity.</li>
              <li><strong className="text-white">Cabinets:</strong> Open all doors and drawers. Place a small air mover inside the kick space or directly into the cabinet box.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Dehumidifier Sizing
            </h2>
            <p className="text-gray-300">
              Undersized dehumidification is the most common drying mistake.
              The air movers push moisture into the air, but if the
              dehumidifier can&apos;t pull it out fast enough, relative
              humidity climbs, evaporation slows, and drying stalls.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              LGR vs. Conventional Dehumidifiers
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Conventional refrigerant:</strong> Effective above 80°F / 60% RH. Performance drops dramatically in cool environments. Rarely used in modern restoration.</li>
              <li><strong className="text-white">LGR (Low-Grain Refrigerant):</strong> Effective down to 33 grains per pound (GPP). The standard for residential and light commercial restoration. Can pull moisture at lower humidity levels than conventional units.</li>
              <li><strong className="text-white">Desiccant:</strong> Required for extreme low-humidity drying (below 33 GPP), cold environments (below 50°F), and specialty applications (hardwood floor drying systems). More expensive per day but sometimes the only option that works.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Sizing Guidelines
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">IICRC Class</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Description</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Air Movers</th>
                    <th className="text-left py-3 text-white font-semibold">Dehumidification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Class 1</td>
                    <td className="py-3 pr-4">Minimal — small area, low porosity</td>
                    <td className="py-3 pr-4">1 per 10-16 LF wall</td>
                    <td className="py-3">1 LGR per 1,000-1,500 SF</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Class 2</td>
                    <td className="py-3 pr-4">Significant — whole room, carpet + pad, walls &lt;24&quot;</td>
                    <td className="py-3 pr-4">1 per 10-16 LF wall</td>
                    <td className="py-3">1 LGR per 600-1,000 SF</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Class 3</td>
                    <td className="py-3 pr-4">Extensive — ceilings, walls, floors saturated</td>
                    <td className="py-3 pr-4">1 per 10 LF + ceiling fans</td>
                    <td className="py-3">1 LGR per 400-600 SF</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Class 4</td>
                    <td className="py-3 pr-4">Specialty — hardwood, plaster, concrete, stone</td>
                    <td className="py-3 pr-4">Varies by material</td>
                    <td className="py-3">Desiccant or specialty system</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Monitoring and Documentation
            </h2>
            <p className="text-gray-300">
              Daily monitoring isn&apos;t optional — it&apos;s required by
              IICRC S500 and it&apos;s your billing justification.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Moisture readings</strong> — Take readings at the same locations each day using pins or non-invasive meters. Record the reading, location, and time.</li>
              <li><strong className="text-white">Atmospheric readings</strong> — Temperature, relative humidity, and GPP (grains per pound) at each monitoring visit. Record outside conditions too — they affect drying.</li>
              <li><strong className="text-white">Drying curve</strong> — Plot daily moisture readings to show a downward trend. If readings plateau, you need to adjust equipment or investigate hidden moisture sources.</li>
              <li><strong className="text-white">Dry standard / goal</strong> — Your target is the moisture content of unaffected materials in a similar location (dry standard). Document what the dry standard is and when each area reaches it.</li>
              <li><strong className="text-white">Equipment log</strong> — Number of units, type, placement, and daily check that they&apos;re running. If a unit was off (tripped breaker, tenant turned it off), document it — it explains delayed drying.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Common Mistakes That Extend Drying Time
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Running HVAC in cooling mode</strong> — AC removes heat from the air, slowing evaporation. In summer, if you need HVAC running for occupant comfort, expect longer drying. Consider a compromise temperature.</li>
              <li><strong className="text-white">Not creating a contained drying chamber</strong> — On large properties, isolate the affected area with containment barriers. You&apos;re trying to control the air volume, not dry the entire building.</li>
              <li><strong className="text-white">Skipping carpet pad removal on Class 2+</strong> — Pad traps water and dries extremely slowly. Remove it, dry the subfloor directly, and replace the pad. It&apos;s faster and the replacement cost is covered.</li>
              <li><strong className="text-white">Insufficient dehumidification</strong> — If RH isn&apos;t dropping below 50-55% within the first 24 hours, add dehumidification capacity. Don&apos;t wait.</li>
              <li><strong className="text-white">Not checking behind walls</strong> — Moisture wicks up drywall 18-24 inches above the visible water line. If you&apos;re only drying the surface, there&apos;s wet material behind the baseboard.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              When to Call Drying Complete
            </h2>
            <p className="text-gray-300">
              Drying is complete when all affected materials reach the dry
              standard — not when they &quot;feel dry&quot; or when the
              homeowner wants their house back. Document:
            </p>
            <ol className="text-gray-300 space-y-2">
              <li>Final moisture readings at all monitored points</li>
              <li>Comparison to dry standard</li>
              <li>Final atmospheric readings (temp, RH, GPP)</li>
              <li>Equipment removal date and time</li>
              <li>Total equipment days (each unit × number of days)</li>
            </ol>
            <p className="text-gray-300">
              This documentation directly supports your Xactimate billing for
              equipment charges. Each air mover, each dehumidifier, each day
              — all justified by the monitoring data.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Supports Drying Documentation
            </h2>
            <p className="text-gray-300">
              ClaimScribe generates drying equipment placement plans based on
              room dimensions and IICRC class classification. The platform
              tracks daily moisture readings, plots drying curves
              automatically, and generates the equipment billing summary
              (unit count × days) that ties directly to your Xactimate
              estimate. When an adjuster questions why drying took 5 days
              instead of 3, the data is already organized.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Dry smarter, document better
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe generates drying plans, tracks moisture data,
                and builds equipment billing that adjusters can&apos;t argue with.
                Start your free trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="drying-equipment-placement-science" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
