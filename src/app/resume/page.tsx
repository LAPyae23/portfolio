import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile, projects, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: `Resume · ${profile.name}`,
  description: `Resume for ${profile.name}`,
};

export default function ResumePage() {
  return (
    <main className="px-4 pb-20 pt-28">
      <div className="glass mx-auto max-w-3xl rounded-3xl p-6 sm:p-10">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-neon"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon">
          Resume
        </p>
        <h1 className="mt-3 font-display text-4xl text-zinc-50">{profile.name}</h1>
        <p className="mt-2 text-zinc-400">{profile.summary}</p>
        <p className="mt-4 text-sm text-zinc-500">
          GitHub: {profile.handle} · {profile.github}
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl text-neon">Selected projects</h2>
          <div className="mt-4 space-y-5">
            {projects.map((project) => (
              <div key={project.slug} className="border-b border-white/10 pb-4">
                <h3 className="text-lg text-zinc-50">{project.title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-xs text-zinc-500">
                  {project.tags.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl text-neon">Stack</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            {skills.map((skill) => skill.name).join(" · ")}
          </p>
        </section>
      </div>
    </main>
  );
}
