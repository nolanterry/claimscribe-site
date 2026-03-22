import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { CookieConsent } from "@/components/cookie-consent";
import { PromoBar } from "@/components/promo-bar";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claimscribe.ai"),
  title: {
    default: "ClaimScribe AI - AI-Powered Insurance Claim Scoping",
    template: "%s | ClaimScribe AI",
  },
  description:
    "Photos + voice to AI-generated insurance claim scopes of work for restoration contractors. Get professional scopes in minutes, not hours.",
  keywords: [
    "insurance claim",
    "scope of work",
    "restoration contractor",
    "AI damage assessment",
    "Xactimate",
    "water damage",
    "fire damage",
    "claim scoping",
  ],
  openGraph: {
    type: "website",
    siteName: "ClaimScribe AI",
    title: "ClaimScribe AI — AI-Powered Damage Scoping for Restoration Contractors",
    description: "Photo AI damage analysis, voice-to-scope, Xactimate codes, branded PDF reports. Never miss a billable line item again.",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ClaimScribe AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    url: "https://claimscribe.ai",
    description:
      "AI-powered insurance claim scoping software for restoration contractors. Photos and voice narration to professional scopes of work with Xactimate code mapping.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "199",
      highPrice: "599",
      priceCurrency: "USD",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "112",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClaimScribe AI",
    url: "https://claimscribe.ai",
    logo: "https://claimscribe.ai/favicon-32.png",
    description:
      "AI-powered insurance claim scoping platform for restoration contractors.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://claimscribe.ai/demo",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How accurate is the AI damage analysis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI has been trained on hundreds of thousands of restoration claims and achieves 95%+ accuracy on common damage types including water, fire, mold, and storm damage. Every scope includes a confidence score, and you can always review and adjust line items before exporting.",
        },
      },
      {
        "@type": "Question",
        name: "Does ClaimScribe work with Xactimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ClaimScribe maps every line item to the corresponding Xactimate code (XM8 pricing database). You can export scopes as ESX files for direct import into Xactimate, or as formatted PDFs with codes referenced inline.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use ClaimScribe on-site without internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can capture photos and record voice narrations offline. When you reconnect, ClaimScribe syncs your data and generates the full scope. Most contractors capture on-site and generate scopes in their truck before driving away.",
        },
      },
      {
        "@type": "Question",
        name: "What types of damage does ClaimScribe support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ClaimScribe handles water damage, fire and smoke damage, mold remediation, storm and wind damage, hail damage, and vandalism. We are continuously expanding our damage classification models based on contractor feedback.",
        },
      },
      {
        "@type": "Question",
        name: "How does the voice-to-scope feature work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply tap record and walk through the property describing what you see. Our AI parses your narration into structured line items with measurements, materials, and actions — complete with Xactimate codes.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a free trial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Every new account gets a 14-day free trial with full access to all Pro features. No credit card required to start. Generate up to 5 scopes during your trial to see the quality for yourself.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <PromoBar />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        <Navbar />
        <main id="main-content" className="min-h-screen pt-16">{children}</main>
        <Footer />
        <ExitIntentPopup />
        <MobileCtaBar />
        <CookieConsent />
      </body>
    </html>
  );
}
