import { NextRequest, NextResponse } from "next/server";

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMG = "https://image.tmdb.org/t/p";

// Map TMDB genre IDs to readable names
const GENRE_MAP: Record<number, string> = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western",
  // TV genres
  10759: "Action & Adventure", 10762: "Kids", 10763: "News",
  10764: "Reality", 10765: "Sci-fi & Fantasy", 10766: "Soap",
  10767: "Talk", 10768: "War & Politics",
};

function normalizeItem(item: Record<string, unknown>, mediaType: string) {
  const isMovie = mediaType === "movie";
  const title = (isMovie ? item.title : item.name) as string;
  const releaseDate = (isMovie ? item.release_date : item.first_air_date) as string;
  const year = releaseDate ? parseInt(releaseDate.split("-")[0]) : 0;
  const genreIds = (item.genre_ids as number[]) ?? [];
  const genres = genreIds.map((id) => GENRE_MAP[id]).filter(Boolean).slice(0, 3);
  const poster = item.poster_path
    ? `${TMDB_IMG}/w500${item.poster_path}`
    : null;
  const cover = item.backdrop_path
    ? `${TMDB_IMG}/original${item.backdrop_path}`
    : null;

  return {
    id: `tmdb-${mediaType}-${item.id}`,
    tmdbId: item.id as number,
    title,
    type: isMovie ? "Movie" : "Series",
    provider: "TMDB",
    year,
    rating: Math.round(((item.vote_average as number) ?? 0) * 10) / 10,
    genres,
    poster: poster ?? "",
    cover: cover ?? "",
    description: (item.overview as string) ?? "",
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.trim();
  const type = searchParams.get("type"); // "Movie" | "Series" | null
  const apiKey = process.env.TMDB_API_KEY;

  if (!query) {
    return NextResponse.json({ results: [], error: null });
  }

  if (!apiKey) {
    return NextResponse.json(
      { results: [], error: "TMDB_API_KEY not configured. Add it to your .env.local file." },
      { status: 500 }
    );
  }

  try {
    const endpoints: string[] = [];
    if (!type || type === "All" || type === "Movie") {
      endpoints.push(
        `${TMDB_BASE}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`
      );
    }
    if (!type || type === "All" || type === "Series") {
      endpoints.push(
        `${TMDB_BASE}/search/tv?api_key=${apiKey}&query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`
      );
    }

    const responses = await Promise.all(endpoints.map((url) => fetch(url)));
    const jsons = await Promise.all(responses.map((r) => r.json()));

    const results: ReturnType<typeof normalizeItem>[] = [];

    jsons.forEach((json, index) => {
      const mediaType =
        endpoints[index].includes("/search/movie") ? "movie" : "tv";
      const items = (json.results ?? []) as Record<string, unknown>[];
      items
        .filter((item) => item.poster_path) // only items with posters
        .slice(0, 12)
        .forEach((item) => results.push(normalizeItem(item, mediaType)));
    });

    // Interleave movies and series, sort by vote_average descending
    results.sort((a, b) => b.rating - a.rating);

    return NextResponse.json({ results, error: null });
  } catch (err) {
    console.error("TMDB search error:", err);
    return NextResponse.json(
      { results: [], error: "Search failed. Please try again." },
      { status: 500 }
    );
  }
}
