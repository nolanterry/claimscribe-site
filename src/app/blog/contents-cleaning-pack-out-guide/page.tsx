import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contents Cleaning & Pack-Out Guide for Restoration Contractors",
  description:
    "Complete guide to contents cleaning and pack-out operations for restoration contractors. Covers inventory documentation, cleaning methods, storage protocols, and the Xactimate line items that maximize your claim value.",
  keywords: [
    "contents cleaning restoration",
    "pack out restoration contractor",
    "contents manipulation insurance",
    "contents inventory restoration",
    "contents cleaning methods",
    "restoration pack out process",
    "contents claim Xactimate",
  ],
  alternates: { canonical: "/blog/contents-cleaning-pack-out-guide" },
};

export default function ContentsCleaningGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Contents Cleaning & Pack-Out Guide for Restoration Contractors",
    description: "Complete guide to contents cleaning and pack-out operations for restoration contractors. Covers inventory, cleaning methods, storage, and Xactimate line items.",
    datePublished: "2026-03-17",
    dateModified: "2026-03-17",
    author: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.ai" },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://claimscribe.ai/blog/contents-cleaning-pack-out-guide" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Contents Cleaning & Pack-Out Guide", item: "https://claimscribe.ai/blog/contents-cleaning-pack-out-guide" },
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
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />14 min read</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-8">
            Contents Cleaning &amp; Pack-Out Guide for Restoration Contractors
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed">
              Contents work is the most profitable — and most overlooked — category in restoration. On a typical fire or water loss, contents cleaning and pack-out can add $10K-$50K to the job scope with margins north of 50%. Yet most contractors either skip it entirely or under-scope it because the documentation is labor-intensive. Here&apos;s how to do it right.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Contents Work Matters</h2>
            <p className="text-gray-300">
              The structure gets all the attention, but the homeowner&apos;s personal belongings are what they actually care about. Contents work creates three revenue streams on a single loss:
            </p>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Pack-out and move-back</strong> — physical handling of all contents out of and back into the property</li>
              <li><strong className="text-white">Cleaning and restoration</strong> — laundering, dry cleaning, ultrasonic cleaning, deodorization, electronics restoration</li>
              <li><strong className="text-white">Storage</strong> — climate-controlled storage for the duration of the reconstruction (can be months)</li>
            </ol>
            <p className="text-gray-300">
              Combined, these three categories often equal 30-50% of the total claim value. If you&apos;re not doing contents work, you&apos;re leaving the most profitable part of the job for someone else.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Pack-Out Process</h2>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 1: Pre-Pack Inventory</h3>
            <p className="text-gray-300">
              Before moving anything, document everything in place. This protects you and the homeowner:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>Room-by-room photo documentation — wide shots showing contents in context</li>
              <li>Video walk-through narrating condition of high-value items</li>
              <li>Numbered inventory system — each box/container gets a unique ID</li>
              <li>Digital inventory log — item description, condition (salvageable, non-salvageable, cleaning required), estimated value</li>
              <li>Homeowner walk-through — have the homeowner present to identify high-value and sentimental items</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 2: Categorize Contents</h3>
            <p className="text-gray-300">
              Sort everything into categories that determine handling:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Clean on-site</strong> — items that can be wiped, HEPA vacuumed, or surface-cleaned without removal</li>
              <li><strong className="text-white">Pack-out for off-site cleaning</strong> — soft goods, electronics, specialty items requiring professional cleaning</li>
              <li><strong className="text-white">Non-salvageable</strong> — items damaged beyond restoration (food, melted plastics, severely charred items)</li>
              <li><strong className="text-white">Specialty restoration</strong> — artwork, antiques, documents, photos requiring specialized facilities</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-3">Step 3: Pack and Transport</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Use appropriate packing materials — bubble wrap for fragile items, wardrobe boxes for hanging clothes</li>
              <li>Label every box with room of origin, box number, and general contents description</li>
              <li>Photograph each box packed with visible label before sealing</li>
              <li>Climate-controlled transport — no open trailers in heat or rain</li>
              <li>Maintain chain of custody documentation throughout</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Cleaning Methods by Material Type</h2>
            <p className="text-gray-300">
              Different materials require different cleaning approaches. Using the wrong method damages items and creates liability:
            </p>

            <div className="overflow-x-auto mt-6 mb-8">
              <table className="w-full text-gray-300 text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-white">Material</th>
                    <th className="text-left py-3 text-white">Method</th>
                    <th className="text-left py-3 text-white">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5"><td className="py-2">Clothing/textiles</td><td>Ozone chamber + laundering or dry cleaning</td><td>Sort by fabric type; pre-treat smoke odor</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Hard goods (dishes, decor)</td><td>Ultrasonic cleaning</td><td>Most effective for soot removal from hard surfaces</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Electronics</td><td>Ultrasonic + contact cleaning</td><td>Document model/serial numbers; some carriers require specialist</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Upholstered furniture</td><td>HEPA vacuum + deodorization</td><td>May require re-upholstering if smoke penetration is deep</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Wood furniture</td><td>Wipe-down + refinish if needed</td><td>Smoke odor in wood may require sealant</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2">Documents/photos</td><td>Freeze-dry (water) or HEPA vacuum (smoke)</td><td>Time-sensitive; freeze wet documents within 48 hours</td></tr>
                  <tr><td className="py-2">Artwork</td><td>Specialty restoration facility</td><td>Don&apos;t attempt in-house; use certified art restorer</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Xactimate Line Items for Contents</h2>
            <p className="text-gray-300">
              These are the line items that build a complete contents scope. Most contractors only include 2-3 of these:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li><strong className="text-white">Contents manipulation — pack-out</strong> — labor + materials for packing, per room or per hour</li>
              <li><strong className="text-white">Contents manipulation — move-back</strong> — separate line from pack-out</li>
              <li><strong className="text-white">Inventory and documentation</strong> — time spent creating detailed inventory</li>
              <li><strong className="text-white">Storage — vault/unit rental</strong> — per month, climate-controlled</li>
              <li><strong className="text-white">Transportation</strong> — truck/van for moving contents to storage</li>
              <li><strong className="text-white">Cleaning — soft goods</strong> — laundering, dry cleaning, deodorization per item or per pound</li>
              <li><strong className="text-white">Cleaning — hard goods</strong> — ultrasonic cleaning per item</li>
              <li><strong className="text-white">Cleaning — electronics</strong> — specialized cleaning per unit</li>
              <li><strong className="text-white">Deodorization</strong> — ozone treatment for packed items</li>
              <li><strong className="text-white">Non-salvageable disposal</strong> — haul-off of items that can&apos;t be restored</li>
              <li><strong className="text-white">Specialty restoration</strong> — artwork, antiques, documents (subcontractor cost + markup)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Common Mistakes in Contents Work</h2>
            <ol className="text-gray-300 space-y-3">
              <li><strong className="text-white">Incomplete inventory</strong> — if it&apos;s not documented, it doesn&apos;t exist. Photo everything, log everything.</li>
              <li><strong className="text-white">Not getting homeowner sign-off</strong> — have the homeowner sign the inventory before pack-out. This prevents disputes about missing items.</li>
              <li><strong className="text-white">Storing without climate control</strong> — smoke-damaged items in a hot storage unit bake the odor in permanently.</li>
              <li><strong className="text-white">Combining pack-out and move-back</strong> — these are separate billing events. Don&apos;t merge them.</li>
              <li><strong className="text-white">Not scoping storage duration</strong> — reconstruction takes 3-6 months on large losses. Your initial scope should estimate storage duration realistically.</li>
            </ol>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">How ClaimScribe Simplifies Contents Documentation</h2>
            <p className="text-gray-300">
              The biggest barrier to contents work is the documentation burden. ClaimScribe&apos;s AI generates room-by-room contents inventories from your walk-through photos and voice narration. It categorizes items by cleaning method, flags non-salvageable items, and generates Xactimate-ready line items for pack-out, cleaning, storage, and move-back. What used to require a full day of inventory work takes an hour.
            </p>

            <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
              <h3 className="text-lg font-semibold text-white mb-2">Contents work is your biggest margin opportunity</h3>
              <p className="text-gray-400 mb-4">
                ClaimScribe turns pack-out photos into complete contents inventories and insurance-ready scopes. Start your free 14-day trial.
              </p>
              <Link href="/demo" className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="contents-cleaning-pack-out-guide" /><NewsletterSignup /></div>
    </article>
    </>
  );
}
