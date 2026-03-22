import { getAllTags, TAG_LABELS } from "@/lib/blog-posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Topics — ClaimScribe",
  description:
    "Browse restoration industry articles by topic. Scoping guides, Xactimate tips, insurance claims, water damage, and more.",
  alternates: { canonical: "/blog/tag" },
};

export default function TagIndexPage() {
  const tags = getAllTags();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://claimscribe.ai/blog/tag" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">Blog Topics</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Browse restoration industry articles by topic.</p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {tags.map(({ tag, count }) => (
              <Link key={tag} href={`/blog/tag/${tag}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-primary-500/40 hover:bg-white/10 transition-all group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-primary-400 transition-colors">
                  {TAG_LABELS[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ")}
                </span>
                <span className="text-xs font-medium text-gray-500 bg-white/10 px-2 py-0.5 rounded-full group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-colors">{count}</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog" className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">← Back to all articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
