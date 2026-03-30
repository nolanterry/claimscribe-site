import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MIGRATIONS } from "@/lib/migrations";
import { ArrowRightLeft, ArrowRight, Clock, Shield, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migrate to ClaimScribe | Switch from Any Scoping Tool",
  description:
    "Step-by-step migration guides to switch to ClaimScribe AI from Xactimate manual scoping, Encircle, or paper notes. Zero data loss. Free onboarding.",
  openGraph: {
    title: "Migrate to ClaimScribe | Switch from Any Scoping Tool",
    description:
      "Step-by-step migration guides to switch to ClaimScribe AI. Zero data loss. Free onboarding support.",
    url: "https://claimscribe.ai/migrate-from",
  },
  alternates: { canonical: "/migrate-from" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
    { "@type": "ListItem", position: 2, name: "Migration Guides", item: "https://claimscribe.ai/migrate-from" },
  ],
};

const benefits = [
  {
    icon: Clock,
    title: "Scoping in Minutes",
    description: "Upload loss photos and get AI-generated Xactimate-ready line items in 15–30 minutes instead of 2–4 hours.",
  },
  {
    icon: Shield,
    title: "More Accurate Scopes",
    description: "AI catches damage patterns your eyes see but your brain forgets when writing scopes later. More line items = higher estimates.",
  },
  {
    icon: Users,
    title: "Free Onboarding",
    description: "Our team helps you get set up, connect Xactimate, and run your first AI-assisted scope at no extra cost.",
  },
];

export default function MigrateFromIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />
        <main id="main-content">
          {/* Hero */}
          <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-950">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ArrowRightLeft className="w-4 h-4" />
                Migration Center
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Switch to ClaimScribe — Scope Faster, Miss Less
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Step-by-step guides to add AI-powered damage scoping to your workflow. Works alongside Xactimate. Up and running in minutes.
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((b, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <b.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                    <p className="text-slate-400 text-sm">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Migration Cards */}
          <section className="py-20 bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4">Choose Your Migration Path</h2>
              <p className="text-slate-400 text-center mb-12">
                Select where you&apos;re migrating from and follow the step-by-step guide.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {MIGRATIONS.map((m) => {
                  const totalTime = m.steps.reduce((sum, s) => {
                    const mins = parseInt(s.time);
                    return sum + (isNaN(mins) ? 0 : mins);
                  }, 0);
                  return (
                    <Link
                      key={m.slug}
                      href={`/migrate-from/${m.slug}`}
                      className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all group"
                    >
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                        From {m.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{m.tagline}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{m.steps.length} steps · ~{totalTime} min</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-gradient-to-br from-emerald-900/30 to-slate-950">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Tool?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We can help you add ClaimScribe to any restoration workflow. Contact our team for a custom onboarding plan.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Contact Us
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
