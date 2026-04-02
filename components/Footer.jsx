import Link from "next/link";
import contentData from "../data/content.json";

export default function Footer() {
  const { restaurant } = contentData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 py-12 md:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-2xl font-bold tracking-widest text-gold font-playfair mb-2 block">
            ÉTOILE D'OR
          </Link>
          <p className="font-light text-sm text-gray-500 uppercase tracking-widest">
            Fine Dining Restaurant
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <Link href="#about" className="hover:text-gold transition-colors">About</Link>
          <Link href="#menu" className="hover:text-gold transition-colors">Menu</Link>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm font-light text-center md:text-right">
          &copy; {currentYear} {restaurant.name}. All rights reserved.<br/>
          <span className="text-xs text-gray-600 mt-1 block">Designed with Elegance.</span>
        </div>

      </div>
    </footer>
  );
}
