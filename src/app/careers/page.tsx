import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, Users, Shield, Zap, Heart, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — ClaimScribe",
  description: "Join ClaimScribe and help restoration contractors win more claims with AI-powered damage scoping. See open positions.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Accuracy Pays",
    description: "When a restoration contractor misses line items on a scope, they lose money. Our AI catches what humans miss — that's real value.",
  },
  {
    icon: Zap,
    title: "Speed to Settlement",
    description: "Insurance claims move fast. We build tools that help contractors document damage, write scopes, and get paid faster.",
  },
  {
    icon: Users,
    title: "Contractor-First",
    description: "We build for restoration professionals who are on job sites in water-damaged buildings, not sitting at desks. Mobile-first, always.",
  },
  {
    icon: Heart,
    title: "Helping People Recover",
    description: "Behind every claim is a homeowner dealing with a disaster. We help contractors get paid so they can help people rebuild.",
  },
];

const BENEFITS = [
  "Competitive salary + equity",
  "Remote-first (US time zones)",
  "Unlimited PTO",
  "Health, dental, and vision",
  "$1,000/year learning budget",
  "Latest MacBook + home office stipend",
  "Annual team retreat",
  "401(k) match",
];

const POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build AI-powered damage scoping tools for restoration contractors. Next.js, TypeScript, PostgreSQL, computer vision, Xactimate integration.",
  },
  {
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build and train models for automated damage assessment from photos — water classification, mold detection, structural damage estimation.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    description: "Design intuitive mobile workflows for project managers documenting damage on active restoration sites. Figma, user research, field testing.",
  },
  {
    title: "Account Executive — Restoration Industry",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Sell to restoration company owners and operations managers. You'll demo ClaimScribe to contractors who are losing money on every claim they write.",
  },
  {
    title: "Insurance Claims Specialist",
    department: "Product",
    location: "Remote (US)",
    type: "Full-time",
    description: "Xactimate power user who understands insurance claims inside and out. You'll shape our scoping engine, validate AI outputs, and train the team on claims workflows.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block text-sm font-medium text-emerald-400 mb-4 tracking-wide uppercase">
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Help Contractors Get Paid<br />What They&apos;re Owed
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Restoration contractors leave millions on the table every year from incomplete scopes.
              ClaimScribe uses AI to fix that — and we need builders to make it happen.
            </p>
            <div className="mt-8">
              <a href="#positions" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why ClaimScribe */}
        <section className="py-20 bg-[#0f172a]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Why ClaimScribe?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                The restoration industry is $210B+ and still runs on manual processes.
                We&apos;re bringing AI to an industry that desperately needs it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#1e293b]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Benefits & Perks</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We take care of our team so they can build world-class restoration tech.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-white/[0.03] rounded-lg border border-white/[0.06]">
                  <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-[#0f172a]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Don&apos;t see the right role? Email us at <a href="mailto:careers@claimscribe.co" className="text-emerald-400 hover:underline">careers@claimscribe.co</a> — we&apos;re always looking for great people.
              </p>
            </div>
            <div className="space-y-4">
              {POSITIONS.map((position) => (
                <div key={position.title} className="p-6 rounded-xl border border-white/[0.06] hover:border-emerald-500/30 hover:bg-white/[0.02] transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {position.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{position.description}</p>
                    </div>
                    <a
                      href={`mailto:careers@claimscribe.co?subject=Application: ${position.title}`}
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap self-start"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-[#1e293b]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/[0.03] p-6 rounded-xl border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">🔬 AI + Insurance</h3>
                <p className="text-sm text-slate-400">We&apos;re at the intersection of computer vision and insurance claims. You&apos;ll work on ML models that directly impact contractor revenue.</p>
              </div>
              <div className="bg-white/[0.03] p-6 rounded-xl border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">🌎 Remote First</h3>
                <p className="text-sm text-slate-400">Work from anywhere in the US. Async communication, weekly standups, and a culture that values output over face time.</p>
              </div>
              <div className="bg-white/[0.03] p-6 rounded-xl border border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">📈 Massive Market</h3>
                <p className="text-sm text-slate-400">$210B restoration industry with zero dominant software player. Early stage, huge opportunity, real customers from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-500/10 to-transparent border-t border-white/[0.04]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Join Us?</h2>
            <p className="text-slate-400 mb-6">Send your resume and a note about why you&apos;re interested to careers@claimscribe.co</p>
            <a
              href="mailto:careers@claimscribe.co"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </a>
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.co" },
              { "@type": "ListItem", position: 2, name: "Careers", item: "https://claimscribe.co/careers" },
            ],
          }),
        }}
      />
    </>
  );
}
