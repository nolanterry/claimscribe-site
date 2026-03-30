import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MIGRATIONS } from "@/lib/migrations";
import { ArrowRight, Clock, HelpCircle, ArrowRightLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return MIGRATIONS.map((m) => ({ competitor: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>;
}): Promise<Metadata> {
  const { competitor: slug } = await params;
  const migration = MIGRATIONS.find((m) => m.slug === slug);
  if (!migration) return {};
  return {
    title: `Migrate from ${migration.name} to ClaimScribe | Step-by-Step Guide`,
    description: `Switch from ${migration.name} to ClaimScribe AI with zero data loss. Step-by-step migration guide for restoration contractors.`,
    openGraph: {
      title: `Migrate from ${migration.name} to ClaimScribe`,
      description: `Switch from ${migration.name} to ClaimScribe AI with zero data loss. Step-by-step migration guide.`,
      url: `https://claimscribe.ai/migrate-from/${slug}`,
    },
    alternates: { canonical: `/migrate-from/${slug}` },
  };
}

export default async function MigrateFromPage({
  params,
}: {
  params: Promise<{ competitor: string }>;
}) {
  const { competitor: slug } = await params;
  const migration = MIGRATIONS.find((m) => m.slug === slug);
  if (!migration) notFound();

  const totalTime = migration.steps.reduce((sum, s) => {
    const mins = parseInt(s.time);
    return sum + (isNaN(mins) ? 0 : mins);
  }, 0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Migrate from ${migration.name} to ClaimScribe`,
    description: migration.tagline,
    totalTime: `PT${totalTime}M`,
    step: migration.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://claimscribe.ai/compare" },
      {
        "@type": "ListItem",
        position: 3,
        name: `Migrate from ${migration.name}`,
        item: `https://claimscribe.ai/migrate-from/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />
        <main id="main-content">
          {/* Hero */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-950">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ArrowRightLeft className="w-4 h-4" />
                Migration Guide
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Migrate from {migration.name} to ClaimScribe
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                {migration.tagline}
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Clock className="w-5 h-5" />
                <span>Total migration time: ~{totalTime} minutes</span>
              </div>
            </div>
          </section>

          {/* Steps */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                Step-by-Step Migration
              </h2>
              <p className="text-slate-400 text-center mb-12">
                Follow these steps to start using ClaimScribe on your restoration jobs.
              </p>
              <div className="space-y-8">
                {migration.steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                      {i < migration.steps.length - 1 && (
                        <div className="w-0.5 h-full bg-emerald-500/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <span className="text-sm text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                          ~{step.time}
                        </span>
                      </div>
                      <p className="text-slate-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Comparison */}
          <section className="py-20 bg-slate-900/50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                {migration.name} vs ClaimScribe
              </h2>
              <p className="text-slate-400 text-center mb-12">
                See how ClaimScribe compares feature-by-feature.
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-800">
                <div className="grid grid-cols-3 bg-slate-800 text-sm font-semibold">
                  <div className="p-4">Feature</div>
                  <div className="p-4 text-center">{migration.name}</div>
                  <div className="p-4 text-center">ClaimScribe</div>
                </div>
                {migration.featureMap.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 text-sm ${
                      i % 2 === 0 ? "bg-slate-900/50" : "bg-slate-900"
                    }`}
                  >
                    <div className="p-4 font-medium">{row.feature}</div>
                    <div className="p-4 text-center text-slate-400">{row.them}</div>
                    <div className="p-4 text-center text-emerald-400 font-medium">{row.us}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">
                <HelpCircle className="w-8 h-8 inline-block mr-2 text-emerald-400" />
                Migration FAQ
              </h2>
              <p className="text-slate-400 text-center mb-12">
                Common questions about switching from {migration.name}.
              </p>
              <div className="space-y-6">
                {migration.faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-800 rounded-lg p-6 bg-slate-900/50">
                    <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-slate-300">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-slate-950">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Switch from {migration.name}?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Start your free 14-day trial. Upload your first loss photos in minutes. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.claimscribe.ai/signup"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
