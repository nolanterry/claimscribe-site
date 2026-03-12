"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Clock, ArrowRight, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-24 pb-16 px-4">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
          Contact
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 text-white leading-[1.1]">
          Let&apos;s talk about your claims workflow
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you&apos;re scoping your first AI-powered claim or scaling
          across a team, we&apos;re here to help.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Form */}
        <div className="md:col-span-3 glass rounded-2xl p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="text-green-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message received
              </h3>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                We&apos;ll get back to you within one business day. In the
                meantime, you can{" "}
                <Link href="/" className="text-primary-400 hover:underline">
                  explore the platform
                </Link>{" "}
                or check out our{" "}
                <Link href="/blog" className="text-primary-400 hover:underline">
                  blog
                </Link>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Martinez"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-primary-500/40 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@restorationco.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-primary-500/40 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ABC Restoration"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-primary-500/40 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone{" "}
                    <span className="text-gray-600 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-primary-500/40 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your restoration business, current scoping process, or any questions about ClaimScribe..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:border-primary-500/40 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message <ArrowRight size={18} className="ml-2" />
              </Button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2 space-y-5">
          <div className="glass rounded-2xl p-7">
            <div className="w-10 h-10 rounded-xl bg-primary-600/10 border border-primary-600/20 flex items-center justify-center mb-4">
              <Mail className="text-primary-400" size={18} />
            </div>
            <h3 className="font-semibold text-white mb-2">Email us directly</h3>
            <a
              href="mailto:hello@claimscribe.ai"
              className="text-primary-400 hover:underline text-sm"
            >
              hello@claimscribe.ai
            </a>
          </div>
          <div className="glass rounded-2xl p-7">
            <div className="w-10 h-10 rounded-xl bg-primary-600/10 border border-primary-600/20 flex items-center justify-center mb-4">
              <Clock className="text-primary-400" size={18} />
            </div>
            <h3 className="font-semibold text-white mb-2">Response time</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We respond to every inquiry within one business day. We know
              restoration work doesn&apos;t wait — neither do we.
            </p>
          </div>
          <div className="glass rounded-2xl p-7">
            <div className="w-10 h-10 rounded-xl bg-primary-600/10 border border-primary-600/20 flex items-center justify-center mb-4">
              <FileText className="text-primary-400" size={18} />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Prefer to explore first?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Start a free 14-day trial — upload photos, generate scopes, see
              the difference.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:underline"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
