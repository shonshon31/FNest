"use client";

import { useRouter } from "next/navigation";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import type { StreamTitle } from "@/types/title";
import { getVidKingUrl } from "@/data/titles";
import { useMovieStore } from "@/store/useMovieStore";

type Props = {
  title: StreamTitle;
  season: number;
  episode: number;
};

export function VidKingPlayer({ title, season, episode }: Props) {
  const router = useRouter();
  const theaterMode = useMovieStore((state) => state.theaterMode);
  const setTheaterMode = useMovieStore((state) => state.setTheaterMode);
  const saveProgress = useMovieStore((state) => state.saveProgress);
  const episodeCount = title.seasons?.[season - 1] ?? 1;

  function updateWatch(nextSeason: number, nextEpisode: number) {
    saveProgress({
      titleId: title.id,
      title: title.title,
      poster: title.poster,
      season: title.type === "Series" ? nextSeason : undefined,
      episode: title.type === "Series" ? nextEpisode : undefined,
      updatedAt: new Date().toISOString()
    });
    router.push(`/watch/${title.id}${title.type === "Series" ? `?season=${nextSeason}&episode=${nextEpisode}` : ""}`);
  }

  const src = getVidKingUrl(title, season, episode);

  return (
    <section className={theaterMode ? "fixed inset-0 z-50 bg-black" : "overflow-hidden rounded border border-line bg-black shadow-glow"}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/70 p-4">
        <div>
          <p className="text-xs font-black uppercase text-brand">Now watching</p>
          <h1 className="text-xl font-black md:text-2xl">{title.title}</h1>
          <p className="text-sm text-zinc-400">
            {title.type === "Series" ? `Season ${season}, Episode ${episode}` : `${title.year} • ${title.runtime ?? "Movie"}`} • VidKing player
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {title.type === "Series" && (
            <>
              <select
                value={season}
                onChange={(event) => updateWatch(Number(event.target.value), 1)}
                className="min-h-10 rounded border border-line bg-panel px-3 text-sm"
              >
                {title.seasons?.map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    Season {index + 1}
                  </option>
                ))}
              </select>
              <select
                value={episode}
                onChange={(event) => updateWatch(season, Number(event.target.value))}
                className="min-h-10 rounded border border-line bg-panel px-3 text-sm"
              >
                {Array.from({ length: episodeCount }, (_, index) => index + 1).map((number) => (
                  <option key={number} value={number}>
                    Episode {number}
                  </option>
                ))}
              </select>
            </>
          )}
          <button
            type="button"
            onClick={() => setTheaterMode(!theaterMode)}
            className="grid size-10 place-items-center rounded border border-line bg-white/10 hover:bg-white/15"
            aria-label="Toggle theater mode"
          >
            <ArrowsPointingOutIcon className="size-5" />
          </button>
        </div>
      </div>
      <div className="aspect-video bg-black">
        <iframe
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="size-full border-0"
          title={`${title.title} player`}
          onLoad={() => saveProgress({
            titleId: title.id,
            title: title.title,
            poster: title.poster,
            season: title.type === "Series" ? season : undefined,
            episode: title.type === "Series" ? episode : undefined,
            updatedAt: new Date().toISOString()
          })}
        />
      </div>
    </section>
  );
}
