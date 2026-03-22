import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { AUTHORS, getAuthorBySlug } from "@/lib/authors";
import { POSTS } from "@/lib/blog-posts";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} - Blog Author`,
    description: author.bio,
    alternates: { canonical: `/blog/authors/${slug}` },
  };
}

export default async function AuthorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorPosts = POSTS.filter((p) => p.author === slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": slug === "claimscribe-team" ? "Organization" : "Person",
    name: author.name,
    url: `https://claimscribe.ai/blog/authors/${slug}`,
    jobTitle: author.role,
    description: author.bio,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://claimscribe.ai/blog" },
      { "@type": "ListItem", position: 3, name: "Authors", item: "https://claimscribe.ai/blog/authors" },
      { "@type": "ListItem", position: 4, name: author.name, item: `https://claimscribe.ai/blog/authors/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/authors"
            className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            All Authors
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{author.name}</h1>
            <p className="text-blue-600 font-medium mb-6">{author.role}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{author.bio}</p>
            <div className="flex flex-wrap gap-2">
              {author.expertise.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full border border-blue-600/20 text-xs text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <h2 className="text-2xl font-bold text-white mb-8">
            Articles by {author.name} ({authorPosts.length})
          </h2>

          <div className="space-y-6">
            {authorPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:border-blue-600/30 transition-colors bg-card/50 group">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-0.5 rounded-full border border-primary-600/20 text-primary-400">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center text-sm text-blue-600 font-medium">
                      Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
