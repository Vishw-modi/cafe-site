"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function AmbientAura() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for gentle organic movement
  const springX = useSpring(mouseX, { stiffness: 20, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 20, damping: 30 });

  const [touchRipples, setTouchRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseX.set(touch.clientX - 200);
        mouseY.set(touch.clientY - 200);

        const newRipple = { id: Date.now(), x: touch.clientX, y: touch.clientY };
        setTouchRipples((prev) => [...prev.slice(-2), newRipple]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Soft warm ambient blur aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-radial from-[#F5EFE6]/60 via-[#E8E2D8]/30 to-transparent blur-3xl opacity-70"
      />

      {/* Touch Ripples for Mobile */}
      {touchRipples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ opacity: 0.4, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          style={{
            left: ripple.x - 100,
            top: ripple.y - 100,
          }}
          className="absolute w-[200px] h-[200px] rounded-full bg-[#8F9E8B]/15 blur-2xl"
        />
      ))}

      {/* Organic Subtle Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-multiply" />
    </div>
  );
}
