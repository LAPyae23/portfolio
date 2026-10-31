import {
  Boxes,
  Braces,
  Code2,
  Container,
  Database,
  Globe,
  Layers,
  Leaf,
  Palette,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/data";

const icons = {
  TypeScript: Code2,
  React: Sparkles,
  "Java & Spring Boot": Leaf,
  "Tailwind CSS": Wind,
  Vite: Zap,
  MySQL: Database,
  Docker: Container,
  "TanStack Query": Layers,
  Zustand: Boxes,
  "shadcn/ui": Palette,
  Supabase: Globe,
  "Next.js": Braces,
};

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            kicker="Tech stack"
            title="Languages from the LAPyae23 repos."
            description="A bento of the tools that show up in FoodDash, Invento, Celestix, and the UIT intern portal."
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = icons[skill.name as keyof typeof icons] ?? Code2;
            return (
              <FadeIn
                key={skill.name}
                delay={index * 0.04}
                className={`${skill.span} ${skill.accent ? "min-h-[220px]" : ""}`}
              >
                <article className="glass pink-glow-hover group flex h-full flex-col justify-between rounded-3xl p-5">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-pink-400/20 bg-pink-500/10 text-neon">
                      <Icon className="h-5 w-5" />
                    </span>
                    {skill.accent ? (
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon">
                        core
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-6">
                    <h3 className="font-display text-xl text-zinc-50">{skill.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{skill.blurb}</p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
