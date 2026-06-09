# SC KAMARIUS SRL — Site web (Next.js)

Site profesional modern pentru firma de construcții **SC KAMARIUS SRL**.

## Culori din logo (folosite peste tot)
- **Gold**: `#C39F61`
- **Dark charcoal**: `#1F2120` / `#2A2D2B`
- **Fond cald**: `#F9F7F3`

## Personalizare rapidă (doar un loc)

Editează în `app/page.tsx` (liniile de sus):

```ts
const PHONE_RAW = "+40751234567";
const PHONE_DISPLAY = "0751 234 567";
const WHATSAPP = "40751234567";
const EMAIL = "office@kamarius.ro";
```

Toate linkurile, butoanele și formularul se actualizează automat.

## Rulare locală

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm run start
```

**Recomandat pentru deploy:** Vercel (cel mai simplu pentru Next.js)

1. Push pe GitHub
2. Import proiect pe [vercel.com](https://vercel.com)
3. Deploy automat (inclusiv preview-uri la fiecare commit)

## Structură proiect

```
app/
  layout.tsx          ← metadata, Toaster, fonturi
  page.tsx            ← tot site-ul (hero, servicii, portofoliu, contact)
  globals.css         ← stiluri brand + animații

components/
  Navbar.tsx
  ProjectModal.tsx

lib/
  projects.ts         ← toate proiectele din portofoliu (ușor de editat)

public/
  logo.png
```

## Ce conține site-ul

- Design premium, 100% responsive
- Navbar cu meniu mobil + efect scroll
- Hero + badge-uri încredere
- 12 servicii în grid
- Portofoliu cu 10 proiecte + modal frumos (cu framer-motion)
- Despre noi + Misiune
- Secțiune Certificări ISO
- Formular contact funcțional (toast + deschide client email)
- Buton flotant WhatsApp
- Toate textele din descrierea ta originală

## Note

- Imaginile din portofoliu sunt de pe Unsplash (placeholder).  
  Pentru poze reale, înlocuiește URL-urile din `lib/projects.ts` sau adaugă imagini în `public/` și actualizează path-urile.

- Formularul trimite automat un email prin clientul utilizatorului (mailto) + arată toast de succes.  
  Pentru formular real (fără mail client) putem adăuga mai târziu un Server Action + Resend / EmailJS.

## Fișiere vechi (de referință)

- `old-static/index.html` — versiunea statică anterioară
- `old-static/README.md`

Dacă vrei să adaugi:
- Hartă Google
- Testimoniale reale
- Galerie foto separată
- Blog / Noutăți
- Formular cu trimitere reală pe email (API Route + Resend)

...spune-mi și implementăm rapid.

Succes cu afacerea! 🏗️

