"use client";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import type { StreamTitle } from "@/types/title";
import { useMovieStore } from "@/store/useMovieStore";

export function WatchActions({ title }: { title: StreamTitle }) {
  const toggleFavorite = useMovieStore((state) => state.toggleFavorite);
  const isFavorite = useMovieStore((state) => state.isFavorite(title.id));

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(title)}
      className="inline-flex min-h-11 items-center gap-2 rounded border border-line bg-white/10 px-4 font-black hover:bg-white/15"
    >
      {isFavorite ? <CheckIcon className="size-5 text-emerald-300" /> : <PlusIcon className="size-5" />}
      {isFavorite ? "Saved" : "Add to My List"}
    </button>
  );
}
