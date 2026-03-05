"use client";

import Link from "next/link";
import {
  Camera,
  Mic,
  BrainCircuit,
  FileDown,
  Hash,
  LayoutGrid,
  Cpu,
  Eye,
  AudioLines,
  Layers,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FadeIn,
  SlideInLeft,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-wrapper";

const pipelineSteps = [
  {
    icon: Camera,
    title: "Photo Capture & Upload",
    description:
      "Snap photos on-site using any smartphone. Our app supports batch uploads, automatic GPS tagging, and room labeling. Photos are encrypted in transit and stored securely in the cloud.",
    details: [
      "Supports JPEG, PNG, HEIC formats",
      "Automatic image enhancement for dark or blurry photos",
      "GPS coordinates embedded for location verification",
      "Batch upload up to 200 photos per scope",
    ],
  },
  {
    icon: Eye,
    title: "AI Vision Analysis",
    description:
      "Our computer vision models, trained on 500,000+ restoration claim images, analyze each photo to detect damage type, severity, affected materials, and estimated area. The AI identifies water staining patterns, char depth, mold growth stages, and structural compromise indicators.",
    details: [
      "Water damage: Category 1-3 classification, affected area estimation",
      "Fire damage: Char depth analysis, smoke residue patterns",
      "Mold: Growth stage identification, species risk assessment",
      "Storm: Impact pattern recognition, structural assessment",
    ],
  },
  {
    icon: AudioLines,
    title: "Voice Narration Processing",
    description:
      "Record voice notes as you walk through the property. Our speech-to-text engine handles construction terminology, brand names, and technical measurements with 98% accuracy. Speak naturally — the AI understands restoration context.",
    details: [
      "Real-time transcription with construction vocabulary",
      "Automatic measurement extraction (LF, SF, SY)",
      "Speaker diarization for multi-person walkthroughs",
      "Noise cancellation optimized for job site environments",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Scope Generation Engine",
    description:
      "Our AI combines visual analysis and voice narration to generate structured line items. The engine cross-references damage observations with standard repair procedures, ensuring nothing is missed and every item is properly categorized.",
    details: [
      "Cross-references photos with voice observations",
      "Applies IICRC S500/S520 standards automatically",
      "Generates detailed descriptions for each line item",
      "Includes labor, materials, and equipment categories",
    ],
  },
  {
    icon: Hash,
    title: "Xactimate Code Mapping",
    description:
      "Every line item is automatically mapped to the correct Xactimate pricing code from the XM8 database. The AI considers regional pricing, category of work, and specific material specifications to select the most accurate code.",
    details: [
      "Maps to XM8 pricing database codes",
      "Regional pricing adjustments",
      "Handles specialty items and custom line items",
      "ESX export for direct Xactimate import",
    ],
  },
  {
    icon: FileDown,
    title: "Professional Output",
    description:
      "Export your completed scope as a polished PDF report, ESX file for Xactimate import, or share directly via the ClaimScribe platform. PDFs include room-by-room organization, photo documentation, and your company branding.",
    details: [
      "Branded PDF reports with your company logo",
      "ESX file export for Xactimate",
      "Room-by-room photo documentation",
      "Summary page with totals and scope overview",
    ],
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: "Multi-Modal AI",
    description: "Combines computer vision, natural language processing, and domain-specific knowledge to understand damage from every angle.",
  },
  {
    icon: Layers,
    title: "Industry Training Data",
    description: "Trained on 500,000+ real restoration claims, covering water, fire, mold, storm, and specialty damage types across all regions.",
  },
  {
    icon: LayoutGrid,
    title: "Smart Organization",
    description: "Automatically structures scopes by room and area, grouping related line items and following the format adjusters expect.",
  },
  {
    icon: Shield,
    title: "Accuracy Safeguards",
    description: "Every scope includes confidence scores per line item. Low-confidence items are flagged for manual review before export.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "The AI improves with every scope. Contractor edits and adjuster feedback are incorporated to increase accuracy over time.",
  },
  {
    icon: Mic,
    title: "Natural Language Input",
    description: "Speak naturally about what you observe. The AI understands construction jargon, abbreviations, and field shorthand.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="relative hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              The AI Pipeline Behind{" "}
              <span className="gradient-text">Every Scope</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From the moment you snap a photo to the final PDF export, here&apos;s exactly how ClaimScribe AI transforms your site walkthrough into a professional scope of work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pipeline Steps */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {pipelineSteps.map((step, i) => (
              <SlideInLeft key={step.title} delay={0.1}>
                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-2xl bg-primary-600/10 border border-primary-600/20 flex items-center justify-center">
                      <step.icon className="h-7 w-7 text-primary-400" />
                    </div>
                    {i < pipelineSteps.length - 1 && (
                      <div className="hidden md:block w-px h-full min-h-[80px] bg-gradient-to-b from-primary-600/20 to-transparent mt-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-primary-400 mb-2">
                      STEP {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-2 text-sm text-gray-500"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI Built for Restoration
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Not a generic AI tool — ClaimScribe is purpose-built for the restoration industry with domain-specific models and training data.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <Card className="h-full hover:border-primary-600/20 transition-colors bg-card/50">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-lg bg-primary-600/10 flex items-center justify-center mb-2">
                      <cap.icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <CardTitle className="text-white">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Supported Damage Types */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Supported Damage Types
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ClaimScribe handles the full spectrum of damage scenarios restoration contractors encounter.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Water Damage", desc: "Category 1-3 water losses, flood damage, pipe bursts, appliance failures, roof leaks" },
                { title: "Fire & Smoke", desc: "Structural fire damage, smoke residue, soot cleaning, char removal, odor treatment" },
                { title: "Mold Remediation", desc: "Mold growth assessment, containment scoping, remediation protocols, post-remediation verification" },
                { title: "Storm & Wind", desc: "Roof damage, siding damage, window breakage, fallen trees, structural wind damage" },
                { title: "Hail Damage", desc: "Roof impact assessment, siding dents, gutter damage, soft metal damage evaluation" },
                { title: "Vandalism & Impact", desc: "Forced entry damage, graffiti removal, broken fixtures, deliberate property damage" },
              ].map((type) => (
                <div key={type.title} className="p-6 rounded-xl border border-white/5 bg-card/50">
                  <h3 className="font-semibold text-white mb-2">{type.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#080810]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              See ClaimScribe AI in Action
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Start your free trial and generate your first AI-powered scope today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
