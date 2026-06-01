export type TitleType = "Movie" | "Series";

export type StreamTitle = {
  id: string;
  tmdbId: number;
  title: string;
  type: TitleType;
  provider: string;
  year: number;
  rating: number;
  runtime?: string;
  genres: string[];
  seasons?: number[];
  poster: string;
  cover: string;
  description: string;
};

export type WatchProgress = {
  titleId: string;
  title: string;
  poster: string;
  season?: number;
  episode?: number;
  updatedAt: string;
};
