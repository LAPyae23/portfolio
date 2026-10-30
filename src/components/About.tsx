import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { about, profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            kicker={about.kicker}
            title={about.title}
            description="Pulled from the LAPyae23 GitHub identity — the repos, languages, and product thread that define the work."
          />
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <FadeIn className="glass pink-glow-hover rounded-3xl p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-zinc-300">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="grid gap-4">
            <div className="glass pink-glow-hover relative overflow-hidden rounded-3xl p-5">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-pink-500/20 blur-2xl" />
              <div className="relative flex items-center gap-4">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-2xl border border-pink-400/30 object-cover"
                />
                <div>
                  <p className="font-display text-lg text-zinc-50">{profile.name}</p>
                  <p className="text-sm text-zinc-400">@{profile.handle}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass pink-glow-hover rounded-2xl p-4 text-center"
                >
                  <p className="font-display text-lg text-neon sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
