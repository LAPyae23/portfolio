type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-neon">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
