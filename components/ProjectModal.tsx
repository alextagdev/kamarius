"use client";

import { X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const PHONE = "+40751234567";
const WHATSAPP = "40751234567";

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-96 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/95 hover:bg-white rounded-full text-xl text-[#1F2120] transition"
              aria-label="Închide"
            >
              <X size={20} />
            </button>
            <div className="absolute top-4 left-4 px-4 h-8 rounded-full bg-white flex items-center text-xs font-semibold tracking-wider text-[#1F2120]">
              {project.badge}
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="font-semibold text-3xl tracking-tight text-[#1F2120]">
              {project.title}
            </div>
            <div className="text-[#C39F61] font-medium mt-1 mb-6">
              {project.subtitle}
            </div>

            <div className="text-[#3A3D3B] leading-relaxed text-[15px]">
              {project.description}
            </div>

            <div className="mt-8 pt-6 border-t flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block text-xs px-4 py-1 rounded-full bg-[#F4F1EA] text-[#5C605E] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-x-2 px-6 h-12 rounded-2xl border border-[#1F2120] hover:bg-[#1F2120] hover:text-white text-sm font-semibold transition-colors"
              >
                <Phone size={16} />
                <span>Sună pentru detalii</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 px-6 h-12 bg-[#C39F61] hover:bg-[#A67C52] rounded-2xl text-white text-sm font-semibold transition-colors"
              >
                <span>Întreabă pe WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
