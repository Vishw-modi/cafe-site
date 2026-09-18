"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SPACE_ZONES, SpaceZone } from "@/data/space";
import { Check } from "lucide-react";

export function SpaceSection() {
  const [activeSpace, setActiveSpace] = useState<SpaceZone>(SPACE_ZONES[0]);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="block text-xs uppercase tracking-[0.25em] text-[#8F9E8B] font-medium mb-3">
          Atmosphere & Sanctuary
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#2C221E] font-light leading-tight mb-4">
          The Space
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#2C221E]/70 leading-relaxed">
          Designed around natural sunlight, warm tactile materials, and quiet acoustic comfort.
        </p>
      </div>

      {/* Zone Selector Buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-[#F5EFE6] p-1.5 rounded-full border border-[#E8E2D8] flex-wrap justify-center gap-1">
          {SPACE_ZONES.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setActiveSpace(zone)}
              className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeSpace.id === zone.id ? "text-[#2C221E] font-semibold" : "text-[#2C221E]/60 hover:text-[#2C221E]"
              }`}
            >
              {activeSpace.id === zone.id && (
                <motion.div
                  layoutId="activeSpaceTab"
                  className="absolute inset-0 bg-[#FDFBF7] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{zone.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Space Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSpace.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-10 items-center bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm"
        >
          {/* Space Image */}
          <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/30 via-transparent to-transparent" />
          </div>

          {/* Space Description */}
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8F9E8B] font-medium block mb-1">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#2C221E]">
                {activeSpace.name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#2C221E]/75 leading-relaxed font-sans">
              {activeSpace.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {activeSpace.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-[#2C221E]/80 font-medium">
                  <div className="p-1 rounded-full bg-[#8F9E8B]/15 text-[#8F9E8B]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
