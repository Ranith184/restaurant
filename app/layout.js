import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import contentData from "../data/content.json";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-poppins" });

export const metadata = {
  title: "Luxury Dining | Exceptional Culinary Experience",
  description: "Experience fine taste like never before. Welcome to our luxury restaurant, offering exclusive, high-end dining experiences.",
  keywords: "luxury restaurant, fine dining, exclusive dining, premium food, gourmet",
};

export default function RootLayout({ children }) {
  const { restaurant } = contentData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": restaurant.name,
    "image": "https://yourrestaurantluxury.com/images/hero-bg.jpg",
    "description": restaurant.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": restaurant.address
    },
    "telephone": restaurant.phone,
    "servesCuisine": "Fine Dining",
    "priceRange": "$$$$"
  };

  return (
    <html lang="en" className="scroll-smooth bg-black text-gray-100">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable} font-sans antialiased selection:bg-gold/30 selection:text-gold cursor-none`}>
        <CustomCursor />
        <Preloader />
        {children}
      </body>
    </html>
  );
}