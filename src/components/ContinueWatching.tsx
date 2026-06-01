"use client";

import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useMovieStore } from "@/store/useMovieStore";

export function ContinueWatching() {
  const progress = useMovieStore((state) => state.progress);
  if (!progress.length) return null;

  return (
    <section className="px-4 py-5 md:px-8">
      <h2 className="mb-4 text-xl font-black md:text-2xl">Continue Watching</h2>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {progress.slice(0, 6).map((item) => (
          <Link
            key={`${item.titleId}-${item.season ?? "movie"}-${item.episode ?? "feature"}`}
            href={`/watch/${item.titleId}${item.season ? `?season=${item.season}&episode=${item.episode ?? 1}` : ""}`}
            className="group flex items-center gap-3 rounded border border-line bg-white/[0.055] p-3 hover:bg-white/10"
          >
            <div className="grid size-11 shrink-0 place-items-center rounded bg-brand">
              <PlayIcon className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-bold">{item.title}</p>
              <p className="text-sm text-zinc-400">
                {item.season ? `Season ${item.season}, Episode ${item.episode}` : "Feature film"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
