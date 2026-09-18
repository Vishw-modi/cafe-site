export const siteConfig = {
  name: "L'AURA",
  legalName: "L'Aura Artisan Coffee House",
  tagline: "Slow mornings. Beautifully made.",
  description: "A luxury artisan coffee house and pastry sanctuary. Crafted with intention, served with calm.",
  url: "https://cafe-site-ten-inky.vercel.app",
  ogImage: "https://cafe-site-ten-inky.vercel.app/og.png",
  logo: "/icon.svg",
  
  // Demo Business Contact Information (Easily replaceable for future clients)
  phone: "+1 (555) 382-9102",
  email: "hello@lauracafe.demo",
  address: {
    street: "428 Serenity Lane",
    neighborhood: "Arts District",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    country: "US",
  },
  
  hours: [
    { days: "Mon — Fri", open: "07:00", close: "17:00", formatted: "7:00 AM — 5:00 PM" },
    { days: "Sat — Sun", open: "08:00", close: "18:00", formatted: "8:00 AM — 6:00 PM" },
  ],

  social: {
    instagram: "@laura.artisancafe",
    instagramUrl: "https://instagram.com/laura.artisancafe",
    mapsUrl: "https://maps.google.com",
  },

  priceRange: "$$",
  cuisine: ["Artisan Coffee", "French Pastry", "Organic Brunch"],

  creator: {
    name: "Vishw Modi",
    url: "https://github.com/Vishw-modi",
  },
};

export type SiteConfig = typeof siteConfig;
