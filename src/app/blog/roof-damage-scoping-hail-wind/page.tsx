import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Damage Scoping Guide: Hail, Wind & Storm Assessment for Restoration Contractors",
  description:
    "Complete roof damage scoping guide for hail, wind, and storm losses. Learn how to identify damage patterns, document for adjusters, and write roofing scopes that get approved.",
  keywords: [
    "roof damage scoping",
    "hail damage roof inspection",
    "wind damage roof assessment",
    "storm damage roof scoping",
    "roofing insurance claim",
    "roof damage documentation",
    "restoration contractor roofing",
  ],
  alternates: { canonical: "/blog/roof-damage-scoping-hail-wind" },
};

export default function RoofDamageScopingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Roof Damage Scoping Guide: Hail, Wind & Storm Assessment for Restoration Contractors",
    description:
      "Complete roof damage scoping guide for hail, wind, and storm losses. Learn how to identify damage patterns, document for adjusters, and write roofing scopes that get approved.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    author: { "@type": "Person", name: "Nolan Terry", url: "https://claimscribe.ai/blog/authors/nolan-terry" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/roof-damage-scoping-hail-wind" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Roof Damage Scoping Guide", item: "https://claimscribe.ai/blog/roof-damage-scoping-hail-wind" },
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
            Roof Damage Scoping Guide: Hail, Wind &amp; Storm Assessment for Restoration Contractors
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <TableOfContents />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Roof damage claims represent some of the largest single-line items
              in property restoration. A full roof replacement on a 3,000 SF
              home can run $15,000-$40,000 depending on material and pitch.
              Getting the scope right — and documenting it so adjusters
              approve it — is the difference between a profitable job and a
              supplement battle that drags on for months.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Hail Damage Identification
            </h2>
            <p className="text-gray-300">
              Hail damage varies dramatically by shingle type. What looks
              like damage on an asphalt shingle is completely different from
              hail damage on metal, tile, or wood shake.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Asphalt Shingles
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Random pattern</strong> — Hail hits are scattered, not in rows or grid patterns (that&apos;s manufacturing defect or foot traffic)</li>
              <li><strong className="text-white">Bruising</strong> — Press on the granule loss area; if the mat underneath feels soft or gives, the shingle is functionally damaged</li>
              <li><strong className="text-white">Granule displacement</strong> — Dark spots where granules have been knocked loose, exposing the asphalt mat</li>
              <li><strong className="text-white">Fractures</strong> — Larger hail cracks the mat itself — check by gently bending the shingle</li>
              <li><strong className="text-white">No granule loss doesn&apos;t mean no damage</strong> — Impact can fracture the mat without displacing surface granules. The bruise test catches this.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Metal Roofing
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Dents with sharp or rounded impact marks</li>
              <li>Paint chipping or cracking at impact points</li>
              <li>Panel warping from concentrated strikes</li>
              <li>Functional damage threshold: dents that compromise the panel&apos;s water-shedding ability or create low spots where water pools</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Tile (Clay or Concrete)
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Cracks — often hairline, requiring close inspection</li>
              <li>Chips at leading edges</li>
              <li>Broken tiles (may not be visible from ground level)</li>
              <li>Underlayment exposure where tiles are broken or displaced</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Wind Damage Identification
            </h2>
            <p className="text-gray-300">
              Wind damage is typically more obvious than hail but has its own
              documentation requirements:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Lifted or creased shingles</strong> — Wind lifts the leading edge, breaking the sealant strip. Even if the shingle settles back down, the seal is compromised and the shingle will eventually blow off.</li>
              <li><strong className="text-white">Missing shingles</strong> — Document the count, location (by slope face), and whether the underlayment/deck is exposed.</li>
              <li><strong className="text-white">Ridge cap damage</strong> — Ridge caps are the most wind-vulnerable component. Check every linear foot.</li>
              <li><strong className="text-white">Directional pattern</strong> — Wind damage typically affects one or two slope faces (windward side). This helps distinguish wind from hail, which affects all faces equally.</li>
              <li><strong className="text-white">Flashing displacement</strong> — Wind can lift step flashing, valley flashing, and drip edge, creating water intrusion paths that may not be visible from outside.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Test Square Method
            </h2>
            <p className="text-gray-300">
              Adjusters use test squares to determine if a roof qualifies for
              replacement vs. repair. Here&apos;s how it works:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Mark a 10&apos;x10&apos; area</strong> (one roofing &quot;square&quot;) with chalk on each slope face</li>
              <li><strong className="text-white">Count hail hits</strong> within each test square — mark each with chalk</li>
              <li><strong className="text-white">Threshold for replacement</strong> — industry standard is 8+ functional hits per test square, though some carriers use 10+</li>
              <li><strong className="text-white">Test multiple slopes</strong> — If windward faces hit threshold but leeward don&apos;t, you can still argue for full replacement (you can&apos;t match aged shingles, and a two-tone roof is an aesthetic/warranty issue)</li>
              <li><strong className="text-white">Photo each test square</strong> — Wide shot showing the chalked area, then detail shots of each marked hit</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Interior Water Intrusion From Roof Damage
            </h2>
            <p className="text-gray-300">
              Don&apos;t stop at the roof. If shingles are missing or
              compromised, check:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Attic — water staining on decking, wet insulation, light visible through deck</li>
              <li>Ceiling stains — especially in rooms directly below damaged areas</li>
              <li>Wall stains — water travels along rafters and can emerge on interior walls far from the penetration point</li>
              <li>Mold — if the roof has been leaking for days before you arrive, mold may already be growing on wet drywall or insulation</li>
            </ul>
            <p className="text-gray-300">
              Interior damage from roof failure is a separate scope category.
              Don&apos;t lump it into the roofing estimate — it has its own
              line items for drywall, paint, insulation, and potentially mold
              remediation.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Commonly Missed Roofing Scope Items
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Ice and water shield</strong> — Required by code in most jurisdictions at eaves, valleys, and around penetrations. If you&apos;re replacing the roof, you&apos;re replacing the underlayment to current code.</li>
              <li><strong className="text-white">Drip edge</strong> — Metal drip edge at eaves and rakes. Often bent or missing after wind events.</li>
              <li><strong className="text-white">Pipe boots and vent flashing</strong> — Every penetration gets new flashing with a new roof. Adjusters sometimes exclude these — supplement.</li>
              <li><strong className="text-white">Ridge vent</strong> — If the existing ridge vent is damaged or the new shingle system requires a different profile, it&apos;s a line item.</li>
              <li><strong className="text-white">Step flashing</strong> — Where the roof meets a vertical wall (chimneys, dormers). Almost always needs replacement during a re-roof.</li>
              <li><strong className="text-white">Gutter damage</strong> — Hail dents gutters and downspouts. Document separately from the roof scope.</li>
              <li><strong className="text-white">Satellite dish/antenna removal and reset</strong> — Someone has to take it down before roofing and put it back after.</li>
              <li><strong className="text-white">Code upgrades</strong> — If the existing roof doesn&apos;t meet current code (deck thickness, ventilation, ice shield), the cost to bring it to code during replacement is a covered expense on most policies.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Photo Documentation Protocol
            </h2>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Ground-level overview</strong> — All four sides of the structure showing the roof from grade</li>
              <li><strong className="text-white">Each slope face</strong> — Wide shot from the roof showing the entire face</li>
              <li><strong className="text-white">Test squares marked</strong> — Before and after marking hail hits</li>
              <li><strong className="text-white">Close-up damage</strong> — Individual hail hits, creased shingles, missing tabs with a reference object for scale</li>
              <li><strong className="text-white">Soft metals</strong> — Gutters, vents, flashing, HVAC units, window frames. Hail damage on soft metals corroborates roof damage.</li>
              <li><strong className="text-white">Ground-level collateral</strong> — Dented cars, damaged siding, broken window screens. Same storm, same hail size.</li>
              <li><strong className="text-white">Attic and interior</strong> — Any water intrusion evidence</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Handles Roof Scoping
            </h2>
            <p className="text-gray-300">
              ClaimScribe&apos;s AI analyzes your roof photos to identify hail
              hit patterns, count impacts per test square, and flag damage on
              soft metals that corroborates the roof claim. It generates the
              complete roofing scope including underlayment, flashing, code
              upgrades, and collateral damage — with the line items that turn
              a $12K repair into a $28K replacement when the damage warrants it.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Scope every roof like a pro
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe catches the flashing, code upgrades, and
                collateral damage that separate average roof scopes from
                complete ones. Start your free trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="roof-damage-scoping-hail-wind" /><NewsletterSignup /></div>
      </article>
    </>
  );
}
