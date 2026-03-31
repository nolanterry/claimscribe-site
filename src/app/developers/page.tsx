import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API — ClaimScribe REST API Documentation",
  description:
    "Integrate AI damage scoping and restoration project data with the ClaimScribe REST API. Endpoints for claims, line items, photo analysis, Xactimate integration, and project management.",
  alternates: { canonical: "/developers" },
  openGraph: {
    title: "Developer API — ClaimScribe REST API Documentation",
    description:
      "RESTful API for AI-powered damage scoping. Programmatic access to claims, line items, photo analysis, and Xactimate-formatted estimates.",
    url: "https://claimscribe.co/developers",
  },
};

const ENDPOINTS = [
  {
    category: "Claims & Projects",
    icon: "📋",
    description: "Create and manage restoration claims and project records",
    endpoints: [
      { method: "GET", path: "/api/v1/claims", desc: "List all claims with status filtering and pagination" },
      { method: "GET", path: "/api/v1/claims/:id", desc: "Retrieve full claim details with line items" },
      { method: "POST", path: "/api/v1/claims", desc: "Create a new claim from field data" },
      { method: "PATCH", path: "/api/v1/claims/:id", desc: "Update claim status or details" },
      { method: "GET", path: "/api/v1/claims/:id/pdf", desc: "Download claim as formatted PDF estimate" },
    ],
  },
  {
    category: "AI Damage Scoping",
    icon: "🤖",
    description: "Submit photos for AI-powered damage assessment and line item generation",
    endpoints: [
      { method: "POST", path: "/api/v1/scoping/analyze", desc: "Submit photos for AI damage analysis" },
      { method: "GET", path: "/api/v1/scoping/:id", desc: "Retrieve AI analysis results and confidence scores" },
      { method: "POST", path: "/api/v1/scoping/:id/approve", desc: "Approve AI-generated line items for estimate" },
      { method: "GET", path: "/api/v1/scoping/:id/line-items", desc: "Get Xactimate-formatted line items" },
    ],
  },
  {
    category: "Photo Documentation",
    icon: "📸",
    description: "Upload and manage claim photos with automatic tagging and room mapping",
    endpoints: [
      { method: "POST", path: "/api/v1/photos/upload", desc: "Upload claim photos with metadata" },
      { method: "GET", path: "/api/v1/claims/:id/photos", desc: "List all photos for a claim" },
      { method: "POST", path: "/api/v1/photos/:id/tag", desc: "Add damage type and room tags to a photo" },
      { method: "GET", path: "/api/v1/photos/:id/analysis", desc: "Get AI analysis results for a photo" },
    ],
  },
  {
    category: "Estimates & Xactimate",
    icon: "💰",
    description: "Generate and export Xactimate-compatible estimates",
    endpoints: [
      { method: "GET", path: "/api/v1/estimates", desc: "List all estimates" },
      { method: "POST", path: "/api/v1/estimates", desc: "Generate estimate from claim line items" },
      { method: "GET", path: "/api/v1/estimates/:id/xactimate", desc: "Export as Xactimate-compatible ESX file" },
      { method: "GET", path: "/api/v1/estimates/:id/supplement", desc: "Generate supplement documentation" },
    ],
  },
  {
    category: "Webhooks",
    icon: "🔔",
    description: "Real-time event notifications for claims and scoping",
    endpoints: [
      { method: "POST", path: "/api/v1/webhooks", desc: "Register a webhook endpoint" },
      { method: "GET", path: "/api/v1/webhooks", desc: "List registered webhooks" },
      { method: "DELETE", path: "/api/v1/webhooks/:id", desc: "Remove a webhook subscription" },
    ],
  },
];

const WEBHOOK_EVENTS = [
  { event: "claim.created", desc: "A new claim has been submitted from the field" },
  { event: "claim.status_changed", desc: "Claim status updated (scoping → estimate → approved → closed)" },
  { event: "scoping.completed", desc: "AI damage analysis is complete and ready for review" },
  { event: "scoping.high_confidence", desc: "AI analysis returned 90%+ confidence — auto-approve candidate" },
  { event: "estimate.generated", desc: "Estimate has been generated from approved line items" },
  { event: "supplement.requested", desc: "Additional scope or supplement has been created" },
  { event: "photo.analyzed", desc: "A photo has been processed by the AI damage detection model" },
];

