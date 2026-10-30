"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  phrases: string[];
};

export function Typewriter({ phrases }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[index];
    let timeout: number;

    if (!deleting && text === phrase) {
      timeout = window.setTimeout(() => setDeleting(true), 1400);
    } else if (deleting && text === "") {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % phrases.length);
      }, 280);
    } else {
      timeout = window.setTimeout(() => {
        setText((current) =>
          deleting
            ? phrase.slice(0, current.length - 1)
            : phrase.slice(0, current.length + 1),
        );
      }, deleting ? 36 : 72);
    }

    return () => window.clearTimeout(timeout);
  }, [deleting, index, phrases, text]);

  return (
    <span className="inline-flex min-h-[1.2em] items-center text-neon">
      {text}
      <span className="caret ml-0.5 inline-block h-[1em] w-[2px] bg-neon" />
    </span>
  );
}
