"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

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
    { href: "#despre", label: "Despre noi" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`bg-[#F9F7F3] border-b border-[#EDE9E1] sticky top-0 z-50 transition-all ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-6 lg:px-12 xl:px-16 flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="SC KAMARIUS SRL" 
              className="h-14 w-14 md:h-[62px] md:w-[62px] object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-9 text-base font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[#2A2D2B]">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-x-3">
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-x-2.5 px-7 py-3 text-[15px] font-semibold border border-[#2A2D2B] hover:bg-[#1F2120] hover:text-white rounded-2xl transition-colors"
            >
              <Phone size={17} />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2.5 px-7 py-3 bg-[#C39F61] hover:bg-[#A67C52] text-white text-[15px] font-semibold rounded-2xl transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-2xl text-[#2A2D2B]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-[#F9F7F3]">
          <div className="px-6 py-6 flex flex-col gap-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t flex flex-col gap-y-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="flex w-full items-center justify-center gap-x-3 py-4 border border-[#2A2D2B] rounded-2xl font-semibold text-base"
                onClick={closeMenu}
              >
                <Phone size={19} />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-x-3 py-4 bg-[#C39F61] text-white rounded-2xl font-semibold text-base"
                onClick={closeMenu}
              >
                Scrie-ne pe WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
