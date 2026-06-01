import type { StreamTitle } from "@/types/title";

const BASE = "https://api.themoviedb.org/3";
export const W500 = "https://image.tmdb.org/t/p/w500";
export const ORIG = "https://image.tmdb.org/t/p/original";

type TmdbImages = { poster: string; cover: string };

async function fetchImages(tmdbId: number, mediaType: "movie" | "tv"): Promise<TmdbImages | null> {
  const key = process.env.TMDB_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`${BASE}/${mediaType}/${tmdbId}?api_key=${key}&language=en-US`, {
      next: { revalidate: 86400 }, // cache 24 hrs
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      poster: data.poster_path   ? `${W500}${data.poster_path}`   : "",
      cover:  data.backdrop_path ? `${ORIG}${data.backdrop_path}` : "",
    };
  } catch {
    return null;
  }
}

/**
 * Hydrates a list of StreamTitles with live poster/cover URLs from TMDB.
 * Falls back to whatever is already on the title if the fetch fails.
 */
export async function hydrateTitles(titles: StreamTitle[]): Promise<StreamTitle[]> {
  const results = await Promise.all(
    titles.map(async (title) => {
      const mediaType = title.type === "Movie" ? "movie" : "tv";
      const images = await fetchImages(title.tmdbId, mediaType);
      if (!images || (!images.poster && !images.cover)) return title;
      return {
        ...title,
        poster: images.poster || title.poster,
        cover:  images.cover  || title.cover,
      };
    })
  );
  return results;
}
