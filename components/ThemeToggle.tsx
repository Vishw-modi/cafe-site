"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system preference
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

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-[#F5EFE6] dark:bg-[#2B221E] text-[#2C221E] dark:text-[#F5EFE6] border border-[#E8E2D8] dark:border-[#2E2420] hover:border-[#C4A484] dark:hover:border-[#D6B798] transition-all duration-300 shadow-xs flex items-center justify-center"
      aria-label="Toggle dark mode"
      data-cursor="THEME"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#D6B798]" />
      ) : (
        <Moon className="w-4 h-4 text-[#8F9E8B]" />
      )}
    </motion.button>
  );
}
