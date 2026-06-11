export interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Mentenanță finisaje interioare – Kaufland România",
    subtitle: "42 magazine • Mentenanță continuă",
    image: "/poza/kaufland/12123.jpeg",
    badge: "Mentenanță",
    description: "Lucrări periodice de mentenanță și reparații pentru finisajele interioare în 42 de magazine Kaufland din întreaga țară. Echipa noastră asigură intervenții rapide și de calitate, menținând standardele înalte impuse de lanțul de retail.",
    tags: ["Mentenanță", "Retail", "Finisaje", "Național"]
  },
  {
    id: 1,
    title: "Bloc S+P+10E Craiova",
    subtitle: "Finisaje interioare • Zidărie • Șape • Compartimentări",
    image: "/poza/bazin olimpic/bazin1.jpeg",
    badge: "În execuție",
    description: "Proiect amplu de finisaje interioare pentru un bloc cu regim de înălțime S+P+10E din Craiova. Lucrările includ zidărie, șape mecanizate, compartimentări și amenajări complete la standarde moderne.",
    tags: ["Rezidențial", "Craiova", "Finisaje", "Șape", "Zidărie"]
  },
  {
    id: 2,
    title: "Finisaje interioare – Kaufland România (40+ magazine)",
    subtitle: "Placări inox • Iluminat • Camere frigorifice • Tavane casetate",
    image: "/poza/kaufland/dasdadas.jpeg",
    badge: "Retail",
    description: "Execuție de finisaje interioare complete în peste 40 de magazine Kaufland. Lucrări complexe: placări cu inox, sisteme de iluminat profesional, camere frigorifice, compartimentări din gips-carton și tavane casetate.",
    tags: ["Retail", "Finisaje", "Inox", "Iluminat", "Gips-carton"]
  },
  {
    id: 3,
    title: "Casa Marius – Mercut, Filiași",
    subtitle: "Amenajare completă + foișor",
    image: "/poza/casa craiova/2323.jpeg",
    badge: "Rezidențial",
    description: "Proiect rezidențial complet în localitatea Mercut, Filiași. Amenajări interioare și exterioare, inclusiv construcția unui foișor elegant și finisaje de înaltă calitate pentru locuință.",
    tags: ["Rezidențial", "Filiași", "Amenajări", "Foișor"]
  },
  {
    id: 4,
    title: "Finisaje interioare – Intrarea Salina Turda",
    subtitle: "Obiectiv turistic de importanță națională",
    image: "https://images.unsplash.com/photo-1540518614846-6cd2e83b7a3e?w=1200&q=80",
    badge: "Obiectiv special",
    description: "Lucrări de finisaje interioare la intrarea în Salina Turda – unul dintre cele mai importante obiective turistice din România. Execuție de calitate în condiții de mediu speciale și trafic intens.",
    tags: ["Turism", "Finisaje", "Salina Turda", "Calitate"]
  },
  {
    id: 5,
    title: "De'Longhi România",
    subtitle: "Compartimentări gips-carton + finisaje interioare",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    badge: "Industrial",
    description: "Compartimentări moderne din gips-carton și finisaje interioare pentru spațiile De'Longhi România. Soluții tehnice adaptate cerințelor unei companii internaționale de electrocasnice.",
    tags: ["Industrial", "Gips-carton", "Finisaje", "Birouri"]
  },
  {
    id: 6,
    title: "QCLUB Craiova",
    subtitle: "Finisaje interioare + tavane casetate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56b08?w=1200&q=80",
    badge: "Horeca",
    description: "Amenajare completă a spațiului QCLUB Craiova. Finisaje interioare premium și tavane casetate cu integrare de iluminat, realizate la standarde înalte pentru industria Horeca.",
    tags: ["Horeca", "Craiova", "Tavane casetate", "Finisaje"]
  },
  {
    id: 7,
    title: "Logistică Kaufland Turda",
    subtitle: "Compartimentări • Gips-carton • Finisaje • Instalații electrice",
    image: "/poza/kaufland/dsdsa.jpeg",
    badge: "Logistică",
    description: "Lucrări ample de compartimentare, finisaje interioare, tavane și instalații electrice complete pentru centrul logistic Kaufland din Turda. Proiect de amploare cu cerințe tehnice ridicate.",
    tags: ["Logistică", "Gips-carton", "Instalații electrice", "Finisaje"]
  },
  {
    id: 8,
    title: "Clinica Irina – Camera de radiologie Craiova",
    subtitle: "Compartimentări gips-carton + finisaje speciale",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    badge: "Medical",
    description: "Amenajarea camerei de radiologie din cadrul Clinicii Irina Craiova. Lucrări de compartimentare gips-carton și finisaje interioare adaptate cerințelor stricte din domeniul medical.",
    tags: ["Medical", "Craiova", "Gips-carton", "Radiologie"]
  },
  {
    id: 9,
    title: "Magazine Froo – Craiova (2 locații)",
    subtitle: "Finisaje • Compartimentări • Instalații electrice • Amenajări",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    badge: "Retail",
    description: "Amenajări complete și reparații pentru două magazine Froo din Craiova. Finisaje interioare, compartimentări, instalații electrice și amenajări la cheie pentru spații comerciale moderne.",
    tags: ["Retail", "Craiova", "Amenajări", "Instalații electrice"]
  }
];