const CODE_EXAMPLE = `curl -X POST "https://api.claimscribe.co/v1/scoping/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "claim_id=clm_9xR2mP4q" \\
  -F "photos[]=@kitchen_ceiling.jpg" \\
  -F "photos[]=@kitchen_floor.jpg" \\
  -F "damage_type=water" \\
  -F "room=kitchen"`;

const RESPONSE_EXAMPLE = `{
  "data": {
    "id": "scp_3kT8nP2q",
    "claim_id": "clm_9xR2mP4q",
    "status": "completed",
    "damage_type": "water",
    "room": "kitchen",
    "confidence": 0.94,
    "line_items": [
      {
        "xactimate_code": "WTR DRY",
        "description": "Water extraction — kitchen (180 sq ft)",
        "quantity": 180,
        "unit": "SF",
        "unit_price": 2.85,
        "total": 513.00,
        "confidence": 0.96
      },
      {
        "xactimate_code": "DRY DEHU",
        "description": "Dehumidifier setup — large (3 units, 5 days)",
        "quantity": 15,
        "unit": "DAY",
        "unit_price": 85.00,
        "total": 1275.00,
        "confidence": 0.91
      }
    ],
    "total_estimate": 4287.00,
    "photos_analyzed": 2,
    "completed_at": "2026-03-30T15:42:00Z"
  }
}`;

const CREATE_EXAMPLE = `curl -X POST "https://api.claimscribe.co/v1/claims" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "policy_number": "HO3-2847291",
    "insured_name": "Johnson Residence",
    "damage_type": "water",
    "loss_date": "2026-03-28",
    "address": "1425 Oak Lane, Tampa, FL 33602",
    "adjuster_id": "usr_mR2x9p",
    "rooms": ["kitchen", "hallway", "master_bathroom"],
    "emergency_services": true
  }'`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "ClaimScribe Developer API Documentation",
  description: "REST API documentation for integrating ClaimScribe AI damage scoping into your restoration management systems.",
  publisher: { "@type": "Organization", name: "ClaimScribe", url: "https://claimscribe.co" },
  url: "https://claimscribe.co/developers",
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.co" },
    { "@type": "ListItem", position: 2, name: "Developer API", item: "https://claimscribe.co/developers" },
  ],
};

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-500/20 text-green-400",
    POST: "bg-blue-500/20 text-blue-400",
    PATCH: "bg-yellow-500/20 text-yellow-400",
    DELETE: "bg-red-500/20 text-red-400",
  };
  return (
    <span className={`inline-block text-xs font-mono font-bold px-2 py-0.5 rounded ${colors[method] || "bg-gray-700 text-gray-300"}`}>
      {method}
    </span>
  );
}

