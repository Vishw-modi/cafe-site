export interface CraftStory {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  videoUrl?: string;
  imageUrl: string;
  details: {
    origin: string;
    process: string;
    notes: string;
  };
}

export const CRAFT_STORIES: CraftStory[] = [
  {
    id: "craft-1",
    title: "The Extraction Ritual",
    subtitle: "Precision temperature, pressure, and patience.",
    quote: "Every shot of espresso is a snapshot of time, climate, and human effort.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    details: {
      origin: "Single Estate High Altitude Beans",
      process: "Washed & Sun-Dried on Raised Beds",
      notes: "Golden Crema, Balanced Acidity, Lingering Sweetness"
    }
  },
  {
    id: "craft-2",
    title: "72-Hour Laminated Pastry",
    subtitle: "French Normandy Butter & Ancient Grains.",
    quote: "Time is our secret ingredient. True lamination cannot be rushed.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    details: {
      origin: "Normandy Butter, France",
      process: "72-Hour Fermentation & Hand Folding",
      notes: "Crisp Outer Layers, Soft Pillow Interior"
    }
  }
];
