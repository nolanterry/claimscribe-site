"use client";

import Link from "next/link";
import {
  Camera,
  Mic,
  ClipboardList,
  BrainCircuit,
  AudioLines,
  LayoutGrid,
  FileDown,
  Hash,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FadeIn,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Damage Analysis",
    description:
      "Upload photos and our AI instantly identifies damage types, affected materials, and required repairs with industry-standard accuracy.",
  },
  {
    icon: AudioLines,
    title: "Voice-to-Scope",
    description:
      "Narrate what you see on-site. Our AI transcribes your observations and converts them into structured line items automatically.",
  },
  {
    icon: LayoutGrid,
    title: "Room-by-Room Organization",
    description:
      "Scopes are automatically organized by room and area, matching the format insurance adjusters expect to see.",
  },
  {
    icon: FileDown,
    title: "Professional PDFs",
    description:
      "Export polished, branded PDF reports ready to submit to insurance carriers or share with property owners.",
  },
  {
    icon: Hash,
    title: "Xactimate Codes",
    description:
      "Line items are mapped to Xactimate pricing codes, ensuring your scopes align with industry-standard estimating software.",
  },
  {
    icon: Clock,
    title: "5-Minute Scopes",
    description:
      "What used to take hours now takes minutes. Walk the site, capture the damage, and have a complete scope before you leave.",
  },
];

const faqs = [
  {
    question: "How accurate is the AI damage analysis?",
    answer:
      "Our AI has been trained on hundreds of thousands of restoration claims and achieves 95%+ accuracy on common damage types including water, fire, mold, and storm damage. Every scope includes a confidence score, and you can always review and adjust line items before exporting.",
  },
  {
    question: "Does ClaimScribe work with Xactimate?",
    answer:
      "Yes. ClaimScribe maps every line item to the corresponding Xactimate code (XM8 pricing database). You can export scopes as ESX files for direct import into Xactimate, or as formatted PDFs with codes referenced inline.",
  },
  {
    question: "Can I use ClaimScribe on-site without internet?",
    answer:
      "You can capture photos and record voice narrations offline. When you reconnect, ClaimScribe syncs your data and generates the full scope. Most contractors capture on-site and generate scopes in their truck before driving away.",
  },
  {
    question: "What types of damage does ClaimScribe support?",
    answer:
      "ClaimScribe handles water damage, fire and smoke damage, mold remediation, storm and wind damage, hail damage, and vandalism. We're continuously expanding our damage classification models based on contractor feedback.",
  },
  {
    question: "How does the voice-to-scope feature work?",
    answer:
      "Simply tap record and walk through the property describing what you see: 'Master bedroom, north wall, approximately 20 square feet of Category 2 water damage, drywall needs to be removed 2 feet above the flood line.' Our AI parses your narration into structured line items with measurements, materials, and actions.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Every new account gets a 14-day free trial with full access to all Pro features. No credit card required to start. Generate up to 5 scopes during your trial to see the quality for yourself.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mo",
    description: "For independent contractors and small teams",
    features: [
      "25 scopes per month",
      "AI damage analysis",
      "Voice-to-scope",
      "PDF export",
      "Xactimate code mapping",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    description: "For growing restoration companies",
    features: [
      "Unlimited scopes",
      "Everything in Starter",
      "ESX file export",
      "Team collaboration",
      "Priority support",
      "Custom branding on PDFs",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-600/30 bg-primary-600/10 text-primary-400 text-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Now with Xactimate ESX Export
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Walk the Site. Talk Through the Damage.{" "}
              <span className="gradient-text">Get Your Scope in Minutes.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              AI-powered insurance claim scoping for restoration contractors. Capture
              photos, narrate the damage, and let AI generate professional scopes of
              work — on-site, in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/features">See How It Works</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Three Steps to a Complete Scope
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No more spending hours at a desk writing scopes. ClaimScribe turns your
              on-site walkthrough into a professional document.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                step: "01",
                title: "Capture",
                description:
                  "Walk the property and snap photos of every damaged area. Our AI analyzes each image to identify damage type, severity, and affected materials.",
              },
              {
                icon: Mic,
                step: "02",
                title: "Narrate",
                description:
                  "Record voice notes as you walk through each room. Describe what you see, measurements, and any specific observations — the AI handles the rest.",
              },
              {
                icon: ClipboardList,
                step: "03",
                title: "Scope",
                description:
                  "In minutes, receive a complete scope of work organized by room, with Xactimate codes, measurements, and professional formatting ready to submit.",
              },
            ].map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative p-8 rounded-2xl border border-white/5 bg-card hover:border-primary-600/30 transition-colors group">
                  <div className="text-6xl font-bold text-primary-600/10 absolute top-4 right-6">
                    {step.step}
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-primary-600/10 flex items-center justify-center mb-6 group-hover:bg-primary-600/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Restoration Professionals
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every feature is designed around the real workflow of restoration
              contractors who deal with insurance claims daily.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Card className="h-full hover:border-primary-600/20 transition-colors bg-card/50">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-lg bg-primary-600/10 flex items-center justify-center mb-2">
                      <feature.icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature Benefits */}
      <TestimonialCarousel />

      {/* Pricing */}
      <section className="py-24 sm:py-32 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              One scope pays for itself. Choose the plan that fits your volume.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <FadeInScale key={plan.name} delay={i * 0.1}>
                <Card
                  className={`h-full relative ${
                    plan.highlighted
                      ? "border-primary-600/50 shadow-lg shadow-primary-600/10"
                      : "bg-card/50"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                    <div className="pt-4">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary-400 shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </FadeInScale>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Everything you need to know about ClaimScribe AI.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Stop Writing Scopes by Hand.{" "}
              <span className="gradient-text">Start Closing Claims Faster.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Join hundreds of restoration contractors who use ClaimScribe AI to
              generate professional scopes in minutes instead of hours. 14-day free
              trial, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/pricing">
                  Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
