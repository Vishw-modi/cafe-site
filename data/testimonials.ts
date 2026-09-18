export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "The kind of place where you forget to check the time. The Golden Hour Oat Latte is pure serenity in a porcelain cup.",
    author: "Elena Rostova",
    role: "Architect & Daily Morning Guest",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "test-2",
    quote: "Stepping inside feels like entering a calm sanctuary away from the city noise. The cardamom lavender croissant is unforgettable.",
    author: "Julian Vance",
    role: "Design Director",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "test-3",
    quote: "From the gentle ambient lighting to the Uji matcha ritual, L'Aura sets a new benchmark for boutique hospitality.",
    author: "Clara Moreau",
    role: "Food & Travel Journalist",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
  }
];
