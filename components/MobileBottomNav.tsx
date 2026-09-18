"use client";

import { Home, Coffee, Sparkles, Star, Calendar } from "lucide-react";

interface MobileBottomNavProps {
  onOpenReservation: () => void;
}

export function MobileBottomNav({ onOpenReservation }: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[88%] max-w-xs bg-[#2C221E]/90 backdrop-blur-md text-[#FDFBF7] px-5 py-2.5 rounded-full shadow-2xl border border-[#E8E2D8]/20 flex items-center justify-between">
      <a
        href="#"
        className="flex flex-col items-center gap-0.5 text-[10px] uppercase tracking-wider text-[#8F9E8B] hover:text-[#FDFBF7] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </a>

      <a
        href="#menu"
        className="flex flex-col items-center gap-0.5 text-[10px] uppercase tracking-wider text-[#E8E2D8]/80 hover:text-[#FDFBF7] transition-colors"
      >
        <Coffee className="w-4 h-4" />
        <span>Menu</span>
      </a>

      <a
        href="#craft"
        className="flex flex-col items-center gap-0.5 text-[10px] uppercase tracking-wider text-[#E8E2D8]/80 hover:text-[#FDFBF7] transition-colors"
      >
        <Sparkles className="w-4 h-4" />
        <span>Craft</span>
      </a>

      <a
        href="#reviews"
        className="flex flex-col items-center gap-0.5 text-[10px] uppercase tracking-wider text-[#E8E2D8]/80 hover:text-[#FDFBF7] transition-colors"
      >
        <Star className="w-4 h-4" />
        <span>Reviews</span>
      </a>

      <button
        onClick={onOpenReservation}
        className="p-2 rounded-full bg-[#C4A484] text-[#2C221E] shadow-md hover:scale-105 transition-transform"
        aria-label="Reserve table"
      >
        <Calendar className="w-4 h-4" />
      </button>
    </div>
  );
}
