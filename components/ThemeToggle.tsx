"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (targetDark: boolean) => {
    if (isDark === targetDark) return;
    
    if (targetDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  const tooltipText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div className="relative inline-flex items-center">
      {/* Two-Sided Pill Switcher */}
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center p-1 rounded-full bg-[#F5EFE6] dark:bg-[#1E1815] border border-[#E8E2D8] dark:border-[#2E2420] shadow-xs select-none cursor-pointer"
      >
        {/* Animated Sliding Highlight Knob */}
        <motion.div
          className="absolute top-1 left-1 w-7 h-7 rounded-full bg-[#FDFBF7] dark:bg-[#2B221E] shadow-sm border border-[#E8E2D8]/50 dark:border-[#2E2420]"
          animate={{
            x: isDark ? 28 : 0,
          }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
        />

        {/* Sun Side (Light Mode) */}
        <button
          type="button"
          onClick={() => toggleTheme(false)}
          className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
            !isDark ? "text-[#C4A484]" : "text-[#2C221E]/40 dark:text-[#F5EFE6]/40 hover:text-[#2C221E] dark:hover:text-[#F5EFE6]"
          }`}
          aria-label="Switch to Light Theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Moon Side (Dark Mode) */}
        <button
          type="button"
          onClick={() => toggleTheme(true)}
          className={`relative z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200 ${
            isDark ? "text-[#A1B39C]" : "text-[#2C221E]/40 dark:text-[#F5EFE6]/40 hover:text-[#2C221E] dark:hover:text-[#F5EFE6]"
          }`}
          aria-label="Switch to Dark Theme"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2C221E] dark:bg-[#F5EFE6] text-[#FDFBF7] dark:text-[#2C221E] text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap shadow-md pointer-events-none z-50 border border-white/10 dark:border-black/10"
          >
            {tooltipText}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