export default function DevelopersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full mb-4">
            Developer API
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Build with ClaimScribe
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Integrate AI-powered damage scoping into your TPA, carrier, or restoration management platform.
            RESTful API with photo analysis, Xactimate-compatible output, and real-time webhook events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/demo" className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Request API Access
            </a>
            <a href="#endpoints" className="border border-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
              View Endpoints
            </a>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="bg-slate-950 px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: "🔑", title: "API Key Auth", desc: "Bearer token authentication scoped to your organization. Separate keys for field apps, back-office, and carrier integrations." },
                { icon: "📦", title: "JSON REST API", desc: "Standard RESTful endpoints. Filter by damage type, claim status, date range, adjuster, and confidence score." },
                { icon: "⚡", title: "Webhooks", desc: "Real-time notifications for claims, AI scoping results, estimate generation, and supplement requests." },
              ].map((card) => (
                <div key={card.title} className="border border-slate-800 rounded-xl p-6 text-center bg-slate-900/50">
                  <span className="text-3xl mb-3 block">{card.icon}</span>
                  <h3 className="font-semibold text-lg mb-2 text-white">{card.title}</h3>
                  <p className="text-sm text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Authentication */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-white">Authentication</h2>
              <p className="text-slate-400 mb-4">
                All API requests require a Bearer token. Generate API keys from your ClaimScribe dashboard under{" "}
                <strong className="text-white">Settings → API Keys</strong>. We recommend separate keys for
                field technician apps (write claims/photos) and back-office integrations (read estimates/reports).
              </p>
              <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">
{`Authorization: Bearer cs_live_a1b2c3d4e5f6...`}
                </pre>
              </div>
              <div className="mt-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-sm text-yellow-300">
                  <strong>⚠️ Keep API keys secure.</strong> Field-scoped keys should be rotated quarterly.
                  Carrier integration keys require manager authorization.
                </p>
              </div>
            </div>

            {/* Rate Limits */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-white">Rate Limits</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-800 rounded-lg overflow-hidden">
                  <thead className="bg-slate-800">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-300">Plan</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-300">Requests / Minute</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-300">AI Analyses / Day</th>
                      <th className="text-left px-4 py-3 font-semibold text-slate-300">Webhooks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-800">
                      <td className="px-4 py-3 text-slate-300">Professional</td>
                      <td className="px-4 py-3 text-slate-300">60</td>
                      <td className="px-4 py-3 text-slate-300">500</td>
                      <td className="px-4 py-3 text-slate-300">5 endpoints</td>
                    </tr>
                    <tr className="border-t border-slate-800 bg-slate-800/50">
                      <td className="px-4 py-3 font-medium text-white">Enterprise</td>
                      <td className="px-4 py-3 text-slate-300">300</td>
                      <td className="px-4 py-3 text-slate-300">10,000</td>
                      <td className="px-4 py-3 text-slate-300">Unlimited</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                AI analysis endpoints have separate rate limits due to compute requirements. Contact us for custom volume pricing.
              </p>
            </div>

            {/* Endpoints */}
            <div id="endpoints" className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-white">API Endpoints</h2>
              <div className="space-y-10">
                {ENDPOINTS.map((group) => (
                  <div key={group.category}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{group.icon}</span>
                      <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{group.description}</p>
                    <div className="border border-slate-800 rounded-xl overflow-hidden">
                      {group.endpoints.map((ep, i) => (
                        <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-slate-800" : ""}`}>
                          <MethodBadge method={ep.method} />
                          <code className="text-sm font-mono text-slate-200 shrink-0">{ep.path}</code>
                          <span className="text-sm text-slate-500 ml-auto hidden sm:block">{ep.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Examples */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-white">Code Examples</h2>
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-white">Submit photos for AI damage analysis</h3>
                <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono whitespace-pre">{CODE_EXAMPLE}</pre>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="font-semibold mb-3 text-white">Response</h3>
                <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-blue-300 font-mono whitespace-pre">{RESPONSE_EXAMPLE}</pre>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-white">Create a new claim</h3>
                <div className="bg-slate-800 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono whitespace-pre">{CREATE_EXAMPLE}</pre>
                </div>
              </div>
            </div>

            {/* Webhook Events */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-white">Webhook Events</h2>
              <p className="text-slate-400 mb-6">
                Subscribe to claim and scoping events for real-time workflow automation. Payloads are signed with
                HMAC-SHA256. Failed deliveries are retried with exponential backoff (3 attempts).
              </p>
              <div className="border border-slate-800 rounded-xl overflow-hidden">
                {WEBHOOK_EVENTS.map((ev, i) => (
                  <div key={ev.event} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-slate-800" : ""}`}>
                    <code className="text-sm font-mono text-emerald-400 font-medium shrink-0">{ev.event}</code>
                    <span className="text-sm text-slate-500">{ev.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SDKs */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4 text-white">SDKs &amp; Libraries</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { lang: "Node.js / TypeScript", pkg: "npm install @claimscribe/sdk", status: "Coming Soon" },
                  { lang: "Python", pkg: "pip install claimscribe", status: "Coming Soon" },
                  { lang: "Swift (iOS)", pkg: "ClaimScribeSDK via SPM", status: "Coming Soon" },
                ].map((sdk) => (
                  <div key={sdk.lang} className="border border-slate-800 rounded-xl p-5 bg-slate-900/50">
                    <h3 className="font-semibold mb-1 text-white">{sdk.lang}</h3>
                    <code className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded block mb-3">{sdk.pkg}</code>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                      {sdk.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-slate-900 border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Ready to integrate?</h2>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                API access is available on Professional and Enterprise plans. Connect your TPA or carrier platform to ClaimScribe today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/demo" className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Request API Access
                </a>
                <a href="/contact" className="border border-slate-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
                  Talk to Engineering
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
