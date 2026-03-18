import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — ClaimScribe",
  description: "The page you're looking for doesn't exist. Explore our AI-powered damage scoping software for restoration contractors.",
};

const suggestions = [
  { href: "/", label: "Home", desc: "Back to the homepage" },
  { href: "/features", label: "Features", desc: "AI damage scoping & documentation" },
  { href: "/pricing", label: "Pricing", desc: "Plans for every team size" },
  { href: "/blog", label: "Blog", desc: "Restoration industry insights & tips" },
  { href: "/demo", label: "Book a Demo", desc: "See ClaimScribe in action" },
  { href: "/help", label: "Help Center", desc: "Find answers to common questions" },
];

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-6xl font-bold text-blue-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border border-gray-700 p-4 hover:border-blue-500 hover:bg-blue-950/50 transition-colors"
            >
              <p className="font-semibold text-white group-hover:text-blue-400">
                {s.label} →
              </p>
              <p className="mt-1 text-sm text-gray-400">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
