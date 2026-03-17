import Link from "next/link";
import type { Metadata } from "next";
import { Camera, Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ClaimScribe vs Encircle — AI Damage Scoping Comparison",
  description: "Compare ClaimScribe AI and Encircle for restoration field documentation. Features, pricing, and which is better for your restoration company.",
  alternates: { canonical: "/compare/encircle" },
};

export default function CompareEncircle() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Camera className="size-6 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">ClaimScribe</span>
          </Link>
          <Link href="https://app.claimscribe.ai" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">ClaimScribe vs Encircle</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Encircle is the leading field documentation app for restoration. ClaimScribe takes it a step further with AI-powered damage scoping. Here's how they compare.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">ClaimScribe</th>
                <th className="text-center py-3 pl-4 font-semibold">Encircle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Photo documentation", true, true],
                ["AI damage detection from photos", true, false],
                ["Voice-to-scope (dictate findings)", true, false],
                ["Auto-generated scope of work", true, false],
                ["Room-by-room documentation", true, true],
                ["Moisture mapping", false, true],
                ["Floor plan sketching", false, true],
                ["Contents inventory (ICV)", false, true],
                ["PDF reports", true, true],
                ["Offline mode", true, true],
                ["Mobile-first design", true, true],
                ["Supplement identification", true, false],
                ["Carrier-specific report formats", false, true],
                ["Transparent pricing", true, false],
              ].map(([feature, cs, enc], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 pr-4">{feature as string}</td>
                  <td className="text-center py-3 px-4">
                    {cs ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
                  </td>
                  <td className="text-center py-3 pl-4">
                    {enc ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-blue-200 rounded-2xl p-6 bg-blue-50/30">
              <h3 className="font-bold text-lg mb-2 text-blue-600">ClaimScribe</h3>
              <p className="text-3xl font-bold mb-1">$199<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <p className="text-sm text-muted-foreground mb-3">Flat rate. Unlimited scopes and users.</p>
              <ul className="space-y-1 text-sm">
                <li>• 14-day free trial</li>
                <li>• No per-claim fees</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Encircle</h3>
              <p className="text-3xl font-bold mb-1">Custom<span className="text-base font-normal text-muted-foreground"> quote</span></p>
              <p className="text-sm text-muted-foreground mb-3">Per-user pricing, requires demo.</p>
              <ul className="space-y-1 text-sm">
                <li>• Estimated $100-200+/user/mo</li>
                <li>• Annual contracts standard</li>
                <li>• Volume discounts for larger teams</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Key Difference</h2>
          <div className="border rounded-2xl p-6">
            <p className="text-sm mb-4">
              Encircle excels at <strong>documentation</strong> — capturing what happened on-site with photos, moisture readings, floor plans, and contents inventories. It's the best-in-class field documentation tool.
            </p>
            <p className="text-sm mb-4">
              ClaimScribe focuses on <strong>scoping</strong> — using AI to analyze damage photos and voice notes to generate a structured scope of work with line items. It answers "what needs to be done and how much" rather than just "what does the damage look like."
            </p>
            <p className="text-sm font-medium">
              They solve different problems. Many contractors could benefit from both — Encircle for documentation, ClaimScribe for scoping.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When to Choose Each</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-blue-600">Choose ClaimScribe if:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Your bottleneck is scoping, not documentation</li>
                <li>✅ You want AI to identify damage and generate line items</li>
                <li>✅ You're losing money on missed supplements</li>
                <li>✅ You want to scope more jobs per day</li>
                <li>✅ You want flat-rate pricing without per-user fees</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Choose Encircle if:</h3>
              <ul className="space-y-2 text-sm">
                <li>• Your bottleneck is field documentation</li>
                <li>• You need moisture mapping and floor plans</li>
                <li>• You do contents inventory (pack-out) work</li>
                <li>• Carriers require Encircle-specific report formats</li>
                <li>• You need integration with PSA/TPA platforms</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Scope Faster with AI</h2>
          <p className="text-muted-foreground mb-4">
            ClaimScribe turns damage photos and voice notes into structured scopes of work in minutes — catching line items you'd otherwise miss. Try it free.
          </p>
          <Link href="https://app.claimscribe.ai" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Start Your Free Trial <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
