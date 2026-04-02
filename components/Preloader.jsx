"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the preloader in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setLoading(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
      // Simulate loading time
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-6xl text-gold font-playfair tracking-[0.2em] font-bold"
            >
              ÉTOILE D'OR
            </motion.h1>
            <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1.5, delay: 0.5, ease: "anticipate" }}
               className="h-[1px] bg-gold mt-4 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
