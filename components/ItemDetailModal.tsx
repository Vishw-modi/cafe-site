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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2C221E]/40 backdrop-blur-xs">
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
          className="relative w-full max-w-lg bg-[#FDFBF7] rounded-3xl overflow-hidden shadow-2xl border border-[#E8E2D8] z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FDFBF7]/80 backdrop-blur-md text-[#2C221E] hover:bg-[#E8E2D8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Item Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6 text-[#FDFBF7]">
              <span className="text-xs uppercase tracking-widest text-[#E8E2D8] font-medium block">
                {item.category.replace("-", " ")}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-0.5">{item.name}</h3>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 font-sans text-[#2C221E]">
            {/* Price & Description */}
            <div className="flex justify-between items-baseline border-b border-[#E8E2D8] pb-4">
              <p className="text-sm text-[#2C221E]/80 leading-relaxed max-w-xs">
                {item.longDescription}
              </p>
              <span className="font-serif text-2xl font-semibold text-[#2C221E] shrink-0 ml-4">
                {item.price}
              </span>
            </div>

            {/* Origin & Tasting Notes */}
            {item.origin && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] font-semibold block mb-1">
                  Origin & Estate
                </span>
                <p className="text-sm text-[#2C221E]/90">{item.origin}</p>
              </div>
            )}

            {item.tastingNotes && item.tastingNotes.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] font-semibold block mb-2">
                  Tasting Notes
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full bg-[#F5EFE6] border border-[#E8E2D8] text-xs text-[#2C221E]/80"
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
                <span className="text-xs uppercase tracking-wider text-[#8F9E8B] font-semibold block mb-2">
                  Milk Customization
                </span>
                <div className="space-y-2">
                  {item.milkOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedMilk(option)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                        selectedMilk === option || (!selectedMilk && option.includes("Included"))
                          ? "bg-[#2C221E] text-[#FDFBF7] border-[#2C221E]"
                          : "bg-white text-[#2C221E] border-[#E8E2D8] hover:bg-[#F5EFE6]"
                      }`}
                    >
                      <span>{option}</span>
                      {(selectedMilk === option || (!selectedMilk && option.includes("Included"))) && (
                        <Check className="w-4 h-4 text-[#8F9E8B]" />
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
                    className="text-[10px] uppercase tracking-widest text-[#8F9E8B] bg-[#8F9E8B]/10 px-2.5 py-1 rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action CTA */}
            <div className="pt-4 border-t border-[#E8E2D8]">
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="w-full py-3.5 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#C4A484] transition-colors shadow-md text-center"
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
