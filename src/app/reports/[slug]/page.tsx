"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { REPORTS } from "@/lib/report-data";
import Link from "next/link";
import { FileText, Download, ArrowLeft, CheckCircle, Clock, BookOpen, Lock } from "lucide-react";

export default function ReportDetailPage() {
  const { slug } = useParams();
  const report = REPORTS.find((r) => r.slug === slug);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  if (!report) {
    return (<><Navbar /><main id="main-content" className="py-20 text-center bg-slate-950"><h1 className="text-2xl font-bold text-white mb-4">Report Not Found</h1><Link href="/reports" className="text-emerald-400 hover:underline">← Back to Reports</Link></main><Footer /></>);
  }

  const structuredData = [
    { "@context": "https://schema.org", "@type": "Report", name: report.title, description: report.description, datePublished: report.publishDate, publisher: { "@type": "Organization", name: "ClaimScribe AI", url: "https://claimscribe.ai" }, url: `https://claimscribe.ai/reports/${report.slug}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
      { "@type": "ListItem", position: 2, name: "Industry Reports", item: "https://claimscribe.ai/reports" },
      { "@type": "ListItem", position: 3, name: report.title, item: `https://claimscribe.ai/reports/${report.slug}` },
    ]},
  ];

  const otherReports = REPORTS.filter((r) => r.slug !== report.slug);

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-slate-950">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/reports" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-400 mb-6"><ArrowLeft size={14} /> Back to Reports</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-500/10 text-emerald-400 font-medium text-xs px-3 py-1 rounded-full border border-emerald-500/20">{report.category}</span>
              <span className="flex items-center gap-1 text-sm text-slate-500"><Clock size={14} /> {report.readTime}</span>
              <span className="flex items-center gap-1 text-sm text-slate-500"><BookOpen size={14} /> {report.pages} pages</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{report.title}</h1>
            <p className="text-xl text-slate-400">{report.subtitle}</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto md:flex gap-12">
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4 mb-10">
                {report.stats.map((stat, i) => (<div key={i} className="bg-slate-900 border border-slate-800 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-emerald-400">{stat.value}</div><div className="text-sm text-slate-400">{stat.label}</div></div>))}
              </div>
              <div className="mb-10"><h2 className="text-xl font-bold text-white mb-4">About This Report</h2><p className="text-slate-400 leading-relaxed">{report.description}</p></div>
              <div className="mb-10"><h2 className="text-xl font-bold text-white mb-4">Key Findings</h2><div className="space-y-3">{report.highlights.map((h, i) => (<div key={i} className="flex gap-3"><CheckCircle size={18} className="text-green-400 mt-0.5 flex-shrink-0" /><p className="text-slate-300">{h}</p></div>))}</div></div>
              <div className="mb-10"><h2 className="text-xl font-bold text-white mb-4">What's Inside</h2><div className="space-y-4">{report.sections.map((s, i) => (<div key={i} className="border-l-2 border-emerald-500/30 pl-4"><h3 className="font-semibold text-white">Chapter {i + 1}: {s.title}</h3><p className="text-sm text-slate-400 mt-1">{s.description}</p></div>))}</div></div>
              {otherReports.length > 0 && (<div><h2 className="text-xl font-bold text-white mb-4">More Reports</h2><div className="space-y-3">{otherReports.map((r) => (<Link key={r.slug} href={`/reports/${r.slug}`} className="block p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-emerald-500/30 transition-colors"><div className="flex items-center justify-between"><div><h3 className="font-semibold text-white">{r.title}</h3><p className="text-sm text-slate-500 mt-1">{r.category} • {r.pages} pages</p></div><FileText size={20} className="text-slate-600" /></div></Link>))}</div></div>)}
            </div>

            <div className="md:w-80 mt-10 md:mt-0">
              <div className="sticky top-24 bg-slate-900 border border-slate-800 rounded-xl p-6">
                {unlocked ? (
                  <div className="text-center"><CheckCircle size={48} className="mx-auto text-green-400 mb-4" /><h3 className="text-lg font-bold text-white mb-2">Report Unlocked!</h3><p className="text-sm text-slate-400 mb-4">The full report will be sent to your email shortly.</p><a href="https://app.claimscribe.ai/sign-up" className="block mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors">Try ClaimScribe Free</a></div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-4"><Lock size={18} className="text-emerald-400" /><h3 className="text-lg font-bold text-white">Download Free Report</h3></div>
                    <p className="text-sm text-slate-400 mb-6">Enter your details for instant access to the full {report.pages}-page report.</p>
                    <form onSubmit={(e) => { e.preventDefault(); if (email && name) { const leads = JSON.parse(localStorage.getItem("claimscribe-report-leads") || "[]"); leads.push({ name, email, company, report: report.slug, date: new Date().toISOString() }); localStorage.setItem("claimscribe-report-leads", JSON.stringify(leads)); setUnlocked(true); } }} className="space-y-4">
                      <div><label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name *</label><input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Mike Johnson" /></div>
                      <div><label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Work Email *</label><input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="mike@restoration.com" /></div>
                      <div><label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company</label><input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Restore Pro LLC" /></div>
                      <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"><Download size={16} /> Download Report</button>
                      <p className="text-xs text-slate-500 text-center">No spam. Unsubscribe anytime.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
