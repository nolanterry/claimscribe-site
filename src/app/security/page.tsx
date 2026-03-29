import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Shield, Lock, Server, Eye, FileCheck, AlertTriangle, Users, Database, CheckCircle, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Security — ClaimScribe",
  description:
    "ClaimScribe security practices — how we protect your restoration claims data with enterprise-grade encryption and insurance industry compliance.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security | ClaimScribe",
    description: "Enterprise-grade security for restoration and insurance claims data.",
    url: "https://claimscribe.co/security",
  },
};

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Encryption at Rest & In Transit",
    description:
      "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Damage assessments, claim photos, scope documents, and estimate data are encrypted before storage.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Hosted on Vercel and Neon (PostgreSQL) with automatic failover, daily backups, and point-in-time recovery. Infrastructure spans multiple availability zones for 99.9% uptime.",
  },
  {
    icon: Users,
    title: "Authentication & Access Control",
    description:
      "Powered by Clerk with multi-factor authentication (MFA), SSO support, session management, and role-based access controls. Every API request is authenticated and authorized.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description:
      "Every damage scope change, estimate revision, photo upload, and data export is logged with timestamps, user IDs, and IP addresses. Full audit trail for insurance carrier reviews.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    description:
      "Tenant data is logically isolated at the database level. Your claim records, damage photos, and company information are never accessible to other organizations.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "24-hour incident response SLA with documented escalation procedures. Security incidents are communicated via email and our /status page within 4 hours of detection.",
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "Insurance Data Protection",
    description:
      "ClaimScribe follows NAIC Insurance Data Security Model Law guidelines for protecting policyholder and claims data. Role-based access ensures only authorized personnel view sensitive claim information.",
  },
  {
    title: "Xactimate Integration Security",
    description:
      "Data exchanged with Xactimate and Xactanalysis follows Verisk-recommended encryption standards. API tokens and credentials are stored in encrypted environment variables, never in source code.",
  },
  {
    title: "HIPAA-Adjacent Safeguards",
    description:
      "For restoration projects involving healthcare facilities, ClaimScribe implements safeguards aligned with HIPAA technical requirements, including access controls and audit logging.",
  },
  {
    title: "SOC 2 Type II (In Progress)",
    description:
      "We are pursuing SOC 2 Type II certification for security, availability, and confidentiality trust service criteria. Target completion: Q3 2026.",
  },
  {
    title: "GDPR & CCPA",
    description:
      "Full compliance with GDPR and CCPA data protection regulations. Users can export or delete their data at any time via account settings or by contacting support.",
  },
  {
    title: "State Contractor Licensing Compliance",
    description:
      "Documentation workflows support state-specific contractor licensing and insurance requirements, maintaining records in formats accepted by licensing boards and carriers.",
  },
];

const DATA_PRACTICES = [
  "Damage photos and scope documents are stored in encrypted cloud storage with geo-redundant replication",
  "Database backups run every 6 hours with 30-day retention",
  "Point-in-time recovery available for the last 7 days",
  "Data export available in CSV, PDF, Xactimate-compatible, and JSON formats on request",
  "Account deletion permanently removes all data within 30 days",
  "No customer claims data is used for AI model training or shared with third parties",
  "AI-powered damage scoping runs on isolated instances — your data never trains public models",
  "Stripe handles all payment processing — we never store credit card numbers",
  "Third-party vendors undergo security review before integration",
  "Employee access to production data requires approval and is logged",
];

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-slate-950 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Enterprise-Grade Security
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Claims Data,{" "}
              <span className="text-emerald-400">Protected</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              ClaimScribe secures your damage assessments, claim documentation, and estimate data
              with the standards expected by insurance carriers and restoration companies.
            </p>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">How We Protect Your Data</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              Security isn&apos;t an afterthought — it&apos;s built into every layer of ClaimScribe.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SECURITY_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="border border-slate-700 rounded-xl p-6 bg-slate-800/50 hover:bg-slate-800 transition-colors"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Compliance & Certifications</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              Built for the insurance and restoration industry&apos;s most demanding data requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {COMPLIANCE_ITEMS.map((item) => (
                <div key={item.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Practices */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Data Handling Practices</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              Transparency in how we store, process, and protect your information.
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {DATA_PRACTICES.map((practice, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Responsible Disclosure */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4 text-white">Responsible Disclosure</h2>
            <p className="text-slate-400 mb-6">
              Found a security vulnerability? We take all reports seriously. Please email us at{" "}
              <a href="mailto:security@claimscribe.co" className="text-emerald-400 font-medium hover:underline">
                security@claimscribe.co
              </a>{" "}
              with details. We&apos;ll acknowledge receipt within 24 hours and provide a resolution timeline within 72 hours.
            </p>
            <p className="text-slate-500 text-sm">
              Please do not publicly disclose vulnerabilities until we&apos;ve had a chance to address them.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Claims Process?</h2>
            <p className="text-emerald-100 text-lg mb-8">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/demo" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                Book a Demo
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
        </section>

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.co" },
                { "@type": "ListItem", position: 2, name: "Security", item: "https://claimscribe.co/security" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
