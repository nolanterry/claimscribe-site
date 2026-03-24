import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, BrainCircuit, Droplets, Flame, Wind, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Scoping Software for Restoration Contractors | ClaimScribe",
  description: "Purpose-built for water, fire, mold, and storm damage restoration. AI-powered scoping with Xactimate codes, voice-to-scope, and adjuster-ready reports.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/restoration-contractor-software" },
};

const DAMAGE_TYPES = [
  { icon: Droplets, type: "Water Damage", detail: "Category 1-3 classification, moisture mapping, drying scope" },
  { icon: Flame, type: "Fire & Smoke", detail: "Char depth analysis, smoke damage grading, content inventory" },
  { icon: Bug, type: "Mold Remediation", detail: "Protocol-based scoping, containment requirements, clearance docs" },
  { icon: Wind, type: "Storm & Wind", detail: "Roof damage assessment, siding impact, exterior scope items" },
];

const WORKFLOW_STATS = [
  { stat: "40 min", label: "average scope time", detail: "vs. 3+ hours manually" },
  { stat: "95%", label: "first-submission approval rate", detail: "adjuster-ready format" },
  { stat: "2.3x", label: "more jobs per month", detail: "for solo contractors using ClaimScribe" },
];

const FEATURES = [
  { title: "Photo → Damage Analysis", desc: "Upload site photos and AI identifies damage types, affected materials, and repair methods automatically." },
  { title: "Voice-to-Scope", desc: "Walk the property, narrate what you see. AI transcribes and converts observations into structured line items." },
  { title: "Xactimate Code Mapping", desc: "Every line item maps to the correct Xactimate code. Export as ESX for direct import — no manual lookup." },
  { title: "Room-by-Room Layout", desc: "Scopes auto-organize by room and area, matching the format adjusters expect. No reformatting needed." },
  { title: "Damage-Specific Templates", desc: "Pre-built templates for water, fire, mold, and storm. Start with the right line items for each loss type." },
  { title: "Photo Evidence Linking", desc: "Every scope item links to timestamped photos. Adjusters see exactly what you documented on-site." },
  { title: "Team Collaboration", desc: "Multiple estimators can work on the same project. See who scoped what, when, with full audit trail." },
  { title: "Professional PDF Reports", desc: "One-click export with your branding, photos, line items, and totals. Ready to submit to any carrier." },
];

const SIGNUP_URL = "https://app.claimscribe.ai";

export default function LPRestorationContractorSoftware() {
  return (
    <main className="min-h-screen text-gray-300" style={{ background: "#0a0a0f" }}>
      {/* Minimal header */}
      <div className="border-b border-white/10 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BrainCircuit className="text-blue-500" size={20} strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight text-white">
              Claim<span className="text-blue-500">Scribe</span>
            </span>
          </div>
          <Link href={SIGNUP_URL} className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
            Sign In →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.15), transparent)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-blue-500/20">
            <BrainCircuit size={14} /> Purpose-Built for Restoration Contractors
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Your Estimators Should Be on Job Sites,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Not Behind a Desk.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            ClaimScribe is the only AI scoping tool built specifically for water, fire, mold, and storm damage
            restoration. Document on-site. Scope automatically. Get paid faster.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-10 py-5 rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </Link>
          <p className="mt-4 text-sm text-gray-500">No credit card required · Works on any device</p>
        </div>
      </section>

      {/* Damage Types */}
      <section className="py-12 px-4 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-white mb-8">AI Scoping for Every Loss Type</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {DAMAGE_TYPES.map((d) => (
              <div key={d.type} className="text-center p-5 rounded-xl border border-white/10" style={{ background: "rgba(17, 17, 34, 0.7)" }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-3">
                  <d.icon size={20} />
                </div>
                <p className="text-sm font-bold text-white">{d.type}</p>
                <p className="text-xs text-gray-500 mt-2">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {WORKFLOW_STATS.map((s) => (
              <div key={s.stat} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">{s.stat}</p>
                <p className="text-sm font-medium text-white">{s.label}</p>
                <p className="text-xs text-gray-500 mt-1">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-y border-white/5" style={{ background: "rgba(17, 17, 34, 0.5)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
            Built for How Restoration Contractors Actually Work
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-5 rounded-lg border border-white/10" style={{ background: "#0a0a0f" }}>
                <Check className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 border-y border-white/5" style={{ background: "rgba(17, 17, 34, 0.5)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Pays for Itself on the First Job</h2>
          <p className="text-gray-400 mb-8">
            One missed line item costs <span className="text-white font-semibold">$1,200+</span> on average.
            ClaimScribe catches what you miss — starting at <span className="text-white font-semibold">$199/month</span>.
          </p>
          <div className="border-2 border-blue-500 rounded-2xl p-8" style={{ background: "#0a0a0f" }}>
            <p className="text-sm text-blue-400 font-semibold mb-2">STARTER</p>
            <p className="text-4xl font-bold text-white mb-1">$199<span className="text-lg text-gray-500">/mo</span></p>
            <p className="text-sm text-gray-500 mb-1">25 scopes/month · All damage types</p>
            <p className="text-xs text-blue-400 mb-6">$169/mo billed annually</p>
            <ul className="text-left space-y-2 mb-8">
              {["AI damage analysis from photos", "Voice-to-scope for field documentation", "Xactimate code mapping", "Water, fire, mold & storm templates", "Room-by-room organization", "PDF export with your branding"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check size={16} className="text-blue-500 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <Link
              href={SIGNUP_URL}
              className="block w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors text-center"
            >
              Start Free 14-Day Trial
            </Link>
            <p className="text-xs text-gray-500 mt-3">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Next Loss Is Already Waiting. Scope It Faster.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every hour spent on documentation is an hour you&apos;re not on the next job. Let AI do the heavy lifting.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-10 py-5 rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-white/10 py-6 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-gray-500">
          <p>© 2026 ClaimScribe AI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-400">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-400">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
