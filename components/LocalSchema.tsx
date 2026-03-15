import Script from 'next/script';

export function LocalSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "PMW Infinity Gym",
    "image": "https://pmw-infinity-gym.vercel.app/logo.png",
    "@id": "https://pmw-infinity-gym.vercel.app/",
    "url": "https://pmw-infinity-gym.vercel.app/",
    "telephone": "+917388107639",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kalyanpur", 
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4835, 
      "longitude": 80.2724 
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "05:30",
        "closes": "22:00"
      }
    ],
    "priceRange": "₹₹1200"
  };

  return (
    <Script 
      id="local-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}