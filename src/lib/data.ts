export const profile = {
  name: "Khin La Pyae Htun",
  handle: "LAPyae23",
  title: "Full-stack developer",
  headline: "I build sleek systems with a cinematic edge.",
  summary:
    "Frontend-leaning full-stack developer shipping polished product UIs and APIs — from FoodDash, a multi-role food delivery platform, to warehouse and movie booking systems.",
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
  "Food delivery platforms",
  "Next.js & TypeScript",
  "Live order tracking",
  "Warehouse tools",
  "Spring Boot APIs",
];

export const about = {
  kicker: "About me",
  title: "A coding journey with neon precision.",
  paragraphs: [
    "I am Khin La Pyae Htun — known on GitHub as LAPyae23. I opened that profile in 2024 and have been turning ideas into shipped software ever since: food delivery, warehouse tools, ticket platforms, and internship-grade product interfaces.",
    "My strongest project is FoodDash, a food delivery platform for Yangon that connects customers, restaurants, riders, and admins on one Next.js and MongoDB codebase, with live order tracking and analytics across 10,000+ orders. Around that, I have worked on Invento, a bilingual warehouse app; Celestix, a movie ticket system with a Spring Boot API and a React booking UI; and a UIT internship portal.",
    "I care about interfaces that feel inevitable — glass, motion, and a little neon — backed by APIs that are actually production-minded: role-based auth, clean data models, and clear module boundaries.",
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
      "Primary language across FoodDash, the Celestix booking UI, and the UIT intern app.",
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
    name: "MongoDB & MySQL",
    blurb: "FoodDash orders and Celestix ticket data.",
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
    blurb: "FoodDash and this portfolio — App Router and APIs.",
    span: "md:col-span-1",
  },
];

export type ProjectVisual = "api" | "cms" | "java";

