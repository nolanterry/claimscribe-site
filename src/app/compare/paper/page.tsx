import Link from "next/link";
import type { Metadata } from "next";
import { Camera, Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ClaimScribe vs Manual Scoping — Why AI Beats Clipboard and Notepad",
  description: "Still scoping damage with a clipboard? Here's what manual scoping is costing you in time, missed line items, and supplement delays.",
};

export default function ComparePaper() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">ClaimScribe vs Manual Scoping</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Walk the site, take photos, scribble notes, drive back to the office, try to remember what you saw, build the scope in Xactimate from memory. Sound familiar? Here's what that process is actually costing you.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Metric</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">ClaimScribe</th>
                <th className="text-center py-3 pl-4 font-semibold">Manual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Time per scope", "20-30 min", "2-4 hours"],
                ["Missed line items", "AI catches common gaps", "Depends on experience"],
                ["Supplement rate", "Lower (more complete initial scope)", "30-50% of claims"],
                ["Photo organization", "Auto-tagged by room/damage", "Camera roll chaos"],
                ["Scope consistency", "Standardized AI output", "Varies by estimator"],
                ["Works on-site", "Yes (mobile + offline)", "Clipboard + notepad"],
                ["Searchable history", "Yes", "Filing cabinet"],
              ].map(([metric, cs, manual], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 pr-4 font-medium">{metric as string}</td>
                  <td className="text-center py-3 px-4 text-blue-600 font-medium">{cs as string}</td>
                  <td className="text-center py-3 pl-4 text-muted-foreground">{manual as string}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Real Cost of Manual Scoping</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">$1,200+</p>
              <p className="text-sm text-muted-foreground">Average supplement amount per claim you could've caught upfront</p>
            </div>
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">30-60 days</p>
              <p className="text-sm text-muted-foreground">Additional delay when supplements are required</p>
            </div>
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">2-3 hrs</p>
              <p className="text-sm text-muted-foreground">Saved per scope — that's 1-2 extra jobs per day</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Gets Missed in Manual Scoping</h2>
          <div className="border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-4">
              The most commonly missed line items in water damage scopes (these are the supplements that delay payment by 30-60 days):
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li>• Antimicrobial treatment application</li>
                <li>• Moisture barrier replacement</li>
                <li>• Content manipulation (move & reset)</li>
                <li>• Baseboards behind cabinets/appliances</li>
                <li>• Tack strip removal and replacement</li>
              </ul>
              <ul className="space-y-2">
                <li>• Seal coat on subfloor after dry-out</li>
                <li>• Equipment setup/monitoring charges</li>
                <li>• Furniture moving (heavy items)</li>
                <li>• Appliance disconnect/reconnect</li>
                <li>• Overhead and profit on subcontracted work</li>
              </ul>
            </div>
            <p className="text-sm font-medium mt-4 text-blue-600">
              ClaimScribe's AI is trained to flag these items when it detects relevant damage in your photos.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Math</h2>
          <div className="border rounded-2xl p-6">
            <p className="text-sm mb-4">For a restoration company doing 30 claims/month:</p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold mb-2">Manual Scoping (Hidden Costs):</p>
                <ul className="space-y-1">
                  <li>• Time: 3 hrs × 30 claims × $50/hr = <strong>$4,500/mo</strong> in estimator time</li>
                  <li>• Supplements: 40% rate × $1,200 avg = <strong>$14,400/mo</strong> in delayed revenue</li>
                  <li>• Supplement admin: 2 hrs × 12 supplements × $50/hr = <strong>$1,200/mo</strong></li>
                  <li className="font-bold pt-2">Hidden monthly cost: ~$20,100</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">With ClaimScribe:</p>
                <ul className="space-y-1">
                  <li>• Subscription: <strong>$199/mo</strong></li>
                  <li>• Time: 25 min × 30 claims × $50/hr = <strong>$625/mo</strong></li>
                  <li>• Supplement rate drops to ~15-20%</li>
                  <li>• Faster initial scopes = faster first payment</li>
                  <li className="font-bold pt-2">Monthly cost: ~$824</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Stop Leaving Money on the Job Site</h2>
          <p className="text-muted-foreground mb-4">
            Every missed line item is money you earned but won't get paid for — at least not without a 60-day supplement fight. ClaimScribe catches those items on-site, in real time.
          </p>
          <Link href="https://app.claimscribe.ai" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Try ClaimScribe Free for 14 Days <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
