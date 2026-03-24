"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  FileCheck,
  Camera,
  Mic,
  Hash,
  FileDown,
  ClipboardList,
  BrainCircuit,
} from "lucide-react";
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
  const benefits = [
    {
      icon: Camera,
      title: "AI Damage Analysis",
      description:
        "Upload site photos and get instant damage identification with affected materials and repair recommendations.",
    },
    {
      icon: Mic,
      title: "Voice-to-Scope",
      description:
        "Narrate what you see on-site. AI transcribes and converts your observations into structured line items automatically.",
    },
    {
      icon: Hash,
      title: "Xactimate Code Mapping",
      description:
        "Every line item maps to the correct Xactimate code. Export as ESX for direct import into Xactimate.",
    },
    {
      icon: ClipboardList,
      title: "Room-by-Room Organization",
      description:
        "Scopes are automatically organized by room and area, matching the format insurance adjusters expect.",
    },
    {
      icon: FileDown,
      title: "Professional PDF Reports",
      description:
        "Export polished, branded PDF reports ready to submit to insurance carriers or share with property owners.",
    },
    {
      icon: BrainCircuit,
      title: "Damage-Specific Templates",
      description:
        "Pre-built templates for water, fire, mold, and storm damage. Start with the right line items for each loss type.",
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
              Customer Stories
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We&apos;re collecting real stories from restoration contractors
              using ClaimScribe. In the meantime, here&apos;s what ClaimScribe
              can do for your business.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* What ClaimScribe Does */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">
              How ClaimScribe Helps Restoration Contractors
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              From single-truck operations to multi-location firms, ClaimScribe
              helps you write better scopes, faster.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <Card className="bg-white/5 border-white/10 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <b.icon size={20} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See ClaimScribe in Action
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Try ClaimScribe free for 14 days and see how AI-powered scoping
              can transform your estimating process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
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
