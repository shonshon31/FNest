"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckIcon, PlusIcon, PlayIcon } from "@heroicons/react/24/solid";
import type { StreamTitle } from "@/types/title";
import { useMovieStore } from "@/store/useMovieStore";

export function TitleCard({ title, priority = false }: { title: StreamTitle; priority?: boolean }) {
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
  const isFavorite = useMovieStore((state) => state.isFavorite(title.id));

  return (
    <article className="group overflow-hidden rounded border border-line bg-white/[0.055] transition hover:-translate-y-1 hover:border-brand/50 hover:bg-white/10">
      <Link href={`/watch/${title.id}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-panel">
          <Image src={title.poster} alt="" fill sizes="(max-width: 768px) 48vw, 190px" priority={priority} className="object-cover transition duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition group-hover:bg-black/45 group-hover:opacity-100">
            <span className="grid size-12 place-items-center rounded-full bg-brand text-white">
              <PlayIcon className="size-6" />
            </span>
          </div>
        </div>
      </Link>
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/watch/${title.id}`} className="line-clamp-2 text-sm font-black leading-tight hover:text-brand">
            {title.title}
          </Link>
          <button
            type="button"
            onClick={() => toggleFavorite(title)}
            className="grid size-8 shrink-0 place-items-center rounded border border-line bg-black/30 text-white hover:bg-white/15"
            aria-label={isFavorite ? `Remove ${title.title}` : `Save ${title.title}`}
          >
            {isFavorite ? <CheckIcon className="size-4 text-emerald-300" /> : <PlusIcon className="size-4" />}
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-400">
          <span className="rounded-full bg-white/10 px-2 py-1 font-bold text-white">{title.type}</span>
          <span>{title.provider}</span>
          <span>{title.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}
