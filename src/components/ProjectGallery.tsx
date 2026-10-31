"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

type ProjectGalleryProps = {
  title: string;
  images: GalleryImage[];
  children: ReactNode;
};

export function ProjectGallery({ title, images, children }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeThumbRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = images[index];

  const open = () => {
    setIndex(0);
    setIsOpen(true);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    setIsOpen(false);
    document.documentElement.style.overflow = "";
  };

  const show = (step: number) => {
    setIndex((value) => (value + step + images.length) % images.length);
  };

  useEffect(() => {
    if (isOpen) {
      activeThumbRef.current?.scrollIntoView({
        block: "nearest",
        inline: "center",
      });
    }
  }, [index, isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group/cover relative block h-full w-full cursor-zoom-in"
        aria-label={`Open ${images.length} ${title} screenshots`}
      >
        {children}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors group-hover/cover:border-pink-400/60 group-hover/cover:text-neon">
          <Images className="h-3.5 w-3.5" />
          View {images.length} screens
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") show(1);
          if (event.key === "ArrowLeft") show(-1);
        }}
        aria-label={`${title} screenshots`}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black p-0 text-zinc-100 backdrop:bg-black/80"
      >
        {isOpen ? (
          <div className="mx-auto flex h-full max-w-6xl flex-col gap-3 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono text-xs text-neon">
                  {title} · {index + 1} / {images.length}
                </p>
                <h3 className="mt-0.5 truncate font-display text-lg text-zinc-50 sm:text-xl">
                  {current.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-pink-400/50 hover:text-neon"
                aria-label="Close screenshots"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 sm:px-14">
              <div className="relative h-full">
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.title}
                  fill
                  sizes="(min-width: 1152px) 1000px, 100vw"
                  className="object-contain"
                  loading="eager"
                />
              </div>
              <GalleryArrow side="left" onClick={() => show(-1)} />
              <GalleryArrow side="right" onClick={() => show(1)} />
            </div>

            <p className="text-sm leading-6 text-zinc-400">{current.caption}</p>

            <div className="flex shrink-0 gap-2 overflow-x-auto pb-1">
              {images.map((image, thumbIndex) => (
                <button
                  key={image.src}
                  ref={thumbIndex === index ? activeThumbRef : undefined}
                  type="button"
                  onClick={() => setIndex(thumbIndex)}
                  aria-label={`Show ${image.title}`}
                  aria-current={thumbIndex === index}
                  className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${
                    thumbIndex === index
                      ? "border-pink-400"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}

function GalleryArrow({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous screenshot" : "Next screenshot"}
      className={`absolute top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur hover:border-pink-400/60 hover:text-neon ${
        side === "left" ? "left-1 sm:left-0" : "right-1 sm:right-0"
      }`}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}
