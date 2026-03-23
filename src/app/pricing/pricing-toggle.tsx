"use client";

import { motion } from "framer-motion";

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (annual: boolean) => void;
}

export function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          !isAnnual ? "text-white" : "text-gray-500"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isAnnual)}
        className={`relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0a14] ${
          isAnnual ? "bg-primary-600" : "bg-gray-700"
        }`}
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
      >
        <motion.div
          className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md"
          animate={{ x: isAnnual ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isAnnual ? "text-white" : "text-gray-500"
        }`}
      >
        Annual
      </span>
      {isAnnual && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full"
        >
          Save ~15%
        </motion.span>
      )}
    </div>
  );
}
