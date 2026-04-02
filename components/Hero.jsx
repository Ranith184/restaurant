"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import contentData from "../data/content.json";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury Restaurant Interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          A Taste of Perfection
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 leading-tight tracking-wide"
        >
          EXPERIENCE <br />
          <span className="italic text-gray-200">the Extraordinary</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <a
            href="#menu"
            className="bg-gold text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300"
          >
            Discover Menu
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            Reservation
          </a>
        </motion.div>


      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 z-10 animate-bounce"
      >
        <a href="#about" className="text-gray-400 hover:text-gold transition-colors">
          <ChevronDown size={32} strokeWidth={1} />
        </a>
      </motion.div>
    </section>
  );
}
