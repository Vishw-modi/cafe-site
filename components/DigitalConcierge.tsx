"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "@/data/menu";
import { Sparkles, X, ArrowRight } from "lucide-react";

interface DigitalConciergeProps {
  onSelectItem: (item: MenuItem) => void;
}

export function DigitalConcierge({ onSelectItem }: DigitalConciergeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState<string | null>(null);

  const moodOptions = [
    { label: "☕ Something Strong", value: "strong", filter: (i: MenuItem) => i.category === "espresso" },
    { label: "🥐 Something Sweet", value: "sweet", filter: (i: MenuItem) => i.category === "pastry" },
    { label: "🌿 Something Light", value: "light", filter: (i: MenuItem) => i.dietary?.includes("Vegan") },
    { label: "🍵 Something Calming", value: "calming", filter: (i: MenuItem) => i.category === "slow-brew" },
  ];

  const selectedFilter = moodOptions.find((m) => m.value === mood)?.filter;
  const recommendedItems = selectedFilter ? MENU_ITEMS.filter(selectedFilter).slice(0, 2) : [];

  return (
    <>
      {/* Floating Concierge Trigger (Desktop & Mobile) */}
      <div className="fixed bottom-20 md:bottom-8 right-6 z-30">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FDFBF7] border border-[#E8E2D8] text-[#2C221E] shadow-xl hover:shadow-2xl hover:border-[#C4A484] transition-all duration-300 font-sans text-xs font-medium"
        >
          <Sparkles className="w-4 h-4 text-[#C4A484] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Not sure what to order?</span>
          <span className="sm:hidden">Menu Guide</span>
        </button>
      </div>

      {/* Concierge Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C221E]/30 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-md bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8E2D8] z-10 text-[#2C221E]"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F5EFE6] text-[#2C221E] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8F9E8B] font-medium block mb-1">
                  Digital Concierge
                </span>
                <h3 className="font-serif text-2xl text-[#2C221E] font-light">
                  What are you craving today?
                </h3>
              </div>

              {/* Mood Selector Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {moodOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setMood(opt.value)}
                    className={`py-3 px-3 rounded-2xl text-xs font-medium border transition-all text-center ${
                      mood === opt.value
                        ? "bg-[#2C221E] text-[#FDFBF7] border-[#2C221E] shadow-sm"
                        : "bg-white text-[#2C221E] border-[#E8E2D8] hover:bg-[#F5EFE6]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Recommendations Output */}
              {mood && recommendedItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 pt-4 border-t border-[#E8E2D8]"
                >
                  <span className="text-[11px] uppercase tracking-wider text-[#8F9E8B] font-semibold block">
                    Our Recommendation
                  </span>
                  {recommendedItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setIsOpen(false);
                        onSelectItem(item);
                      }}
                      className="p-3 rounded-2xl bg-white border border-[#E8E2D8] flex items-center justify-between hover:border-[#C4A484] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                        <div>
                          <h4 className="font-serif text-sm font-medium text-[#2C221E]">
                            {item.name}
                          </h4>
                          <span className="text-xs font-semibold text-[#2C221E]">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#8F9E8B] group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
