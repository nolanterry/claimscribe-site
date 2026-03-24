import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/integrations", label: "Integrations" },
    { href: "/pricing", label: "Pricing" },
    { href: "/#how-it-works", label: "How It Works" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ],
  "Use Cases": [
    { href: "/use-cases/water-damage-restoration", label: "Water Damage Restoration" },
    { href: "/use-cases/fire-damage-contractors", label: "Fire & Smoke Damage" },
    { href: "/use-cases/multi-location-franchises", label: "Multi-Location Franchises" },
  ],
  Resources: [
    { href: "/resources", label: "Free Downloads" },
    { href: "/blog/how-to-write-restoration-scope-of-work", label: "Scope Writing Guide" },
    { href: "/blog/xactimate-tips-faster-claims", label: "Xactimate Tips" },
    { href: "/customers", label: "Customers" },
    { href: "/help", label: "Help Center" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/accessibility", label: "Accessibility" },
  ],
};

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-white/5 bg-[#080810]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="ClaimScribe" width={24} height={24} className="invert" />
              <span className="text-lg font-bold text-white">ClaimScribe</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-powered insurance claim scoping for restoration contractors. From photos to professional scopes in minutes.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; 2026 ClaimScribe AI. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built for restoration professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
