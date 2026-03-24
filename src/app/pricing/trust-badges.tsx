"use client";

import { Shield, Lock, Clock, CreditCard, CheckCircle, XCircle } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Lock,
    title: "SSL Encrypted",
    subtitle: "256-bit SSL encryption",
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    subtitle: "30-day full refund",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    subtitle: "Enterprise-grade SLA",
  },
  {
    icon: CreditCard,
    title: "No Card for Trial",
    subtitle: "14 days free, no strings",
  },
  {
    icon: CheckCircle,
    title: "Xactimate Compatible",
    subtitle: "Industry-standard integration",
  },
  {
    icon: XCircle,
    title: "Cancel Anytime",
    subtitle: "No contracts or lock-in",
  },
];

export function TrustBadges() {
  return (
    <section
      aria-label="Security and compliance certifications"
      className="py-16 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Trusted by restoration contractors nationwide
          </p>
        </FadeIn>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors"
            >
              <badge.icon className="h-7 w-7 text-primary-400 mb-3" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-white">{badge.title}</span>
              <span className="text-xs text-gray-400 mt-1">{badge.subtitle}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
