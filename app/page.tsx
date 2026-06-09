"use client";

import { useState } from "react";
import { Phone, Award, Users, MapPin, Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import Navbar from "@/components/Navbar";
import ProjectModal from "@/components/ProjectModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { projects, type Project } from "@/lib/projects";

// Contact config (easy to edit)
const PHONE_RAW = "+40751234567";
const PHONE_DISPLAY = "0751 234 567";
const WHATSAPP = "40751234567";
const EMAIL = "office@kamarius.ro";
const ADDRESS = "Craiova, județul Dolj, România";

export default function KamariusSite() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openProject = (project: Project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  const testimonials = [
    {
      name: "Maria C.",
      project: "Kaufland România – mentenanță 42 magazine",
      quote: "Echipa KAMARIUS a realizat mentenanța la magazinele noastre din Craiova. Lucrări curate, rapide și de calitate superioară. Recomand cu încredere!",
    },
    {
      name: "Cristian M.",
      project: "Clinica Irina Craiova – camera de radiologie",
      quote: "Au amenajat camera de radiologie perfect, respectând toate normele medicale. Finisaje impecabile și comunicare excelentă pe tot parcursul proiectului.",
    },
    {
      name: "Elena D.",
      project: "De'Longhi România – compartimentări și finisaje",
      quote: "Compartimentări din gips-carton și finisaje de înaltă calitate pentru spațiul nostru industrial. Profesioniști adevărați, la timp și la preț corect.",
    },
    {
      name: "Andrei B.",
      project: "Casa Marius – Filiași",
      quote: "Au executat amenajarea completă a casei noastre din Filiași, inclusiv foișorul. Atenție la detalii și seriozitate deplină. Mulțumim!",
    },
  ];

  const reviewsPerView = 3;
  const maxSlide = Math.max(0, testimonials.length - reviewsPerView);
  const visibleReviews = testimonials.slice(currentSlide, currentSlide + reviewsPerView);

  // Contact form handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setIsSubmitting(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 850));

    // Show success toast
    toast.success("Cerere trimisă cu succes!", {
      description: "Vă vom contacta în maxim 24 de ore.",
    });

    // Also open email client as fallback (very useful for construction leads)
    const subject = encodeURIComponent("Cerere ofertă – SC KAMARIUS SRL");
    const body = encodeURIComponent(
      `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO - construction image from the very top, under transparent navbar */}
      <header className="relative text-white -mt-20 md:-mt-24 lg:-mt-28">
        {/* Full construction background image covering from the absolute top */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                to right, 
                #fff 0%, 
                #fff 12%, 
                rgba(255,255,255,0.8) 18%, 
                transparent 26%
              ),
              linear-gradient(rgba(31, 33, 32, 0.15), rgba(31, 33, 32, 0.45)),
              url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=2000&q=80')
            `
          }}
        />

        {/* Content wrapper with padding to clear the navbar */}
        <div className="pt-12 md:pt-20 lg:pt-28">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 pb-20 md:pb-24 lg:pb-32">
            <div className="max-w-[920px]">
              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-4 md:mb-8">
                <div className="inline-flex items-center gap-x-1.5 bg-white/10 backdrop-blur px-4 md:px-5 h-8 md:h-10 rounded-full text-xs md:text-sm font-medium">
                  <Check size={15} className="text-[#C39F61]" />
                  <span>ISO 9001 • ISO 14001</span>
                </div>
                <div className="inline-flex items-center gap-x-1.5 bg-white/10 backdrop-blur px-4 md:px-5 h-8 md:h-10 rounded-full text-xs md:text-sm font-medium">
                  <Check size={15} className="text-[#C39F61]" />
                  <span>Partener oficial Kaufland România</span>
                </div>
              </div>

              <h1 className="text-[52px] leading-[0.96] lg:text-[68px] xl:text-[78px] font-semibold tracking-[-2.2px] mb-7">
                Construcții civile,<br />
                industriale și agricole<br />
                <span className="gold">cu calitate și seriozitate.</span>
              </h1>

              {/* Hero buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3.5 w-full sm:w-auto mt-8">
                <a
                  href="#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-x-3 bg-white text-[#1F2120] font-semibold px-8 sm:px-10 h-16 text-[15px] sm:text-base rounded-2xl hover:bg-[#C39F61] hover:text-white active:scale-[0.985] transition-all shadow-sm"
                >
                  Solicită ofertă
                </a>

                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-x-3 border-2 border-white/75 hover:bg-white/10 font-semibold px-8 sm:px-9 h-16 text-[15px] sm:text-base rounded-2xl transition-all"
                >
                  <Phone size={19} />
                  <span>{PHONE_DISPLAY}</span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-x-3 border-2 border-white/75 hover:bg-white/10 font-semibold px-8 sm:px-9 h-16 text-[15px] sm:text-base rounded-2xl transition-all"
                >
                  WhatsApp
                </a>
              </div>

              <div className="mt-12 flex items-center gap-x-8 text-sm text-white/60">
                <div className="flex items-center -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#C39F61]/70 ring-2 ring-[#1F2120]" />
                  <div className="w-6 h-6 rounded-full bg-white/40 ring-2 ring-[#1F2120]" />
                  <div className="w-6 h-6 rounded-full bg-[#C39F61]/40 ring-2 ring-[#1F2120]" />
                </div>
                <div>42 magazine Kaufland • Clinica Irina • De&apos;Longhi • Salina Turda • QCLUB</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TRUST / STATS BAR - Cleaner & more spacious */}
      <div className="border-b border-[#EDE9E1] bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-7 grid grid-cols-2 md:grid-cols-4 gap-y-7 text-center">
          <div>
            <div className="text-[32px] font-semibold tracking-[-1px] text-[#1F2120]">42</div>
            <div className="text-sm text-[#5C605E] mt-1.5">Magazine Kaufland cu mentenanță</div>
          </div>
          <div>
            <div className="text-[32px] font-semibold tracking-[-1px] text-[#1F2120]">40+</div>
            <div className="text-sm text-[#5C605E] mt-1.5">Magazine cu finisaje complete</div>
          </div>
          <div>
            <div className="text-[32px] font-semibold tracking-[-1px] text-[#1F2120]">ISO</div>
            <div className="text-sm text-[#5C605E] mt-1.5">9001 &amp; 14001</div>
          </div>
          <div>
            <div className="text-[32px] font-semibold tracking-[-1px] text-[#1F2120]">Oltenia</div>
            <div className="text-sm text-[#5C605E] mt-1.5">+ proiecte naționale</div>
          </div>
        </div>
      </div>

      {/* SERVICII */}
      <section id="servicii" className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-11">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-3">CE OFERIM</div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter">Servicii complete<br />de construcții</h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-[#5C605E] text-[15px]">
            De la documentație și consultanță până la execuție și mentenanță.<br />
            Lucrăm cu profesionalism și respectăm termenele.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { icon: <span className="text-xl">🖌️</span>, title: "Finisaje interioare complete", desc: "Glet, zugrăveli, placări, pardoseli și finisaje premium pentru spații rezidențiale și comerciale." },
            { icon: <span className="text-xl">📐</span>, title: "Șape mecanizate", desc: "Șape autonivelante și mecanizate cu precizie ridicată, ideale pentru suprafețe mari." },
            { icon: <span className="text-xl">🛡️</span>, title: "Hidroizolații", desc: "Sisteme profesionale de hidroizolație pentru terase, subsoluri, băi și spații cu umiditate ridicată." },
            { icon: <span className="text-xl">🧱</span>, title: "Zidărie și compartimentări", desc: "Lucrări de zidărie structurală, compartimentări din BCA, cărămidă și sisteme moderne." },
            { icon: <span className="text-xl">📏</span>, title: "Compartimentări gips-carton", desc: "Sisteme ușoare și rapide de compartimentare, tavane false și soluții acustice." },
            { icon: <span className="text-xl">⬜</span>, title: "Tavane casetate", desc: "Montaj tavane casetate, plafoane tehnice și soluții de iluminat integrate pentru spații comerciale." },
            { icon: <span className="text-xl">⚡</span>, title: "Instalații electrice", desc: "Instalații electrice complete, tablouri, iluminat profesional și prize pentru spații comerciale." },
            { icon: <span className="text-xl">🔧</span>, title: "Mentenanță (regiunea Oltenia)", desc: "Intervenții rapide de mentenanță și reparații pentru finisaje interioare, în special pentru rețele comerciale." },
            { icon: <span className="text-xl">💬</span>, title: "Consultanță & legislație", desc: "Consultanță tehnică și suport pentru respectarea legislației în construcții." },
            { icon: <span className="text-xl">📄</span>, title: "Documentații tehnice", desc: "Întocmirea documentațiilor tehnice, caiete de sarcini, memorii tehnice și proiecte de execuție." },
            { icon: <span className="text-xl">🏠</span>, title: "Amenajări interioare și exterioare", desc: "Soluții complete de amenajare pentru locuințe, spații comerciale și clădiri industriale." },
            { icon: <span className="text-xl">🏢</span>, title: "Construcții civile & industriale", desc: "Execuție completă pentru clădiri de locuințe, spații comerciale, depozite și construcții agricole." },
          ].map((service, index) => (
            <div key={index} className="service-card bg-white border border-[#EDE9E1] rounded-3xl p-8">
              <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-[#F4F1EA] text-[#C39F61] mb-5">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-[#5C605E] text-[15px]">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTOFOLIU */}
      <section id="portofoliu" className="bg-[#1F2120] text-white py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-11">
            <div>
              <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-3">PROIECTE REPREZENTATIVE</div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter">Portofoliu</h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-sm text-white/60 text-[15px]">
              Lucrări executate pentru retaileri importanți, clinici, spații comerciale și proiecte rezidențiale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProject(project)}
                className="portfolio-card group bg-[#252726] rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 project-tag bg-white/90 text-[#1F2120]">
                    {project.badge}
                  </div>
                </div>
                <div className="p-7">
                  <div className="font-semibold text-lg leading-tight mb-1">{project.title}</div>
                  <div className="text-sm text-[#C39F61]">{project.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENZII */}
      <section id="recenzii" className="bg-white py-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter">Ce spun clienții noștri</h2>
            <p className="text-[#5C605E] mt-2">Recenzii de la clienții KAMARIUS</p>
          </div>

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleReviews.map((t, index) => (
              <div key={index} className="bg-white border border-[#EDE9E1] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C39F61]" fill="#C39F61" />
                  ))}
                </div>
                <p className="text-[#3A3D3B] text-[15px] leading-relaxed mb-5">"{t.quote}"</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-[#5C605E] mt-0.5">{t.project}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Buline / Dots pentru navigare */}
          {maxSlide > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    currentSlide === index 
                      ? 'bg-[#C39F61] scale-125' 
                      : 'bg-[#EDE9E1] hover:bg-[#C39F61]/50'
                  }`}
                  aria-label={`Vezi recenzia ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DESPRE NOI */}
      <section id="despre" className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-24">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-center">
          <div className="lg:col-span-7">
            <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-3">DESPRE COMPANIE</div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight mb-6">
              SC KAMARIUS SRL –<br />Construim cu responsabilitate,<br />calitate și încredere.
            </h2>

            <div className="max-w-2xl text-[#3A3D3B] text-[15px] leading-relaxed space-y-4">
              <p>
                SC KAMARIUS SRL este o companie românească specializată în execuția lucrărilor de construcții
                civile, industriale și agricole. Oferim servicii complete — de la consultanță și documentație
                tehnică până la execuție și mentenanță.
              </p>
              <p>
                Cu experiență acumulată în proiecte rezidențiale, comerciale și industriale de amploare,
                punem accent pe profesionalism, calitate și respectarea termenelor de execuție.
                Ne adresăm dezvoltatorilor imobiliari, companiilor private, instituțiilor publice și
                beneficiarilor individuali.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#EDE9E1] rounded-3xl p-8 lg:p-10">
            <h3 className="font-semibold text-xl mb-5">Misiunea noastră</h3>
            <p className="text-[#5C605E] text-[15px]">
              Să oferim soluții complete și durabile în domeniul construcțiilor, printr-o echipă profesionistă,
              materiale de calitate și o abordare orientată către nevoile fiecărui client.
            </p>

            <div className="mt-8 pt-8 border-t grid grid-cols-1 gap-y-5 text-sm">
              {[
                "Echipă tehnică experimentată – Lucrări executate la standarde înalte",
                "Respectarea termenelor – Planificare atentă și execuție organizată",
                "Soluții personalizate – Oferte clare și adaptate fiecărui proiect",
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="text-[#C39F61] mt-1 flex-shrink-0" size={18} />
                  <div className="text-[#3A3D3B]">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICĂRI */}
      <section className="bg-white border-y border-[#EDE9E1]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-16">
          <div className="text-center mb-8">
            <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-2">STANDARDE INTERNAȚIONALE</div>
            <h3 className="text-2xl font-semibold tracking-tight">Certificări</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-x-4 bg-[#F9F7F3] border border-[#EDE9E1] rounded-2xl px-8 py-5 w-full md:w-auto">
              <div className="text-4xl text-[#C39F61]">
                <Award size={36} />
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">ISO 9001</div>
                <div className="text-sm text-[#5C605E]">Managementul Calității</div>
              </div>
            </div>

            <div className="flex items-center gap-x-4 bg-[#F9F7F3] border border-[#EDE9E1] rounded-2xl px-8 py-5 w-full md:w-auto">
              <div className="text-4xl text-[#C39F61]">
                <Award size={36} />
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight">ISO 14001</div>
                <div className="text-sm text-[#5C605E]">Managementul Mediului</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-x-14 gap-y-12">
          {/* Contact info */}
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-[#C39F61] mb-3">HAIDETI SĂ VORBEȘTE</div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">
              Suntem pregătiți<br />să începem proiectul tău.
            </h2>

            <div className="space-y-6 text-[15px]">
              <div>
                <div className="font-semibold mb-1 text-sm text-[#5C605E]">TELEFON</div>
                <a href={`tel:${PHONE_RAW}`} className="block text-2xl font-semibold hover:text-[#C39F61] transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <div className="font-semibold mb-1 text-sm text-[#5C605E]">WHATSAPP</div>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 text-xl font-semibold text-[#C39F61] hover:underline"
                >
                  Trimite mesaj
                </a>
              </div>

              <div>
                <div className="font-semibold mb-1 text-sm text-[#5C605E]">EMAIL</div>
                <a href={`mailto:${EMAIL}`} className="text-xl hover:text-[#C39F61]">{EMAIL}</a>
              </div>

              <div>
                <div className="font-semibold mb-1 text-sm text-[#5C605E]">ADRESĂ</div>
                <div className="text-lg">{ADDRESS}</div>
                <div className="text-[#5C605E]">Regiunea Oltenia (mentenanță)</div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t text-sm text-[#5C605E]">
              Program: Luni – Vineri, 08:00 – 18:00<br />
              Pentru intervenții de urgență în afara programului, vă rugăm să ne contactați.
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-[#EDE9E1] rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium tracking-wider mb-2 text-[#5C605E]">NUME ȘI PRENUME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#F9F7F3] border border-[#EDE9E1] focus:border-[#C39F61] rounded-2xl px-5 py-3 text-sm"
                    placeholder="Numele complet"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-wider mb-2 text-[#5C605E]">TELEFON</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-[#F9F7F3] border border-[#EDE9E1] focus:border-[#C39F61] rounded-2xl px-5 py-3 text-sm"
                    placeholder="07xx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider mb-2 text-[#5C605E]">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-[#F9F7F3] border border-[#EDE9E1] focus:border-[#C39F61] rounded-2xl px-5 py-3 text-sm"
                  placeholder="adresa@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium tracking-wider mb-2 text-[#5C605E]">DESCRIERE PROIECT / SERVICIU DORIT</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y bg-[#F9F7F3] border border-[#EDE9E1] focus:border-[#C39F61] rounded-3xl px-5 py-3.5 text-sm"
                  placeholder="Ex: Finisaje interioare pentru un spațiu comercial de 350 mp în Craiova..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full h-16 bg-[#1F2120] hover:bg-black disabled:opacity-70 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-x-2 text-[15px]"
              >
                {isSubmitting ? "Se trimite..." : "Trimite cererea de ofertă"}
              </button>

              <p className="text-center text-xs text-[#5C605E]">
                Vă vom contacta în maxim 24 de ore.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F2120] text-white/70">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-16 py-11 text-sm flex flex-col md:flex-row justify-between gap-y-6">
          <div>© {new Date().getFullYear()} SC KAMARIUS SRL. Toate drepturile rezervate.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>Construcții Civile • Industriale • Agricole</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span>Finisaje • Șape • Hidroizolații</span>
          </div>
          <div>
            <a href="#" className="hover:text-white transition-colors">Politică de confidențialitate</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp with animated suggestion bubble */}
      <FloatingWhatsApp whatsappNumber={WHATSAPP} />

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
