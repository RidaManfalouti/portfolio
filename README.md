# 🚀 Portfolio Professionnel — Rida MANFALOUTI

Portfolio One-Page moderne, épuré et responsive conçu pour **Rida MANFALOUTI**, Ingénieur Logiciel spécialisé en **Full Stack** (.NET Core, Spring Boot, React) et **Intelligence Artificielle** (RAG, LLM, OCR).

---

## 🛠️ Stack Technique

- **Front-End** : React 18, Vite 6, TypeScript-ready
- **Styling** : Tailwind CSS, Thème Dark Mode cyber & élégant, Glassmorphism
- **Icônes** : Lucide React & Custom SVG brand icons (GitHub, LinkedIn)
- **Animations** : Animations fluides au défilement (Intersection Observer API), transitions CSS micro-interactions
- **Optimisation** : Mobile-First, bundle optimisé (Vite)

---

## 📂 Architecture du Projet

```text
portfolio/
├── public/
│   └── cv-rida-manfalouti.pdf     # CV synchronisé téléchargeable
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Menu sticky avec flou de verre et spy de défilement
│   │   ├── Hero.jsx               # Hero section percutante avec stats, CTA et terminal de code
│   │   ├── Skills.jsx             # Grille de compétences visuelles & certifications
│   │   ├── Experience.jsx         # Timeline interactive (focus Algo Consulting OCR & RAG)
│   │   ├── Projects.jsx           # Cartes projets avec filtres, tags et effets de survol
│   │   ├── Contact.jsx            # Formulaire minimaliste & coordonnées directes
│   │   ├── Footer.jsx             # Pied de page avec bouton retour en haut
│   │   └── Icons.jsx              # Icônes SVG vectorielles GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js       # Données centralisées (facilement modifiables)
│   ├── hooks/
│   │   └── useScrollReveal.js     # Hook d'animation au défilement fluide
│   ├── App.jsx                    # Point d'assemblage One-Page
│   ├── index.css                  # Directives Tailwind & styles sur-mesure
│   └── main.jsx                   # Montage React DOM
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚡ Démarrage Rapide

### 1. Lancer le serveur de développement local :
```bash
cd /home/rida/portfolio
npm run dev
```
Le serveur sera disponible sur `http://localhost:3000`.

### 2. Compiler pour la production :
```bash
npm run build
```
Les fichiers prêts à être servis seront générés dans le dossier `dist/`.

### 3. Prévisualiser le build de production :
```bash
npm run preview
```

---

## 🌐 Déploiement en 1 Clic

Ce projet est prêt pour :
- **Vercel** : `npx vercel`
- **Netlify** : `npx netlify deploy --prod --dir=dist`
- **GitHub Pages** : Configuration simple avec Vite `base: './'`.
