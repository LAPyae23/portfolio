import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${profile.name} · Portfolio`,
  description: profile.summary,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <AmbientBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
