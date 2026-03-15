"use client";

import { useState } from "react";
import {
  ChevronDown,
  Rocket,
  Camera,
  FileText,
  Users,
  CreditCard,
  Zap,
  Search,
  HelpCircle,
  ClipboardList,
  DollarSign,
} from "lucide-react";

interface Article { q: string; a: string }
interface Category { title: string; icon: React.ReactNode; description: string; articles: Article[] }

const CATEGORIES: Category[] = [
  {
    title: "Getting Started",
    icon: <Rocket size={22} />,
    description: "Set up your account, configure your scoping preferences, and run your first AI scope.",
    articles: [
      {
        q: "How do I create my ClaimScribe account?",
        a: "Visit app.claimscribe.ai/sign-up and enter your email. You'll get a 14-day free trial with full access — no credit card required. The setup wizard walks you through configuring your company details, preferred scope format, and connecting your first project.",
      },
      {
        q: "What do I need to run my first AI scope?",
        a: "Take photos of the damage from multiple angles — the more, the better. Upload them to a new project in ClaimScribe. Our AI analyzes the images, identifies damage types (water, fire, mold, wind, impact), estimates affected areas, and generates a line-item scope. Review the AI's work, adjust anything you disagree with, and export.",
      },
      {
        q: "How do I invite my team?",
        a: "Go to Settings → Team → Invite. Roles: Admin (full access including billing), Project Manager (create/manage projects, review scopes), Estimator (run scopes, edit line items), and Viewer (read-only for adjusters or clients). Team members get an email invite and can start immediately.",
      },
      {
        q: "What types of damage does ClaimScribe detect?",
        a: "Water damage (Category 1-3, affected materials, moisture migration patterns), fire damage (char depth, smoke/soot damage, adjacent room assessment), mold (visible growth, probable behind-wall indicators), wind damage (roof, siding, fencing), and impact damage (hail, vehicle, fallen objects). The AI improves with every scope it processes.",
      },
      {
        q: "What devices does ClaimScribe work on?",
        a: "ClaimScribe works on any device with a modern web browser. The photo capture interface is optimized for mobile — walk through the job site and take photos directly in the app. Scoping and review work great on tablet or desktop for the larger screen.",
      },
    ],
  },
  {
    title: "AI Damage Scoping",
    icon: <Camera size={22} />,
    description: "How the AI analyzes damage photos and generates line-item scopes.",
    articles: [
      {
        q: "How does the AI scoping process work?",
        a: "Upload damage photos to a project. ClaimScribe's AI analyzes each image: identifies damage type and severity, estimates affected square footage, identifies affected materials (drywall, carpet, hardwood, etc.), and generates Xactimate-compatible line items with quantities. The entire analysis takes 30-60 seconds per room. You review and adjust before exporting.",
      },
      {
        q: "How accurate is the AI?",
        a: "ClaimScribe catches an average of $2,400 in missed line items per claim compared to manual scoping. The AI is trained on hundreds of thousands of restoration scopes and gets better every month. That said, always review the AI's output — it's a powerful assistant, not a replacement for your expertise.",
      },
      {
        q: "Can I edit the AI's scope output?",
        a: "Absolutely. The AI generates a draft scope that you can fully edit: add/remove line items, adjust quantities, change materials, add notes, and override pricing. Think of the AI as doing 80% of the work so you can focus on the 20% that requires your expertise and judgment.",
      },
      {
        q: "How many photos should I take per room?",
        a: "We recommend 4-8 photos per affected room: one overview shot from the doorway, close-ups of each damaged area, ceiling and floor shots, and transition zones between damaged and undamaged areas. More photos = more accurate AI analysis. The app guides you through recommended angles.",
      },
      {
        q: "Does ClaimScribe handle multi-room projects?",
        a: "Yes. Create rooms within a project (kitchen, bathroom, hallway, etc.) and upload photos per room. ClaimScribe scopes each room individually and generates a combined project scope with room-by-room breakdowns. It also identifies common items (content manipulation, equipment, etc.) that apply across rooms.",
      },
      {
        q: "How does moisture mapping work?",
        a: "If you have moisture readings, enter them in the room's moisture map. ClaimScribe uses the readings alongside photo analysis to identify the full extent of water migration — including behind walls and under flooring. This is where most missed line items hide, and it's one of our biggest value-adds.",
      },
    ],
  },
  {
    title: "Xactimate & Export",
    icon: <DollarSign size={22} />,
    description: "Export scopes to Xactimate, generate PDFs, and integrate with insurance workflows.",
    articles: [
      {
        q: "Can I export to Xactimate?",
        a: "Yes. Click 'Export → Xactimate' on any completed scope. ClaimScribe generates an ESX file with all line items, quantities, room assignments, and notes. Import it directly into Xactimate — no manual re-entry. Works with Xactimate desktop and XactAnalysis.",
      },
      {
        q: "What export formats are available?",
        a: "Xactimate ESX (direct import), PDF scope report (client/adjuster-ready), CSV (for spreadsheet analysis), and JSON (API integration). PDF reports include photos, line items, room breakdowns, and your company branding.",
      },
      {
        q: "Does ClaimScribe use Xactimate pricing?",
        a: "ClaimScribe generates line items using standard Xactimate categories and codes. Pricing is applied when you import into Xactimate using your local price list. This ensures your scope uses the correct regional pricing for your market.",
      },
      {
        q: "Can I add my company branding to reports?",
        a: "Yes. Under Settings → Branding, upload your logo, set your company colors, and customize the PDF report header/footer. Every exported report includes your branding. This is especially useful for reports shared with adjusters and property owners.",
      },
    ],
  },
  {
    title: "Project Management",
    icon: <ClipboardList size={22} />,
    description: "Organize jobs, track scope status, and manage your pipeline.",
    articles: [
      {
        q: "How do I organize projects?",
        a: "Each project represents a job/claim. Add a project with the property address, claim number, insurance carrier, and loss type. Projects move through stages: Photo Capture → AI Scoping → Review → Exported. Filter and sort by status, date, adjuster, or loss type.",
      },
      {
        q: "Can I assign projects to team members?",
        a: "Yes. Assign any project to an estimator on your team. They receive a notification and the project appears in their dashboard. Track who's working on what and monitor scope completion across your team.",
      },
      {
        q: "How do I track project history?",
        a: "Every project maintains a full activity log: photo uploads, AI scope runs, manual edits, exports, and team comments. You can see exactly who did what and when — useful for disputes, audits, or training.",
      },
      {
        q: "Can I duplicate a scope as a template?",
        a: "Yes. Open a completed project and click 'Duplicate as Template.' This creates a scope template with your customized line items that you can apply to similar future jobs. Great for recurring damage types like standard water mitigation setups.",
      },
    ],
  },
  {
    title: "Reports & Documentation",
    icon: <FileText size={22} />,
    description: "Generate professional reports for adjusters, carriers, and property owners.",
    articles: [
      {
        q: "What reports can I generate?",
        a: "Scope Report (full line-item breakdown with photos), Executive Summary (high-level damage overview for property owners), Insurance Package (scope + photos + moisture readings formatted for adjuster submission), and Team Performance (scopes completed, accuracy metrics, average scope time).",
      },
      {
        q: "How do I share reports with adjusters?",
        a: "Generate a PDF or create a share link. Share links give the adjuster read-only access to the scope, photos, and documentation without needing a ClaimScribe account. You can set an expiration date on share links for security.",
      },
      {
        q: "Does ClaimScribe help with supplement documentation?",
        a: "Yes. When you discover additional damage not in the original scope, add it as a supplement. ClaimScribe generates a supplement package showing the original scope, new findings with photo evidence, and the additional line items. This documentation is formatted specifically for carrier supplement submissions.",
      },
    ],
  },
  {
    title: "Team Management",
    icon: <Users size={22} />,
    description: "Roles, permissions, and team coordination.",
    articles: [
      {
        q: "What roles are available?",
        a: "Admin: Full access including billing and settings. Project Manager: Create/assign projects, review scopes, export reports. Estimator: Run scopes, edit line items, upload photos. Viewer: Read-only access (ideal for adjusters or property managers who need visibility).",
      },
      {
        q: "Can I track team performance?",
        a: "Yes. Go to Reports → Team Performance to see scopes completed per estimator, average scope time, AI-to-final accuracy (how much the AI draft was edited), and revenue attributed per team member. This helps identify training opportunities and top performers.",
      },
    ],
  },
  {
    title: "Billing & Account",
    icon: <CreditCard size={22} />,
    description: "Plans, payments, and account management.",
    articles: [
      {
        q: "How much does ClaimScribe cost?",
        a: "ClaimScribe pricing is based on the number of scopes per month. Visit our pricing page for current plans. All plans include AI scoping, Xactimate export, and team access. Enterprise plans include custom SLAs, dedicated onboarding, and API access.",
      },
      {
        q: "How does the free trial work?",
        a: "Sign up and get 14 days of full access — no credit card required. Run real scopes on real jobs. At the end of the trial, choose a plan to continue or your account pauses (data retained for 90 days).",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Cancel under Settings → Billing. Access continues through your current billing period. Data is retained for 90 days. Export all projects and scopes before canceling.",
      },
    ],
  },
];

