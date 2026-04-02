"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpeg",
    "/images/gallery-4.jpeg",
  ];

  return (
    <section id="gallery" className="py-2 bg-black py-24 md:py-32">
      <div className="text-center mb-16">
        <h4 className="text-gold uppercase tracking-[0.3em] text-sm mb-4">The Atmosphere</h4>
        <h2 className="text-4xl md:text-5xl font-playfair text-white">Visual Excellence</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative h-[400px] md:h-[500px] w-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
