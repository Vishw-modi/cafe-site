export interface SpaceZone {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const SPACE_ZONES: SpaceZone[] = [
  {
    id: "terrace",
    name: "Sunny Garden Terrace",
    subtitle: "Sun-dappled morning breeze & olive trees",
    description: "Our outdoor garden sanctuary surrounded by potted olive trees, fragrant lavender, and natural stone tables. Perfect for slow morning readings and sunlit espresso.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    features: ["Natural Sunlit Seating", "Outdoor Heater", "Pet Friendly", "Fresh Air Breeze"],
  },
  {
    id: "alcove",
    name: "Quiet Interior Alcove",
    subtitle: "Warm oak timber & ambient acoustic calm",
    description: "Designed for focused deep work or intimate conversations. Features custom oak bench seating, warm diffused sconce lighting, and soft acoustic paneling.",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    features: ["Power Outlets Available", "Soft Acoustic Interior", "Reading Library", "Intimate Seating"],
  },
  {
    id: "bar",
    name: "Espresso Tasting Bar",
    subtitle: "Front-row seat to the craft ritual",
    description: "Pull up a stool at our marble espresso bar to witness single-origin pour overs, latte art, and daily roast cuppings up close with our master baristas.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    features: ["Barista Cupping Talks", "Pour Over Drip Towers", "Fresh Bakery Display", "Single-Origin Flight"],
  },
];
