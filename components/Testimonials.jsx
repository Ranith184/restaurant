"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import contentData from "../data/content.json";
import SpotlightCard from "./SpotlightCard";

export default function Testimonials() {
  const { testimonials } = contentData;

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Guest Experiences</h4>
        <h2 className="text-4xl md:text-5xl font-playfair mb-16">What They Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <SpotlightCard className="bg-black/50 p-8 border border-white/5 hover:border-gold/30 transition-colors duration-300 h-full">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold mx-1" />
                  ))}
                </div>
                <p className="text-gray-300 font-light italic mb-8 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <h5 className="text-white font-playfair uppercase tracking-widest text-sm">
                  - {testimonial.name}
                </h5>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
