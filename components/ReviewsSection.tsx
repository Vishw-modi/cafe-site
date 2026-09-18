"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "@/data/cafeData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section id="reviews" className="py-24 px-6 bg-[#F5EFE6]/50 dark:bg-[#1E1815]/50 border-t border-[#E8E2D8] dark:border-[#2E2420] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="block text-xs uppercase tracking-[0.25em] text-[#8F9E8B] dark:text-[#A1B39C] font-medium mb-8">
          Words from Guests
        </span>

        {/* Quote Icon */}
        <Quote className="w-10 h-10 mx-auto text-[#C4A484]/40 dark:text-[#D6B798]/40 mb-6" />

        {/* Animated Testimonial Text */}
        <div className="min-h-[180px] flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl sm:text-4xl text-[#2C221E] dark:text-[#F5EFE6] font-light leading-snug italic max-w-3xl mx-auto">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#E8E2D8] dark:border-[#2E2420]"
                />
                <div className="text-left">
                  <h4 className="font-serif text-base text-[#2C221E] dark:text-[#F5EFE6] font-medium">{current.author}</h4>
                  <p className="text-xs text-[#2C221E]/60 dark:text-[#F5EFE6]/60 font-sans">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-[#E8E2D8] dark:border-[#2E2420] text-[#2C221E] dark:text-[#F5EFE6] hover:bg-[#FDFBF7] dark:hover:bg-[#2B221E] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === idx ? "w-6 bg-[#2C221E] dark:bg-[#F5EFE6]" : "w-1.5 bg-[#C4A484]/40 dark:bg-[#D6B798]/40"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-[#E8E2D8] dark:border-[#2E2420] text-[#2C221E] dark:text-[#F5EFE6] hover:bg-[#FDFBF7] dark:hover:bg-[#2B221E] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

