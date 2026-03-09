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
    slug: "insurance-companies-using-ai-against-contractors",
    title: "Insurance Companies Are Using AI to Write Estimates — Here's How Contractors Can Fight Back",
    excerpt:
      "Carriers are deploying AI to generate damage estimates, bypassing adjusters entirely. Contractors without AI tools are at a growing disadvantage in claim disputes.",
    date: "2026-03-09",
    readTime: "9 min read",
    category: "Industry Trends",
  },
  {
    slug: "ai-damage-assessment-restoration",
    title: "How AI Damage Assessment Is Changing Restoration Contracting",
    excerpt:
      "How AI photo analysis speeds up scoping, reduces missed items, and gets claims approved faster than traditional manual assessment methods.",
    date: "2026-03-05",
    readTime: "12 min read",
    category: "Industry Innovation",
  },
  {
    slug: "xactimate-estimating-tips",
    title: "Xactimate Estimating Tips: Stop Leaving Money on the Table",
    excerpt:
      "Common line items restoration contractors miss, how AI catches them, and proven supplement strategies that maximize your claim values.",
    date: "2026-03-01",
    readTime: "14 min read",
    category: "Estimating Tips",
  },
  {
    slug: "water-damage-scope-of-work-template",
    title: "Water Damage Scope of Work Template: What Every Claim Needs",
    excerpt:
      "Walk through a complete water damage scope: demo, mitigation, reconstruction, contents. Learn how ClaimScribe automates this process.",
    date: "2026-02-28",
    readTime: "16 min read",
    category: "Templates & Guides",
  },
  {
    slug: "restoration-contractor-software-2026",
    title: "Best Restoration Contractor Software in 2026",
    excerpt:
      "Compare tools restoration contractors use: Xactimate, CoreLogic, Encircle, DASH, and ClaimScribe. Position ClaimScribe as the AI-first alternative.",
    date: "2026-02-25",
    readTime: "18 min read",
    category: "Software Reviews",
  },
  {
    slug: "insurance-claim-documentation-tips",
    title: "Insurance Claim Documentation: A Contractor's Guide to Getting Paid",
    excerpt:
      "Photo documentation best practices, what adjusters look for, and how to avoid claim denials that delay payment and damage customer relationships.",
    date: "2026-02-22",
    readTime: "15 min read",
    category: "Documentation Guide",
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
