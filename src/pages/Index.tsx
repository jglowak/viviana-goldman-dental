import { useEffect } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add Schema.org structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness"],
      "name": "Dra. Viviana Goldman - Odontóloga",
      "image": "https://vivianagoldman.com.ar/og-image.jpg",
      "description": "Consultorio odontológico en Villa Crespo, Buenos Aires. Prótesis, estética, endodoncia e implantes. Atención particular personalizada.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Corrientes 5500",
        "addressLocality": "Villa Crespo",
        "addressRegion": "Buenos Aires",
        "postalCode": "C1414",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.598065,
        "longitude": -58.436064
      },
      "url": "https://vivianagoldman.com.ar",
      "telephone": "+5491112345678",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "paymentAccepted": "Efectivo, Transferencia, Sancor Salud",
      "areaServed": {
        "@type": "City",
        "name": "Buenos Aires"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Location />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;
