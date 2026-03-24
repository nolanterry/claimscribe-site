"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Mic, ClipboardList, FileDown, Hash, Clock } from "lucide-react";

const BENEFITS = [
  {
    icon: Camera,
    title: "AI Damage Analysis",
    description: "Upload site photos and get instant damage identification with affected materials and repair recommendations.",
  },
  {
    icon: Mic,
    title: "Voice-to-Scope",
    description: "Narrate what you see on-site. AI transcribes and converts your observations into structured line items.",
  },
  {
    icon: Hash,
    title: "Xactimate Code Mapping",
    description: "Every line item maps to the correct Xactimate code. Export as ESX for direct import — no manual lookup.",
  },
  {
    icon: ClipboardList,
    title: "Room-by-Room Organization",
    description: "Scopes auto-organize by room and area, matching the format adjusters expect to see.",
  },
  {
    icon: FileDown,
    title: "Professional PDF Reports",
    description: "One-click export with your branding, photos, line items, and totals. Ready to submit to any carrier.",
  },
  {
    icon: Clock,
    title: "Scope in Minutes",
    description: "What used to take hours now takes minutes. Walk the site, capture the damage, and have a complete scope before you leave.",
  },
];

export function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Key features"
      className="py-24 sm:py-32 border-t border-white/5 bg-[#080810]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Built for Restoration Contractors
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Every feature is designed around how restoration professionals actually work in the field.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary-600/20 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-primary-600/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-5 w-5 text-primary-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
