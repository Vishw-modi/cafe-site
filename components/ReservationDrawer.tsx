"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Users, Sparkles, Check } from "lucide-react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationDrawer({ isOpen, onClose }: ReservationDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    date: "2026-09-20",
    time: "10:30 AM",
    guests: "2 Guests",
    seating: "Sunny Terrace",
    name: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-[#2C221E]/30 backdrop-blur-xs">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Drawer Container */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-md h-full bg-[#FDFBF7] shadow-2xl border-l border-[#E8E2D8] p-6 sm:p-8 flex flex-col justify-between z-10 overflow-y-auto"
        >
          {/* Header */}
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F9E8B] font-medium">
                Reserve Your Moment
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F5EFE6] text-[#2C221E] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <>
                <h3 className="font-serif text-3xl text-[#2C221E] font-light mb-2">
                  Table Reservation
                </h3>
                <p className="text-xs sm:text-sm text-[#2C221E]/70 mb-8 font-sans">
                  Reserve a quiet nook for coffee tasting, weekend brunch, or afternoon reading.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                  {/* Guest Count */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C221E]/80 mb-2 font-medium">
                      Party Size
                    </label>
                    <div className="flex gap-2">
                      {["1 Guest", "2 Guests", "4 Guests", "6+ Guests"].map((g) => (
                        <button
                          type="button"
                          key={g}
                          onClick={() => setFormData({ ...formData, guests: g })}
                          className={`flex-1 py-2 rounded-xl text-xs border transition-all ${
                            formData.guests === g
                              ? "bg-[#2C221E] text-[#FDFBF7] border-[#2C221E]"
                              : "bg-white text-[#2C221E] border-[#E8E2D8] hover:bg-[#F5EFE6]"
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#2C221E]/80 mb-1.5 font-medium">
                        Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-xs text-[#2C221E] focus:outline-hidden focus:border-[#2C221E]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#2C221E]/80 mb-1.5 font-medium">
                        Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-xs text-[#2C221E] focus:outline-hidden focus:border-[#2C221E]"
                      >
                        <option>9:00 AM</option>
                        <option>10:30 AM</option>
                        <option>12:00 PM</option>
                        <option>2:00 PM</option>
                        <option>4:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C221E]/80 mb-2 font-medium">
                      Seating Area
                    </label>
                    <div className="space-y-2">
                      {["Sunny Terrace", "Quiet Interior Alcove", "Espresso Tasting Bar"].map((area) => (
                        <button
                          type="button"
                          key={area}
                          onClick={() => setFormData({ ...formData, seating: area })}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-xs flex justify-between items-center border transition-all ${
                            formData.seating === area
                              ? "bg-[#2C221E] text-[#FDFBF7] border-[#2C221E]"
                              : "bg-white text-[#2C221E] border-[#E8E2D8] hover:bg-[#F5EFE6]"
                          }`}
                        >
                          <span>{area}</span>
                          {formData.seating === area && <Check className="w-4 h-4 text-[#8F9E8B]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2C221E]/80 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Clara Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-xs text-[#2C221E] focus:outline-hidden focus:border-[#2C221E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#C4A484] transition-colors shadow-md"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </>
            ) : (
              /* Success Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#8F9E8B]/20 text-[#8F9E8B] flex items-center justify-center">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-3xl text-[#2C221E]">We Look Forward to Seeing You</h3>
                <p className="text-sm text-[#2C221E]/75 font-sans leading-relaxed max-w-xs mx-auto">
                  Your table for <span className="font-semibold text-[#2C221E]">{formData.guests}</span> on{" "}
                  <span className="font-semibold text-[#2C221E]">{formData.date}</span> at{" "}
                  <span className="font-semibold text-[#2C221E]">{formData.time}</span> ({formData.seating}) has been reserved.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 px-8 py-3 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </motion.div>
            )}
          </div>

          <p className="text-[11px] text-[#2C221E]/50 text-center pt-6 border-t border-[#E8E2D8]">
            L'Aura Cafe • 428 Serenity Lane • Walk-ins always welcome
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
