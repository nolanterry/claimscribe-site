import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "See how restoration contractors use ClaimScribe to write better scopes, win more supplements, and increase revenue per claim.",
  alternates: { canonical: "/customers" },
};

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
