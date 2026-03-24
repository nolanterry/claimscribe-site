"use client";

import { useState } from "react";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, FadeInScale } from "@/components/motion-wrapper";
import { PricingToggle } from "./pricing-toggle";
import { TrustBadges } from "./trust-badges";
import { AnimatePresence, motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mo",
    annualPrice: "$169",
    description: "For independent contractors and small teams just getting started with AI scoping.",
    features: [
      { name: "Scopes per month", value: "25" },
      { name: "AI damage analysis", value: true },
      { name: "Voice-to-scope", value: true },
      { name: "Photo analysis", value: true },
      { name: "Room-by-room organization", value: true },
      { name: "PDF export", value: true },
      { name: "Xactimate code mapping", value: true },
      { name: "ESX file export", value: false },
      { name: "Team collaboration", value: false },
      { name: "Custom branding", value: false },
      { name: "API access", value: false },
      { name: "Dedicated account manager", value: false },
      { name: "Support", value: "Email" },
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mo",
    annualPrice: "$249",
    description: "For growing restoration companies that need unlimited scoping power and team features.",
    features: [
      { name: "Scopes per month", value: "Unlimited" },
      { name: "AI damage analysis", value: true },
      { name: "Voice-to-scope", value: true },
      { name: "Photo analysis", value: true },
      { name: "Room-by-room organization", value: true },
      { name: "PDF export", value: true },
      { name: "Xactimate code mapping", value: true },
      { name: "ESX file export", value: true },
      { name: "Team collaboration", value: true },
      { name: "Custom branding", value: true },
      { name: "API access", value: true },
      { name: "Dedicated account manager", value: true },
      { name: "Support", value: "Priority" },
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
];

const comparisonFeatures = [
  { category: "Core Features", items: [
    { name: "AI Damage Analysis", starter: true, pro: true },
    { name: "Voice-to-Scope Transcription", starter: true, pro: true },
    { name: "Multi-Photo Upload per Room", starter: true, pro: true },
    { name: "Room-by-Room Organization", starter: true, pro: true },
    { name: "Damage Type Classification", starter: true, pro: true },
    { name: "Material Identification", starter: true, pro: true },
  ]},
  { category: "Output & Export", items: [
    { name: "Professional PDF Reports", starter: true, pro: true },
    { name: "Xactimate Code Mapping", starter: true, pro: true },
    { name: "ESX File Export", starter: false, pro: true },
    { name: "Custom Branding on PDFs", starter: false, pro: true },
    { name: "Batch Export", starter: false, pro: true },
  ]},
  { category: "Collaboration & Management", items: [
    { name: "Team Member Accounts", starter: false, pro: true },
    { name: "Scope Assignment & Tracking", starter: false, pro: true },
    { name: "Activity Audit Log", starter: false, pro: true },
    { name: "API Access", starter: false, pro: true },
  ]},
  { category: "Support", items: [
    { name: "Email Support", starter: true, pro: true },
    { name: "Priority Support (4hr SLA)", starter: false, pro: true },
    { name: "Dedicated Account Manager", starter: false, pro: true },
    { name: "Onboarding & Training", starter: false, pro: true },
  ]},
];

const pricingFaqs = [
  {
    question: "What happens if I exceed 25 scopes on the Starter plan?",
    answer: "You'll receive a notification when you're approaching your limit. If you hit 25 scopes, you can upgrade to Pro instantly for unlimited access, or wait until your next billing cycle resets your count.",
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Yes. You can upgrade from Starter to Pro at any time, and the price difference will be prorated for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
  },
  {
    question: "Do you offer annual billing discounts?",
    answer: "Yes! Annual billing saves you approximately 15% compared to monthly pricing. Starter drops to $169/mo and Pro drops to $249/mo when billed annually.",
  },
  {
    question: "Is there a free trial?",
    answer: "Every new account gets a 14-day free trial with full Pro features. No credit card required. Generate up to 5 scopes during your trial.",
  },
  {
    question: "Do you offer enterprise or volume pricing?",
    answer: "For companies with 10+ users or specific compliance requirements, contact our sales team for a custom enterprise quote. We offer volume discounts, SSO, custom integrations, and dedicated infrastructure.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), ACH bank transfers for annual plans, and can invoice for enterprise agreements.",
  },
];

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Pricing That Pays for Itself
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A single well-documented scope can recover thousands more in approved line items. ClaimScribe pays for itself on the first claim.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, i) => (
              <FadeInScale key={plan.name} delay={i * 0.1}>
                <Card className={`h-full relative ${plan.highlighted ? "border-primary-600/50 shadow-lg shadow-primary-600/10" : "bg-card/50"}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                    <div className="pt-4">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={isAnnual ? "annual" : "monthly"}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="text-5xl font-bold text-white"
                        >
                          {isAnnual ? plan.annualPrice : plan.price}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-gray-500">
                        {isAnnual ? "/mo, billed annually" : plan.period}
                      </span>
                    </div>
                    {isAnnual && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-xs text-emerald-400 font-medium mt-1"
                      >
                        Save ~15% vs monthly
                      </motion.p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3 text-sm">
                          {feature.value === false ? (
                            <X className="h-4 w-4 text-gray-600 shrink-0" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4 text-primary-400 shrink-0" />
                          )}
                          <span className={feature.value === false ? "text-gray-600" : "text-gray-300"}>
                            {feature.name}
                            {typeof feature.value === "string" && `: ${feature.value}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} size="lg">
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-gray-600 text-center mt-3">14-day free trial. No credit card required.</p>
                  </CardContent>
                </Card>
              </FadeInScale>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Detailed Plan Comparison</h2>
            <p className="text-gray-400">See exactly what&apos;s included in each plan.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 pr-4 text-sm font-medium text-gray-400 w-1/2">Feature</th>
                    <th className="text-center py-4 px-4 text-sm font-medium text-gray-400">Starter</th>
                    <th className="text-center py-4 pl-4 text-sm font-medium text-primary-400">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section) => (
                    <>
                      <tr key={section.category}>
                        <td colSpan={3} className="pt-8 pb-3 text-sm font-semibold text-white">
                          {section.category}
                        </td>
                      </tr>
                      {section.items.map((item) => (
                        <tr key={item.name} className="border-b border-white/5">
                          <td className="py-3 pr-4 text-sm text-gray-400">{item.name}</td>
                          <td className="py-3 px-4 text-center">
                            {item.starter ? (
                              <CheckCircle2 className="h-4 w-4 text-primary-400 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-700 mx-auto" />
                            )}
                          </td>
                          <td className="py-3 pl-4 text-center">
                            {item.pro ? (
                              <CheckCircle2 className="h-4 w-4 text-primary-400 mx-auto" />
                            ) : (
                              <X className="h-4 w-4 text-gray-700 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing FAQ</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Scope Writing?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Start your 14-day free trial today. No credit card required. See the difference AI-powered scoping makes on your very first claim.
            </p>
            <Button size="xl">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
