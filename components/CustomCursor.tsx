"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile screens
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element for data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute("data-cursor") || "");
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      animate={{
        x: position.x - (isHovered ? 36 : 6),
        y: position.y - (isHovered ? 36 : 6),
        scale: isHovered ? 1 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.2 }}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-all duration-200 ${
        isHovered
          ? "w-18 h-18 bg-[#2C221E]/90 text-[#FDFBF7] backdrop-blur-xs text-[10px] uppercase tracking-widest font-medium shadow-xl"
          : "w-3 h-3 bg-[#C4A484]/70 border border-[#FDFBF7]"
      }`}
    >
      {isHovered && <span>{cursorText}</span>}
    </motion.div>
  );
}
