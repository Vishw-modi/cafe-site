import { siteConfig } from "@/config/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "image": siteConfig.ogImage,
    "telephone": siteConfig.phone,
    "priceRange": siteConfig.priceRange,
    "servesCuisine": siteConfig.cuisine,
    "menu": `${siteConfig.url}#menu`,
    "acceptsReservations": "True",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.zip,
      "addressCountry": siteConfig.address.country,
    },
    "openingHoursSpecification": siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.days.includes("Mon") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : ["Saturday", "Sunday"],
      "opens": h.open,
      "closes": h.close,
    })),
    "sameAs": [siteConfig.social.instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
