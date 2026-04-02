"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiSwiggy, SiZomato, SiWhatsapp } from "react-icons/si";
import MagneticButton from "./MagneticButton";
import contentData from "../data/content.json";

export default function Contact() {
  const { restaurant } = contentData;

  return (
    <section id="contact" className="py-24 md:py-32 bg-black text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-12"
        >
          <div>
            <h4 className="text-gold uppercase tracking-[0.3em] text-sm mb-2">Visit Us</h4>
            <h2 className="text-4xl md:text-5xl font-playfair mb-8">Make a Reservation</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              We highly recommend booking your table in advance. For parties larger than 6 or special events, please contact us directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h5 className="font-playfair text-xl mb-1">Address</h5>
                <p className="text-gray-400 font-light">{restaurant.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Phone className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h5 className="font-playfair text-xl mb-1">Reservation</h5>
                <p className="text-gray-400 font-light">{restaurant.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h5 className="font-playfair text-xl mb-1">Email</h5>
                <p className="text-gray-400 font-light">{restaurant.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold shrink-0 mt-1" size={24} />
              <div>
                <h5 className="font-playfair text-xl mb-1">Opening Hours</h5>
                <p className="text-gray-400 font-light">Mon-Fri: {restaurant.openingHours["Mon-Fri"]}</p>
                <p className="text-gray-400 font-light">Sat-Sun: {restaurant.openingHours["Sat-Sun"]}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row flex-wrap gap-4">
            {restaurant.whatsapp !== "#" && (
              <MagneticButton>
                 <a
                  href={restaurant.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold text-black px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <SiWhatsapp size={18} /> Chat on WhatsApp
                </a>
              </MagneticButton>
            )}
            {restaurant.swiggyUrl && restaurant.swiggyUrl !== "#" && (
              <MagneticButton>
                <a
                  href={restaurant.swiggyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <SiSwiggy size={18} /> Order on Swiggy
                </a>
              </MagneticButton>
            )}
            {restaurant.zomatoUrl && restaurant.zomatoUrl !== "#" && (
              <MagneticButton>
                <a
                  href={restaurant.zomatoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  <SiZomato size={18} /> Order on Zomato
                </a>
              </MagneticButton>
            )}
          </div>
        </motion.div>

        {/* Map / Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 h-[500px] bg-[#111] relative border border-white/10"
        >
          {/* Embedding a simple Google Maps IFRAME or a stylish placeholder */}
          <iframe 
            src={restaurant.mapEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.8)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </motion.div>
        
      </div>
    </section>
  );
}
