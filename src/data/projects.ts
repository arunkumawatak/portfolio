import indhanpayImg from "@/assets/project-indhanpay.png";
import nwayImg from "@/assets/project-nway.png";

import consultkiyaImg from "@/assets/Free_App.png";
import gamersGiftImg from "@/assets/gamersGIft.png";
import dawaBajarImg from "@/assets/project-dawabajar.jpg";
import greenChopperImg from "@/assets/project-greenchopper.png";
import eduSmartImg from "@/assets/project-edusmart.png";
import deluxCarImg from "@/assets/project-deluxcar.jpg";
import dueDateMateImg from "@/assets/project-duedatemate.png";
import qSmartImg from "@/assets/project-qsmart.png";
import krateasyImg from "@/assets/project-krateasy.jpg";
import kisan4uImg from "@/assets/project-k4u.jpg";
import belloRiccoImg from "@/assets/project-belloricco.jpg";
import scrollguard from "@/assets/project-scrollguard.png";
import livewallpaper from "@/assets/project-livewallpaper.png";


export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  playStore?: string;
  appStore?: string;
  featured?: boolean;
  image: string;
  companyId?: string;
  contribution?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    subtitle: "Fuel Station Management System",
    description: "End-to-end fuel station ecosystem with POS integration, NFC, and real-time transaction tracking.",
    problem: "Fuel stations lacked a unified system to manage sales, employees, POS machines, and credit transactions in real-time.",
    solution: "Built a multi-role system (Admin, Manager, Employee) with POS integration, NFC-based user handling, real-time fuel pricing, and transaction tracking.",
    impact: "Deployed in real fuel stations with live transactions, handling POS, QR, cash, and credit flows with high reliability.",
    id: "indhanpay",
    title: "Indhanpay",
    tech: ["Flutter", "Firebase", "WebRTC", "Payment Gateway", "Push Notifications"],
    playStore: "https://play.google.com/store/apps/details?id=com.indhanpay.app&pcampaignid=web_share",
    featured: true,
    image: indhanpayImg,
    companyId: "freelance",
    contribution: "Led end-to-end development of both User and Lawyer apps, implemented WebRTC video calls, and integrated payment gateway for seamless transactions.",
  },

  {
    id: "nway-hrms",
    title: "Nway HRMS",
    subtitle: "Enterprise Workforce Management",
    description: "Geo-fenced attendance and role-based HR operations platform for large workforce teams.",
    problem: "Companies needed a reliable way to track field employees, approvals, and workforce operations in real-time.",
    solution: "Developed a role-based HRMS with geofencing, attendance tracking, approval workflows, and payroll support.",
    impact: "Used by organizations for daily workforce operations, reducing manual tracking and improving accountability.",
    tech: ["Flutter", "GPS/Geofencing", "Camera API", "Firebase", "REST APIs"],
    playStore: "https://play.google.com/store/apps/details?id=com.nway.hrm.ios",
    appStore: "https://apps.apple.com/in/app/nway-hrms/id6742221199",
    featured: true,
    image: nwayImg,
    companyId: "freelance",
    contribution: "Architected the geofencing attendance system, built multi-level approval workflows, and deployed to both app stores.",
  },
  {
    id: "consultkiya",
    title: "ConsultKiya",
    subtitle: "Legal-Tech Platform",
    description: "Dual-app legal consultation platform with real-time video calls and in-app payments.",
    problem: "Users had no easy way to instantly connect with verified lawyers for legal consultation without visiting offices.",
    solution: "Built a dual-app platform (User + Lawyer) with real-time video calls, scheduling, and in-app payments.",
    impact: "Dual app serving both sides of the marketplace. Live on Play Store with real-time consultation capability.",
    tech: ["Flutter", "Firebase", "WebRTC", "Payment Gateway", "Push Notifications"],
    playStore: "https://play.google.com/store/search?q=consultkiya&c=apps",
    featured: false,
    image: consultkiyaImg,
    companyId: "freelance",
    contribution: "Led end-to-end development of both User and Lawyer apps, implemented WebRTC video calls, and integrated payment gateway for seamless transactions.",
  }, {
    id: "gamersgift",
    title: "Gamers Gift",
    subtitle: "Digital Gaming Marketplace",
    description: "Platform for purchasing in-game currency, gift cards, and digital assets.",
    problem: "Gamers needed a single platform to buy game currencies and digital products securely.",
    solution: "Built full app with wallet system, Cashfree payments, Firebase auth, and in-app purchases.",
    impact: "Live app handling real transactions with wallet and payment integrations.",
    tech: ["Flutter", "Firebase", "Chat System", "Role-based Auth"],
    playStore: "https://play.google.com/store/apps/details?id=com.encanto.gamersgift&pcampaignid=web_share",
    image: gamersGiftImg, 
    companyId: "freelance",
    contribution: "Built the entire multi-role SaaS platform with role-based dashboards, real-time attendance, and in-app chat system.",
    gallery: [],
  },
  {
    id: "dawabajar",
    title: "DawaBajar",
    subtitle: "B2B Pharma Marketplace",
    description: "Bulk medicine ordering platform with KYC verification and complex GST-based pricing.",
    problem: "Pharmacy owners needed a reliable platform to order medicines in bulk with proper compliance and pricing.",
    solution: "Rebuilt the app with custom cart logic, GST calculation (generic vs ethical), KYC verification, and inventory handling.",
    impact: "Live on both stores with 5K+ downloads, improved stability and accurate pricing handling.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    playStore: "https://play.google.com/store/apps/details?id=com.encanto.dawabajar",
    image: dawaBajarImg,
    appStore: "https://apps.apple.com/in/app/dawabajar-b2b-trade-platform/id6743924108",
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },
  {
    id: "greenchopper",
    title: "Green Chopper",
    subtitle: "Fresh Produce E-commerce",
    description: "Vegetable ordering app with dynamic filters and smooth swipe-based browsing experience.",
    problem: "Client required a mobile experience identical to web with complex filtering and dynamic product behavior.",
    solution: "Built the app from scratch with custom swipe logic, dynamic filters, real-time product availability, and Razorpay integration.",
    impact: "Live on both platforms with 5K+ downloads and 4.3 rating, delivering smooth UX for daily users.",
    tech: ["Flutter", "Firebase", "Payment Gateway", "Google Maps API"],
    playStore: "https://play.google.com/store/apps/details?id=com.greenchopper.android",
    appStore: "https://apps.apple.com/in/app/greenchopper/id6474066136",
    image: greenChopperImg, 
    companyId: "freelance",
    contribution: "Developed the full e-commerce flow including Google Maps delivery tracking, payment integration, and order management.",
    gallery: [],
  },
  {
    id: "edusmart",
    title: "EduSmart",
    subtitle: "School Management SaaS",
    description: "Multi-role platform for students and teachers with attendance, content, and communication.",
    problem: "Schools needed a centralized system for managing students, teachers, classes, and communication.",
    solution: "Developed student & teacher modules with attendance, chat, video content, results, and scheduling.",
    impact: "Complete school ecosystem in one app, actively used for managing academic workflows.",
    tech: ["Flutter", "Firebase", "Chat System", "Role-based Auth"],
    playStore: "https://play.google.com/store/apps/details?id=com.encanto.edusmart",
    image: eduSmartImg,
    companyId: "freelance",
    contribution: "Built the entire multi-role SaaS platform with role-based dashboards, real-time attendance, and in-app chat system.",
    gallery: [],
  },
  {
    id: "deluxcar",
    title: "Delux Car",
    subtitle: "B2B Pharma E-commerce",
    description: "Trip-based car booking system with pricing based on distance and vehicle type.",
    problem: "Users needed a simple way to book cars with transparent pricing and vehicle selection.",
    solution: "Built booking flow with car selection, pricing logic, and trip-based calculations.",
    impact: "Enabled digital booking flow replacing manual coordination.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: deluxCarImg, 
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },

  {
    id: "duedatemate",
    title: "Due Date Mate",
    subtitle: "Matchmaking / Social Platform",
    description: "Swipe-based matching platform with real-time chat and subscription model.",
    problem: "Users needed a niche matchmaking platform with verified profiles.",
    solution: "Built swipe engine, chat system, subscriptions, and authentication.",
    impact: "Full-featured social platform with monetization system.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: dueDateMateImg,
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },


  {
    id: "qSmart",
    title: "Q Smart",
    subtitle: "Service Tracking System",
    description: "Installer tracking system for pipe installation with real-time status updates.",
    problem: "Users had no visibility into installation progress after purchasing services.",
    solution: "Built dual-role system (Admin + User) with Firebase backend, tracking, and complaint system.",
    impact: "Improved transparency and service tracking for customers.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: qSmartImg,
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },

  {
    id: "krateasy",
    title: "Krat Easy",
    subtitle: "Sports Court Booking Platform",
    description: "Court booking system with public/private matches and cost-splitting.",
    problem: "Users needed a flexible system to book courts and manage group matches.",
    solution: "Built booking engine with time slots, match types, and split payments.",
    impact: "Enabled structured sports booking and match organization.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: krateasyImg,
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },



  {
    id: "kisan4u",
    title: "kisan 4 u",
    subtitle: "Agri-Commerce Platform",
    description: "Platform for farmers to purchase pesticides and agriculture products.",
    problem: "Farmers lacked easy digital access to agriculture supplies.",
    solution: "Developed e-commerce app with product browsing, ordering, and notifications.",
    impact: "Digitized agriculture purchasing flow (not yet live).",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: kisan4uImg,
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },
  {
    id: "bellaricco",
    title: "Bella Ricco",
    subtitle: "Fashion E-commerce App",
    description: "Premium clothing app for men's fashion.",
    problem: "Client needed a clean and modern digital storefront.",
    solution: "Built UI, API integration, and authentication with notifications.",
    impact: "Delivered a production-ready e-commerce experience.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: belloRiccoImg,
    companyId: "freelance",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },


  {
    id: "scrollguard",
    title: "Scroll Guard",
    subtitle: "Digital Wellbeing & App Control",
    description: "App usage control system to limit screen time and block addictive apps.",
    problem: "Users struggle with excessive phone usage and lack control over app time.",
    solution: "Built a system using native Android integration to control app usage and enforce limits.",
    impact: "Demonstrates deep system-level control beyond standard Flutter capabilities.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: scrollguard, // TODO: Add your image import here
    companyId: "personal",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  }, {
    id: "livewallpaper",
    title: "Live wallpaper",
    subtitle: "Dynamic Time Visualization",
    description: "Live wallpaper that visually represents passing days to increase time awareness.",
    problem: "Users lack awareness of time passing in daily life.",
    solution: "Created a dynamic wallpaper system with native Android integration and customization.",
    impact: "Creative utility app combining design + native performance.",
    tech: ["Flutter", "Cashfree", "Firebase", "Real-time Notifications"],
    image: livewallpaper,
    companyId: "personal",
    contribution: "Built the complete B2B marketplace from scratch including Cashfree payment integration and real-time inventory management.",
    gallery: [],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured).slice(0, 3);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getProjectsByCompany = (companyId: string) => projects.filter((p) => p.companyId === companyId);

