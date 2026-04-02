"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contentData from "../data/content.json";
import SpotlightCard from "./SpotlightCard";

export default function Menu() {
  const { menu, restaurant } = contentData;
  const [activeCategory, setActiveCategory] = useState(menu[0]?.category);

  const currentCategory = menu.find((c) => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#050505] text-white px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 border-b border-gray-800 pb-10">
          <h4 className="text-gold uppercase tracking-[0.3em] text-sm mb-4">Culinary Masterpieces</h4>
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">Curated Menu</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {menu.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`text-lg uppercase tracking-widest transition-all duration-300 font-playfair ${
                activeCategory === cat.category
                  ? "text-gold border-b-2 border-gold pb-2"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 md:gap-x-24"
            >
              {currentCategory?.items.map((item, index) => (
                <SpotlightCard key={index} className="group p-6 border border-white/5 bg-[#0a0a0a]/50 rounded-sm">
                  <div className="flex justify-between items-baseline border-b border-gray-800 pb-4 mb-4">
                    <h3 className="text-xl font-playfair group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold font-semibold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </SpotlightCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block border border-gold text-gold px-10 py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-black transition-all duration-300"
          >
            Reserve Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
