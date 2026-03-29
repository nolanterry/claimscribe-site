import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Clock, CheckCircle, Play, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with ClaimScribe | Quick Setup Guide",
  description: "Get started with ClaimScribe AI damage scoping platform in under 15 minutes. Step-by-step setup guide for restoration contractors.",
  openGraph: {
    title: "Getting Started with ClaimScribe | Quick Setup Guide", 
    description: "Get started with ClaimScribe AI damage scoping platform in under 15 minutes. Step-by-step setup guide for restoration contractors.",
    url: "https://claimscribe.co/getting-started",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://claimscribe.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Getting Started", 
      "item": "https://claimscribe.co/getting-started"
    }
  ]
};

const steps = [
  {
    number: 1,
    title: "Create your account",
    description: "Sign up with your company email and verify your account. No credit card required for the 14-day free trial.",
    time: "2 min",
    tip: "Use your company domain to automatically configure insurance carrier integrations for your region."
  },
  {
    number: 2,
    title: "Connect Xactimate credentials",
    description: "Link your Xactimate account to enable seamless estimate exports. ClaimScribe integrates directly with your existing workflow.",
    time: "3 min", 
    tip: "Don't have Xactimate? No problem—ClaimScribe can export estimates in standard formats that any adjuster accepts."
  },
  {
    number: 3,
    title: "Set up your company profile",
    description: "Configure your service areas, preferred carriers, and markup rates. This ensures estimates match your business model.",
    time: "4 min",
    tip: "Add your carrier contacts now—ClaimScribe can automatically route estimates to the right adjusters when complete."
  },
  {
    number: 4,
    title: "Upload your first damage photos",
    description: "Take photos of damage from multiple angles and upload them. ClaimScribe's AI will analyze and identify all visible damage.",
    time: "3 min",
    tip: "Include overview, medium, and close-up shots for best results. The AI performs better with comprehensive photo documentation."
  },
  {
    number: 5,
    title: "Review AI-generated scope of work",
    description: "Examine the automated damage assessment and scope. Add any additional line items or adjust quantities as needed.",
    time: "4 min",
    tip: "The AI learns from your edits—corrections on early estimates improve accuracy for future jobs."
  },
  {
    number: 6,
    title: "Export Xactimate-ready estimate",
    description: "Generate your final estimate in Xactimate format with all line items, measurements, and pricing complete.",
    time: "1 min",
    tip: "Save estimate templates for common damage types—this speeds up similar jobs in the future."
  }
];

const faqs = [
  {
    question: "Can I import existing project data?",
    answer: "Yes! ClaimScribe can import photos and project details from most file formats. We also integrate with popular restoration management software for seamless workflow continuation."
  },
  {
    question: "How long does setup actually take?",
    answer: "Most contractors are processing estimates in under 15 minutes. The Xactimate integration is typically the longest step, but our support team can assist with the connection."
  },
  {
    question: "Do I need estimating experience?",
    answer: "Basic restoration knowledge helps, but ClaimScribe is designed for field teams and project managers, not just dedicated estimators. The AI handles complex calculations automatically."
  },
  {
    question: "What if I need help during setup?",
    answer: "Our restoration industry experts provide live chat support and can walk through setup via screen sharing. We offer free training sessions for your entire team."
  }
];

const SIGNUP_URL = "https://app.claimscribe.co/sign-up";

export default function GettingStartedPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 font-medium px-4 py-2 rounded-full text-sm mb-6">
              <Clock size={16} />
              Up and running in under 15 minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Started with ClaimScribe in Minutes
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Follow this step-by-step guide to set up your AI damage scoping platform and generate your first Xactimate-ready estimate.
            </p>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Your Setup Checklist
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 p-6 bg-slate-900/50 rounded-xl border border-slate-800 shadow-sm hover:shadow-md hover:border-slate-700 transition-all">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 bg-slate-800 text-slate-400 text-sm font-medium px-2 py-1 rounded">
                        <Clock size={14} />
                        ~{step.time}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 mb-3">{step.description}</p>
                    
                    {step.tip && (
                      <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-lg p-3">
                        <p className="text-emerald-300 text-sm">
                          <span className="font-medium">Pro tip:</span> {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              What You'll Need
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-semibold text-white mb-2">Basic Requirements</h3>
                <ul className="text-slate-400 space-y-1 text-sm">
                  <li>• Company email address</li>
                  <li>• Web browser (Chrome, Safari, Firefox)</li>
                  <li>• Mobile device for photos</li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <CheckCircle className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-semibold text-white mb-2">Integration Details</h3>
                <ul className="text-slate-400 space-y-1 text-sm">
                  <li>• Xactimate login credentials</li>
                  <li>• Insurance carrier contacts</li>
                  <li>• Service area definitions</li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="font-semibold text-white mb-2">Optional (But Helpful)</h3>
                <ul className="text-slate-400 space-y-1 text-sm">
                  <li>• Sample damage photos</li>
                  <li>• Historical estimate data</li>
                  <li>• Team member contact list</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Placeholder */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Watch the Setup Walkthrough
            </h2>
            
            <div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Complete Setup Walkthrough</h3>
                  <p className="text-slate-400">Follow along as we configure damage scoping from photos to estimates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Setup Questions & Answers
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                      <p className="text-slate-400">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Inline */}
        <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-transparent border-t border-white/[0.04]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to speed up your estimating?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Join restoration contractors using ClaimScribe to reduce estimating time from hours to minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-emerald-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Book a Demo
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-4">14 days free · No credit card · Full feature access</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}