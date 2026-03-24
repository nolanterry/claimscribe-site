"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, Zap, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

/* ─── Animated Number ─── */
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => { spring.set(value); }, [spring, value]);
  useEffect(() => {
    const unsub = display.on("change", (v) => { if (ref.current) ref.current.textContent = v; });
    return unsub;
  }, [display]);

  return <span ref={ref}>{`${prefix}${value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`}</span>;
}

/* ─── Slider ─── */
function Slider({ label, min, max, step, value, onChange, prefix = "", suffix = "" }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-400">{label}</label>
        <span className="text-sm font-bold text-blue-400">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #3b82f6 ${pct}%, #1e293b ${pct}%)` }}
      />
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ROICalculatorPage() {
  const [claims, setClaims] = useState(20);
  const [hoursPerScope, setHoursPerScope] = useState(5);
  const [rate, setRate] = useState(50);
  const [supplementImprovement, setSupplementImprovement] = useState(2000);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);

  const hoursSavedMonth = claims * hoursPerScope * 0.7;
  const laborSavedMonth = hoursSavedMonth * rate;
  const revenueRecoveredMonth = claims * supplementImprovement * 0.3;
  const totalBenefitMonth = laborSavedMonth + revenueRecoveredMonth;
  const annualBenefit = totalBenefitMonth * 12;
  const annualCost = 3588;
  const roi = annualBenefit > 0 ? Math.round(((annualBenefit - annualCost) / annualCost) * 100) : 0;

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem("claimscribe_roi_leads") || "[]");
    leads.push({ email, claims, hoursPerScope, rate, supplementImprovement, annualBenefit, roi, ts: new Date().toISOString() });
    localStorage.setItem("claimscribe_roi_leads", JSON.stringify(leads));
    setSubmitted(true);
  }, [email, claims, hoursPerScope, rate, supplementImprovement, annualBenefit, roi]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "ROI Calculator", item: "https://claimscribe.ai/roi-calculator" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <Calculator className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">ROI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calculate Your <span className="text-blue-400">Scoping Savings</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how much time and revenue ClaimScribe adds to your operation by automating property claim scoping with AI.
            </p>
          </motion.div>
        </section>

        {/* Calculator */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#141414] border border-gray-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" /> Your Current Situation
              </h2>
              <Slider label="Claims scoped per month" min={5} max={100} step={1} value={claims} onChange={setClaims} />
              <Slider label="Average hours per manual scope" min={2} max={10} step={0.5} value={hoursPerScope} onChange={setHoursPerScope} suffix=" hrs" />
              <Slider label="Estimator hourly rate" min={30} max={80} step={1} value={rate} onChange={setRate} prefix="$" />
              <Slider label="Avg supplement recovery improvement/claim" min={500} max={5000} step={100} value={supplementImprovement} onChange={setSupplementImprovement} prefix="$" />
            </motion.div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#141414] border border-gray-800 rounded-2xl p-8 flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" /> Your Savings with ClaimScribe
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours Saved / Month</p>
                  <p className="text-2xl font-bold text-white"><AnimatedNumber value={Math.round(hoursSavedMonth)} suffix=" hrs" /></p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Labor Saved / Month</p>
                  <p className="text-2xl font-bold text-white"><AnimatedNumber value={Math.round(laborSavedMonth)} prefix="$" /></p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Revenue Recovered / Mo</p>
                  <p className="text-2xl font-bold text-emerald-400"><AnimatedNumber value={Math.round(revenueRecoveredMonth)} prefix="$" /></p>
                </div>
                <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Annual Total Benefit</p>
                  <p className="text-2xl font-bold text-emerald-400"><AnimatedNumber value={Math.round(annualBenefit)} prefix="$" /></p>
                </div>
              </div>

              {/* ROI highlight */}
              <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800 mb-6 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Return on Investment</p>
                <p className="text-4xl font-bold text-emerald-400"><AnimatedNumber value={roi} suffix="%" /></p>
                <p className="text-xs text-gray-500 mt-1">vs ClaimScribe annual cost of $3,588</p>
              </div>

              {/* Comparison */}
              <div className="bg-[#0a0a0a] rounded-xl p-4 border border-gray-800 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">Manual Scoping</p>
                    <p className="text-lg font-bold text-red-400"><AnimatedNumber value={Math.round(claims * hoursPerScope)} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-500 mt-1">On-site + spreadsheets</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">With ClaimScribe</p>
                    <p className="text-lg font-bold text-emerald-400"><AnimatedNumber value={Math.round(claims * hoursPerScope * 0.3)} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-500 mt-1">AI-powered scoping</p>
                  </div>
                </div>
              </div>

              {/* Lead Capture */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-auto">
                  <p className="text-sm text-gray-400 mb-3">Get a detailed ROI report customized for your operation:</p>
                  <div className="flex gap-2">
                    <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-blue-500" />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-1.5">
                      Get Report <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-auto bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <p className="text-emerald-400 font-medium">✓ We&apos;ll send your custom ROI report shortly!</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Methodology */}
          <div className="mt-12 max-w-4xl mx-auto">
            <button onClick={() => setMethodOpen(!methodOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm w-full justify-between bg-[#141414] border border-gray-800 rounded-xl px-6 py-4">
              <span className="font-medium">Methodology & Assumptions</span>
              {methodOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {methodOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="bg-[#141414] border border-t-0 border-gray-800 rounded-b-xl px-6 py-4 text-sm text-gray-400 space-y-2">
                <p><strong className="text-gray-300">Time reduction:</strong> ClaimScribe reduces scoping time by approximately 70% through AI-powered damage detection and automated Xactimate estimates.</p>
                <p><strong className="text-gray-300">Revenue recovery:</strong> AI scoping identifies 30% more line items on average, calculated as claims × supplement improvement × 0.3 capture rate.</p>
                <p><strong className="text-gray-300">ROI calculation:</strong> (Annual total benefit − ClaimScribe annual cost of $3,588) ÷ ClaimScribe annual cost × 100.</p>
                <p><strong className="text-gray-300">Total benefit:</strong> Combines both labor savings and additional revenue recovered from more complete scopes.</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
