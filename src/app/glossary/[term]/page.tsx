import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GLOSSARY_TERMS, getGlossaryTermBySlug } from "@/lib/glossary-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const entry = getGlossaryTermBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.term} — Restoration & Insurance Glossary`,
    description: entry.definition,
    openGraph: { title: `${entry.term} — ClaimScribe Glossary`, description: entry.definition },
    alternates: { canonical: `/glossary/${entry.slug}` },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const entry = getGlossaryTermBySlug(slug);
  if (!entry) notFound();

  const relatedTerms = entry.relatedTerms.map((s) => GLOSSARY_TERMS.find((t) => t.slug === s)).filter(Boolean);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: entry.term,
      description: entry.definition,
      url: `https://claimscribe.ai/glossary/${entry.slug}`,
      inDefinedTermSet: { "@type": "DefinedTermSet", name: "Restoration & Insurance Glossary", url: "https://claimscribe.ai/glossary" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://claimscribe.ai/glossary" },
        { "@type": "ListItem", position: 3, name: entry.term, item: `https://claimscribe.ai/glossary/${entry.slug}` },
      ],
    },
  ];

  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  const idx = sorted.findIndex((t) => t.slug === entry.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link><span>/</span>
              <Link href="/glossary" className="hover:text-gray-700">Glossary</Link><span>/</span>
              <span className="text-gray-900 font-medium">{entry.term}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/glossary" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary-600 mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Glossary
          </Link>

          <div className="flex items-start gap-3 mb-2">
            <span className="px-2.5 py-1 bg-primary-50 text-primary-600 rounded text-xs font-medium">{entry.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{entry.term}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-primary-500 pl-4">{entry.definition}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="flex items-center gap-2"><BookOpen size={20} className="text-primary-500" />In Detail</h2>
            <p>{entry.longDescription}</p>
          </div>

          {relatedTerms.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Terms</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedTerms.map((rt) => rt && (
                  <Link key={rt.slug} href={`/glossary/${rt.slug}`} className="p-4 rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-sm transition-all group">
                    <h3 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">{rt.term}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{rt.definition}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            {prev ? <Link href={`/glossary/${prev.slug}`} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">← {prev.term}</Link> : <span />}
            {next ? <Link href={`/glossary/${next.slug}`} className="text-sm text-gray-500 hover:text-primary-600 transition-colors">{next.term} →</Link> : <span />}
          </div>
        </article>

        <section className="py-20 border-t border-white/5 bg-[#080810] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to stop leaving money on the table?</h2>
            <p className="text-gray-400 mb-8">AI-powered damage scoping that catches what humans miss. Start your 14-day free trial.</p>
            <a href="https://app.claimscribe.ai/sign-up" className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors">
              Start Free Trial
            </a>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
