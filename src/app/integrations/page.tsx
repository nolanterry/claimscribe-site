import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect ClaimScribe with Your Restoration Stack",
  description:
    "ClaimScribe integrates with Xactimate, CompanyCam, Matterport, QuickBooks, DocuSign, Google Workspace, Zapier, and more. Sync scopes and claims with the tools your crew already uses.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations — Connect ClaimScribe with Your Restoration Stack",
    description:
      "ClaimScribe integrates with Xactimate, CompanyCam, QuickBooks, Google Workspace, and more.",
    url: "https://claimscribe.ai/integrations",
  },
};

const INTEGRATIONS = [
  { emoji: "📐", name: "Xactimate", description: "Export AI-generated scopes directly as ESX files for seamless Xactimate import. No manual re-entry.", status: "available" as const },
  { emoji: "📊", name: "DASH (PSA)", description: "Sync claim data and project status with DASH for end-to-end restoration project management.", status: "coming-soon" as const },
  { emoji: "🏠", name: "CoreLogic", description: "Pull property data and claims history from CoreLogic to enrich scope context automatically.", status: "coming-soon" as const },
  { emoji: "📸", name: "CompanyCam", description: "Import job site photos directly from CompanyCam projects into ClaimScribe scopes.", status: "coming-soon" as const },
  { emoji: "🏘️", name: "Matterport", description: "Use Matterport 3D scans to enhance damage documentation and scope accuracy.", status: "coming-soon" as const },
  { emoji: "💰", name: "QuickBooks", description: "Sync claim amounts, project billing, and contractor invoices to QuickBooks automatically.", status: "available" as const },
  { emoji: "📊", name: "Xero", description: "Export claim financial data to Xero for streamlined restoration business accounting.", status: "coming-soon" as const },
  { emoji: "✍️", name: "DocuSign", description: "Collect e-signatures on scope approvals, authorization forms, and claim documents.", status: "coming-soon" as const },
  { emoji: "📧", name: "Google Workspace", description: "Share scope reports via Gmail, store claim docs in Drive, sync deadlines to Calendar.", status: "available" as const },
  { emoji: "💼", name: "Microsoft 365", description: "Integrate with Outlook and SharePoint for seamless claim document distribution.", status: "coming-soon" as const },
  { emoji: "💬", name: "Slack", description: "Get instant notifications when scopes are generated, reviewed, or approved.", status: "coming-soon" as const },
  { emoji: "⚡", name: "Zapier", description: "Connect ClaimScribe to 5,000+ apps with custom Zapier workflows and triggers.", status: "coming-soon" as const },
];

export default function IntegrationsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="bg-[#0a0a12] py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Integrations
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect ClaimScribe with the tools your restoration business already relies on. From Xactimate exports to QuickBooks billing, keep every system in sync.
          </p>
        </section>

        {/* Grid */}
        <section className="bg-[#0a0a12] max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="border border-white/[0.08] rounded-xl p-6 hover:border-primary-400/30 hover:bg-white/[0.02] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{integration.emoji}</span>
                  {integration.status === "available" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-500/10 text-green-400">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.06] text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#080810] py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t see your tool?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We&apos;re building new integrations all the time. Tell us what your team needs and we&apos;ll prioritize it.
          </p>
          <a
            href="mailto:support@claimscribe.ai?subject=Integration%20Request"
            className="inline-block bg-primary-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors text-lg"
          >
            Request an Integration
          </a>
        </section>

        {/* JSON-LD BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://claimscribe.ai" },
                { "@type": "ListItem", position: 2, name: "Integrations", item: "https://claimscribe.ai/integrations" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
