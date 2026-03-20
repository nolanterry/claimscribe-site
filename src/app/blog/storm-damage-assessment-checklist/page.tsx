import { NewsletterSignup } from "@/components/newsletter-signup";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Storm Damage Assessment Checklist for Restoration Contractors",
  description:
    "Complete storm damage assessment checklist covering wind, hail, rain intrusion, and debris impact. Includes exterior and interior inspection workflows, photo documentation tips, and Xactimate scoping guidance.",
  keywords: [
    "storm damage assessment checklist",
    "storm damage restoration",
    "wind damage inspection",
    "hail damage assessment",
    "storm damage insurance claim",
    "storm restoration scoping",
    "storm damage Xactimate",
  ],
  alternates: { canonical: "/blog/storm-damage-assessment-checklist" },
};

export default function StormDamageChecklist() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Storm Damage Assessment Checklist for Restoration Contractors",
    description: "Complete storm damage assessment checklist covering wind, hail, rain intrusion, and debris impact for restoration contractors.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/storm-damage-assessment-checklist" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Storm Damage Assessment Checklist", item: "https://claimscribe.ai/blog/storm-damage-assessment-checklist" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />12 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Storm Damage Assessment Checklist for Restoration Contractors
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Storm season means volume — and volume means you need a repeatable, thorough assessment process. The contractors who make money in storm work aren&apos;t the ones who show up first; they&apos;re the ones who document best. This checklist ensures you capture everything during the initial assessment so your scope is complete from day one.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Before You Arrive: Preparation</h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Check weather reports</strong> — Know what type of storm hit (straight-line wind, hail, tornado, hurricane, thunderstorm). This determines what you&apos;re looking for.</li>
              <li><strong className="text-white">Review local damage reports</strong> — NOAA storm reports give you wind speeds and hail sizes. This supports your claim documentation.</li>
              <li><strong className="text-white">Bring the right gear</strong> — Ladder, drone (if you have one), moisture meter, chalk for marking hail hits, tape measure, flashlight for attic inspection</li>
              <li><strong className="text-white">Safety first</strong> — downed power lines, unstable structures, and standing water are common after storms. Don&apos;t rush in.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Exterior Assessment</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Roof</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Missing, lifted, or creased shingles (wind damage)</li>
              <li>Hail strikes — check for soft spots, granule loss, exposed fiberglass mat</li>
              <li>Ridge cap damage — often peeled back by wind</li>
              <li>Flashing — lifted or separated at valleys, walls, and penetrations</li>
              <li>Vents and boots — cracked or displaced pipe boots, turbine vents</li>
              <li>Gutters — dents from hail, pulled away from fascia by wind, full of granules</li>
              <li>Satellite dishes and antennas — displaced or damaged mounts</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Siding &amp; Exterior Walls</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Vinyl siding — cracked or broken panels, holes from debris impact</li>
              <li>Wood siding — splintering, broken boards, loose sections</li>
              <li>Brick — chipped mortar, cracked bricks from hail or debris</li>
              <li>Stucco — impact cracks, water intrusion at cracks</li>
              <li>Paint — hail dimples on painted surfaces (check north and west faces first)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Windows &amp; Doors</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Broken glass — impact from debris or hail</li>
              <li>Cracked frames — wind pressure can warp frames</li>
              <li>Failed seals — foggy double-pane windows after pressure changes</li>
              <li>Screen damage — torn or punctured screens from hail/debris</li>
              <li>Garage doors — dented panels, track displacement</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Other Exterior</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Fencing — leaning, broken, missing sections</li>
              <li>AC condenser — hail damage to fins, debris impact, displaced unit</li>
              <li>Outdoor structures — patio covers, pergolas, sheds, carports</li>
              <li>Landscaping — tree limbs on structures, uprooted trees affecting foundations</li>
              <li>Vehicles — document if on property (separate claim but shows hail size)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Interior Assessment</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Attic</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Daylight visible through roof decking (missing shingles)</li>
              <li>Water stains on decking or insulation — active or recent leaks</li>
              <li>Wet insulation — indicates ongoing water intrusion</li>
              <li>Displaced or damaged ductwork</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Ceilings &amp; Walls</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Water stains — brown rings indicate roof leak paths</li>
              <li>Bubbling paint or sagging drywall — active water presence</li>
              <li>Moisture readings — check behind any visible water damage</li>
              <li>Window and door frames — water tracking along frames from failed seals</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Flooring</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Wet carpet — check along exterior walls and under windows</li>
              <li>Buckling hardwood — moisture intrusion from wind-driven rain</li>
              <li>Standing water — document location, approximate volume</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Photo Documentation Protocol</h2>
            <p className="text-gray-300">
              Storm claims live or die on photos. Follow this sequence for every property:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">4-corner exterior</strong> — shoot each corner of the building showing two full sides</li>
              <li><strong className="text-white">Roof overview</strong> — drone shot or elevated photo showing full roof</li>
              <li><strong className="text-white">Damage close-ups</strong> — every damaged area gets a close-up with context</li>
              <li><strong className="text-white">Measurement reference</strong> — include tape measure, chalk circle around hail strikes, or hand for scale</li>
              <li><strong className="text-white">Test squares</strong> — on the roof, chalk a 10x10 area and count hail strikes per square</li>
              <li><strong className="text-white">Interior damage path</strong> — trace the water intrusion from roof to interior, photo each step</li>
              <li><strong className="text-white">Surrounding properties</strong> — if neighboring homes also show damage, document it (supports storm pattern)</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Turning the Assessment Into a Scope</h2>
            <p className="text-gray-300">
              Your assessment is the raw data. The scope is the estimate. Key principles for converting one to the other:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Measure everything</strong> — square footage of damaged roof area, linear feet of damaged siding, number of broken windows</li>
              <li><strong className="text-white">Document what you can&apos;t see yet</strong> — note areas where hidden damage is likely (under shingles, inside wall cavities) and flag for supplement</li>
              <li><strong className="text-white">Include emergency services</strong> — tarping, board-up, water extraction are separate line items from the repair scope</li>
              <li><strong className="text-white">Code requirements</strong> — if the roof is being replaced, check local codes for ice and water shield, drip edge, ventilation requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How ClaimScribe Accelerates Storm Scoping</h2>
            <p className="text-gray-300">
              During storm season, speed is everything. ClaimScribe&apos;s AI processes your assessment photos and voice notes to generate a complete scope while you&apos;re still on the roof. AI identifies damage types from photos, maps them to Xactimate line items, and organizes everything into an adjuster-ready format. When you&apos;re running 5 assessments a day, the difference between 3 hours of desk time per scope and 20 minutes is the difference between scaling and drowning.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">Storm season is coming — be ready</h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe turns assessment photos into insurance-ready scopes in minutes, not hours. Start your free 14-day trial before the next storm hits.
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
