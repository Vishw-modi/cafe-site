"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile screens
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check hovered element for data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    // Ultra-fast GPU-accelerated render loop for zero latency
    const render = () => {
      // Instant crisp response with 0.4 lerp for silky smooth tracking
      currentX += (mouseX - currentX) * 0.45;
      currentY += (mouseY - currentY) * 0.45;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 ${
          isHovered
            ? "w-16 h-16 bg-[#2C221E]/90 dark:bg-[#F5EFE6]/90 text-[#FDFBF7] dark:text-[#2C221E] backdrop-blur-xs text-[10px] uppercase tracking-widest font-semibold shadow-xl scale-100 opacity-100"
            : "w-3.5 h-3.5 bg-[#C4A484]/80 dark:bg-[#D6B798]/80 border border-[#FDFBF7] dark:border-[#14100E] shadow-xs"
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </div>
    </div>
  );
}
