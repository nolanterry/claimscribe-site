import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Handshake, DollarSign, Users, Megaphone, ArrowRight, Shield, BarChart3, CheckCircle, Zap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner Program — ClaimScribe",
  description: "Join the ClaimScribe partner program. Earn recurring commissions referring restoration contractors, or integrate your tools with our AI damage scoping platform.",
  alternates: { canonical: "/partners" },
};

const PARTNER_TYPES = [
  {
    icon: Handshake,
    title: "Referral Partners",
    description: "Know restoration contractors leaving money on the table with manual scoping? Refer them to ClaimScribe and earn 20% recurring commission for the life of the account.",
    benefits: [
      "20% recurring revenue share",
      "Dedicated partner dashboard",
      "Co-branded restoration guides",
      "Priority support for referred contractors",
    ],
    cta: "Become a Referral Partner",
    ideal: "Insurance adjusters, TPA firms, restoration consultants, trade associations",
  },
  {
    icon: Zap,
    title: "Technology Partners",
    description: "Integrate ClaimScribe with your estimating platform, CRM, or project management system. Give mutual customers seamless AI scoping alongside their existing tools.",
    benefits: [
      "Full API access and documentation",
      "Joint go-to-market campaigns",
      "Listed on our integrations page",
      "Co-development and roadmap input",
    ],
    cta: "Explore Technology Partnership",
    ideal: "Estimating software vendors, restoration CRMs, project management platforms, drying equipment IoT",
  },
  {
    icon: BookOpen,
    title: "Franchise & Network Partners",
    description: "Roll out ClaimScribe across your franchise network or contractor group. Volume pricing, centralized management, and standardized scoping across all locations.",
    benefits: [
      "Enterprise volume pricing",
      "Centralized admin dashboard",
      "Standardized scoping templates",
      "Dedicated implementation support",
    ],
    cta: "Apply as Network Partner",
    ideal: "Restoration franchises (ServPro, BELFOR, PuroClean), contractor networks, buying groups",
  },
];

const WHY_PARTNER = [
  {
    icon: Shield,
    title: "Insurance Complexity",
    description: "Carriers are using AI to cut payouts. Contractors need AI-powered scoping to fight back and capture every billable line item.",
  },
  {
    icon: DollarSign,
    title: "Recurring Revenue",
    description: "SaaS model means your commissions recur monthly. One introduction to a restoration company can generate years of passive income.",
  },
  {
    icon: BarChart3,
    title: "Massive ROI for Customers",
    description: "Contractors using ClaimScribe recover 15-30% more per claim. The platform pays for itself on the first job — making it an easy sell.",
  },
  {
    icon: Users,
    title: "Partner Support",
    description: "Dedicated channel manager, co-branded materials, joint trade show presence, and a portal to track referrals and commissions.",
  },
];

const STEPS = [
  { step: "1", title: "Apply", description: "Submit your partner application. We review within 48 hours and schedule an onboarding call." },
  { step: "2", title: "Onboard", description: "Get your partner dashboard, referral links, and industry-specific co-branded materials." },
  { step: "3", title: "Earn & Grow", description: "Refer contractors, close deals, and track your recurring commissions in the partner portal." },
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ClaimScribe Partner Program",
  description: "Join the ClaimScribe partner program for restoration contractor AI scoping.",
  url: "https://claimscribe.ai/partners",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Partners", item: "https://claimscribe.ai/partners" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner with ClaimScribe
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
              Help restoration contractors capture every billable line item with AI-powered damage scoping.
              Earn recurring revenue as a referral partner, technology integrator, or franchise network.
            </p>
            <a
              href="mailto:partners@claimscribe.ai?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-blue-500 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-blue-400 transition-colors"
            >
              Apply to Partner Program <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Choose Your Partnership Track</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Whether you&apos;re an adjuster, technology vendor, or franchise network — we have a model that fits.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {PARTNER_TYPES.map((type) => (
                <div key={type.title} className="bg-[#111122] rounded-2xl p-8 border border-[#1e293b] hover:border-blue-500/30 transition-all">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle size={16} className="text-green-400 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    <strong className="text-gray-400">Ideal for:</strong> {type.ideal}
                  </p>
                  <a
                    href="mailto:partners@claimscribe.ai?subject=Partner%20Program%20Application"
                    className="inline-flex items-center gap-1.5 text-blue-400 font-medium text-sm hover:text-blue-300"
                  >
                    {type.cta} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-[#111122]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Partner with ClaimScribe?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_PARTNER.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-[#0a0a0f] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#1e293b]">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[#0a0a0f]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner?</h2>
            <p className="text-blue-200 mb-8">
              Join our partner ecosystem and help restoration contractors capture every billable line item.
            </p>
            <a
              href="mailto:partners@claimscribe.ai?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Apply Now <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
