"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "@/data/cafeData";
import { ItemDetailModal } from "./ItemDetailModal";

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export function MenuSection({ onOpenReservation }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("espresso");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: "espresso", label: "Signature Espresso" },
    { id: "slow-brew", label: "Slow Brews & Matcha" },
    { id: "pastry", label: "Artisan Pastries" },
    { id: "brunch", label: "Brunch & Plates" },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="block text-xs uppercase tracking-[0.25em] text-[#8F9E8B] font-medium mb-3">
          Curated Offerings
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#2C221E] font-light leading-tight mb-4">
          The Menu
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#2C221E]/70 leading-relaxed">
          Crafted daily using organic ingredients, single-origin roasts, and wild-harvested botanicals.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-[#F5EFE6] p-1.5 rounded-full border border-[#E8E2D8] flex-wrap justify-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeCategory === cat.id ? "text-[#2C221E] font-semibold" : "text-[#2C221E]/60 hover:text-[#2C221E]"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-[#FDFBF7] rounded-full shadow-xs"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Item Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-[#FDFBF7] border border-[#E8E2D8] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex gap-5 group"
            >
              {/* Image */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#2C221E] group-hover:text-[#C4A484] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-base font-semibold text-[#2C221E] ml-2">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C221E]/70 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dietary badges */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="flex gap-1.5 mt-2">
                    {item.dietary.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider text-[#8F9E8B] bg-[#8F9E8B]/10 px-2 py-0.5 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onOpenReservation={onOpenReservation}
      />
    </section>
  );
}
