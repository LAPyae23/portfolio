import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="px-4 pb-10 pt-8">
      <div className="glass mx-auto max-w-6xl rounded-3xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-neon">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl text-zinc-50">
              Let&apos;s build something luminous.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
              Open to collaborations, internships, and product work. Reach me through
              GitHub or LinkedIn — I am {profile.name}.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Social href={profile.github} label="GitHub" icon={GithubIcon} />
            <Social href={profile.linkedin} label="LinkedIn" icon={LinkedinIcon} />
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/10 pt-5 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof GithubIcon;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="pink-glow-hover inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
    >
      <Icon className="h-4 w-4 text-neon" />
      {label}
    </a>
  );
}
