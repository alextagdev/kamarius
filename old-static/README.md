# SC KAMARIUS SRL — Site web

Site profesional pentru firma de construcții SC KAMARIUS SRL.

## Culori folosite (extrase din logo.png)
- **Auriu / Gold principal**: `#C39F61`
- **Negru / Charcoal închis**: `#1F2120` și `#2A2D2B`
- **Fond cald crem**: `#F9F7F3`

## Personalizare obligatorie (înainte de publicare)

1. **Număr de telefon**
   - Caută în `index.html`: `+40751234567` și `0751 234 567`
   - Înlocuiește cu numărul real al firmei (există 4-5 apariții)

2. **WhatsApp**
   - Link-urile `https://wa.me/40751234567` → folosește numărul real (fără + sau 00)

3. **Email**
   - `office@kamarius.ro` → înlocuiește cu adresa reală de email

4. **Adresă**
   - Poți actualiza textul din secțiunea Contact dacă ai adresă completă (stradă, nr., cod poștal)

5. **Logo**
   - Fișierul `logo.png` este deja folosit (navbar + meta). Dacă vrei o versiune optimizată pentru web, înlocuiește fișierul.

## Cum rulezi local

```bash
# Cea mai simplă metodă
python3 -m http.server 8080
# apoi deschide http://localhost:8080
```

Sau pur și simplu dă dublu-click pe `index.html`.

## Cum publici (recomandat)

**Opțiuni rapide și gratuite:**

- **Netlify Drop** — trage fișierul `index.html` + `logo.png` pe https://app.netlify.com/drop
- **Vercel** — `npx vercel` (sau import din GitHub)
- **GitHub Pages** — încarcă fișierele în repo și activează Pages
- **Hostinger / IONOS / orice hosting** — încarcă ambele fișiere în folderul public

## Structura fișierelor

```
kamarius/
├── index.html      ← tot site-ul (self-contained + Tailwind CDN)
├── logo.png        ← logo-ul oficial
└── README.md
```

## Funcționalități incluse

- Design modern, responsive (mobil + desktop)
- Meniu mobil cu hamburger
- Secțiuni: Hero, Servicii (12 carduri), Portofoliu (10 proiecte), Despre noi, Certificări ISO, Contact
- Modal detaliat pentru fiecare proiect din portofoliu
- Formular de contact (demo + toast de confirmare)
- Buton flotant WhatsApp
- Linkuri directe telefon + WhatsApp peste tot
- Culori 100% din logo

## Notă importantă

Numerele de contact și email-ul sunt **placeholder**.  
Înainte să dai site-ul live, fă înlocuirile menționate mai sus.

Dacă vrei:
- să adaugi poze reale din proiecte (în loc de Unsplash)
- secțiune de testimoniale
- blog / noutăți
- formular real (Formspree, EmailJS, etc.)
- versiune multi-pagină sau cu CMS (Webflow / Framer)

...spune-mi și extindem site-ul.

Succes cu afacerea! 🏗️
