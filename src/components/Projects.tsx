import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { FadeIn } from "@/components/FadeIn";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { projects, type Project, type ProjectVisual } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            kicker="Selected work"
            title="Best repositories, boxed."
            description="Cards mapped to the public LAPyae23 GitHub — food delivery, warehouse inventory, movie booking, CMS, and internship product work."
          />
        </FadeIn>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn
              key={project.slug}
              delay={0.05 * index}
              className={project.featured ? "lg:col-span-2" : undefined}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass pink-glow-hover group flex h-full flex-col overflow-hidden rounded-3xl">
      <ProjectCover project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-zinc-50 sm:text-2xl">
            {project.title}
          </h3>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-pink-400/40 group-hover:text-neon"
              aria-label={`Open ${project.title} on GitHub`}
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          ) : null}
        </div>
        <p className="flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-pink-400/15 bg-pink-500/10 px-2.5 py-1 font-mono text-[11px] text-pink-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-neon"
            >
              Live demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-neon"
            >
              View repository
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-sm text-zinc-500">Private repository</span>
          )}
        </div>
      </div>
    </article>
  );
}

const coverLabels: Record<ProjectVisual, string> = {
  api: "SPRING / API",
  cms: "CMS / TURBO",
  java: "JAVA / CORE",
};

function ProjectCover({ project }: { project: Project }) {
  const { image, visual, featured, gallery } = project;
  const height = featured ? "h-56 sm:h-72" : "h-56";

  if (image) {
    const cover = (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          featured
            ? "(min-width: 1152px) 750px, (min-width: 1024px) 66vw, 100vw"
            : "(min-width: 1152px) 370px, (min-width: 1024px) 33vw, 100vw"
        }
        className={
          image.contain
            ? "object-contain p-6"
            : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        }
      />
    );

    return (
      <div
        className={`relative overflow-hidden border-b border-white/5 ${height} ${
          image.contain ? "bg-white" : "bg-zinc-950"
        }`}
      >
        {gallery ? (
          <ProjectGallery title={project.title} images={gallery}>
            {cover}
          </ProjectGallery>
        ) : (
          cover
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden border-b border-white/5 ${height}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-950 to-black" />
      <div className="absolute -right-6 -top-10 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="absolute bottom-0 left-8 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,77,157,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,77,157,0.18)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-0 flex items-end p-5">
        {visual ? (
          <span className="font-mono text-[11px] tracking-[0.24em] text-pink-100">
            {coverLabels[visual]}
          </span>
        ) : null}
      </div>
    </div>
  );
}
