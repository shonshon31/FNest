import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Navbar } from "@/components/Navbar";
import { TitleRow } from "@/components/TitleRow";
import { VidKingPlayer } from "@/components/VidKingPlayer";
import { WatchActions } from "@/components/WatchActions";
import { getTitle, titles } from "@/data/titles";
import type { StreamTitle } from "@/types/title";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ season?: string; episode?: string }>;
};

// Fetch a TMDB title by its encoded id e.g. "tmdb-movie-123" or "tmdb-tv-456"
async function getTmdbTitle(id: string): Promise<StreamTitle | null> {
  const match = id.match(/^tmdb-(movie|tv)-(\d+)$/);
  if (!match) return null;

  const [, mediaType, tmdbId] = match;
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) return null;

  const GENRE_MAP: Record<number, string> = {
    28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
    80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
    14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
    9648: "Mystery", 10749: "Romance", 878: "Sci-fi", 53: "Thriller",
    10752: "War", 37: "Western", 10759: "Action & Adventure",
    10765: "Sci-fi & Fantasy", 10768: "War & Politics",
  };

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${tmdbId}?api_key=${apiKey}&language=en-US`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();

    const isMovie = mediaType === "movie";
    const title = isMovie ? data.title : data.name;
    const releaseDate = isMovie ? data.release_date : data.first_air_date;
    const year = releaseDate ? parseInt(releaseDate.split("-")[0]) : 0;
    const genres = (data.genres ?? []).map((g: { id: number; name: string }) => g.name).slice(0, 3);

    // Build seasons array for series
    let seasons: number[] | undefined;
    if (!isMovie && data.seasons) {
      seasons = data.seasons
        .filter((s: { season_number: number; episode_count: number }) => s.season_number > 0)
        .map((s: { season_number: number; episode_count: number }) => s.episode_count);
    }

    return {
      id,
      tmdbId: Number(tmdbId),
      title,
      type: isMovie ? "Movie" : "Series",
      provider: "TMDB",
      year,
      rating: Math.round((data.vote_average ?? 0) * 10) / 10,
      runtime: isMovie && data.runtime ? `${data.runtime}m` : undefined,
      genres,
      seasons,
      poster: data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : "",
      cover: data.backdrop_path
        ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
        : "",
      description: data.overview ?? "",
    };
  } catch {
    return null;
  }
}

export default async function WatchPage({ params, searchParams }: Props) {
  const { id } = await params;
  const query = await searchParams;

  // Try local library first, then TMDB
  const localTitle = getTitle(id);
  const title: StreamTitle | null = localTitle ?? await getTmdbTitle(id);
  if (!title) notFound();

  const season = Math.max(1, Number(query.season ?? 1));
  const maxEpisode = title.seasons?.[season - 1] ?? 1;
  const episode = Math.min(Math.max(1, Number(query.episode ?? 1)), maxEpisode);

  const related = titles.filter(
    (item) =>
      item.id !== title.id &&
      (item.provider === title.provider ||
        item.genres.some((genre) => title.genres.includes(genre)))
  );

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <section className="relative overflow-hidden px-4 py-6 md:px-8">
        {title.cover && (
          <Image
            src={title.cover}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover opacity-20 blur-sm"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/50 via-ink/90 to-ink" />

        <Link href="/" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white">
          <ChevronLeftIcon className="size-4" />
          Back home
        </Link>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <VidKingPlayer title={title} season={season} episode={episode} />
          <aside className="rounded border border-line bg-black/35 p-5 backdrop-blur">
            {title.poster && (
              <div className="relative mb-4 aspect-[2/3] overflow-hidden rounded bg-panel lg:mx-auto lg:max-w-[220px]">
                <Image src={title.poster} alt="" fill sizes="220px" className="object-cover" />
              </div>
            )}
            <p className="text-xs font-black uppercase text-brand">{title.provider}</p>
            <h1 className="mt-1 text-3xl font-black">{title.title}</h1>
            <p className="mt-2 text-sm font-semibold text-zinc-300">
              {title.type} • {title.year} • {title.rating.toFixed(1)}{title.runtime ? ` • ${title.runtime}` : ""}
            </p>
            <p className="mt-4 leading-7 text-zinc-300">{title.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {title.genres.map((genre) => (
                <span key={genre} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-zinc-200">
                  {genre}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <WatchActions title={title} />
            </div>
          </aside>
        </div>
      </section>

      <TitleRow title="More like this" items={related.slice(0, 12)} />
    </main>
  );
}
