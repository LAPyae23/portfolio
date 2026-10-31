export const profile = {
  name: "Khin La Pyae Htun",
  handle: "LAPyae23",
  title: "Full-stack developer",
  headline: "I build sleek systems with a cinematic edge.",
  summary:
    "Frontend-leaning full-stack developer shipping polished product UIs and Spring Boot APIs — from theater booking platforms to CMS workspaces.",
  avatar: "https://avatars.githubusercontent.com/u/161600819?v=4",
  github: "https://github.com/LAPyae23",
  linkedin: "https://www.linkedin.com/in/khinlapyaehtun13",
  resumeUrl: "/resume",
  location: "Myanmar",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const typingPhrases = [
  "React & TypeScript",
  "Spring Boot APIs",
  "Tailwind interfaces",
  "Movie booking systems",
  "CMS product UIs",
];

export const about = {
  kicker: "About me",
  title: "A coding journey with neon precision.",
  paragraphs: [
    "I am Khin La Pyae Htun — known on GitHub as LAPyae23. I opened that profile in 2024 and have been turning ideas into shipped software ever since: ticket platforms, content systems, and internship-grade product interfaces.",
    "My strongest thread is Celestix, a movie ticket management system that spans a Java/Spring Boot API layer and a React + TypeScript booking UI. Around that, I have built a Turbo/Vite CMS workspace and a UIT internship frontend with i18n, Supabase, and a fully typed component kit.",
    "I care about interfaces that feel inevitable — glass, motion, and a little neon — backed by APIs that are actually production-minded: JWT auth, JPA, MySQL, and clean module boundaries.",
  ],
  stats: [
    { value: "2024", label: "Started shipping" },
    { value: "6+", label: "Public repos" },
    { value: "TS + Java", label: "Core languages" },
  ],
};

export const skills = [
  {
    name: "TypeScript",
    blurb:
      "Primary language across cms-frontend, the Celestix booking UI, and the UIT intern app.",
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "React",
    blurb: "Component-driven UIs with Vite, React Router, and shadcn/ui.",
    span: "md:col-span-2",
  },
  {
    name: "Java & Spring Boot",
    blurb: "Celestix theater APIs with Security, JPA, JWT, and OpenAPI.",
    span: "md:col-span-2",
  },
  {
    name: "Tailwind CSS",
    blurb: "Utility-first styling and design systems.",
    span: "md:col-span-2",
  },
  {
    name: "Vite",
    blurb: "Fast frontend tooling and module federation.",
    span: "md:col-span-2",
  },
  {
    name: "MySQL",
    blurb: "Persistence for ticket and theater data.",
    span: "md:col-span-1",
  },
  {
    name: "Docker",
    blurb: "Containerized Spring Boot services.",
    span: "md:col-span-1",
  },
  {
    name: "TanStack Query",
    blurb: "Server state for booking and CMS flows.",
    span: "md:col-span-2",
  },
  {
    name: "Zustand",
    blurb: "Client state in the CMS workspace.",
    span: "md:col-span-1",
  },
  {
    name: "shadcn/ui",
    blurb: "Accessible, composed UI primitives.",
    span: "md:col-span-1",
  },
  {
    name: "Supabase",
    blurb: "Realtime backend on the intern project.",
    span: "md:col-span-1",
  },
  {
    name: "Next.js",
    blurb: "This portfolio — App Router, motion, polish.",
    span: "md:col-span-1",
  },
];

export type ProjectVisual = "api" | "cms" | "java";

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  live?: string;
  featured: boolean;
  image?: { src: string; alt: string; contain?: boolean };
  visual?: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "fooddash",
    title: "FoodDash",
    description:
      "A multi-role food delivery platform for Yangon with customer, restaurant, rider, and admin portals on one codebase. It covers ordering in Kyat, live Leaflet + OSRM order tracking, and analytics across 10,000+ orders that power AI picks, demand insights, and customer segmentation.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Leaflet", "Recharts"],
    href: "https://github.com/LAPyae23/deli_app",
    live: "https://deli-app-eta.vercel.app",
    featured: true,
    image: {
      src: "/projects/fooddash.webp",
      alt: "FoodDash sign-in page with customer, restaurant, rider, and admin roles",
    },
  },
  {
    slug: "celestix-frontend",
    title: "Celestix Booking UI",
    description:
      "A movie ticket e-booking frontend with discovery, showtimes, seat booking, and food combos, plus an admin area for movies, theaters, and refunds. Built with Vite, Tailwind, and shadcn/ui. The live demo runs on sample data.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
    href: "https://github.com/LAPyae23/MovieticketEbookingsystem_frontend",
    live: "https://celestix-demo.vercel.app",
    featured: false,
    image: {
      src: "/projects/celestix.webp",
      alt: "Celestix home page with a featured sample film",
    },
  },
  {
    slug: "invento",
    title: "Invento",
    description:
      "A mobile-first inventory app for small Myanmar warehouses, with a full English and Burmese UI. Staff can scan a code and speak stock in through push-to-talk, ship out with stock checks, print QR labels, and get restock forecasts from 30 days of movement history.",
    tags: ["React", "Vite", "Express", "MongoDB"],
    href: "https://github.com/LAPyae23/stock",
    live: "https://invento-hazel.vercel.app",
    featured: true,
    image: {
      src: "/projects/invento.webp",
      alt: "Invento sign-in page in Burmese",
    },
  },
  {
    slug: "uit-intern",
    title: "UIT Intern Portal",
    description:
      "An internship platform connecting students, companies, and administrators through role-based dashboards. Students get a multi-template resume builder and interview prep, with English and Myanmar translations throughout. The live demo runs on sample data.",
    tags: ["React", "TypeScript", "Supabase", "i18next", "Vitest"],
    href: "https://github.com/LAPyae23/UIt-Intern_frontend",
    live: "https://uit-intern-demo.vercel.app",
    featured: false,
    image: {
      src: "/projects/uit.webp",
      alt: "UIT Intern Portal student dashboard listing internships",
    },
  },
  {
    slug: "cms-frontend",
    title: "CMS Frontend",
    description:
      "A pnpm + Turbo CMS workspace with Vite federation, React Query, Zustand, and a shadcn-style UI kit for content operations.",
    tags: ["TypeScript", "Turbo", "Zustand", "React Query"],
    href: "https://github.com/LAPyae23/cms-frontend",
    featured: false,
    visual: "cms",
  },
  {
    slug: "celestix-backend",
    title: "Celestix Theater APIs",
    description:
      "Spring Boot 3 theater management APIs: JWT security, JPA/MySQL, Cloudinary media, mail, Quartz jobs, and OpenAPI docs.",
    tags: ["Java 17", "Spring Boot", "MySQL", "JWT", "Docker"],
    featured: false,
    visual: "api",
  },
  {
    slug: "celestix",
    title: "Celestix",
    description:
      "The original movie ticket management system — Java foundations for the Celestix product family.",
    tags: ["Java"],
    href: "https://github.com/LAPyae23/celestix",
    featured: false,
    visual: "java",
  },
];
