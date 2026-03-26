import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Smoke Damage Classes & Cleaning Methods: A Restoration Contractor's Guide",
  description:
    "Learn the four classes of smoke damage (dry, wet, protein, fuel oil), proper cleaning methods for each type, and the Xactimate line items for smoke and soot restoration.",
  keywords: [
    "smoke damage classes",
    "smoke damage cleaning methods",
    "soot cleaning restoration",
    "dry smoke damage",
    "wet smoke damage",
    "protein smoke damage",
    "smoke restoration techniques",
  ],
  alternates: { canonical: "/blog/smoke-damage-classes-cleaning-methods" },
};

export default function SmokeDamageClassesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Smoke Damage Classes & Cleaning Methods: A Restoration Contractor's Guide",
    description:
      "Learn the four classes of smoke damage (dry, wet, protein, fuel oil), proper cleaning methods for each type, and the Xactimate line items for smoke and soot restoration.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/smoke-damage-classes-cleaning-methods" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Smoke Damage Classes & Cleaning Methods", item: "https://claimscribe.ai/blog/smoke-damage-classes-cleaning-methods" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />15 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Smoke Damage Classes &amp; Cleaning Methods: A Restoration Contractor&apos;s Guide
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Not all smoke damage is the same, and using the wrong cleaning
              method on the wrong type of smoke residue will make it worse —
              sometimes permanently. Understanding smoke damage
              classification is fundamental to scoping the job correctly,
              choosing the right cleaning chemistry, and billing the
              appropriate Xactimate line items. Get this wrong and you either
              leave revenue behind or ruin surfaces that could have been saved.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Four Classes of Smoke Damage
            </h2>
            <p className="text-gray-300">
              The IICRC and restoration industry recognize four primary
              classifications of smoke residue, determined by what burned
              and how it burned:
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Type 1: Dry Smoke (Fast-Burning, High Temperature)
            </h3>
            <p className="text-gray-300">
              Produced by wood and paper burning at high temperatures with
              good oxygen supply. This is the most common type in structural
              fires.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Appearance:</strong> Dry, powdery, non-smeary residue</li>
              <li><strong className="text-white">Texture:</strong> Fine, chalky particles that don&apos;t smear when wiped</li>
              <li><strong className="text-white">Odor:</strong> Strong &quot;campfire&quot; smell</li>
              <li><strong className="text-white">Cleaning difficulty:</strong> Easiest to clean — vacuum with HEPA, then chemical sponge, then wet clean</li>
              <li><strong className="text-white">Key warning:</strong> Don&apos;t wet-clean first. Water turns dry soot into a paste that stains permanently. Always dry-clean before any wet method.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Type 2: Wet Smoke (Slow-Burning, Low Temperature)
            </h3>
            <p className="text-gray-300">
              Produced by smoldering fires with poor oxygen (plastics,
              synthetics, rubber). The worst smoke type for restoration.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Appearance:</strong> Black, sticky, smeary residue</li>
              <li><strong className="text-white">Texture:</strong> Thick, tar-like film that smears when touched</li>
              <li><strong className="text-white">Odor:</strong> Pungent, acrid chemical smell that penetrates everything</li>
              <li><strong className="text-white">Cleaning difficulty:</strong> Hardest to clean. Requires solvent-based cleaners, multiple passes, and often replacement of porous materials</li>
              <li><strong className="text-white">Key warning:</strong> Wet smoke penetrates deeper into porous surfaces than any other type. Drywall, carpet pad, insulation, and soft goods that look salvageable often aren&apos;t — the residue is embedded below the surface.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Type 3: Protein Smoke (Kitchen Fires)
            </h3>
            <p className="text-gray-300">
              Produced by burning food — meat, grease, organic matter.
              Common in kitchen fires that are contained quickly.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Appearance:</strong> Nearly invisible film. Surfaces look clean but discolor paint and varnish over time.</li>
              <li><strong className="text-white">Texture:</strong> Thin, greasy, almost transparent residue</li>
              <li><strong className="text-white">Odor:</strong> Extremely strong, nauseating odor that&apos;s disproportionate to visible damage</li>
              <li><strong className="text-white">Cleaning difficulty:</strong> Moderate to clean surfaces, extremely difficult to eliminate odor. Protein residue bonds to painted surfaces and discolors them yellow/brown over weeks.</li>
              <li><strong className="text-white">Key warning:</strong> The fire may seem minor — maybe just a burned pot. But protein smoke travels through the entire HVAC system and deposits on every surface in the home. The scope is almost always bigger than the fire.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Type 4: Fuel Oil / Petroleum Smoke
            </h3>
            <p className="text-gray-300">
              Produced by burning petroleum products — furnace puff-backs,
              fuel oil spills, vehicle fires in attached garages.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Appearance:</strong> Dense black soot, oily film</li>
              <li><strong className="text-white">Texture:</strong> Greasy, sticky, stains everything it touches</li>
              <li><strong className="text-white">Odor:</strong> Diesel/petroleum smell</li>
              <li><strong className="text-white">Cleaning difficulty:</strong> Requires petroleum-specific solvents. Standard cleaning products won&apos;t cut through the oil-based residue.</li>
              <li><strong className="text-white">Key warning:</strong> Furnace puff-backs distribute soot through the entire HVAC system in seconds. Every room serviced by that furnace is affected, even if the fire was contained to the mechanical room.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Cleaning Methods by Smoke Type
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Method</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Dry Smoke</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Wet Smoke</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Protein</th>
                    <th className="text-left py-3 text-white font-semibold">Fuel Oil</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">HEPA vacuuming</td>
                    <td className="py-3 pr-4">Step 1 ✅</td>
                    <td className="py-3 pr-4">Skip ❌</td>
                    <td className="py-3 pr-4">Skip ❌</td>
                    <td className="py-3">Skip ❌</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Chemical sponge</td>
                    <td className="py-3 pr-4">Step 2 ✅</td>
                    <td className="py-3 pr-4">Limited use</td>
                    <td className="py-3 pr-4">Skip ❌</td>
                    <td className="py-3">Skip ❌</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Alkaline cleaner</td>
                    <td className="py-3 pr-4">Step 3 ✅</td>
                    <td className="py-3 pr-4">Primary ✅</td>
                    <td className="py-3 pr-4">Primary ✅</td>
                    <td className="py-3">Limited</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Solvent cleaner</td>
                    <td className="py-3 pr-4">Rarely</td>
                    <td className="py-3 pr-4">Secondary ✅</td>
                    <td className="py-3 pr-4">Rarely</td>
                    <td className="py-3">Primary ✅</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4">Enzyme cleaner</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3 pr-4">Odor ✅</td>
                    <td className="py-3">No</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Encapsulation/seal</td>
                    <td className="py-3 pr-4">Final ✅</td>
                    <td className="py-3 pr-4">Final ✅</td>
                    <td className="py-3 pr-4">Final ✅</td>
                    <td className="py-3">Final ✅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Odor Elimination Techniques
            </h2>
            <p className="text-gray-300">
              Surface cleaning removes visible residue but doesn&apos;t
              eliminate odor that has penetrated porous materials. Odor
              treatment is a separate scope category:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Thermal fogging</strong> — Heated solvent-based deodorant that penetrates the same way smoke did. Best for dry smoke and protein residue. Apply after repairs, before final paint.</li>
              <li><strong className="text-white">Hydroxyl generators</strong> — Safe to use in occupied spaces. Slower than ozone but no health risks. Good for ongoing odor treatment during the project.</li>
              <li><strong className="text-white">Ozone treatment</strong> — Highly effective but toxic to humans, pets, and plants. Space must be vacated and sealed. Use for severe odor after all cleaning and encapsulation.</li>
              <li><strong className="text-white">Encapsulation (smoke seal)</strong> — Shellac-based or oil-based sealant applied to all exposed framing, subfloor, and sheathing. Locks in residual odor before new drywall and finishes are installed. This is the most commonly missed line item on fire losses.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Surface-Specific Cleaning Approaches
            </h2>
            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Hard Surfaces</h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Painted walls/ceilings:</strong> Dry sponge → alkaline cleaner → rinse → prime with stain-blocking primer before repainting</li>
              <li><strong className="text-white">Wood trim/cabinets:</strong> Depends on finish. Varnished surfaces can usually be cleaned and refinished. Raw wood absorbs smoke and often needs replacement or encapsulation.</li>
              <li><strong className="text-white">Tile/stone:</strong> Alkaline cleaner on surface, but grout absorbs soot. May need grout replacement on heavily affected areas.</li>
              <li><strong className="text-white">Metal surfaces:</strong> Solvent wipe for fuel oil; alkaline cleaner for other types. Metal doesn&apos;t absorb odor but needs cleaning to prevent corrosion from acidic soot.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Soft Goods</h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Clothing/bedding:</strong> Professional laundering (ozone wash) for dry smoke. Wet smoke and fuel oil contamination usually means replacement — the cost to clean exceeds replacement value.</li>
              <li><strong className="text-white">Carpet:</strong> HEPA vacuum → hot water extraction with deodorizer. Pad almost always needs replacement — it traps smoke particulate that cleaning can&apos;t reach.</li>
              <li><strong className="text-white">Upholstered furniture:</strong> Professional cleaning for light dry smoke damage. Wet smoke or heavy contamination = replacement. The foam inside absorbs odor permanently.</li>
              <li><strong className="text-white">Drapes/curtains:</strong> Dry cleaning for dry smoke. Wet smoke or protein = replacement (the heat from protein fires permanently discolors fabric).</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Scoping for the Right Smoke Type
            </h2>
            <p className="text-gray-300">
              Your scope should reflect the smoke type you&apos;re dealing
              with. A dry smoke cleanup on a 1,500 SF home might be $8,000.
              The same home with wet smoke from a smoldering synthetic
              fire could be $25,000+ because the cleaning methods are more
              labor-intensive and more materials need replacement.
            </p>
            <p className="text-gray-300">
              Always identify and document the smoke type in your initial
              assessment. Take close-up photos of the residue, note the
              texture (powder vs. sticky vs. invisible film), and test the
              soot with a chemical sponge. This classification drives your
              entire cleaning specification and billing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Classifies Smoke Damage
            </h2>
            <p className="text-gray-300">
              ClaimScribe&apos;s AI identifies smoke type from your site
              photos and walk-through narration, then generates
              type-appropriate cleaning specifications and line items. The
              system flags when wet smoke or fuel oil contamination means
              materials should be replaced rather than cleaned — catching
              the common mistake of under-scoping on heavily contaminated
              losses.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Scope smoke damage by type, not by guess
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe classifies smoke type and generates the right
                cleaning spec automatically. Stop using dry smoke methods
                on wet smoke jobs.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="smoke-damage-classes-cleaning-methods" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
