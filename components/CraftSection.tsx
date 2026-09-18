"use client";

import { motion } from "motion/react";
import { CRAFT_STORIES } from "@/data/cafeData";
import { Sparkles, Droplets, Flame } from "lucide-react";

export function CraftSection() {
  return (
    <section id="craft" className="py-24 px-6 bg-[#F5EFE6]/60 border-y border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="block text-xs uppercase tracking-[0.25em] text-[#8F9E8B] font-medium mb-3">
            Our Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2C221E] font-light leading-tight mb-4">
            The Craft
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#2C221E]/75">
            "Every cup begins long before it reaches the table."
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Visual Moment 1 - Espresso & Brewing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D8] group"
          >
            <img
              src={CRAFT_STORIES[0].imageUrl}
              alt="Espresso Extraction Craft"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#FDFBF7]">
              <span className="text-xs uppercase tracking-widest text-[#C4A484] font-medium block mb-1">
                Extraction Ritual
              </span>
              <h3 className="font-serif text-2xl font-normal mb-2">{CRAFT_STORIES[0].title}</h3>
              <p className="text-xs text-[#E8E2D8]/80 font-sans leading-relaxed">
                {CRAFT_STORIES[0].quote}
              </p>
            </div>
          </motion.div>

          {/* Story Details 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 px-2"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#E8E2D8]/60 text-[#2C221E]">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#2C221E] font-medium">Single Estate Harvest</h4>
                <p className="text-sm text-[#2C221E]/70 font-sans mt-1">
                  Grown at 2,100 meters elevation in organic soil, hand-picked at peak ripeness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#E8E2D8]/60 text-[#2C221E]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#2C221E] font-medium">Gentle Micro-Roasting</h4>
                <p className="text-sm text-[#2C221E]/70 font-sans mt-1">
                  Small-batch roasted weekly to unlock delicate floral top notes and deep cacao undertones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-[#E8E2D8]/60 text-[#2C221E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#2C221E] font-medium">Mindful Pouring</h4>
                <p className="text-sm text-[#2C221E]/70 font-sans mt-1">
                  Water filtered to precise mineral balance and heated to 93.5°C for zero bitterness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Story 2 - Pastry Craft */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Details 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4 px-2 order-2 md:order-1"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F9E8B] font-medium block">
              Bake House
            </span>
            <h3 className="font-serif text-3xl text-[#2C221E] font-light">72-Hour Laminated Pastry</h3>
            <p className="text-base text-[#2C221E]/75 leading-relaxed font-sans">
              Our pastries are never rushed. We fold French Normandy butter into fermented sourdough dough over 72 slow hours, producing a crisp golden crunch that yields to a feather-light interior.
            </p>
            <p className="font-serif italic text-sm text-[#C4A484]">
              "Time is our secret ingredient."
            </p>
          </motion.div>

          {/* Visual Moment 2 Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[380px] rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D8] order-1 md:order-2 group"
          >
            <img
              src={CRAFT_STORIES[1].imageUrl}
              alt="Artisan Pastry Lamination"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
