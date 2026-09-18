"use client";

import { useState } from "react";
import { CinematicIntro } from "@/components/CinematicIntro";
import { AmbientAura } from "@/components/AmbientAura";
import { HeaderNav } from "@/components/HeaderNav";
import { HeroSection } from "@/components/HeroSection";
import { CraftSection } from "@/components/CraftSection";
import { SpaceSection } from "@/components/SpaceSection";
import { MenuSection } from "@/components/MenuSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { ReservationDrawer } from "@/components/ReservationDrawer";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { DigitalConcierge } from "@/components/DigitalConcierge";
import { CustomCursor } from "@/components/CustomCursor";
import { ItemDetailModal } from "@/components/ItemDetailModal";
import { MenuItem } from "@/data/menu";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [conciergeSelectedItem, setConciergeSelectedItem] = useState<MenuItem | null>(null);

  return (
    <main className="relative min-h-screen bg-[#FDFBF7] dark:bg-[#14100E] text-[#1C1614] dark:text-[#F5EFE6] transition-colors duration-500 selection:bg-[#C4A484]/30">
      {/* 1. Desktop Custom Contextual Cursor */}
      <CustomCursor />

      {/* 2. Cinematic Entrance Sequence */}
      <CinematicIntro />

      {/* 3. Restrained Interactive Background Aura */}
      <AmbientAura />

      {/* 4. Luxury Minimal Header Nav */}
      <HeaderNav onOpenReservation={() => setReservationOpen(true)} />

      {/* 5. Minimal Hero Section */}
      <HeroSection onOpenReservation={() => setReservationOpen(true)} />

      {/* 6. The Craft / Coffee Storytelling */}
      <CraftSection />

      {/* 7. The Physical Space / Atmosphere */}
      <SpaceSection />

      {/* 8. Editorial Menu Experience */}
      <MenuSection onOpenReservation={() => setReservationOpen(true)} />

      {/* 9. Editorial Testimonials */}
      <ReviewsSection />

      {/* 10. Peaceful Closing Footer */}
      <ContactFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* 11. Mobile Bottom Floating Pill Nav */}
      <MobileBottomNav onOpenReservation={() => setReservationOpen(true)} />

      {/* 12. Digital Concierge Guide */}
      <DigitalConcierge onSelectItem={(item) => setConciergeSelectedItem(item)} />

      {/* 13. Concierge Modal / Detail Item View */}
      {conciergeSelectedItem && (
        <ItemDetailModal
          item={conciergeSelectedItem}
          onClose={() => setConciergeSelectedItem(null)}
          onOpenReservation={() => {
            setConciergeSelectedItem(null);
            setReservationOpen(true);
          }}
        />
      )}

      {/* 14. Table Reservation Drawer */}
      <ReservationDrawer
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </main>
  );
}
