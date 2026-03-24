import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Droplets, Flame, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — ClaimScribe for Every Restoration Specialty",
  description:
    "See how ClaimScribe helps water damage restoration companies, fire damage contractors, and multi-location franchises create accurate damage scopes faster with AI-powered documentation.",
  openGraph: {
    title: "ClaimScribe Use Cases — AI Damage Scoping for Your Specialty",
    description:
      "From water damage to fire restoration to franchise operations, see how ClaimScribe fits your workflow.",
  },
};

const USE_CASES = [
  {
    slug: "water-damage-restoration",
    title: "ClaimScribe for Water Damage Restoration",
    subtitle: "AI-powered moisture mapping, IICRC S500 scoping, and Xactimate-ready estimates in minutes.",
    icon: Droplets,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    slug: "fire-damage-contractors",
    title: "ClaimScribe for Fire & Smoke Damage",
    subtitle: "Char/soot assessment, content pack-out scoping, and comprehensive fire loss documentation.",
    icon: Flame,
    color: "bg-orange-500/10 text-orange-400",
  },
  {
    slug: "multi-location-franchises",
    title: "ClaimScribe for Multi-Location Franchises",
    subtitle: "Standardized scoping across locations, franchise-wide reporting, and consistent claim documentation.",
    icon: Building2,
    color: "bg-emerald-500/10 text-emerald-400",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-28 border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Damage Scoping for Every Restoration Specialty
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re scoping a water loss, documenting fire damage, or managing claims across 50 franchise locations, ClaimScribe adapts to your workflow — and gets it right the first time.
            </p>
          </div>
        </section>

        {/* Use Case Grid */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                return (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${uc.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3">{uc.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{uc.subtitle}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">See ClaimScribe in Action</h2>
            <p className="text-gray-400 mb-8">
              Book a demo and we&apos;ll show you how AI-powered scoping works for your specialty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Free Trial
              </Link>
              <Link href="/demo" className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://claimscribe.ai/use-cases" },
            ],
          }),
        }}
      />
    </>
  );
}
