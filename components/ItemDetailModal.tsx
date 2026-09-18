"use client";

import { motion, AnimatePresence } from "motion/react";
import { MenuItem } from "@/data/cafeData";
import { X, Check } from "lucide-react";
import { useState } from "react";

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export function ItemDetailModal({ item, onClose, onOpenReservation }: ItemDetailModalProps) {
  const [selectedMilk, setSelectedMilk] = useState<string>("");

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C221E]/40 dark:bg-black/70 backdrop-blur-xs">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container / Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-lg bg-[#FDFBF7] dark:bg-[#181210] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D8] dark:border-[#2E2420] z-10 max-h-[90vh] flex flex-col text-[#2C221E] dark:text-[#F5EFE6]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FDFBF7]/80 dark:bg-[#181210]/80 backdrop-blur-md text-[#2C221E] dark:text-[#F5EFE6] hover:bg-[#E8E2D8] dark:hover:bg-[#2E2420] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Item Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/80 dark:from-[#181210]/95 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6 text-[#FDFBF7]">
              <span className="text-xs uppercase tracking-widest text-[#E8E2D8]/80 dark:text-[#A1B39C] font-medium block">
                {item.category.replace("-", " ")}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-0.5">{item.name}</h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 font-sans text-[#2C221E] dark:text-[#F5EFE6]">
            {/* Price & Description */}
            <div className="flex justify-between items-baseline border-b border-[#E8E2D8] dark:border-[#2E2420] pb-4">
              <p className="text-sm text-[#2C221E]/80 dark:text-[#F5EFE6]/80 leading-relaxed max-w-xs">
                {item.longDescription}
              </p>
              <span className="font-serif text-2xl font-semibold text-[#2C221E] dark:text-[#F5EFE6] shrink-0 ml-4">
                {item.price}
              </span>
            </div>

            {/* Origin & Tasting Notes */}
            {item.origin && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] dark:text-[#A1B39C] font-semibold block mb-1">
                  Origin & Estate
                </span>
                <p className="text-sm text-[#2C221E]/90 dark:text-[#F5EFE6]/90">{item.origin}</p>
              </div>
            )}

            {item.tastingNotes && item.tastingNotes.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] dark:text-[#A1B39C] font-semibold block mb-2">
                  Tasting Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full bg-[#F5EFE6] dark:bg-[#251D19] border border-[#E8E2D8] dark:border-[#2E2420] text-xs text-[#2C221E]/80 dark:text-[#F5EFE6]/80 font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Customization Options */}
            {item.milkOptions && item.milkOptions.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] dark:text-[#A1B39C] font-semibold block mb-2">
                  Milk Customization
                </span>
                <div className="space-y-2">
                  {item.milkOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setSelectedMilk(option)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                        selectedMilk === option || (!selectedMilk && option.includes("Included"))
                          ? "bg-[#2C221E] dark:bg-[#F5EFE6] text-[#FDFBF7] dark:text-[#2C221E] border-[#2C221E] dark:border-[#F5EFE6] font-semibold"
                          : "bg-white dark:bg-[#14100E] text-[#2C221E] dark:text-[#F5EFE6] border-[#E8E2D8] dark:border-[#2E2420] hover:bg-[#F5EFE6] dark:hover:bg-[#251D19]"
                      }`}
                    >
                      <span>{option}</span>
                      {(selectedMilk === option || (!selectedMilk && option.includes("Included"))) && (
                        <Check className="w-4 h-4 text-[#8F9E8B] dark:text-[#A1B39C]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dietary Tags */}
            {item.dietary && item.dietary.length > 0 && (
              <div className="flex gap-2 pt-2">
                {item.dietary.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest text-[#8F9E8B] dark:text-[#A1B39C] bg-[#8F9E8B]/10 dark:bg-[#A1B39C]/10 px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#E8E2D8] dark:border-[#2E2420]">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="w-full py-3.5 rounded-full bg-[#2C221E] dark:bg-[#F5EFE6] text-[#FDFBF7] dark:text-[#2C221E] text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#C4A484] dark:hover:bg-[#D6B798] transition-colors shadow-md text-center"
              >
                Enjoy at Our Cafe • Reserve Table
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
