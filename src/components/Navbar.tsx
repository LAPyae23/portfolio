"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass pink-glow" : "glass"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-pink-400/30 bg-pink-500/10 font-display text-sm font-bold text-neon">
            LA
          </span>
          <span className="hidden font-display text-sm tracking-wide text-zinc-100 sm:block">
            {profile.handle}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-neon"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="pink-glow-hover inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-pink-500/10 hover:text-neon"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
