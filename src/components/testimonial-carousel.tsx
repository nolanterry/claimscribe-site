"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "ClaimScribe cut our scope writing time by 80%. We used to spend 3-4 hours per scope — now we're done before we leave the property. Our throughput tripled in the first month.",
    name: "Mike Rodriguez",
    title: "Owner",
    company: "Rodriguez Restoration",
  },
  {
    quote: "The Xactimate code mapping alone is worth the subscription. No more flipping through code books or guessing. The AI nails the right codes 95% of the time.",
    name: "Sarah Chen",
    title: "Project Manager",
    company: "AllClear Restoration",
  },
  {
    quote: "Our approval rate with adjusters went up 35% since switching to ClaimScribe. The scopes are more thorough, more professional, and adjusters take them seriously.",
    name: "David Thompson",
    title: "Lead Estimator",
    company: "StormGuard Services",
  },
  {
    quote: "I walked a Category 3 water loss, dictated what I saw room by room, and had a complete scope with line items and photos before I got to my truck. That's never happened before.",
    name: "Jenna Park",
    title: "Restoration Contractor",
    company: "ParkWay Property Restoration",
  },
  {
    quote: "We onboarded three junior estimators last quarter. ClaimScribe got them producing accurate scopes in their first week instead of the usual two months of shadowing.",
    name: "Marcus Williams",
    title: "VP of Operations",
    company: "Apex Damage Solutions",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Customer testimonials"
      className="py-24 sm:py-32 border-t border-white/5 bg-[#080810]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Trusted by Restoration Contractors
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          See how restoration teams are generating professional scopes in minutes instead of hours.
        </p>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              aria-live="polite"
              className="w-full"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute -top-6 -left-2 text-6xl leading-none text-primary-600/20 font-serif select-none">&ldquo;</span>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic px-6">
                  {TESTIMONIALS[current].quote}
                </p>
                <span className="absolute -bottom-4 -right-2 text-6xl leading-none text-primary-600/20 font-serif select-none">&rdquo;</span>
              </div>

              {/* Attribution */}
              <div className="mt-8">
                <p className="font-semibold text-white">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-gray-500">
                  {TESTIMONIALS[current].title}, {TESTIMONIALS[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary-500 w-7" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
