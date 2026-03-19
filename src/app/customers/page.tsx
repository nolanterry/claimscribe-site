"use client";

import Link from "next/link";
import { ArrowRight, Star, Clock, ShieldCheck, FileCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

export default function CustomersPage() {
  const metrics = [
    { value: "75%", label: "Faster scope writing", icon: Clock },
    { value: "3x", label: "Higher supplement approval rate", icon: ShieldCheck },
    { value: "$12K", label: "Average revenue increase per project", icon: FileCheck },
  ];

  const testimonials = [
    {
      quote:
        "I used to spend 4 hours writing a water damage scope. ClaimScribe gets me a draft in 20 minutes with every line item coded to Xactimate. I just review, adjust quantities, and submit.",
      name: "Jake Morrison",
      title: "Project Manager",
      company: "Apex Restoration Group",
      location: "Tampa, FL",
      metric: "Scope writing time reduced by 80%",
    },
    {
      quote:
        "We were leaving money on the table on every job. ClaimScribe's AI catches line items our estimators miss — overhead protection, content manipulation, thermal fogging. Our average claim value went up $8K.",
      name: "Maria Santos",
      title: "Owner",
      company: "Santos Restoration Services",
      location: "Phoenix, AZ",
      metric: "$8K increase in average claim value",
    },
    {
      quote:
        "The supplement documentation is what sold me. When the adjuster pushes back, I have photo evidence, moisture readings, and IICRC-standard justifications all linked to specific line items. They can't argue with that.",
      name: "Chris Walker",
      title: "Estimator",
      company: "Midwest Water & Fire",
      location: "Indianapolis, IN",
      metric: "92% supplement approval rate",
    },
    {
      quote:
        "We run 8-10 active jobs at a time. Before ClaimScribe, I'd lose track of what was documented and what wasn't. Now every job has a complete digital paper trail from first notice of loss to final invoice.",
      name: "Danielle Brooks",
      title: "Operations Director",
      company: "Priority Restoration",
      location: "Atlanta, GA",
      metric: "Zero documentation gaps across 10 active jobs",
    },
    {
      quote:
        "I trained my junior estimator on ClaimScribe in one afternoon. He was writing scopes at a senior level within a week. The AI gives him a framework — he's not starting from a blank Xactimate file anymore.",
      name: "Kevin O'Brien",
      title: "Senior Estimator",
      company: "Northeast Disaster Recovery",
      location: "Hartford, CT",
      metric: "Junior estimators productive in 1 week",
    },
    {
      quote:
        "Our insurance carrier relationships improved because our documentation got so much better. Adjusters actually told us they prefer working with us now because our scopes are thorough and properly coded.",
      name: "Amanda Chen",
      title: "VP of Operations",
      company: "Pacific Coast Restoration",
      location: "San Diego, CA",
      metric: "Improved carrier relationships",
    },
  ];

  const caseStudies = [
    {
      company: "Apex Restoration Group",
      industry: "Water & Fire Damage Restoration",
      scale: "12 crews, 180+ jobs/year",
      challenge:
        "Scope writing was the biggest bottleneck in their operation. Project managers spent 3-5 hours per job creating Xactimate estimates, and inconsistency between estimators meant revenue varied wildly for similar damage profiles. Supplement success rate was below 40%.",
      solution:
        "Deployed ClaimScribe across all estimating staff. AI generates initial scope from photos and damage descriptions, coded to Xactimate line items. Built-in supplement templates with IICRC-standard justifications for contested line items.",
      results: [
        "Average scope writing time dropped from 4 hours to 45 minutes",
        "Supplement approval rate increased from 38% to 91%",
        "Revenue per job increased by an average of $12,400",
        "Freed up project managers to handle 30% more active jobs",
      ],
    },
    {
      company: "Midwest Water & Fire",
      industry: "Multi-Trade Restoration",
      scale: "6 estimators, 3 locations across Indiana and Ohio",
      challenge:
        "Inconsistent scoping quality across locations. The Indianapolis office had senior estimators who captured every line item, while satellite offices regularly missed overhead and profit line items, contents manipulation, and specialty equipment charges. Annual revenue leakage estimated at $200K+.",
      solution:
        "Standardized all locations on ClaimScribe with damage-type-specific templates. AI-powered line item suggestions ensure nothing is missed regardless of estimator experience level. Centralized dashboard gives the owner visibility into scope quality across all offices.",
      results: [
        "Eliminated revenue leakage — all 3 offices now scope at the same quality level",
        "Recovered an estimated $180K in previously missed line items in the first year",
        "Reduced estimator training time from 6 months to 6 weeks",
        "Carrier relationships improved due to consistent, well-documented scopes",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Restoration Contractors
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Who Refuse to Leave Money on the Table
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From single-truck operations to multi-location firms, ClaimScribe
              helps restoration contractors write better scopes, win more
              supplements, and get paid what they&apos;re owed.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Metrics */}
      <section className="py-16 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {metrics.map((m) => (
              <StaggerItem key={m.label}>
                <div className="text-center">
                  <m.icon size={32} className="mx-auto mb-3 text-blue-400" />
                  <p className="text-4xl font-bold text-white">{m.value}</p>
                  <p className="text-slate-400 mt-1">{m.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">
              What Our Customers Say
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Real feedback from project managers, estimators, and owners who
              switched to ClaimScribe.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <Card className="bg-white/5 border-white/10 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote size={24} className="text-blue-400/30 mb-3" />
                    <p className="text-slate-300 flex-1 mb-4 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-blue-400 text-blue-400"
                          />
                        ))}
                      </div>
                      <p className="font-semibold text-white mt-2">{t.name}</p>
                      <p className="text-sm text-slate-400">
                        {t.title}, {t.company}
                      </p>
                      <p className="text-sm text-slate-500">{t.location}</p>
                      <p className="text-xs text-blue-400 font-medium mt-2">
                        {t.metric}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">
              Customer Stories
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              See how restoration contractors transformed their estimating
              process with ClaimScribe.
            </p>
          </FadeIn>
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <FadeIn key={cs.company}>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="bg-white/10 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                        {cs.scale}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {cs.company}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          The Challenge
                        </h4>
                        <p className="text-slate-400">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          The Solution
                        </h4>
                        <p className="text-slate-400">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          Results
                        </h4>
                        <ul className="space-y-2">
                          {cs.results.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-slate-400"
                            >
                              <ShieldCheck
                                size={16}
                                className="text-blue-400 mt-1 shrink-0"
                              />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop leaving money in the adjuster&apos;s pocket.
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Every missed line item is revenue you earned but didn&apos;t collect.
              ClaimScribe makes sure nothing falls through the cracks.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">
                Book a Demo <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-slate-500 mt-4">
              14 days free · No credit card · Cancel anytime
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
