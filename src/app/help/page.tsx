import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { HelpCenter } from "./help-center";

export const metadata: Metadata = {
  title: "Help Center — ClaimScribe AI Knowledge Base",
  description:
    "Get answers to common questions about ClaimScribe AI damage scoping software. Setup guides, scope workflows, Xactimate integration, insurance documentation, and team management.",
  openGraph: {
    title: "ClaimScribe AI Help Center",
    description: "Everything you need to scope damage faster and more accurately with ClaimScribe AI.",
  },
};

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative hero-gradient py-20 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Help Center
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to scope damage accurately with ClaimScribe AI.
            Can&apos;t find what you need? Email{" "}
            <a href="mailto:support@claimscribe.ai" className="text-primary-400 hover:underline">
              support@claimscribe.ai
            </a>
          </p>
        </section>
        <HelpCenter />
        {/* CTA */}
        <section className="py-20 border-t border-white/5 bg-[#080810] text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to stop leaving money on the table?</h2>
            <p className="text-gray-400 mb-8">AI-powered damage scoping that catches what humans miss. Start your 14-day free trial.</p>
            <a
              href="https://app.claimscribe.ai/sign-up"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Start Free Trial
            </a>
            <p className="text-sm text-gray-500 mt-4">No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
