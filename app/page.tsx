"use client";

import { useState } from "react";
import { CinematicIntro } from "@/components/CinematicIntro";
import { AmbientAura } from "@/components/AmbientAura";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { CraftSection } from "@/components/CraftSection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { ReservationDrawer } from "@/components/ReservationDrawer";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#FDFBF7] text-[#2C221E] selection:bg-[#C4A484]/30">
      {/* 1. Cinematic Intro Sequence (1.5-2.5s) */}
      <CinematicIntro />

      {/* 2. Restrained Interactive Background Aura */}
      <AmbientAura />

      {/* 3. Luxury Minimal Header Nav */}
      <HeaderNav onOpenReservation={() => setReservationOpen(true)} />

      {/* 4. Minimal Hero Section */}
      <HeroSection onOpenReservation={() => setReservationOpen(true)} />

      {/* 5. The Craft / Coffee Storytelling */}
      <CraftSection />

      {/* 6. Editorial Menu Experience */}
      <MenuSection onOpenReservation={() => setReservationOpen(true)} />

      {/* 7. Editorial Testimonials */}
      <ReviewsSection />

      {/* 8. Peaceful Closing Footer */}
      <ContactFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* 9. Mobile Bottom Floating Pill Nav */}
      <MobileBottomNav onOpenReservation={() => setReservationOpen(true)} />

      {/* 10. Table Reservation Drawer */}
      <ReservationDrawer
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </main>
  );
}
