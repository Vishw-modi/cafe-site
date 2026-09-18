"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function CinematicIntro({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 600 : 2400;

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDFBF7] bg-grain text-[#2C221E] pointer-events-none select-none"
        >
          {/* Subtle radiating glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#E8E2D8]/40 blur-3xl" />

          {/* Logo Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center px-4"
          >
            <span className="block text-xs uppercase tracking-[0.3em] text-[#8F9E8B] mb-2 font-medium">
              Sanctuary of Calm
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-wide text-[#2C221E]">
              L'AURA
            </h1>

            {/* Subtle separator line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
              className="w-16 h-[1px] bg-[#C4A484]/60 mx-auto my-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-serif italic text-lg md:text-xl text-[#2C221E]/70 tracking-wide"
            >
              Slow mornings. Beautifully made.
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
