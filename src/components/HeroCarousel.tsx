"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { CheckIcon, PlusIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import type { StreamTitle } from "@/types/title";
import { useMovieStore } from "@/store/useMovieStore";

const INTERVAL_MS = 7000;

// Pick top-rated titles with good cover images for the hero
function getFeaturedItems(items: StreamTitle[]): StreamTitle[] {
  return [...items]
    .filter((t) => t.cover && t.poster)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
}

export function HeroCarousel({ items }: { items: StreamTitle[] }) {
  const featured = getFeaturedItems(items);
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const toggleFavorite = useMovieStore((s) => s.toggleFavorite);
  const isFavorite = useMovieStore((s) => s.isFavorite(featured[index]?.id ?? ""));

  const goTo = useCallback((next: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(next);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => goTo((index - 1 + featured.length) % featured.length);
  const next = useCallback(() => goTo((index + 1) % featured.length), [index, featured.length, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  if (!featured.length) return null;
  const item = featured[index];

  return (
    <section className="relative min-h-[620px] overflow-hidden select-none">
      {/* Background image with crossfade */}
      <div
        key={item.id}
        className={`absolute inset-0 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={item.cover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-cinema-fade" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-bottom-fade" />

      {/* Content */}
      <div
        className={`relative z-10 flex min-h-[620px] max-w-3xl flex-col justify-end px-4 pb-24 md:px-8 transition-all duration-300 ${
          animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Provider badge */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded bg-brand px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-white">
            {item.provider}
          </span>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            {item.type}
          </span>
        </div>

        {/* Title */}
        <h1 className="max-w-[14ch] text-5xl font-black leading-[0.95] md:text-7xl">
          {item.title}
        </h1>

        {/* Meta */}
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-zinc-300">
          <span className="text-gold font-black">★ {item.rating.toFixed(1)}</span>
          <span>{item.year}</span>
          {item.runtime && <span>{item.runtime}</span>}
          {item.type === "Series" && item.seasons && (
            <span>{item.seasons.length} Season{item.seasons.length !== 1 ? "s" : ""}</span>
          )}
          <span className="text-zinc-500">{item.genres.slice(0, 3).join(" · ")}</span>
        </p>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-300 line-clamp-2 md:line-clamp-3">
          {item.description}
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/watch/${item.id}`}
            className="inline-flex min-h-11 items-center gap-2 rounded bg-white px-6 font-black text-black hover:bg-zinc-200 transition"
          >
            <PlayIcon className="size-5" />
            Watch Now
          </Link>
          <button
            type="button"
            onClick={() => toggleFavorite(item)}
            className="inline-flex min-h-11 items-center gap-2 rounded border border-line bg-white/10 px-5 font-black text-white hover:bg-white/20 transition backdrop-blur"
          >
            {isFavorite ? <CheckIcon className="size-5 text-emerald-300" /> : <PlusIcon className="size-5" />}
            {isFavorite ? "Saved" : "My List"}
          </button>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-black/40 text-white hover:bg-black/70 transition backdrop-blur md:left-6"
        aria-label="Previous"
      >
        <ChevronLeftIcon className="size-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 grid size-10 place-items-center rounded-full bg-black/40 text-white hover:bg-black/70 transition backdrop-blur md:right-6"
        aria-label="Next"
      >
        <ChevronRightIcon className="size-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-brand" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
