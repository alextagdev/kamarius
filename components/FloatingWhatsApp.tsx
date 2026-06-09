"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export default function FloatingWhatsApp({ whatsappNumber }: FloatingWhatsAppProps) {
  const messages = [
    "Ai nevoie de ajutor ?",
    "Ai o întrebare ?..",
  ];

  const [showBubble, setShowBubble] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  // Show bubble after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation + message cycling
  useEffect(() => {
    if (!showBubble) return;

    const message = messages[currentIndex];
    setTypedText("");
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i < message.length) {
        setTypedText(message.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        // Show full message for a while, then switch
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % messages.length);
        }, 3800);
      }
    }, 52); // typing speed

    return () => clearInterval(typingInterval);
  }, [currentIndex, showBubble]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    setShowBubble(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div className="relative flex flex-col items-end">
        {/* Chat bubble */}
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative mb-3 mr-0.5 max-w-[215px] rounded-2xl bg-white px-4 py-3 text-sm shadow-xl border border-[#EDE9E1] text-[#1F2120]"
            >
              {/* Tail pointing to the button */}
              <div className="absolute -bottom-[5px] right-[17px] h-3 w-3 rotate-45 bg-white border-r border-b border-[#EDE9E1]" />

              <div className="relative z-10 pr-1 leading-snug">
                {typedText}
                {/* Blinking cursor while typing */}
                {typedText.length < messages[currentIndex].length && (
                  <span className="ml-0.5 inline-block h-3.5 w-[2px] bg-[#C39F61] align-middle animate-pulse" />
                )}
              </div>

              {/* Tiny close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowBubble(false);
                }}
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#EDE9E1] bg-[#F9F7F3] text-[9px] leading-none text-[#5C605E] hover:bg-white"
                aria-label="Închide sugestia"
              >
                ×
              </button>

              {/* Clickable overlay to open WhatsApp */}
              <div
                onClick={openWhatsApp}
                className="absolute inset-0 cursor-pointer rounded-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowBubble(false)}
          className="floating-wa flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Contactează-ne pe WhatsApp"
        >
          <span className="text-3xl">💬</span>
        </a>
      </div>
    </div>
  );
}
