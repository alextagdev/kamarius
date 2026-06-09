"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_DISPLAY = "0751 234 567";
const PHONE_RAW = "+40751234567";
const WHATSAPP = "40751234567";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicii", label: "Servicii" },
    { href: "#portofoliu", label: "Portofoliu" },
    { href: "#recenzii", label: "Recenzii" },
    { href: "#despre", label: "Despre noi" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b bg-transparent ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-6 lg:px-12 xl:px-16 relative flex items-center justify-between h-20 md:h-24 lg:h-28 overflow-visible">
          {/* Large Logo - positioned absolutely so the bar stays compact */}
          <Link 
            href="/" 
            className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20"
          >
            <img 
              src="/logo-new.png" 
              alt="SC KAMARIUS SRL" 
              className="h-24 w-24 md:h-[120px] md:w-[120px] lg:h-[160px] lg:w-[160px] object-contain" 
            />
          </Link>

          {/* Spacer to push content after the big logo */}
          <div className="w-[110px] md:w-[140px] lg:w-[185px] flex-shrink-0" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-9 text-base font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`nav-link transition-colors ${scrolled ? 'text-[#2A2D2B] hover:text-[#1F2120]' : 'text-white/90 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-x-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className={`inline-flex items-center gap-x-2.5 px-7 py-3 text-[15px] font-semibold rounded-2xl transition-all border ${
                scrolled 
                  ? 'border-[#2A2D2B] hover:bg-[#1F2120] hover:text-white text-[#1F2120]' 
                  : 'border-white/60 hover:bg-white/10 text-white'
              }`}
            >
              <Phone size={17} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-x-2.5 px-7 py-3 text-[15px] font-semibold rounded-2xl transition-all ${
                scrolled 
                  ? 'bg-[#C39F61] hover:bg-[#A67C52] text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
              }`}
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button - animated hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-11 h-11 flex items-center justify-center ${scrolled ? 'text-[#2A2D2B]' : 'text-white'}`}
            aria-label={isOpen ? "Închide meniul" : "Deschide meniul"}
          >
            <div className="w-6 h-[19px] flex flex-col justify-between">
              <motion.span
                className="block h-[2px] w-full bg-current rounded-full"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 7.5 : 0,
                }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.span
                className="block h-[2px] w-full bg-current rounded-full"
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 6 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] w-full bg-current rounded-full"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -7.5 : 0,
                }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - with nice slide + fade effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t bg-[#F9F7F3] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-y-4 text-base font-medium">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 active:text-[#C39F61] transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t flex flex-col gap-y-3">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="flex w-full items-center justify-center gap-x-3 py-4 border border-[#2A2D2B] rounded-2xl font-semibold text-base active:bg-white/5 transition-colors"
                  onClick={closeMenu}
                >
                  <Phone size={19} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-x-3 py-4 bg-[#C39F61] text-white rounded-2xl font-semibold text-base active:bg-[#A67C52] transition-colors"
                  onClick={closeMenu}
                >
                  Scrie-ne pe WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
