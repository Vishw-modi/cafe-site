"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenReservation }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [greeting, setGreeting] = useState<string>("Slow mornings.");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good morning.");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Take your time.");
    } else {
      setGreeting("Stay a little longer.");
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center px-6 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Subtitle Badge with Time-Aware Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFE6] dark:bg-[#1E1815] border border-[#E8E2D8] dark:border-[#2E2420] text-[#8F9E8B] dark:text-[#A1B39C] text-xs uppercase tracking-[0.25em] font-medium mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8F9E8B] dark:bg-[#A1B39C] animate-pulse" />
          {greeting} {siteConfig.tagline}
        </motion.div>

        {/* Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#2C221E] dark:text-[#F5EFE6] leading-[1.15] tracking-tight mb-6"
        >
          Sanctuary for the <br />
          <span className="italic font-normal text-[#C4A484] dark:text-[#D6B798]">Mindful</span> Coffee Lover
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-[#2C221E]/75 dark:text-[#F5EFE6]/75 leading-relaxed mb-10 font-sans"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#menu"
            data-cursor="EXPLORE"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2C221E] dark:bg-[#F5EFE6] text-[#FDFBF7] dark:text-[#2C221E] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C4A484] dark:hover:bg-[#D6B798] transition-all duration-300 shadow-md text-center"
          >
            Explore the Menu
          </a>
          <a
            href="#craft"
            data-cursor="VIEW"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-[#2C221E]/30 dark:border-[#F5EFE6]/30 text-[#2C221E] dark:text-[#F5EFE6] text-xs uppercase tracking-[0.2em] font-medium hover:border-[#2C221E] dark:hover:border-white hover:bg-[#F5EFE6]/50 dark:hover:bg-[#1E1815]/50 transition-all duration-300 text-center"
          >
            Discover the Craft
          </a>
        </motion.div>
      </div>

      {/* Hero Visual Image Card with Scroll Parallax */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity, y: textY }}
        className="w-full max-w-5xl h-[420px] sm:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-[#E8E2D8] dark:border-[#2E2420] relative"
        data-cursor="VIEW"
      >
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80"
          alt="L'Aura Coffee House Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 dark:from-[#14100E]/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[#FDFBF7]">
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#E8E2D8]/80 font-medium">Location</span>
            <p className="font-serif text-lg md:text-xl">Arts District • Open Daily</p>
          </div>
          <a
            href="#craft"
            className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#E8E2D8] hover:text-white transition-colors"
          >
            <span>Scroll to story</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