export type GalleryImage = {
  src: string;
  video?: string;
  group: string;
  title: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  live?: string;
  featured: boolean;
  image?: { src: string; alt: string; contain?: boolean };
  galleryHost?: string;
  gallery?: GalleryImage[];
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
      src: "/projects/fooddash/01-tracking.webp",
      alt: "FoodDash live order tracking map with delivery progress",
    },
    gallery: [
      {
        src: "/projects/fooddash/01-tracking.webp",
        group: "Customer",
        title: "Live order tracking",
        caption: "Customers follow their order on a road-based map, with an arrival countdown and the assigned rider.",
      },
      {
        src: "/projects/fooddash/02-cart.webp",
        group: "Customer",
        title: "Cart",
        caption: "Saved delivery addresses, promo codes, and suggestions for items often bought together.",
      },
      {
        src: "/projects/fooddash/03-order-slip.webp",
        group: "Customer",
        title: "Order slip",
        caption: "A printable slip confirms each order with a full cost breakdown in Kyat.",
      },
      {
        src: "/projects/fooddash/04-delivered.webp",
        group: "Customer",
        title: "Delivery feedback",
        caption: "Customers rate their rider and leave a comment once the order arrives.",
      },
      {
        src: "/projects/fooddash/05-restaurant-orders.webp",
        group: "Restaurant",
        title: "Restaurant order queue",
        caption: "Restaurants set a prep time, then accept or reject incoming orders.",
      },
      {
        src: "/projects/fooddash/06-restaurant-menu.webp",
        group: "Restaurant",
        title: "Menu management",
        caption: "Owners manage items, prices, and stock levels, with out-of-stock items clearly flagged.",
      },
      {
        src: "/projects/fooddash/07-rider-request.webp",
        group: "Rider",
        title: "Rider delivery request",
        caption: "Riders see the pickup, drop-off, estimated pay, and full route before accepting a job.",
      },
      {
        src: "/projects/fooddash/08-rider-delivery.webp",
        group: "Rider",
        title: "Active delivery",
        caption: "A route map, quick contact options, and one-tap status updates during a trip.",
      },
      {
        src: "/projects/fooddash/09-rider-earnings.webp",
        group: "Rider",
        title: "Rider earnings",
        caption: "Riders track earnings, tips, and trips over time.",
      },
      {
        src: "/projects/fooddash/10-admin-overview.webp",
        group: "Admin",
        title: "Admin overview",
        caption: "Live platform KPIs, order volume charts, and a QR code that opens the customer app.",
      },
      {
        src: "/projects/fooddash/11-service-zones.webp",
        group: "Admin",
        title: "Service zones",
        caption: "Approved restaurants plotted by GPS show shop coverage across Yangon.",
      },
      {
        src: "/projects/fooddash/12-vendors.webp",
        group: "Admin",
        title: "Vendor approvals",
        caption: "Admins review new restaurant applications, check their stats, and approve or reject them.",
      },
    ],
  },
  {
    slug: "celestix-frontend",
    title: "Celestix Movie Booking",
    description:
      "A full-stack movie ticket system with a React frontend and a Java Spring Boot backend, covering seat booking, food orders, and admin tools for theaters and showtimes. The real system runs locally with its own database, so the video and screens show it on a local machine. The live demo uses sample data instead.",
    tags: ["React", "TypeScript", "Java", "Spring Boot", "MySQL"],
    href: "https://github.com/LAPyae23/MovieticketEbookingsystem_frontend",
    live: "https://celestix-demo.vercel.app",
    galleryHost: "localhost:5173",
    featured: false,
    image: {
      src: "/projects/celestix/cover.webp",
      alt: "Celestix home page running locally with a featured movie",
    },
    gallery: [
      {
        src: "/projects/celestix/poster.webp",
        video: "/projects/celestix/demo.mp4",
        group: "Walkthrough",
        title: "Full system walkthrough",
        caption: "The frontend and Java backend running together on a local machine, from browsing and booking to the admin tools.",
      },
      {
        src: "/projects/celestix/01-dashboard.webp",
        group: "Admin",
        title: "Admin dashboard",
        caption: "Totals for users, cinemas, movies, admins, and reservations, read from the local database.",
      },
      {
        src: "/projects/celestix/02-seat-pricing.webp",
        group: "Admin",
        title: "Seat pricing",
        caption: "A color-coded seat map shows each price tier, and admins can update prices per theater.",
      },
      {
        src: "/projects/celestix/03-theaters.webp",
        group: "Admin",
        title: "Theater management",
        caption: "Manage theater locations, seat layouts, capacity, and pricing tiers in one place.",
      },
      {
        src: "/projects/celestix/04-edit-theater.webp",
        group: "Admin",
        title: "Edit theater",
        caption: "Update a theater's details, along with the rows and price for each seat tier.",
      },
      {
        src: "/projects/celestix/05-showtimes.webp",
        group: "Admin",
        title: "Showtimes",
        caption: "Schedule movies across theaters and track the seats still available.",
      },
      {
        src: "/projects/celestix/06-bookings.webp",
        group: "Admin",
        title: "Bookings",
        caption: "Review each booking's seats, amount, status, and payment. Customer details are blurred.",
      },
      {
        src: "/projects/celestix/07-genres.webp",
        group: "Admin",
        title: "Movie genres",
        caption: "Maintain the genres used to organize and filter movies.",
      },
      {
        src: "/projects/celestix/08-services.webp",
        group: "Customer",
        title: "Services",
        caption: "Customers can book tickets, order food and snacks, or open the support chat.",
      },
      {
        src: "/projects/celestix/09-profile.webp",
        group: "Customer",
        title: "Customer profile",
        caption: "Bookings, history, food orders, and account details in one profile.",
      },
      {
        src: "/projects/celestix/10-support-chat.webp",
        group: "Customer",
        title: "Support chat",
        caption: "A built-in chatbot helps customers with questions about Celestix.",
      },
    ],
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
      src: "/projects/invento/01-dashboard.webp",
      alt: "Invento warehouse dashboard with stock overview",
    },
    gallery: [
      {
        src: "/projects/invento/01-dashboard.webp",
        group: "Overview",
        title: "Warehouse dashboard",
        caption: "Stock levels, low-stock and expiry counts, open orders, and a smart restock forecast at a glance.",
      },
      {
        src: "/projects/invento/02-inventory.webp",
        group: "Overview",
        title: "Inventory",
        caption: "Search the catalog and see on-hand stock, predicted run-out dates, next expiry, and status.",
      },
      {
        src: "/projects/invento/03-push-to-talk.webp",
        group: "Stock",
        title: "Push-to-talk stock entry",
        caption: "Scan a code and speak the item in English or Burmese, then review it before saving.",
      },
      {
        src: "/projects/invento/04-stock-in.webp",
        group: "Stock",
        title: "Receive stock",
        caption: "Record incoming stock with batch numbers, expiry shortcuts, and date scanning.",
      },
      {
        src: "/projects/invento/05-ship-out.webp",
        group: "Stock",
        title: "Ship out",
        caption: "Ship-out quantities can't exceed available stock, and every change is saved to history.",
      },
      {
        src: "/projects/invento/06-suppliers.webp",
        group: "Operations",
        title: "Suppliers and orders",
        caption: "Keep supplier contacts together and track each reorder from pending to received.",
      },
      {
        src: "/projects/invento/07-alerts.webp",
        group: "Operations",
        title: "Alerts",
        caption: "Low stock, out of stock, running out soon, and expiry alerts with one-tap reordering.",
      },
      {
        src: "/projects/invento/08-history.webp",
        group: "Operations",
        title: "Stock history",
        caption: "Every movement is traceable, with before and after quantities, who made it, and when.",
      },
    ],
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
      "Team project: a pnpm + Turbo CMS workspace with Vite federation, React Query, Zustand, and a shadcn-style UI kit for content operations.",
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
      "Team project: the original movie ticket management system — Java foundations for the Celestix product family.",
    tags: ["Java"],
    href: "https://github.com/LAPyae23/celestix",
    featured: false,
    visual: "java",
  },
];
