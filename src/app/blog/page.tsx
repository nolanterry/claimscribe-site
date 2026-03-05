import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
};

const posts = [
  {
    slug: "how-to-write-restoration-scope-of-work",
    title: "How to Write a Restoration Scope of Work in 2026",
    excerpt:
      "A comprehensive guide to writing thorough, professional scopes of work that get approved by insurance adjusters on the first submission.",
    date: "2026-02-18",
    readTime: "10 min read",
    category: "Guides",
  },
  {
    slug: "xactimate-tips-faster-claims",
    title: "Xactimate Tips for Faster Insurance Claims",
    excerpt:
      "Practical tips for using Xactimate more efficiently, from keyboard shortcuts to line item strategies that speed up your estimating workflow.",
    date: "2026-02-10",
    readTime: "9 min read",
    category: "Tips & Tricks",
  },
  {
    slug: "ai-restoration-damage-assessment",
    title:
      "AI in Restoration: How Technology is Changing Damage Assessment",
    excerpt:
      "How artificial intelligence is transforming the way restoration contractors assess damage, write scopes, and interact with insurance carriers.",
    date: "2026-02-03",
    readTime: "11 min read",
    category: "Industry Trends",
  },
  {
    slug: "water-damage-documentation-best-practices",
    title: "Water Damage Documentation Best Practices for Contractors",
    excerpt:
      "The complete guide to documenting water damage claims, from initial site arrival through final reporting, to maximize claim approvals.",
    date: "2026-01-27",
    readTime: "10 min read",
    category: "Best Practices",
  },
  {
    slug: "restoration-contractors-leaving-money",
    title:
      "Why Restoration Contractors Leave Money on the Table (And How to Fix It)",
    excerpt:
      "Common mistakes that cost restoration contractors thousands per claim, and actionable strategies to capture every dollar you deserve.",
    date: "2026-01-20",
    readTime: "9 min read",
    category: "Business Growth",
  },
];

export default function BlogIndexPage() {
  return (
    <>
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
          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:border-primary-600/30 transition-colors bg-card/50 group">
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
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm text-primary-400 font-medium">
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
