import { getCaseStudyBySlug, getAllCaseStudySlugs, type CaseStudy } from "@/lib/case-study-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.companyName} — Customer Story | ClaimScribe`,
    description: study.hero.summary,
    alternates: { canonical: `/customers/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.com" },
              { "@type": "ListItem", position: 2, name: "Customers", item: "https://claimscribe.com/customers" },
              { "@type": "ListItem", position: 3, name: caseStudy.companyName, item: `https://claimscribe.com/customers/${slug}` },
            ],
          }),
        }}
      />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-slate-800/50 py-4 px-4 mt-16 border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link href="/customers" className="hover:text-emerald-400 transition-colors">Customers</Link>
            <ChevronRight size={16} />
            <span className="text-white">{caseStudy.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{caseStudy.companyName}</h1>
              <div className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-semibold text-lg mb-4">
                {caseStudy.industry}
              </div>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl">{caseStudy.hero.summary}</p>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  {caseStudy.hero.keyMetric}
                </div>
                <div className="text-slate-300">Key Achievement</div>
              </div>
            </div>
            {/* At a Glance */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-emerald-400" />
                At a Glance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Company Size</div>
                  <div className="text-white">{caseStudy.atAGlance.companySize}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Industry</div>
                  <div className="text-white">{caseStudy.atAGlance.industry}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Products Used</div>
                  <div className="text-white">{caseStudy.atAGlance.products.join(", ")}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Key Results</div>
                  <ul className="text-white space-y-1">
                    {caseStudy.atAGlance.keyResults.map((result, i) => (
                      <li key={i} className="text-sm">• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">{caseStudy.challenge.title}</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">{caseStudy.challenge.description}</p>
          <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-6">
            <h3 className="font-semibold text-red-300 mb-4">Key Challenges:</h3>
            <ul className="space-y-2">
              {caseStudy.challenge.painPoints.map((point, i) => (
                <li key={i} className="text-red-200 flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">{caseStudy.solution.title}</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">{caseStudy.solution.description}</p>
          <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-4">Implementation:</h3>
            <ul className="space-y-2">
              {caseStudy.solution.implementation.map((point, i) => (
                <li key={i} className="text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">{caseStudy.results.title}</h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">{caseStudy.results.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {caseStudy.results.metrics.map((metric, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-slate-400 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          {/* Quote */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-xl p-8">
            <blockquote className="text-lg italic mb-4 leading-relaxed text-slate-300">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Users size={20} />
              </div>
              <div>
                <div className="font-semibold text-white">{caseStudy.quote.author}</div>
                <div className="text-slate-400">{caseStudy.quote.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Scoping Process?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the restoration contractors who never miss damage again. Start your ClaimScribe journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Free Trial <ArrowRight size={20} />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">14 days free · No credit card · Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
