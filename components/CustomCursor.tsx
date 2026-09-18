"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const stateRef = useRef({ hovered: false, text: "" });

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

      const newText = cursorTarget ? cursorTarget.getAttribute("data-cursor") || "" : "";
      const newHovered = Boolean(cursorTarget);

      // Only trigger React state update if the hover target actually changes
      if (stateRef.current.hovered !== newHovered || stateRef.current.text !== newText) {
        stateRef.current = { hovered: newHovered, text: newText };
        setCursorText(newText);
        setIsHovered(newHovered);
      }
    };

    // Ultra-fast 60-120fps GPU render loop
    const render = () => {
      // 0.85 lerp for near-instant 1:1 hardware precision with subtle smoothness
      currentX += (mouseX - currentX) * 0.85;
      currentY += (mouseY - currentY) * 0.85;

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
      {cursorText ? (
        <div className="px-3 py-1.5 rounded-full bg-[#2C221E]/95 dark:bg-[#F5EFE6]/95 text-[#FDFBF7] dark:text-[#2C221E] border border-white/10 dark:border-black/10 backdrop-blur-md text-[10px] uppercase tracking-widest font-semibold shadow-xl whitespace-nowrap transition-all duration-200 flex items-center justify-center">
          {cursorText}
        </div>
      ) : (
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? "w-8 h-8 bg-[#C4A484]/20 dark:bg-[#D6B798]/20 border border-[#C4A484] dark:border-[#D6B798] scale-110"
              : "w-3.5 h-3.5 bg-[#C4A484]/80 dark:bg-[#D6B798]/80 border border-[#FDFBF7] dark:border-[#14100E] shadow-xs"
          }`}
        />
      )}
    </div>
  );
}