function ArticleAccordion({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left group">
        <span className="text-sm font-medium text-gray-200 group-hover:text-primary-400 transition-colors">{article.q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 mt-0.5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 pr-8 text-sm text-gray-400 leading-relaxed">{article.a}</div>}
    </div>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState("");

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    articles: cat.articles.filter(
      (a) => !search || a.q.toLowerCase().includes(search.toLowerCase()) || a.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.articles.length > 0);

  return (
    <section className="py-16 bg-[#080810]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative mb-12">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-600/30 focus:border-primary-600"
          />
        </div>

        <div className="space-y-10">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-primary-400">{cat.icon}</div>
                <h2 className="text-xl font-bold text-white">{cat.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4 ml-[34px]">{cat.description}</p>
              <div className="rounded-xl p-4 border border-white/5 bg-white/[0.02]">
                {cat.articles.map((a) => <ArticleAccordion key={a.q} article={a} />)}
              </div>
            </div>
          ))}
        </div>

        {search && filtered.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle size={40} className="mx-auto text-gray-600 mb-3" />
            <p className="text-gray-400">No articles match &ldquo;{search}&rdquo;</p>
            <p className="text-sm text-gray-500 mt-1">
              Try a different search or email <a href="mailto:support@claimscribe.ai" className="text-primary-400 hover:underline">support@claimscribe.ai</a>
            </p>
          </div>
        )}

        <div className="mt-12 rounded-xl p-8 text-center border border-white/5 bg-white/[0.02]">
          <h3 className="text-lg font-bold text-white mb-2">Still need help?</h3>
          <p className="text-sm text-gray-400 mb-4">Our support team responds within 2 hours during business hours.</p>
          <a href="mailto:support@claimscribe.ai" className="inline-flex items-center gap-2 bg-primary-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
