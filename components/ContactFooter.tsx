"use client";

import { CAFE_INFO } from "@/data/cafeData";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

interface ContactFooterProps {
  onOpenReservation: () => void;
}

export function ContactFooter({ onOpenReservation }: ContactFooterProps) {
  return (
    <footer id="contact" className="bg-[#2C221E] text-[#FDFBF7] pt-24 pb-16 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#C4A484]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Closing Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="block text-xs uppercase tracking-[0.3em] text-[#8F9E8B] font-medium mb-4">
            Visit & Sanctuary
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#FDFBF7] mb-6">
            Take Your Time.
          </h2>
          <p className="font-serif italic text-lg text-[#E8E2D8]/80 mb-8">
            Whether you stop by for five minutes or stay for three hours, our doors are open.
          </p>

          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 rounded-full bg-[#C4A484] text-[#2C221E] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FDFBF7] transition-colors shadow-lg"
          >
            Reserve Table
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-y border-[#E8E2D8]/15 text-sm">
          {/* Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#8F9E8B]">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-medium">Location</span>
            </div>
            <p className="font-serif text-lg text-[#FDFBF7]">{CAFE_INFO.address}</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#C4A484] hover:underline"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#8F9E8B]">
              <Clock className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-medium">Hours</span>
            </div>
            {CAFE_INFO.hours.map((h) => (
              <div key={h.days} className="text-[#E8E2D8]/90">
                <span className="block text-xs font-semibold">{h.days}</span>
                <span className="font-serif text-base">{h.time}</span>
              </div>
            ))}
          </div>

          {/* Contact & Social */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#8F9E8B]">
              <Phone className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-medium">Contact</span>
            </div>
            <p className="font-serif text-lg text-[#FDFBF7]">{CAFE_INFO.phone}</p>
            <a
              href={`https://instagram.com/${CAFE_INFO.instagram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#E8E2D8] hover:text-[#C4A484] transition-colors pt-1"
            >
              <svg className="w-4 h-4 text-[#C4A484]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>{CAFE_INFO.instagram}</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-[#E8E2D8]/50">
          <p>© {new Date().getFullYear()} L'Aura Artisan Cafe. All rights reserved.</p>
          <p className="font-serif italic mt-2 sm:mt-0">Crafted with intention & calm.</p>
        </div>
      </div>
    </footer>
  );
}
