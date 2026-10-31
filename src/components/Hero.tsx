"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Typewriter } from "@/components/Typewriter";
import { profile, typingPhrases } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-24 pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/25 bg-pink-500/10 px-3 py-1 text-xs text-neon-soft"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {profile.title} · {profile.handle}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl"
          >
            {profile.name}
            <span className="mt-3 block bg-gradient-to-r from-pink-200 via-neon to-fuchsia-400 bg-clip-text text-transparent">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-8 text-zinc-400"
          >
            {profile.summary}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 font-mono text-sm text-zinc-300 sm:text-base"
          >
            Currently crafting{" "}
            <Typewriter phrases={typingPhrases} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="pink-glow glass-strong group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-pink-50"
            >
              <GithubIcon className="h-4 w-4" />
              View GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="pink-glow-hover inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-zinc-100 backdrop-blur-xl"
            >
              <LinkedinIcon className="h-4 w-4 text-neon" />
              LinkedIn
            </motion.a>
            <motion.a
              href={profile.resumeUrl}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="pink-glow-hover inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-zinc-100 backdrop-blur-xl"
            >
              <FileText className="h-4 w-4 text-neon" />
              Resume
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-pink-500/20 blur-3xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6">
            <div className="mb-6 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              <span>status.live</span>
              <span className="text-neon">online</span>
            </div>
            <div className="space-y-4 font-mono text-sm text-zinc-300">
              <Line label="identity" value="Khin La Pyae Htun" />
              <Line label="alias" value="LAPyae23" />
              <Line label="focus" value="Next.js · React" />
              <Line label="signature" value="FoodDash delivery platform" />
              <Line label="stack" value="TS / MongoDB / Tailwind" />
            </div>
            <div className="mt-8 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-neon">
                featured system
              </p>
              <p className="mt-2 font-display text-2xl text-zinc-50">FoodDash</p>
              <p className="mt-1 text-sm text-zinc-400">
                Food delivery for Yangon — customer, restaurant, rider, and admin portals on one platform.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
      <span className="text-zinc-500">{label}</span>
      <span className="text-right text-zinc-100">{value}</span>
    </div>
  );
}
