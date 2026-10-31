"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data";

type ProjectGalleryProps = {
  title: string;
  images: GalleryImage[];
  url?: string;
  children: ReactNode;
};

const SWIPE_DISTANCE = 60;

export function ProjectGallery({ title, images, url, children }: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const activeThumbRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = images[index];
  const groups = [...new Set(images.map((image) => image.group))];
  const host = url?.replace(/^https?:\/\//, "");
  const slide = reduceMotion ? 0 : 48;

  const open = () => {
    setIndex(0);
    setDirection(1);
    document.documentElement.style.overflow = "hidden";
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const finishClose = () => {
    document.documentElement.style.overflow = "";
    dialogRef.current?.close();
  };

  const goTo = (next: number) => {
    setDirection(next >= index ? 1 : -1);
    setIndex(next);
  };

  const show = (step: number) => {
    setDirection(step);
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
        className="group/cover relative block h-full w-full cursor-zoom-in overflow-hidden"
        aria-label={`Open ${images.length} ${title} screenshots`}
      >
        {children}
        <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover/cover:opacity-100" />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-pink-300/30 bg-black/70 px-3.5 py-2 text-xs font-medium text-white shadow-[0_0_24px_rgba(255,77,157,0.35)] backdrop-blur-md transition-all duration-300 group-hover/cover:-translate-y-0.5 group-hover/cover:border-pink-300/70">
          <Expand className="h-3.5 w-3.5 text-neon" />
          View {images.length} screens
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") show(1);
          if (event.key === "ArrowLeft") show(-1);
        }}
        aria-label={`${title} screenshots`}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-zinc-100 backdrop:bg-transparent"
      >
        <AnimatePresence onExitComplete={finishClose}>
          {isOpen ? (
            <motion.div
              key="gallery"
              className="absolute inset-0 flex items-center justify-center p-3 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                onClick={close}
                className="absolute inset-0 overflow-hidden bg-black/75 backdrop-blur-xl"
              >
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[120px]" />
              </div>

              <motion.div
                className="relative flex max-h-full w-full max-w-6xl flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/85 p-3 shadow-[0_0_90px_rgba(255,77,157,0.25)] backdrop-blur-2xl sm:gap-4 sm:p-5"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 32 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="font-display text-lg text-zinc-50">{title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {groups.map((group) => (
                        <button
                          key={group}
                          type="button"
                          onClick={() =>
                            goTo(images.findIndex((image) => image.group === group))
                          }
                          aria-pressed={group === current.group}
                          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                            group === current.group
                              ? "border-pink-300/50 bg-pink-500/20 text-pink-50"
                              : "border-white/10 bg-white/5 text-zinc-400 hover:text-zinc-100"
                          }`}
                        >
                          {group}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-pink-300/50 hover:text-neon"
                    aria-label="Close screenshots"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div
                  className="mx-auto w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
                  style={{ maxWidth: "calc((100dvh - 290px) * 2.06)" }}
                >
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-pink-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-500" />
                    {host ? (
                      <span className="mx-auto truncate rounded-full bg-white/5 px-4 py-0.5 font-mono text-[11px] text-zinc-400">
                        {host}
                      </span>
                    ) : null}
                  </div>
                  <div className="relative aspect-[2.06/1] overflow-hidden bg-white">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.div
                        key={current.src}
                        className="absolute inset-0 touch-pan-y"
                        custom={direction}
                        variants={{
                          enter: (dir: number) => ({ x: dir * slide, opacity: 0 }),
                          center: { x: 0, opacity: 1 },
                          exit: (dir: number) => ({ x: dir * -slide, opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.15}
                        onDragEnd={(_, info) => {
                          if (info.offset.x < -SWIPE_DISTANCE) show(1);
                          if (info.offset.x > SWIPE_DISTANCE) show(-1);
                        }}
                      >
                        <Image
                          src={current.src}
                          alt={current.title}
                          fill
                          sizes="(min-width: 1152px) 1100px, 100vw"
                          className="object-cover object-top"
                          draggable={false}
                          loading="eager"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="h-0.5 bg-white/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-400 to-fuchsia-500"
                      initial={false}
                      animate={{ width: `${((index + 1) / images.length) * 100}%` }}
                      transition={{ duration: reduceMotion ? 0 : 0.3 }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0" aria-live="polite">
                    <h3 className="font-display text-base text-zinc-50 sm:text-lg">
                      {current.title}
                    </h3>
                    <p className="mt-0.5 text-xs leading-5 text-zinc-400 sm:text-sm">
                      {current.caption}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="hidden font-mono text-xs text-zinc-500 sm:inline">
                      {index + 1} / {images.length}
                    </span>
                    <GalleryArrow side="left" onClick={() => show(-1)} />
                    <GalleryArrow side="right" onClick={() => show(1)} />
                  </div>
                </div>

                <div className="flex shrink-0 gap-2 overflow-x-auto p-0.5">
                  {images.map((image, thumbIndex) => (
                    <button
                      key={image.src}
                      ref={thumbIndex === index ? activeThumbRef : undefined}
                      type="button"
                      onClick={() => goTo(thumbIndex)}
                      aria-label={`Show ${image.title}`}
                      aria-current={thumbIndex === index}
                      className={`relative h-11 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                        thumbIndex === index
                          ? "ring-pink-400"
                          : "opacity-50 ring-transparent hover:opacity-100"
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
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-pink-300/60 hover:bg-pink-500/15 hover:text-neon"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
