"use client";

import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

const values = [
  {
    icon: Target,
    title: "Contractor-First Design",
    description: "Every feature starts with real contractor feedback. We build tools for the field, not the office.",
  },
  {
    icon: Zap,
    title: "Speed Without Sacrifice",
    description: "We believe faster scopes should also mean better scopes. AI amplifies your expertise — it doesn't replace it.",
  },
  {
    icon: Heart,
    title: "Fair Compensation",
    description: "Restoration contractors deserve to be paid for every line item. Thorough documentation means fair claim settlements.",
  },
  {
    icon: Users,
    title: "Industry Partnership",
    description: "We work alongside contractors, adjusters, and carriers to build tools that improve the entire claims process.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              AI-Powered{" "}
              <span className="gradient-text">Claim Documentation</span>
              {" "}for Restoration Contractors
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              ClaimScribe was built to solve a real problem: restoration contractors spending hours writing scopes by hand, leaving money on the table with every claim. We combined field expertise with AI to make it faster, more thorough, and more accurate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Restoration contractors are skilled professionals who rebuild people&apos;s homes and businesses after disasters. But too much of their time gets consumed by paperwork — specifically, writing detailed scopes of work for insurance claims.
                </p>
                <p>
                  A thorough scope can mean the difference between a fair settlement and leaving thousands on the table. Yet most contractors spend 2-4 hours per scope, often late at night after a full day on the job site.
                </p>
                <p>
                  ClaimScribe exists to give that time back. Our AI handles the documentation so contractors can focus on what they do best: restoring properties and helping families recover from the worst days of their lives.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Drives Us</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full bg-card/50 hover:border-primary-600/20 transition-colors">
                  <CardContent className="pt-6">
                    <div className="h-10 w-10 rounded-lg bg-primary-600/10 flex items-center justify-center mb-4">
                      <value.icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              See ClaimScribe in Action
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Try ClaimScribe AI free for 14 days. No credit card required.
            </p>
            <Button size="xl" asChild>
              <Link href="/pricing">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
