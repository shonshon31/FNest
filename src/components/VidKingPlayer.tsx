"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import type { StreamTitle } from "@/types/title";
import { useMovieStore } from "@/store/useMovieStore";

// ── Embed sources ─────────────────────────────────────────────────────────────

type Source = { id: string; label: string; movieUrl: (id: number) => string; tvUrl: (id: number, s: number, e: number) => string };

const SOURCES: Source[] = [
  {
    id: "vidsrc",
    label: "VidSrc",
    movieUrl: (id) => `https://vidsrc.to/embed/movie/${id}`,
    tvUrl:    (id, s, e) => `https://vidsrc.to/embed/tv/${id}/${s}/${e}`,
  },
  {
    id: "vidsrc2",
    label: "VidSrc 2",
    movieUrl: (id) => `https://vidsrc.me/embed/movie?tmdb=${id}`,
    tvUrl:    (id, s, e) => `https://vidsrc.me/embed/tv?tmdb=${id}&season=${s}&episode=${e}`,
  },
  {
    id: "autoembed",
    label: "AutoEmbed",
    movieUrl: (id) => `https://player.autoembed.cc/embed/movie/${id}`,
    tvUrl:    (id, s, e) => `https://player.autoembed.cc/embed/tv/${id}/${s}/${e}`,
  },
  {
    id: "2embed",
    label: "2Embed",
    movieUrl: (id) => `https://www.2embed.cc/embed/${id}`,
    tvUrl:    (id, s, e) => `https://www.2embed.cc/embedtv/${id}&s=${s}&e=${e}`,
  },
  {
    id: "vidking",
    label: "VidKing",
    movieUrl: (id) => `https://www.vidking.net/embed/movie/${id}`,
    tvUrl:    (id, s, e) => `https://www.vidking.net/embed/tv/${id}/${s}/${e}`,
  },
];

function getEmbedUrl(source: Source, title: StreamTitle, season: number, episode: number) {
  return title.type === "Movie"
    ? source.movieUrl(title.tmdbId)
    : source.tvUrl(title.tmdbId, season, episode);
}

// ── Component ─────────────────────────────────────────────────────────────────

type Props = { title: StreamTitle; season: number; episode: number };

