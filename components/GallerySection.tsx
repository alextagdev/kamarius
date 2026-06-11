"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const PROJECTS = [
  {
    id: "bazin",
    name: "Bazin Olimpic",
    images: [
      "/poza/bazin olimpic/2323.jpeg",
      "/poza/bazin olimpic/3434324.jpeg",
      "/poza/bazin olimpic/423432423.jpeg",
      "/poza/bazin olimpic/WhatsApp Image 2026-06-10 at 11.08.35.jpeg",
      "/poza/bazin olimpic/WhatsApp Image. 2 2026-06-10 at 11.08.35.jpeg",
    ],
  },
  {
    id: "casa",
    name: "Casa Craiova",
    images: [
      "/poza/casa craiova/12123.jpeg",
      "/poza/casa craiova/21321321321.jpeg",
      "/poza/casa craiova/23123.jpeg",
      "/poza/casa craiova/23213123.jpeg",
      "/poza/casa craiova/241123.jpeg",
      "/poza/casa craiova/WhatsApp Image 2026-06-10 at 11.08.33.jpeg",
      "/poza/casa craiova/WhatsApp Image 2026-06-10 at 11.08.34.jpeg",
    ],
  },
  {
    id: "kaufland",
    name: "Kaufland",
    images: [
      "/poza/kaufland/dasdadas.jpeg",
      "/poza/kaufland/dsadsadas.jpeg",
      "/poza/kaufland/dsdae23.jpeg",
      "/poza/kaufland/dsdsa.jpeg",
      "/poza/kaufland/kadus.jpeg",
    ],
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<{ projectIdx: number; imgIdx: number } | null>(null);

  const activeImages = PROJECTS[activeTab].images;
  const total = lightbox ? PROJECTS[lightbox.projectIdx].images.length : 0;

  const prev = useCallback(() => {
    if (!lightbox) return;
    setLightbox((l) => l && { ...l, imgIdx: (l.imgIdx - 1 + total) % total });
  }, [lightbox, total]);

  const next = useCallback(() => {
    if (!lightbox) return;
    setLightbox((l) => l && { ...l, imgIdx: (l.imgIdx + 1) % total });
  }, [lightbox, total]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <section id="galerie" className="bg-[#F9F7F3] py-24 border-t border-[#EDE9E1]">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="mb-10">
          <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-3">
            GALERIE FOTO
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter">
            Proiectele noastre
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                activeTab === i
                  ? "bg-[#1F2120] text-white"
                  : "bg-white border border-[#EDE9E1] text-[#5C605E] hover:border-[#1F2120] hover:text-[#1F2120]"
              }`}
            >
              {p.name}
              <span
                className={`ml-2 text-xs ${
                  activeTab === i ? "text-[#C39F61]" : "text-[#C39F61]/70"
                }`}
              >
                {p.images.length}
              </span>
            </button>
          ))}
        </div>

        {/* Image grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {activeImages.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox({ projectIdx: activeTab, imgIdx: i })}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-[#EDE9E1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C39F61]"
              >
                <img
                  src={src}
                  alt={`${PROJECTS[activeTab].name} – ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {lightbox.imgIdx + 1} / {total}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={`${lightbox.projectIdx}-${lightbox.imgIdx}`}
                src={PROJECTS[lightbox.projectIdx].images[lightbox.imgIdx]}
                alt=""
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
