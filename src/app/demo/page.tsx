import { Calendar, Camera, FileText, Zap, BarChart3, ArrowRight, Clock, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — See ClaimScribe AI in Action",
  description: "Schedule a personalized demo of ClaimScribe AI damage scoping software. See AI photo analysis, voice-to-scope, and Xactimate integration for restoration contractors.",
  alternates: { canonical: "/demo" },
};

const DEMO_INCLUDES = [
  { icon: Camera, title: "AI Photo Analysis", desc: "Watch ClaimScribe analyze damage photos and automatically identify affected materials, scope of work, and line items." },
  { icon: Zap, title: "Voice-to-Scope", desc: "See how field technicians dictate damage observations and ClaimScribe converts speech into structured scope documents." },
  { icon: FileText, title: "Xactimate Integration", desc: "Generate Xactimate-ready ESX files with correct line items, measurements, and pricing — no manual data entry." },
  { icon: Shield, title: "Adjuster-Ready Reports", desc: "Create professional damage reports with photo evidence, scope details, and pricing that adjusters approve on first submission." },
];

const STATS = [
  { value: "40 min", label: "Average scope time (vs 3+ hours manual)" },
  { value: "95%", label: "First-submission approval rate" },
  { value: "2.3x", label: "More jobs completed per estimator" },
];

const FAQS = [
  { q: "How long is the demo?", a: "About 20 minutes. We tailor it to your damage types — water, fire, mold, storm, or multi-category." },
  { q: "Who should attend?", a: "Your lead estimator or project manager. Anyone who writes damage scopes or deals with adjuster negotiations." },
  { q: "Does it work with Xactimate?", a: "Yes — ClaimScribe generates ESX files with correct Xactimate line item codes. We'll show you the full integration." },
  { q: "Can I try it after the demo?", a: "Absolutely. Every demo includes a 14-day free trial with 25 scopes included." },
  { q: "What damage types does it support?", a: "Water, fire/smoke, mold, wind/storm, and general property damage. We're adding new categories regularly." },
];

export default function DemoPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-[#0a0a0f] py-20 px-4 border-b border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar size={16} />
                  Free Personalized Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Write Damage Scopes in{" "}
                  <span className="text-blue-500">Minutes</span>, Not Hours
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                  Get a personalized walkthrough of ClaimScribe AI tailored to your restoration business.
                  See how AI-powered photo analysis, voice-to-scope, and Xactimate integration
                  work for contractors like you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg"
                  >
                    Book Your Demo <ArrowRight size={20} />
                  </a>
                  <Link
                    href="https://app.claimscribe.ai"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Or Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {STATS.map((s) => (
                      <div key={s.label} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl font-bold text-blue-400 min-w-[80px]">{s.value}</span>
                        <span className="text-gray-400 text-sm">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll see */}
        <section className="py-20 bg-[#111122] px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">What You&apos;ll See in Your Demo</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Every demo is customized to your damage types and workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {DEMO_INCLUDES.map((item) => (
                <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="book" className="py-20 bg-[#0a0a0f] px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Book Your Demo</h2>
            <p className="text-center text-gray-400 mb-10">Fill out the form and we&apos;ll schedule a time that works for you.</p>
            <form
              action="https://formspree.io/f/xpwzgvkd"
              method="POST"
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10 space-y-6"
            >
              <input type="hidden" name="_subject" value="ClaimScribe Demo Request" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500" placeholder="Tom Rodriguez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Work Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500" placeholder="tom@restorepro.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500" placeholder="RestorePro Services" />
                </div>
                <div>
                  <label htmlFor="estimators" className="block text-sm font-medium text-gray-300 mb-2">Number of Estimators</label>
                  <select id="estimators" name="estimator_count" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white">
                    <option value="" className="bg-[#0a0a0f]">Select range</option>
                    <option value="1-3" className="bg-[#0a0a0f]">1–3 estimators</option>
                    <option value="4-10" className="bg-[#0a0a0f]">4–10 estimators</option>
                    <option value="11-25" className="bg-[#0a0a0f]">11–25 estimators</option>
                    <option value="25+" className="bg-[#0a0a0f]">25+ estimators</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Damage Types</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Water", "Fire/Smoke", "Mold", "Storm/Wind"].map((type) => (
                    <label key={type} className="flex items-center gap-2 p-3 border border-white/10 rounded-lg hover:border-blue-500/50 cursor-pointer transition-colors">
                      <input type="checkbox" name="damage_types" value={type} className="rounded border-gray-600 text-blue-500 focus:ring-blue-500 bg-white/10" />
                      <span className="text-sm font-medium text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Anything specific you&apos;d like to see?</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-white placeholder-gray-500 resize-none" placeholder="E.g., Xactimate export, photo AI, multi-site operations..." />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg">
                Request Demo
              </button>
              <p className="text-center text-sm text-gray-500">We&apos;ll respond within 1 business day. No spam, ever.</p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#111122] px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Demo FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h3 className="font-semibold text-lg mb-2 text-white">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#0a0a0f] px-4 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Scope Faster?</h2>
            <p className="text-gray-400 mb-8">20 minutes. Tailored to your damage types and workflow. No pressure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors">
                Book Your Demo <Calendar size={20} />
              </a>
              <Link href="https://app.claimscribe.ai" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Start Free Trial Instead
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
