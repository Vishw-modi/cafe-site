import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "L'Aura — Slow Mornings. Beautifully Made.",
  description: "A luxury artisan coffee house and pastry sanctuary. Crafted with intention, served with calm.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#FDFBF7] text-[#2C221E] font-sans selection:bg-[#C4A484]/30 selection:text-[#2C221E]">
        {children}
      </body>
    </html>
  );
}

