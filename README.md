# Arun Kumawat — Developer Portfolio

A premium, dark-themed developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase production-shipped mobile apps with a recruiter-first, case-study-driven approach.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white)

---
 
## 🔗 Live Preview

> **[arunkumawatak.github.io/portfolio](https://arunkumawatak.github.io/portfolio/)**

---

## 📸 Screenshots

<img width="1364" height="641" alt="image" src="https://github.com/user-attachments/assets/477fa9c6-6721-4f33-9b81-f99f2ec5fe9e" />

<img width="1350" height="637" alt="image" src="https://github.com/user-attachments/assets/6148f21d-f08f-4c67-bbb4-1984d403ab67" />
<img width="1356" height="638" alt="image" src="https://github.com/user-attachments/assets/c5f42c11-a274-4af2-a4c4-07122de14b0f" />


---

## ✨ Features

- **Dark editorial design** — Premium aesthetic with amber accent palette, Playfair Display + Inter font pairing
- **Case-study format projects** — Each project presented as Problem → Solution → Impact (not just descriptions)
- **Scroll-triggered animations** — Smooth entrance animations using Framer Motion with `useInView` hooks
- **Fully responsive** — Optimized for desktop, tablet, and mobile viewports
- **Semantic HTML** — Proper heading hierarchy, accessible markup, SEO meta tags
- **Component-based architecture** — Clean, modular React components with TypeScript
- **Design token system** — All colors defined as HSL CSS variables with Tailwind integration
- **Performance optimized** — Lazy animations, minimal bundle, Vite-powered HMR

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              # Fixed navigation with scroll-aware styling
│   ├── HeroSection.tsx         # Landing section with headline, stats, CTAs
│   ├── TrustSection.tsx        # Credibility proof points
│   ├── ProjectsSection.tsx     # Case-study project cards (Problem/Solution/Impact)
│   ├── SkillsSection.tsx       # Categorized technical capabilities
│   ├── ExperienceSection.tsx   # Work history with highlights
│   ├── DifferentiationSection.tsx  # "Why hire me" value propositions
│   ├── ContactSection.tsx      # CTA + social links + footer
│   └── ui/                     # shadcn/ui component library
├── pages/
│   ├── Index.tsx               # Main portfolio page (composes all sections)
│   └── NotFound.tsx            # 404 page
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── index.css                   # Design tokens, fonts, custom utilities
└── main.tsx                    # App entry point with router
```

---

## 🎨 Design System

### Color Palette

| Token | HSL Value | Usage |
|-------|-----------|-------|
| `--background` | `220 20% 4%` | Page background (near-black) |
| `--foreground` | `40 20% 92%` | Primary text (warm white) |
| `--primary` | `38 90% 55%` | Accent color (amber/gold) |
| `--secondary` | `220 14% 12%` | Card backgrounds |
| `--muted-foreground` | `220 10% 50%` | Secondary text |
| `--border` | `220 14% 14%` | Subtle dividers |

### Typography

| Font | Usage |
|------|-------|
| **Playfair Display** (500, 700, italic) | Headings, hero text |
| **Inter** (400, 500, 600) | Body text, labels, buttons |

### Custom Utilities

- `.text-gradient` — Amber-to-orange gradient text effect
- `.card-gradient` — Subtle dark gradient for card backgrounds
- `.border-glow` — Ambient glow shadow effect

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **bun**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/arunkumawatak/portfolio/
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run Vitest test suite |
| `npm run test:watch` | Run tests in watch mode |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 12 |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Routing** | React Router DOM 6 |
| **Testing** | Vitest + Testing Library + Playwright |
| **Linting** | ESLint 9 with TypeScript plugin |

---

## 📋 Portfolio Sections

### 1. Hero Section
- Headline: _"I build apps that businesses actually run on."_
- Stats bar: 15+ Apps Shipped · 15+ On Play/App Store · 6 Industries
- CTAs: View Case Studies + social links (GitHub, LinkedIn)

### 2. Trust Section
- Five proof points establishing credibility
- Published apps, multi-industry experience, real integrations

### 3. Projects (Case Studies)
Each project follows **Problem → Solution → Impact** format:

| Project | Domain | Highlights |
|---------|--------|------------|
| **ConsultKiya** | Legal-Tech | Dual-app, WebRTC video calls, in-app payments |
| **Nway HRMS** | Enterprise HR | GPS geofencing, selfie attendance, approval workflows |
| **DawaBajar** | B2B Pharma | Cashfree payments, bulk ordering, real-time inventory |
| **Green Chopper** | Agri-Tech E-commerce | Fresh produce delivery, cross-platform |
| **EduSmart** | Education SaaS | Multi-role dashboards, exam management, chat |

### 4. Skills
Organized into four categories: Core, Platform & Deployment, Integrations, Architecture

### 5. Experience
Freelance/contract Flutter development (2022–Present) with specific shipped-product highlights

### 6. Differentiation
Four value propositions: Ships production apps, cross-domain fluency, full lifecycle ownership, integration specialist

### 7. Contact
Email CTA + GitHub/LinkedIn links + footer

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Arun Kumawat**
- GitHub: [@arunkumawatak](https://github.com/arunkumawatak)
- LinkedIn: [/in/arunkumawat](linkedin.com/in/arun-kumawat-28bb86267)
- Email: arunkumawat8989@gmail.com
