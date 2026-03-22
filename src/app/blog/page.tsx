import { NewsletterSignup } from "@/components/newsletter-signup";
import { BlogSearch } from "@/components/blog-search";
import { POSTS } from "@/lib/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Restoration Industry Insights & Tips",
  description:
    "Expert guides, tips, and insights for restoration contractors. Learn about AI scoping, Xactimate best practices, documentation strategies, and growing your restoration business.",
  keywords: [
    "restoration contractor blog",
    "Xactimate tips",
    "scope of work guide",
    "water damage documentation",
    "AI restoration technology",
    "insurance claim tips",
  ],
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://claimscribe.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://claimscribe.ai/blog"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Restoration Industry Insights
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Expert guides, Xactimate tips, and actionable strategies to help
              restoration contractors write better scopes, close more claims,
              and grow their business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <BlogSearch posts={POSTS} />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 pb-12"><NewsletterSignup /></div>
    </>
  );
}
