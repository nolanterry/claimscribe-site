import Link from "next/link";
import type { Metadata } from "next";
import { Camera, Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ClaimScribe vs Xactimate — AI Damage Scoping Comparison",
  description: "Compare ClaimScribe AI and Xactimate for restoration damage scoping. Features, pricing, and which is better for restoration contractors.",
  alternates: { canonical: "/compare/xactimate" },
};

export default function CompareXactimate() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">ClaimScribe vs Xactimate</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Xactimate is the industry standard for insurance claim estimating. ClaimScribe is the AI-powered tool that gets your scope of work done before you even open Xactimate. Here's how they work together — and where they differ.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
          <h3 className="font-bold text-lg mb-2">Important: ClaimScribe isn't replacing Xactimate</h3>
          <p className="text-sm text-muted-foreground">
            Xactimate is required by most insurance carriers for final claim submission. ClaimScribe works <strong>upstream</strong> — generating your initial scope of work from photos and voice notes so you spend less time in Xactimate and miss fewer line items.
          </p>
        </div>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Capability</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">ClaimScribe</th>
                <th className="text-center py-3 pl-4 font-semibold">Xactimate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["AI damage detection from photos", true, false],
                ["Voice-to-scope (dictate findings)", true, false],
                ["Generates scope of work in minutes", true, false],
                ["Insurance-carrier-accepted estimates", false, true],
                ["Line-item pricing database", false, true],
                ["Sketch/floor plan tools", false, true],
                ["Photo documentation", true, true],
                ["PDF report generation", true, true],
                ["Works on mobile (field use)", true, false],
                ["Offline mode", true, false],
                ["No training required", true, false],
                ["Supplement identification", true, false],
              ].map(([feature, cs, xact], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 pr-4">{feature as string}</td>
                  <td className="text-center py-3 px-4">
                    {cs ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
                  </td>
                  <td className="text-center py-3 pl-4">
                    {xact ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
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
              <p className="text-sm text-muted-foreground mb-3">Flat rate. Unlimited scopes. Unlimited users.</p>
              <ul className="space-y-1 text-sm">
                <li>• 14-day free trial</li>
                <li>• No per-claim fees</li>
                <li>• Cancel anytime</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Xactimate</h3>
              <p className="text-3xl font-bold mb-1">$325+<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <p className="text-sm text-muted-foreground mb-3">Per-seat licensing. Multiple tiers.</p>
              <ul className="space-y-1 text-sm">
                <li>• XactAnalysis subscription required for carrier submission</li>
                <li>• Annual license standard</li>
                <li>• Training costs extra ($1,000-2,500 per person)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How They Work Together</h2>
          <div className="border rounded-2xl p-6">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">1</span>
                <div><strong>On-site:</strong> Take photos and dictate findings into ClaimScribe. AI identifies damage types, affected areas, and generates a preliminary scope of work.</div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">2</span>
                <div><strong>Review:</strong> ClaimScribe generates a structured scope with line items, quantities, and areas. Review and adjust in minutes.</div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">3</span>
                <div><strong>Transfer to Xactimate:</strong> Use ClaimScribe's scope as your reference to build the final Xactimate estimate. No more starting from a blank screen.</div>
              </li>
              <li className="flex gap-3">
                <span className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center">4</span>
                <div><strong>Catch supplements:</strong> ClaimScribe's AI flags commonly missed items — moisture barriers, antimicrobial treatments, content manipulation — so your Xactimate estimate is complete the first time.</div>
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Problem ClaimScribe Solves</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold mb-3">Without ClaimScribe</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>❌ Walk the site with a clipboard or notepad</li>
                <li>❌ Take photos separately, organize later</li>
                <li>❌ Back at the office, open Xactimate and try to remember everything</li>
                <li>❌ Miss line items → supplement requests → delays → cash flow hit</li>
                <li>❌ 2-4 hours per scope of work</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-blue-600">With ClaimScribe</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ Snap photos, dictate notes on-site</li>
                <li>✅ AI generates structured scope before you leave</li>
                <li>✅ Fewer missed items = fewer supplements = faster payment</li>
                <li>✅ 20-30 minutes per scope of work</li>
                <li>✅ More jobs per day = more revenue</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Speed Up Your Scoping Process</h2>
          <p className="text-muted-foreground mb-4">
            ClaimScribe doesn't replace Xactimate — it makes you faster at getting into Xactimate with a complete scope. Fewer missed items, fewer supplements, faster payments.
          </p>
          <Link href="https://app.claimscribe.ai" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Try ClaimScribe Free for 14 Days <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
