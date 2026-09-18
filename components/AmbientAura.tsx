"use client";

import { useEffect, useRef } from "react";

export function AmbientAura() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -200;
    let mouseY = -200;
    let currentX = -200;
    let currentY = -200;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - 225;
      mouseY = e.clientY - 225;
    };

    // GPU-accelerated smooth lerp animation loop (zero React state updates)
    const render = () => {
      currentX += (mouseX - currentX) * 0.05; // Gentle organic inertia
      currentY += (mouseY - currentY) * 0.05;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* GPU-accelerated smooth ambient glow aura */}
      <div
        ref={auraRef}
        className="absolute w-[450px] h-[450px] rounded-full opacity-60 dark:opacity-40 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(245,239,230,0.8) 0%, rgba(232,226,216,0.4) 45%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Organic Subtle Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-30 mix-blend-multiply" />
    </div>
  );
}
