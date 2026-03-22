import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Fire Damage Restoration Scoping Guide: Room-by-Room Checklist",
  description:
    "Complete fire damage scoping guide for restoration contractors. Room-by-room checklist covering structure, contents, smoke damage, and odor treatment with Xactimate line items.",
  keywords: [
    "fire damage restoration scoping",
    "fire damage estimate checklist",
    "fire restoration scope of work",
    "smoke damage assessment",
    "fire damage Xactimate line items",
    "restoration contractor fire damage",
    "structure fire scoping guide",
  ],
  alternates: { canonical: "/blog/fire-damage-restoration-scoping-guide" },
};

export default function FireDamageScopingGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Fire Damage Restoration Scoping Guide: Room-by-Room Checklist",
    description:
      "Complete fire damage scoping guide for restoration contractors. Room-by-room checklist covering structure, contents, smoke damage, and odor treatment with Xactimate line items.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
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
      "@id":
        "https://claimscribe.ai/blog/fire-damage-restoration-scoping-guide",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://claimscribe.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://claimscribe.ai/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fire Damage Restoration Scoping Guide",
        item: "https://claimscribe.ai/blog/fire-damage-restoration-scoping-guide",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              March 17, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              14 min read
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Fire Damage Restoration Scoping Guide: Room-by-Room Checklist
          </h1>
          <AuthorByline authorSlug="nolan-terry" />

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Fire losses are the highest-value jobs most restoration
              contractors will ever scope — and the most commonly under-scoped.
              A single missed category (contents cleaning, smoke sealing, or
              odor treatment) can leave tens of thousands of dollars on the
              table. This guide walks you through a systematic room-by-room
              approach that catches everything.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Fire Scoping Is Different
            </h2>
            <p className="text-gray-300">
              Water damage is largely contained — you can moisture-map the
              affected area and build a scope from readings. Fire damage spreads
              in ways you can&apos;t always see: smoke travels through HVAC
              systems, soot embeds in soft goods three rooms away, and thermal
              damage weakens structural members behind finished walls. If your
              scope only covers what you can see from the doorway, you&apos;re
              leaving money behind.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Five Damage Categories
            </h2>
            <p className="text-gray-300">
              Every fire loss involves up to five categories of damage. Miss any
              one and your scope is incomplete:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Structural damage</strong> —
                charring, heat deformation, compromised load-bearing members,
                melted fixtures
              </li>
              <li>
                <strong className="text-white">Smoke and soot damage</strong> —
                protein residue, wet smoke film, dry smoke powder, fuel oil soot
                on every surface
              </li>
              <li>
                <strong className="text-white">Water damage</strong> —
                suppression water from fire hoses and sprinklers causes its own
                category of damage
              </li>
              <li>
                <strong className="text-white">Contents damage</strong> —
                personal property, electronics, soft goods, furniture requiring
                cleaning, restoration, or replacement
              </li>
              <li>
                <strong className="text-white">Odor</strong> — smoke odor
                penetrates porous materials and requires specific treatment
                (thermal fogging, hydroxyl, ozone)
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Room-by-Room Scoping Checklist
            </h2>
            <p className="text-gray-300">
              For each affected room, walk through every item on this list.
              Document with photos and notes as you go.
            </p>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Ceilings
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Smoke staining — light, medium, or heavy</li>
              <li>Soot webbing (indicates protein fire or slow burn)</li>
              <li>Heat blistering or delamination of paint/texture</li>
              <li>Water staining from suppression efforts above</li>
              <li>Light fixtures — lens discoloration, melted components</li>
              <li>Smoke detectors — replacement required after activation</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Walls
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Soot lines (V-pattern points to origin)</li>
              <li>Heat damage — paint bubbling, drywall tape separation</li>
              <li>Outlet and switch plate discoloration</li>
              <li>Electrical wiring behind walls (may need electrician evaluation)</li>
              <li>Insulation in exterior walls — smoke-contaminated insulation must be replaced</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Flooring
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Carpet — soot embedded in fibers, pad saturation from suppression water</li>
              <li>Hardwood — warping from water, char marks, finish damage</li>
              <li>Tile/vinyl — heat warping, grout discoloration</li>
              <li>Subfloor — water damage from fire suppression often requires subfloor treatment or replacement</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              HVAC System
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Ductwork — smoke and soot travel through the entire system</li>
              <li>Filters — always replace</li>
              <li>Coils — soot coating reduces efficiency and spreads odor</li>
              <li>Return air registers throughout the house — soot deposits</li>
              <li>This is the #1 missed category. If the HVAC ran during the fire, every room it serves is affected.</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">
              Contents
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>Soft goods — clothing, bedding, curtains, upholstery (cleaning vs. replacement threshold)</li>
              <li>Electronics — smoke particulate damages circuit boards even without direct heat</li>
              <li>Cabinetry interiors — open every cabinet, check inside</li>
              <li>Food — all exposed food in kitchens/pantries is a loss</li>
              <li>Documents and photos — specialty restoration or replacement</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Commonly Missed Xactimate Line Items
            </h2>
            <p className="text-gray-300">
              These are the line items that separate a $40K scope from a $65K
              scope on the same loss. Adjusters won&apos;t add them for you —
              you have to include them:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">HVAC cleaning and deodorization</strong> — duct cleaning, coil cleaning, filter replacement for entire system</li>
              <li><strong className="text-white">Content manipulation</strong> — move-out, storage, and move-back of contents during repairs</li>
              <li><strong className="text-white">Thermal fogging</strong> — per-room odor treatment after repairs</li>
              <li><strong className="text-white">Smoke seal (encapsulation)</strong> — applying sealant to all framing, subfloor, and sheathing before rebuild</li>
              <li><strong className="text-white">Air scrubbers</strong> — HEPA filtration during demolition and rebuild</li>
              <li><strong className="text-white">Debris removal</strong> — haul-off is separate from demo labor</li>
              <li><strong className="text-white">Temporary utilities</strong> — if power/water is disconnected, temporary service for the job</li>
              <li><strong className="text-white">Board-up and tarping</strong> — emergency services before restoration begins</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Documentation That Gets Claims Approved
            </h2>
            <p className="text-gray-300">
              Adjusters approve what they can see and verify. Your documentation
              needs to tell a story:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li>
                <strong className="text-white">Wide shots first</strong> — show
                the room in context before zooming in on damage
              </li>
              <li>
                <strong className="text-white">Detail shots with scale</strong>{" "}
                — use a ruler, tape measure, or your hand for reference
              </li>
              <li>
                <strong className="text-white">Photo every surface</strong> —
                ceiling, all four walls, floor, inside cabinets and closets
              </li>
              <li>
                <strong className="text-white">Note the smell</strong> — odor
                can&apos;t be photographed, so write it down: &quot;strong
                protein smoke odor throughout,&quot; &quot;soot odor in HVAC
                return air&quot;
              </li>
              <li>
                <strong className="text-white">Moisture readings</strong> — if
                suppression water was used, document moisture in floors and
                walls just like a water loss
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How ClaimScribe Automates Fire Scoping
            </h2>
            <p className="text-gray-300">
              ClaimScribe&apos;s AI analyzes your site photos and narrated
              walk-through to automatically identify damage categories,
              generate room-by-room line items, and flag commonly missed items
              like HVAC contamination and content manipulation. Instead of
              spending 4-6 hours building a fire scope from scratch, you get a
              complete first draft in minutes — then refine and submit.
            </p>
            <p className="text-gray-300">
              The AI doesn&apos;t replace your expertise — it makes sure
              nothing falls through the cracks on complex losses where the
              difference between a good scope and a great scope is $20K+.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">
                Stop leaving money on fire losses
              </h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe catches the line items you miss. Start your free
                14-day trial and scope your next fire loss in minutes, not
                hours.
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
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="fire-damage-restoration-scoping-guide" /><NewsletterSignup /></div>
    </article>
    </>
  );
}
