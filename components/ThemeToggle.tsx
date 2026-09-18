"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

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

  const cursorLabel = isDark ? "LIGHT MODE" : "DARK MODE";
  const tooltipText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div className="relative inline-flex items-center">
      {/* Hover Tooltip Badge */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#2C221E] dark:bg-[#F5EFE6] text-[#FDFBF7] dark:text-[#2C221E] text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap shadow-md pointer-events-none z-50"
        >
          {tooltipText}
        </motion.div>
      )}

      {/* Two-Sided Pill Switcher */}
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        data-cursor={cursorLabel}
        className="relative flex items-center p-1 rounded-full bg-[#F5EFE6] dark:bg-[#1E1815] border border-[#E8E2D8] dark:border-[#2E2420] shadow-xs select-none"
      >
        {/* Animated Sliding Highlight */}
        <motion.div
          className="absolute top-1 bottom-1 w-7 rounded-full bg-[#FDFBF7] dark:bg-[#2B221E] shadow-sm border border-[#E8E2D8]/50 dark:border-[#2E2420]"
          animate={{
            left: isDark ? "calc(100% - 2rem)" : "0.25rem",
          }}
          transition={{ type: "spring", stiffness: 450, damping: 30 }}
        />

        {/* Sun Side (Light Mode) */}
        <button
          onClick={() => toggleTheme(false)}
          className={`relative z-10 p-1.5 rounded-full transition-colors duration-200 ${
            !isDark ? "text-[#C4A484]" : "text-[#2C221E]/40 dark:text-[#F5EFE6]/40 hover:text-[#2C221E] dark:hover:text-[#F5EFE6]"
          }`}
          aria-label="Switch to Light Theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Moon Side (Dark Mode) */}
        <button
          onClick={() => toggleTheme(true)}
          className={`relative z-10 p-1.5 rounded-full transition-colors duration-200 ${
            isDark ? "text-[#A1B39C]" : "text-[#2C221E]/40 dark:text-[#F5EFE6]/40 hover:text-[#2C221E] dark:hover:text-[#F5EFE6]"
          }`}
          aria-label="Switch to Dark Theme"
        >
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
