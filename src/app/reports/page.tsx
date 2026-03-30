"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { REPORTS } from "@/lib/report-data";
import Link from "next/link";
import { FileText, Download, ArrowRight, BarChart3, BookOpen, Shield, Mail, CheckCircle } from "lucide-react";

export default function ReportsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Industry Reports", item: "https://claimscribe.ai/reports" },
    ],
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-emerald-500/10 text-emerald-400 font-medium text-sm px-4 py-1.5 rounded-full mb-6 border border-emerald-500/20">
              Industry Research
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Restoration Industry Reports & Whitepapers</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Data-driven insights on restoration technology, AI damage scoping, and carrier negotiations. Free to download.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {REPORTS.map((report, i) => (
                <Link key={report.slug} href={`/reports/${report.slug}`}
                  className="group block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all">
                  <div className="md:flex">
                    <div className="md:w-64 bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 flex flex-col items-center justify-center text-white">
                      {i === 0 && <BarChart3 size={48} className="mb-4 opacity-80" />}
                      {i === 1 && <FileText size={48} className="mb-4 opacity-80" />}
                      {i === 2 && <Shield size={48} className="mb-4 opacity-80" />}
                      <span className="text-sm font-medium text-emerald-200">{report.category}</span>
                      <span className="text-xs text-emerald-300/70 mt-1">{report.pages} pages • {report.readTime}</span>
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2"><BookOpen size={14} /><span>{report.publishDate}</span></div>
                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">{report.title}</h2>
                      <p className="text-slate-400 mb-4">{report.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {report.highlights.slice(0, 3).map((h, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">
                            <CheckCircle size={10} className="text-green-400" />{h.length > 60 ? h.slice(0, 60) + "…" : h}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-medium text-sm group-hover:gap-2 transition-all">Read Report <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-emerald-600">
          <div className="max-w-2xl mx-auto text-center">
            <Mail size={32} className="mx-auto mb-4 text-emerald-200" />
            <h2 className="text-2xl font-bold text-white mb-3">Get New Reports First</h2>
            <p className="text-emerald-100 mb-6">Subscribe for new restoration industry research, technology insights, and carrier negotiation strategies.</p>
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-white"><CheckCircle size={20} /><span>You're subscribed!</span></div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) { const existing = JSON.parse(localStorage.getItem("claimscribe-report-subscribers") || "[]"); if (!existing.includes(email)) { existing.push(email); localStorage.setItem("claimscribe-report-subscribers", JSON.stringify(existing)); } setSubmitted(true); } }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Email address" />
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-lg transition-colors">Subscribe</button>
              </form>
            )}
          </div>
        </section>

        <section className="py-16 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scope Smarter?</h2>
            <p className="text-lg text-slate-400 mb-8">Join restoration contractors using ClaimScribe AI to scope faster, recover more revenue, and win carrier disputes. Start your free 14-day trial.</p>
            <a href="https://app.claimscribe.ai/sign-up" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">Start Free Trial <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
