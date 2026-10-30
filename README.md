<div align="center">
  <img src="public/logo.png" alt="Bhupesh Danewa Logo" width="90" height="90" style="border-radius: 18px;" />

  # Bhupesh Danewa — AI Engineer & Data Scientist Portfolio

  <p align="center">
    <strong>Architecting Agentic RAG Systems, Predictive ML Pipelines, and High-Performance AI Solutions.</strong>
  </p>

  <p align="center">
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-5.x-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Lighthouse-100%2F100-00CC66?style=flat-square&logo=lighthouse&logoColor=white" alt="Lighthouse" /></a>
    <a href="https://github.com/bhupeshdanewa07"><img src="https://img.shields.io/badge/GitHub-bhupeshdanewa07-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  </p>
</div>

---

## 📌 Overview

This repository contains the source code for the personal developer portfolio of **Bhupesh Danewa** (M.Tech in Artificial Intelligence, MANIT Bhopal). Built with a static-first architecture using **Astro 5**, **Tailwind CSS**, and **TypeScript**, the site achieves instant edge load times, zero client-side JavaScript overhead, and full dark/light theme versatility inspired by Google Stitch's *Syntactic Void* design system.

---

## ✨ Key Features

- **⚡ Blazingly Fast Static-First Architecture**: 100% pre-rendered static HTML/CSS (SSG) with zero client-side hydration penalty and zero backend dependencies.
- **🌓 Dual-Theme System (Syntactic Void & Clean Slate)**:
  - **Dark Mode**: Low-latency dark void (`#090D16`), deep card surfaces (`#111827`), hairline structural borders (`#1F2937`), and electric indigo/emerald accents.
  - **Light Mode**: Crisp slate canvas (`#F8FAFC`), white card surfaces, slate structural borders, and royal indigo accents.
  - **Zero-FOUC Toggle**: Instant theme switching backed by `localStorage` and system preference detection with zero Flash of Unstyled Content.
- **📱 12-Column Responsive Bento Grid**: Engineered for high information density across Desktop, Tablet, and Mobile devices.
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
│   │   ├── Navbar.astro          # Sticky navigation, logo & theme toggle
│   │   ├── Hero.astro            # Status badge, bio & framed portrait
│   │   ├── Experience.astro      # Interactive timeline (NIELIT & KPIT)
│   │   ├── Projects.astro        # 3-column Bento grid with metric badges
│   │   ├── Publications.astro    # ICCCNT 2025 conference paper showcase
│   │   ├── Skills.astro          # 3-column categorized technical stack
│   │   ├── EducationCerts.astro  # MANIT M.Tech, B.Tech & Verified Badges
│   │   └── Footer.astro          # Copyright & quick navigation links
│   ├── data/
│   │   └── resume.ts             # Single source of truth (strictly typed)
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, SEO, fonts & theme script
│   └── pages/
│       └── index.astro           # Single-page assembly
├── .gitignore                    # Git ignore configuration
├── astro.config.mjs              # Astro configuration
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
git clone https://github.com/bhupeshdanewa07/Portfolio_Website.git
cd Portfolio_Website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:4321/](http://localhost:4321/)** in your browser to view the live site with hot module reloading (HMR).

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

## 🌐 Deployment

Because this project compiles to pure static HTML, CSS, and assets, you can deploy it for free on any modern hosting provider:

### Deploy to GitHub Pages
1. Push your repository to GitHub.
2. In your repository settings, navigate to **Pages** > **Build and deployment**.
3. Select **GitHub Actions** and use the official Astro workflow.

### Deploy to Vercel / Netlify / Cloudflare Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

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

