"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckIcon, PlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import type { StreamTitle } from "@/types/title";
import { useMovieStore } from "@/store/useMovieStore";

export function HeroCarousel({ items }: { items: StreamTitle[] }) {
  const featured = items[0];
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
  const isFavorite = useMovieStore((state) => state.isFavorite(featured.id));

  return (
    <section className="relative min-h-[620px] overflow-hidden">
      <Image src={featured.cover} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-cinema-fade" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-bottom-fade" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 flex min-h-[620px] max-w-3xl flex-col justify-end px-4 pb-20 md:px-8"
      >
        <p className="mb-3 text-xs font-black uppercase text-brand">{featured.provider} via VidKing</p>
        <h1 className="max-w-[11ch] text-6xl font-black leading-[0.9] md:text-8xl">{featured.title}</h1>
        <p className="mt-4 text-sm font-semibold text-zinc-300">
          {featured.type} • {featured.year} • {featured.rating.toFixed(1)} • {featured.genres.slice(0, 3).join(" / ")}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">{featured.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/watch/${featured.id}`} className="inline-flex min-h-11 items-center gap-2 rounded bg-white px-5 font-black text-black hover:bg-zinc-200">
            <PlayIcon className="size-5" />
            Watch now
          </Link>
          <button
            type="button"
            onClick={() => toggleFavorite(featured)}
            className="inline-flex min-h-11 items-center gap-2 rounded border border-line bg-white/10 px-5 font-black text-white hover:bg-white/15"
          >
            {isFavorite ? <CheckIcon className="size-5 text-emerald-300" /> : <PlusIcon className="size-5" />}
            {isFavorite ? "Saved" : "My List"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
