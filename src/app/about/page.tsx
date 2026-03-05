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

const team = [
  {
    name: "James Whitfield",
    role: "CEO & Co-Founder",
    bio: "Former restoration company owner with 15 years in the field. Built ClaimScribe after spending too many late nights writing scopes by hand.",
  },
  {
    name: "Dr. Priya Patel",
    role: "CTO & Co-Founder",
    bio: "PhD in Computer Vision from Stanford. Previously led AI teams at Google Cloud. Passionate about applying cutting-edge AI to real-world trades.",
  },
  {
    name: "Marcus Rivera",
    role: "VP of Product",
    bio: "10 years in restoration project management. Former Xactimate trainer who understands exactly what adjusters need to see in a scope.",
  },
  {
    name: "Rachel Kim",
    role: "Head of AI Research",
    bio: "Machine learning researcher specializing in multi-modal AI. Led development of ClaimScribe's damage classification models.",
  },
  {
    name: "Tom Brennan",
    role: "VP of Customer Success",
    bio: "Former restoration franchise operator. Ensures every ClaimScribe customer gets maximum value from day one.",
  },
  {
    name: "Aisha Johnson",
    role: "Head of Engineering",
    bio: "Full-stack engineering leader with experience scaling B2B SaaS platforms. Keeps ClaimScribe fast, reliable, and secure.",
  },
];

const stats = [
  { value: "500+", label: "Restoration Companies" },
  { value: "125,000+", label: "Scopes Generated" },
  { value: "95%+", label: "AI Accuracy Rate" },
  { value: "< 5 min", label: "Average Scope Time" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              We&apos;re Building the Future of{" "}
              <span className="gradient-text">Claim Documentation</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              ClaimScribe was founded by restoration professionals who knew there had to be a better way to write scopes. We combined field expertise with AI to make it happen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
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
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl border border-white/5 bg-card/50 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
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

      {/* Team */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A blend of restoration industry veterans and AI researchers, united by the mission to make scope writing effortless.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <Card className="h-full bg-card/50">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary-600/10 border border-primary-600/20 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl font-bold text-primary-400">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-white">{member.name}</h3>
                      <p className="text-sm text-primary-400 mb-3">{member.role}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              Join the Contractors Who Are Scoping Smarter
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Try ClaimScribe AI free for 14 days and see why hundreds of restoration companies have made the switch.
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
