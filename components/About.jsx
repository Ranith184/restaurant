"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-[500px] md:h-[650px]"
        >
          <div className="absolute inset-0 border border-gold/30 translate-x-4 translate-y-4"></div>
          <Image
            src="/images/about.jpg"
            alt="Chef preparing fine dining meal"
            fill
            className="object-cover relative z-10"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8"
        >
          <h4 className="text-gold uppercase tracking-[0.3em] text-sm">Our Story</h4>
          <h2 className="text-4xl md:text-5xl font-playfair leading-tight">
            A Symphony of <br /> <span className="italic text-gray-400">Flavors & Elegance</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light">
            Founded with a passion for extraordinary culinary experiences, Étoile D'Or brings together master chefs, premium ingredients, and an ambiance that transcends the ordinary.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            Every dish is a carefully crafted masterpiece, designed to tantalize your taste buds and create memories that last forever. Join us and discover why our patrons call us the epitome of luxury dining.
          </p>
          
          <div className="pt-6">
            <Image 
              src="/images/signature.png" 
              alt="Executive Chef Signature" 
              width={200} 
              height={80} 
              className="opacity-50"
            />
            <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">Executive Chef</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
