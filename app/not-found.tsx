import Link from "next/link";
import { Coffee, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] bg-grain text-[#2C221E] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="w-16 h-16 rounded-full bg-[#F5EFE6] border border-[#E8E2D8] flex items-center justify-center mb-6 text-[#8F9E8B]">
        <Coffee className="w-8 h-8 stroke-[1.5]" />
      </div>

      <span className="text-xs uppercase tracking-[0.3em] text-[#8F9E8B] font-medium mb-3">
        404 — Page Not Found
      </span>

      <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#2C221E] max-w-lg mb-4 leading-tight">
        Looks like you've wandered a little too far.
      </h1>

      <p className="font-serif italic text-lg sm:text-xl text-[#2C221E]/70 max-w-md mb-8">
        Let's get you back to something warm.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C221E] text-[#FDFBF7] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#C4A484] transition-all duration-300 shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to the Café</span>
      </Link>
    </div>
  );
}
