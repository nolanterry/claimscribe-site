import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Calculator, Camera, FileText, ArrowRight, Brain, Clock, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare ClaimScribe — See How We Stack Up",
  description: "Compare ClaimScribe with alternatives like Xactimate, Encircle, and manual scoping. See why restoration contractors choose our AI damage scoping platform.",
  alternates: { canonical: "/compare" },
};

const COMPARISONS = [
  {
    name: "Xactimate",
    href: "/compare/xactimate",
    icon: Calculator,
    description: "AI-powered damage scoping vs. manual estimating software",
    tagline: "Automated line item generation vs. manual room-by-room entry"
  },
  {
    name: "Encircle",
    href: "/compare/encircle",
    icon: Camera,
    description: "AI damage analysis vs. photo documentation platform",
    tagline: "Intelligent damage detection vs. manual photo organization"
  },
  {
    name: "Paper/Manual Scoping",
    href: "/compare/paper",
    icon: FileText,
    description: "Digital AI scoping vs. traditional clipboard and paper methods",
    tagline: "Replace clipboards and manual measurements with AI analysis"
  }
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "AI-Powered Damage Detection",
    description: "Advanced computer vision analyzes photos to automatically identify water damage, fire damage, mold, and structural issues. Generates accurate line items without manual input."
  },
  {
    icon: Clock,
    title: "10x Faster Scoping",
    description: "Complete damage scopes in minutes, not hours. Take photos, let AI analyze, review and adjust. No more room-by-room manual entry or missed line items."
  },
  {
    icon: DollarSign,
    title: "Increase Profit Margins",
    description: "Catch damage other contractors miss. AI identifies hidden issues and ensures comprehensive scopes. More accurate estimates mean better project margins and fewer change orders."
  },
  {
    icon: CheckCircle,
    title: "Insurance-Approved Output",
    description: "Generates estimates compatible with Xactimate, Symbility, and other industry standards. Direct integration with major insurance carriers and TPA platforms."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://claimscribe.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Compare",
      "item": "https://claimscribe.co/compare"
    }
  ]
};

const comparisonStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "ClaimScribe Comparisons",
  "description": "Compare ClaimScribe with other damage scoping solutions for restoration contractors",
  "itemListElement": COMPARISONS.map((comparison, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `ClaimScribe vs ${comparison.name}`,
    "description": comparison.tagline,
    "url": `https://claimscribe.co${comparison.href}`
  }))
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonStructuredData) }}
      />
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Compare ClaimScribe.<br />
            <span className="text-emerald-400">See How We Stack Up.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Honest comparisons with alternatives. See why restoration contractors choose ClaimScribe 
            for AI-powered damage scoping and accurate estimating.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Head-to-Head Comparisons</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We've compared ClaimScribe with the most common alternatives restoration contractors consider. 
                See the honest breakdown of features, accuracy, and time savings.
              </p>
            </div>
            
            <div className="grid gap-6">
              {COMPARISONS.map((comparison) => (
                <Link
                  key={comparison.name}
                  href={comparison.href}
                  className="group bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <comparison.icon className="text-emerald-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-white">ClaimScribe</h3>
                        <span className="text-slate-500 font-bold">vs</span>
                        <h3 className="font-semibold text-lg text-slate-300">{comparison.name}</h3>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{comparison.description}</p>
                      <p className="text-emerald-400 font-medium text-sm">{comparison.tagline}</p>
                      <div className="flex items-center gap-2 mt-4 text-emerald-400 font-medium text-sm group-hover:gap-3 transition-all">
                        See full comparison <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose ClaimScribe Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose ClaimScribe?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Purpose-built for restoration contractors who need accurate damage scoping without the 
                time-consuming manual processes of traditional estimating.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DIFFERENTIATORS.map((diff) => (
                <div key={diff.title} className="text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="text-emerald-400" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{diff.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              See why restoration contractors choose ClaimScribe for AI-powered damage scoping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.claimscribe.co/sign-up"
                className="bg-white text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="/demo"
                className="border border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}