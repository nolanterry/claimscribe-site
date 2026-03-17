import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Camera, AlertTriangle, Clock, FileText, Star, BrainCircuit } from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Damage Scoping Software | ClaimScribe",
  description: "Turn site photos and voice notes into insurance-ready damage scopes in minutes. AI damage analysis, Xactimate code mapping, and room-by-room organization.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/ai-damage-scoping" },
};

const PAIN_POINTS = [
  { icon: Clock, text: "Spending 3+ hours writing a single damage scope?" },
  { icon: AlertTriangle, text: "Missing line items that cost you thousands on claims?" },
  { icon: FileText, text: "Re-doing scopes because adjusters reject your format?" },
];

const FEATURES = [
  "AI damage analysis from site photos",
  "Voice-to-scope — narrate and auto-generate line items",
  "Room-by-room organization (adjuster-ready format)",
  "Xactimate code mapping on every line item",
  "ESX file export for direct Xactimate import",
  "Photo evidence linked to each scope item",
  "PDF export with professional formatting",
  "Custom templates for water, fire, mold & storm",
];

const TESTIMONIALS = [
  { name: "Derek W.", role: "Owner, Water Damage Restoration Co.", text: "I used to spend 3 hours on a scope. ClaimScribe got my last one done in 40 minutes — and the adjuster approved it first try." },
  { name: "Maria L.", role: "Project Manager, Multi-Location Restoration", text: "Voice-to-scope changed everything. I walk through the property, talk into my phone, and the scope writes itself." },
  { name: "Jason T.", role: "Independent Claims Adjuster", text: "The Xactimate code mapping is surprisingly accurate. I still review everything, but it cuts my documentation time in half." },
];

const SIGNUP_URL = "https://app.claimscribe.ai";

export default function LPAIDamageScoping() {
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
            <Camera size={14} /> AI-Powered Damage Documentation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Write Damage Scopes in Minutes,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Not Hours.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            ClaimScribe uses AI to turn your site photos and voice notes into complete,
            adjuster-ready damage scopes with Xactimate codes.
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

      {/* Pain Points */}
      <section className="py-12 px-4 border-b border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p) => (
              <div key={p.text} className="flex flex-col items-center text-center p-6 rounded-xl border border-white/10" style={{ background: "rgba(17, 17, 34, 0.7)" }}>
                <p.icon className="text-amber-400 mb-3" size={28} />
                <p className="text-sm text-gray-300 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-6xl md:text-7xl font-bold text-blue-500 mb-4">73%</p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            of restoration contractors say scope documentation is their biggest bottleneck.
            <span className="text-gray-500 block mt-1 text-sm">— 2025 R&R Magazine Industry Survey</span>
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 border-y border-white/5" style={{ background: "rgba(17, 17, 34, 0.5)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
            From Site Visit to Approved Scope, Faster
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-lg border border-white/10" style={{ background: "#0a0a0f" }}>
                <Check className="text-blue-500 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-300">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-10">
            Trusted by Restoration Pros
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-xl p-6 border border-white/10" style={{ background: "rgba(17, 17, 34, 0.7)" }}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-gray-300 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 border-y border-white/5" style={{ background: "rgba(17, 17, 34, 0.5)" }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">One Missed Line Item Costs More Than a Year of ClaimScribe</h2>
          <p className="text-gray-400 mb-8">
            The average missed scope item costs <span className="text-white font-semibold">$1,200+</span>.
            ClaimScribe starts at <span className="text-white font-semibold">$199/month</span>.
          </p>
          <div className="border-2 border-blue-500 rounded-2xl p-8" style={{ background: "#0a0a0f" }}>
            <p className="text-sm text-blue-400 font-semibold mb-2">STARTER</p>
            <p className="text-4xl font-bold text-white mb-1">$199<span className="text-lg text-gray-500">/mo</span></p>
            <p className="text-sm text-gray-500 mb-1">25 scopes/month</p>
            <p className="text-xs text-blue-400 mb-6">$169/mo billed annually</p>
            <ul className="text-left space-y-2 mb-8">
              {["AI damage analysis from photos", "Voice-to-scope transcription", "Xactimate code mapping", "Room-by-room organization", "PDF export with photo evidence", "Priority support"].map((f) => (
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
            Stop Leaving Money on the Table
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Every scope you write by hand is time you could spend on the next job. Let AI handle the documentation.
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
