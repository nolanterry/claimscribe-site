import { NewsletterSignup } from "@/components/newsletter-signup";
import { POSTS, getAllTags, getPostsByTag, TAG_LABELS } from "@/lib/blog-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label = TAG_LABELS[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ");
  const posts = getPostsByTag(tag);
  return {
    title: `${label} Articles — ClaimScribe Blog`,
    description: `${posts.length} article${posts.length !== 1 ? "s" : ""} about ${label.toLowerCase()} for restoration contractors.`,
    alternates: { canonical: `/blog/tag/${tag}` },
  };
}

export default async function TagArchivePage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params;
  const posts = getPostsByTag(tagParam);
  if (posts.length === 0) notFound();

  const label = TAG_LABELS[tagParam] || tagParam.charAt(0).toUpperCase() + tagParam.slice(1).replace(/-/g, " ");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://claimscribe.ai/blog/tag" },
      { "@type": "ListItem", position: 4, name: label, item: `https://claimscribe.ai/blog/tag/${tagParam}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <Link href="/blog/tag" className="inline-block text-xs font-medium text-gray-500 hover:text-white mb-4 transition-colors">← All Topics</Link>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">{label}</h1>
            <p className="text-lg text-gray-400">{posts.length} article{posts.length !== 1 ? "s" : ""}</p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-white/10 rounded-xl p-6 hover:border-primary-500/30 hover:bg-white/5 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-full">{post.category}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs text-gray-500">{post.readTime}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold mb-2 text-white hover:text-primary-400 transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">Read more →</Link>
                <div className="flex gap-1.5">
                  {post.tags.filter((t) => t !== tagParam).slice(0, 3).map((t) => (
                    <Link key={t} href={`/blog/tag/${t}`} className="text-xs text-gray-500 hover:text-primary-400 bg-white/5 px-2 py-0.5 rounded-full transition-colors">
                      {TAG_LABELS[t] || t.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-lg font-semibold text-white mb-4">Explore More Topics</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {getAllTags().filter(({ tag }) => tag !== tagParam).slice(0, 10).map(({ tag, count }) => (
              <Link key={tag} href={`/blog/tag/${tag}`} className="text-xs font-medium text-gray-400 border border-white/10 px-3 py-1.5 rounded-full hover:border-primary-500/30 hover:text-primary-400 transition-colors">
                {TAG_LABELS[tag] || tag.replace(/-/g, " ")} ({count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
    </>
  );
}
