export interface MenuItem {
  id: string;
  name: string;
  category: "espresso" | "slow-brew" | "pastry" | "brunch";
  price: string;
  description: string;
  longDescription: string;
  image: string;
  origin?: string;
  tastingNotes?: string[];
  dietary?: ("Vegan" | "Gluten-Free" | "Dairy-Free" | "Organic")[];
  milkOptions?: string[];
}

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

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const CAFE_INFO = {
  name: "L'Aura",
  tagline: "Slow mornings. Beautifully made.",
  heroHeading: "Sanctuary for the Mindful Coffee Lover",
  heroDescription: "A quiet space where single-origin beans meet artisanal pastry craft. Every cup is brewed with intention, patience, and warmth.",
  address: "428 Serenity Lane, Arts District",
  phone: "+1 (555) 382-9102",
  hours: [
    { days: "Mon — Fri", time: "7:00 AM — 5:00 PM" },
    { days: "Sat — Sun", time: "8:00 AM — 6:00 PM" },
  ],
  instagram: "@laura.artisancafe",
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "item-1",
    name: "Golden Hour Oat Latte",
    category: "espresso",
    price: "$6.50",
    description: "Double shot Ethiopian Yirgacheffe, steamed minor figures oat milk, hint of wild cardamom.",
    longDescription: "Our signature morning ritual. We pair single-origin Ethiopian beans notes of bergamot and jasmine with velvety steamed oat milk and a hand-crushed cardamom rim.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    origin: "Yirgacheffe, Ethiopia (2,100m)",
    tastingNotes: ["Jasmine", "Bergamot", "Cardamom", "Silky Oat"],
    dietary: ["Vegan", "Organic"],
    milkOptions: ["Oat Milk (Included)", "Almond Milk", "House Cashew Cream"],
  },
  {
    id: "item-2",
    name: "Velvet Flat White",
    category: "espresso",
    price: "$5.75",
    description: "Restretto espresso blended with micro-foamed whole milk, chocolate nib dust.",
    longDescription: "A concentrated, ultra-smooth ristretto extraction folded into micro-foamed organic whole milk. Finished with grated raw Ecuadorian cacao.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    origin: "Huila, Colombia",
    tastingNotes: ["Dark Cocoa", "Roasted Hazelnut", "Creamy Finish"],
    dietary: ["Organic"],
    milkOptions: ["Organic Whole Milk", "Oat Milk", "Macadamia Milk"],
  },
  {
    id: "item-3",
    name: "Ceremonial Uji Matcha Latte",
    category: "slow-brew",
    price: "$7.00",
    description: "First-harvest Uji matcha whisked with warm bamboo whisk, raw acacia honey.",
    longDescription: "Imported directly from Kyoto, Japan. First-grade ceremonial matcha stone-ground and whisked to order with warm water and your choice of milk.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80",
    origin: "Kyoto, Japan",
    tastingNotes: ["Umami", "Sweet Grass", "Acacia Honey"],
    dietary: ["Vegan", "Organic"],
    milkOptions: ["Oat Milk", "Coconut Cream", "Whole Milk"],
  },
  {
    id: "item-4",
    name: "Kyoto Slow Drip Pour Over",
    category: "slow-brew",
    price: "$7.50",
    description: "12-hour cold extraction served over clear ice sphere with orange blossom mist.",
    longDescription: "Extracted drop by drop over 12 hours using Japanese glass towers. Resulting in a wine-like clarity with zero bitterness.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    origin: "Guatemala Antigua",
    tastingNotes: ["Stone Fruit", "Black Tea", "Orange Blossom"],
    dietary: ["Vegan", "Gluten-Free"],
  },
  {
    id: "item-5",
    name: "Wild Lavender Cardamom Croissant",
    category: "pastry",
    price: "$5.50",
    description: "72-layer cultured butter croissant infused with culinary lavender glaze.",
    longDescription: "Hand-rolled over three days using French cultured butter and organic flour. Baked fresh every morning at 6:00 AM.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Cultured Butter", "Lavender Infusion", "Flaky Crunch"],
    dietary: ["Organic"],
  },
  {
    id: "item-6",
    name: "Pistachio Rose Frangipane Tart",
    category: "pastry",
    price: "$6.25",
    description: "Bronte pistachio cream, crushed rose petals, almond crust.",
    longDescription: "Sicilian pistachio paste baked inside a crisp butter crust, topped with crystallized organic rose petals and orange blossom syrup.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Sicilian Pistachio", "Rose Water", "Butter Crust"],
    dietary: ["Organic"],
  },
  {
    id: "item-7",
    name: "Avocado & Whipped Ricotta Toast",
    category: "brunch",
    price: "$14.50",
    description: "House sourdough, lemon zest, heirloom radish, toasted nigella seeds.",
    longDescription: "Thick-cut 48-hour fermented sourdough toasted in olive oil, topped with house-whipped sheep's milk ricotta, smashed Hass avocado, and pickled radish.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Tart Sourdough", "Creamy Ricotta", "Citrus Zest"],
    dietary: ["Organic"],
  },
  {
    id: "item-8",
    name: "Slow Poached Egg & Grain Bowl",
    category: "brunch",
    price: "$16.00",
    description: "Farro, warm roasted squash, kale, 63°C poached farm egg, herb oil.",
    longDescription: "Ancient farro grains tossed with brown butter roasted butternut squash, wilted lacinato kale, and a sous-vide poached egg.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    tastingNotes: ["Nutty Farro", "Rich Egg Yolk", "Herbal Crunch"],
    dietary: ["Gluten-Free", "Organic"],
  }
];

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
