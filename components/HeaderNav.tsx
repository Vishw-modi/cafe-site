"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";

interface HeaderNavProps {
  onOpenReservation: () => void;
}

export function HeaderNav({ onOpenReservation }: HeaderNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Craft", href: "#craft" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDFBF7]/85 backdrop-blur-md border-b border-[#E8E2D8]/60 py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Cafe Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl md:text-2xl font-serif tracking-widest text-[#2C221E] hover:opacity-80 transition-opacity"
        >
          <Coffee className="w-5 h-5 text-[#8F9E8B]" />
          <span>L'AURA</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#2C221E]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 hover:text-[#2C221E] transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A484] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="px-5 py-2.5 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#C4A484] transition-colors duration-300 shadow-xs"
          >
            Reserve Table
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2C221E] focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#FDFBF7] border-b border-[#E8E2D8] px-6 py-6 flex flex-col gap-5 shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-xl text-[#2C221E] hover:text-[#8F9E8B] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="w-full mt-2 py-3 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-[0.15em] font-medium"
          >
            Reserve Table
          </button>
        </motion.div>
      )}
    </header>
  );
}
