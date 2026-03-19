"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ArrowRight, ScanSearch } from "lucide-react";

const SIGNUP_URL = "https://app.claimscribe.ai";
const STORAGE_KEY = "claimscribe_exit_popup_dismissed";
const DISMISS_DAYS = 7;

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts && Date.now() - Number(ts) < DISMISS_DAYS * 86400000) return;
    } catch {}

    let fired = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        fired = true;
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    const mobileTimer = setTimeout(() => {
      if (fired) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct < 0.6) {
        fired = true;
        setVisible(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free trial offer"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[popup_0.3s_ease-out]">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <ScanSearch className="text-blue-400" size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-400 uppercase tracking-wide">Before you go</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Stop leaving money on the table with manual scoping.
        </h2>
        <p className="text-gray-400 mb-6">
          AI-powered damage scoping catches line items you miss. Start your 14-day free trial — no credit card, no Xactimate expertise required.
        </p>

        <a
          href={SIGNUP_URL}
          className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={dismiss}
        >
          Start Free Trial <ArrowRight size={16} />
        </a>

        <button
          onClick={dismiss}
          className="w-full text-sm text-gray-500 hover:text-gray-300 mt-3 transition-colors"
        >
          No thanks, I&apos;ll keep guessing line items
        </button>
      </div>

      <style jsx>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
