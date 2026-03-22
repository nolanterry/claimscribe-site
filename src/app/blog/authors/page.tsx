import type { Metadata } from "next";
import Link from "next/link";
import { AUTHORS } from "@/lib/authors";
import { POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog Authors - ClaimScribe",
  description:
    "Meet the authors behind ClaimScribe's restoration industry blog. Expert insights on damage scoping, Xactimate estimating, and insurance claims.",
  alternates: { canonical: "/blog/authors" },
};

export default function AuthorsPage() {
  const personSchema = AUTHORS.map((author) => ({
    "@context": "https://schema.org",
    "@type": author.slug === "claimscribe-team" ? "Organization" : "Person",
    name: author.name,
    url: `https://claimscribe.ai/blog/authors/${author.slug}`,
    jobTitle: author.role,
    description: author.bio,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Authors", item: "https://claimscribe.ai/blog/authors" },
    ],
  };

  return (
    <>
      {personSchema.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Our Authors
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Meet the experts behind ClaimScribe&apos;s restoration industry insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          {AUTHORS.map((author) => {
            const postCount = POSTS.filter((p) => p.author === author.slug).length;
            return (
              <Link
                key={author.slug}
                href={`/blog/authors/${author.slug}`}
                className="block rounded-lg border border-white/10 bg-white/5 p-8 hover:border-blue-600/30 transition-colors"
              >
                <h2 className="text-2xl font-bold text-white mb-1">{author.name}</h2>
                <p className="text-sm text-blue-600 font-medium mb-4">{author.role}</p>
                <p className="text-gray-400 leading-relaxed mb-4">{author.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {author.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full border border-blue-600/20 text-xs text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  {postCount} {postCount === 1 ? "article" : "articles"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
