<div align="center">
  <img src="public/logo.png" alt="Bhupesh Danewa Logo" width="90" height="90" style="border-radius: 18px;" />

  # Bhupesh Danewa — AI Engineer & Data Scientist Portfolio

  <p align="center">
    <strong>Architecting Agentic RAG Systems, Predictive ML Pipelines, and High-Performance AI Solutions.</strong>
  </p>

  <p align="center">
    <a href="https://bhupeshdanewa07.github.io/portfolio/"><img src="https://img.shields.io/badge/Live_Demo-Online-00CC66?style=flat-square&logo=googlechrome&logoColor=white" alt="Live Demo" /></a>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://github.com/bhupeshdanewa07/portfolio"><img src="https://img.shields.io/badge/GitHub-bhupeshdanewa07%2Fportfolio-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  </p>

  <p align="center">
    <a href="https://bhupeshdanewa07.github.io/portfolio/">
      <img src="https://img.shields.io/badge/🌐_Visit_Live_Website-bhupeshdanewa07.github.io%2Fportfolio-8083ff?style=for-the-badge" alt="Visit Live Website" />
    </a>
  </p>
</div>

---

## 🌐 Live Website

> **Access the deployed portfolio here:** **[https://bhupeshdanewa07.github.io/portfolio/](https://bhupeshdanewa07.github.io/portfolio/)**

---

## 📌 Overview

This repository contains the source code for the personal developer portfolio of **Bhupesh Danewa** (M.Tech in Artificial Intelligence, MANIT Bhopal). Built with a static-first architecture using **Astro 5**, **Tailwind CSS**, and **TypeScript**, the site achieves instant edge load times, zero client-side JavaScript overhead, and full dark/light theme versatility inspired by Google Stitch's *Syntactic Void* design system.

---

## ✨ Key Features

- **⚡ Blazingly Fast Static-First Architecture**: 100% pre-rendered static HTML/CSS (SSG) with zero client-side hydration penalty and zero backend dependencies.
- **📍 Fixed Navbar with Interactive Scroll-Spy**: Top navigation stays permanently fixed with zero layout shift, interactively highlighting the active section (`#experience`, `#projects`, `#research`, `#skills`, `#education`) as you scroll.
- **📐 Engineering Blueprint Dot-Grid Canvas**: Subtle hardware-accelerated radial matrix pattern with ambient top spotlight across dark and light modes.
- **✨ Tactile Card Physics & Hover Glow**: Micro-interactions featuring multi-layered elevation, dynamic glow shadows, and illuminating top gradient border accents.
- **📊 Hero Impact Metric Bento**: High-density quantitative credential strip highlighting academic pedigree, NVIDIA certification, Scopus-indexed research, and core AI specializations.
- **🌓 Dual-Theme System (Syntactic Void & Clean Slate)**:
  - **Dark Mode**: Low-latency dark void (`#090D16`), deep card surfaces (`#181b25`), hairline structural borders (`#1F2937`), and electric indigo/emerald accents.
  - **Light Mode**: Crisp slate canvas (`#F8FAFC`), white card surfaces, slate structural borders, and royal indigo accents.
  - **Zero-FOUC Toggle**: Instant theme switching backed by `localStorage` and system preference detection with zero Flash of Unstyled Content.
- **📱 100% Mobile Responsive**: Dedicated mobile slide-down navigation drawer, fluid typography, touch-friendly tap targets, and horizontal overflow protection.
- **🔒 Single Source of Truth**: All verified data (education, appointments, publications, projects, credentials) is strictly typed in [`src/data/resume.ts`](./src/data/resume.ts).
- **🖼️ Framed Hero Portrait**: High-resolution personal portrait with subtle ambient glow backdrop and responsive card framing.
- **🔍 Full SEO & OpenGraph Optimization**: Pre-configured meta tags, semantic HTML5 structure, and Google Fonts preconnection.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Astro 5](https://astro.build)** | Static Site Generator (SSG) & component framework |
| **[Tailwind CSS](https://tailwindcss.com)** | Utility-first styling with custom Google Stitch design tokens |
| **[TypeScript](https://www.typescriptlang.org)** | Strict-mode type safety for verified resume data & components |
| **[Google Fonts](https://fonts.google.com)** | *Plus Jakarta Sans* (Editorial) & *JetBrains Mono* (Telemetry/Code) |
| **[Material Symbols](https://fonts.google.com/icons)** | Crisp, modern technical glyphs & icons |

---

## 📂 Project Structure

```
Portfolio_Website/
├── public/                       # Static public assets
│   ├── favicon.ico               # Multi-size website icon
│   ├── favicon.png               # High-res PNG favicon
│   ├── favicon-32.png            # 32x32 favicon
│   ├── favicon-64.png            # 64x64 favicon
│   ├── logo.png                  # BD monogram header logo
│   └── portrait.jpg              # Personal hero portrait
├── src/
│   ├── components/               # Modular Astro components
│   │   ├── Navbar.astro          # Fixed navigation, logo, theme toggle & scroll-spy
│   │   ├── Hero.astro            # Status badge, bio, framed portrait & metric strip
│   │   ├── Experience.astro      # Interactive timeline (NIELIT & KPIT)
│   │   ├── Projects.astro        # 3-column Bento grid with metric badges & glow
│   │   ├── Publications.astro    # Peer-reviewed Scopus-indexed paper showcase
│   │   ├── Skills.astro          # 3-column categorized technical stack
│   │   ├── EducationCerts.astro  # MANIT M.Tech, B.Tech & Verified Badges
│   │   └── Footer.astro          # Copyright & quick navigation links
│   ├── data/
│   │   └── resume.ts             # Single source of truth (strictly typed)
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, SEO, dot-grid canvas & theme script
│   └── pages/
│       └── index.astro           # Single-page assembly
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions Pages deployment
├── .gitignore                    # Git ignore configuration
├── astro.config.mjs              # Astro configuration (base: /portfolio)
├── package.json                  # Scripts & project dependencies
├── tailwind.config.mjs           # Custom Stitch theme configuration
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js** (v18.14.1 or higher) installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/bhupeshdanewa07/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:4321/portfolio/](http://localhost:4321/portfolio/)** in your browser to view the live site with hot module reloading (HMR).

### 5. Build for Production
```bash
npm run build
```
This generates an optimized, zero-JavaScript static production build inside the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

### 7. Run Type Checking
```bash
npm run check
```

---

## ⚙️ Customization

### Modifying Content
All personal details, experience bullets, project metrics, publication links, and certification credentials are centralized in:
```
src/data/resume.ts
```
Simply edit this file; changes automatically propagate to all components with full TypeScript validation.

### Updating Images
- **Portrait**: Replace `public/portrait.jpg`
- **Logo / Favicon**: Replace `public/logo.png` and `public/favicon.ico`

---

## 📬 Contact & Connect

- **Name**: Bhupesh Danewa
- **Email**: [prince.danewa@gmail.com](mailto:prince.danewa@gmail.com)
- **Phone**: [+91-9468601702](tel:+919468601702)
- **LinkedIn**: [linkedin.com/in/bhupesh-danewa](https://linkedin.com/in/bhupesh-danewa)
- **GitHub**: [github.com/bhupeshdanewa07](https://github.com/bhupeshdanewa07)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
