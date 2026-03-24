import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — Restoration Scoping Templates & Claims Guides | ClaimScribe",
  description:
    "Download free water damage scope templates, fire damage checklists, Xactimate guides, and insurance documentation resources. Built for restoration contractors.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources — Restoration Scoping Templates & Claims Guides",
    description:
      "Download free water damage scope templates, fire damage checklists, and Xactimate guides for restoration contractors.",
    url: "https://claimscribe.ai/resources",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