export function VidKingPlayer({ title, season, episode }: Props) {
  const router = useRouter();
  const theaterMode    = useMovieStore((s) => s.theaterMode);
  const setTheaterMode = useMovieStore((s) => s.setTheaterMode);
  const saveProgress   = useMovieStore((s) => s.saveProgress);

  const [sourceId, setSourceId]         = useState(SOURCES[0].id);
  const [subtitleOffset, setSubtitleOffset] = useState(0); // ms
  const [showSubPanel, setShowSubPanel] = useState(false);
  const [iframeKey, setIframeKey]       = useState(0); // force reload on source change
  const subPanelRef = useRef<HTMLDivElement>(null);

  const source      = SOURCES.find((s) => s.id === sourceId) ?? SOURCES[0];
  const episodeCount = title.seasons?.[season - 1] ?? 1;
  const embedUrl    = getEmbedUrl(source, title, season, episode);

  // Close sub panel on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (subPanelRef.current && !subPanelRef.current.contains(e.target as Node)) {
        setShowSubPanel(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function changeSource(id: string) {
    setSourceId(id);
    setIframeKey((k) => k + 1);
  }

  function navigate(nextSeason: number, nextEpisode: number) {
    saveProgress({
      titleId: title.id,
      title: title.title,
      poster: title.poster,
      season:  title.type === "Series" ? nextSeason  : undefined,
      episode: title.type === "Series" ? nextEpisode : undefined,
      updatedAt: new Date().toISOString(),
    });
    router.push(
      `/watch/${title.id}${title.type === "Series" ? `?season=${nextSeason}&episode=${nextEpisode}` : ""}`
    );
  }

  const STEP = 250; // ms per click
  const offsetLabel =
    subtitleOffset === 0
      ? "0 ms (default)"
      : subtitleOffset > 0
      ? `+${subtitleOffset} ms (subtitles later)`
      : `${subtitleOffset} ms (subtitles earlier)`;

  return (
    <section
      className={
        theaterMode
          ? "fixed inset-0 z-50 flex flex-col bg-black"
          : "overflow-hidden rounded border border-line bg-black shadow-glow"
      }
    >
      {/* ── Top bar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/80 px-4 py-3 backdrop-blur">
        <div>
          <p className="text-xs font-black uppercase text-brand">Now watching</p>
          <h2 className="text-lg font-black leading-tight md:text-xl">{title.title}</h2>
          <p className="text-xs text-zinc-400">
            {title.type === "Series"
              ? `S${season} E${episode}`
              : `${title.year}${title.runtime ? ` · ${title.runtime}` : ""}`}
            {" · "}
            <span className="text-brand font-bold">{source.label}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Season/episode selects */}
          {title.type === "Series" && (
            <>
              <select
                value={season}
                onChange={(e) => navigate(Number(e.target.value), 1)}
                className="min-h-9 rounded border border-line bg-panel px-2 text-sm"
              >
                {title.seasons?.map((_, i) => (
                  <option key={i + 1} value={i + 1}>Season {i + 1}</option>
                ))}
              </select>
              <select
                value={episode}
                onChange={(e) => navigate(season, Number(e.target.value))}
                className="min-h-9 rounded border border-line bg-panel px-2 text-sm"
              >
                {Array.from({ length: episodeCount }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>Ep {n}</option>
                ))}
              </select>
            </>
          )}

          {/* Subtitle sync button */}
          <div className="relative" ref={subPanelRef}>
            <button
              type="button"
              onClick={() => setShowSubPanel((v) => !v)}
              className={`grid size-9 place-items-center rounded border border-line transition ${
                showSubPanel ? "bg-brand text-white" : "bg-white/10 hover:bg-white/15"
              }`}
              title="Subtitle sync"
            >
              <ChatBubbleBottomCenterTextIcon className="size-5" />
            </button>

            {showSubPanel && (
              <div className="absolute right-0 top-11 z-30 w-72 rounded-xl border border-line bg-panel p-4 shadow-xl backdrop-blur">
                <p className="mb-1 text-xs font-black uppercase tracking-widest text-brand">
                  Subtitle Sync
                </p>
                <p className="mb-3 text-xs text-zinc-400 leading-5">
                  Shift subtitle timing if audio and text are out of sync. Each step is {STEP} ms.
                </p>

                <div className="mb-3 rounded bg-white/5 px-3 py-2 text-center text-sm font-bold text-white">
                  {offsetLabel}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSubtitleOffset((v) => v - STEP)}
                    className="flex-1 rounded border border-line bg-white/10 py-2 text-sm font-bold hover:bg-white/20 transition"
                    title="Shift subtitles earlier"
                  >
                    − Earlier
                  </button>
                  <button
                    onClick={() => setSubtitleOffset(0)}
                    className="rounded border border-line bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/20 transition"
                    title="Reset"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setSubtitleOffset((v) => v + STEP)}
                    className="flex-1 rounded border border-line bg-white/10 py-2 text-sm font-bold hover:bg-white/20 transition"
                    title="Shift subtitles later"
                  >
                    + Later
                  </button>
                </div>

                <p className="mt-3 text-[10px] text-zinc-600 leading-4">
                  Note: Subtitle sync applies to external subtitle tracks. Built-in subtitles baked into the stream are controlled by the player itself.
                </p>
              </div>
            )}
          </div>

          {/* Theater mode */}
          <button
            type="button"
            onClick={() => setTheaterMode(!theaterMode)}
            className="grid size-9 place-items-center rounded border border-line bg-white/10 hover:bg-white/15 transition"
            title={theaterMode ? "Exit theater mode" : "Theater mode"}
          >
            {theaterMode
              ? <ArrowsPointingInIcon className="size-5" />
              : <ArrowsPointingOutIcon className="size-5" />
            }
          </button>
        </div>
      </div>

      {/* ── Source switcher bar ── */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-black/60 px-4 py-2 backdrop-blur">
        <span className="mr-1 text-[10px] font-black uppercase tracking-widest text-zinc-500">Source:</span>
        {SOURCES.map((s) => (
          <button
            key={s.id}
            onClick={() => changeSource(s.id)}
            className={`rounded px-3 py-1 text-xs font-bold transition ${
              s.id === sourceId
                ? "bg-brand text-white"
                : "bg-white/10 text-zinc-300 hover:bg-white/20"
            }`}
          >
            {s.label}
          </button>
        ))}
        <span className="ml-auto text-[10px] text-zinc-600">
          Switch source if player doesn&apos;t load
        </span>
      </div>

      {/* ── iframe ── */}
      <div className={`bg-black ${theaterMode ? "flex-1" : "aspect-video"}`}>
        <iframe
          key={`${iframeKey}-${embedUrl}`}
          src={embedUrl}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="size-full border-0"
          title={`${title.title} player`}
          onLoad={() =>
            saveProgress({
              titleId:  title.id,
              title:    title.title,
              poster:   title.poster,
              season:   title.type === "Series" ? season   : undefined,
              episode:  title.type === "Series" ? episode  : undefined,
              updatedAt: new Date().toISOString(),
            })
          }
        />
      </div>
    </section>
  );
}
