import type { StreamTitle } from "@/types/title";

export const titles: StreamTitle[] = [
  {
    id: "fallout",
    tmdbId: 106379,
    title: "Fallout",
    type: "Series",
    provider: "Prime Video",
    year: 2024,
    rating: 8.4,
    genres: ["Sci-fi", "Adventure", "Dark comedy"],
    seasons: [8],
    poster: "https://image.tmdb.org/t/p/w500/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg",
    cover: "https://image.tmdb.org/t/p/original/8NQ7wpG1jRZnObkQtwDdzMD1oY.jpg",
    description: "Vault doors open onto a sharp, strange wasteland packed with retro-future danger and big series energy."
  },
  {
    id: "the-night-agent",
    tmdbId: 112836,
    title: "The Night Agent",
    type: "Series",
    provider: "Netflix",
    year: 2025,
    rating: 8.1,
    genres: ["Action", "Thriller", "Political"],
    seasons: [10, 10],
    poster: "https://image.tmdb.org/t/p/w500/6Fbrfdr2oR4BCgkGxHMqpD3M9aX.jpg",
    cover: "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    description: "A fast political thriller built for late-night autoplay, conspiracies, and urgent phone calls."
  },
  {
    id: "the-last-of-us",
    tmdbId: 100088,
    title: "The Last of Us",
    type: "Series",
    provider: "HBO Max",
    year: 2025,
    rating: 8.7,
    genres: ["Drama", "Survival", "Sci-fi"],
    seasons: [9, 7],
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    cover: "https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    description: "A brutal, intimate survival drama where every quiet moment has teeth and every choice leaves a mark."
  },
  {
    id: "house-of-the-dragon",
    tmdbId: 94997,
    title: "House of the Dragon",
    type: "Series",
    provider: "HBO Max",
    year: 2024,
    rating: 8.4,
    genres: ["Fantasy", "Drama", "Politics"],
    seasons: [10, 8],
    poster: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg",
    cover: "https://image.tmdb.org/t/p/original/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
    description: "Dynastic fantasy full of family grudges, court strategy, and the glow of dragonfire."
  },
  {
    id: "halo",
    tmdbId: 52814,
    title: "Halo",
    type: "Series",
    provider: "Paramount+",
    year: 2024,
    rating: 7,
    genres: ["Sci-fi", "Action", "Military"],
    seasons: [9, 8],
    poster: "https://image.tmdb.org/t/p/w500/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
    cover: "https://image.tmdb.org/t/p/original/ab6sBnZf4YZcxOHtZP7io9A9Bdo.jpg",
    description: "Armored sci-fi spectacle, alien conflict, and the pull of a familiar game universe."
  },
  {
    id: "silo",
    tmdbId: 125988,
    title: "Silo",
    type: "Series",
    provider: "Apple TV+",
    year: 2025,
    rating: 8.1,
    genres: ["Sci-fi", "Mystery", "Drama"],
    seasons: [10, 10],
    poster: "https://image.tmdb.org/t/p/w500/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg",
    cover: "https://image.tmdb.org/t/p/original/2eIlCirgcvEwmCSYh2wDfz5Sxvz.jpg",
    description: "A contained mystery with industrial scale, quiet paranoia, and secrets stacked hundreds of floors deep."
  },
  {
    id: "yellowstone",
    tmdbId: 73586,
    title: "Yellowstone",
    type: "Series",
    provider: "Peacock",
    year: 2024,
    rating: 8.6,
    genres: ["Western", "Drama", "Crime"],
    seasons: [9, 10, 10, 10, 14],
    poster: "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
    cover: "https://image.tmdb.org/t/p/original/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg",
    description: "Ranchland power struggles, sharp family loyalty, and modern western drama with a bruising edge."
  },
  {
    id: "oppenheimer",
    tmdbId: 872585,
    title: "Oppenheimer",
    type: "Movie",
    provider: "Prime Video",
    year: 2023,
    rating: 8.5,
    runtime: "3h 1m",
    genres: ["Biography", "Drama", "History"],
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    cover: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    description: "A meticulous, thunderous biographical drama about ambition, invention, consequence, and moral gravity."
  },
  {
    id: "barbie",
    tmdbId: 346698,
    title: "Barbie",
    type: "Movie",
    provider: "HBO Max",
    year: 2023,
    rating: 7,
    runtime: "1h 54m",
    genres: ["Comedy", "Fantasy", "Satire"],
    poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    cover: "https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    description: "A candy-colored comedy with existential bite, big musical flourishes, and a thoughtful center."
  },
  {
    id: "mission-impossible-dead-reckoning",
    tmdbId: 575264,
    title: "Mission: Impossible - Dead Reckoning",
    type: "Movie",
    provider: "Paramount+",
    year: 2023,
    rating: 7.7,
    runtime: "2h 44m",
    genres: ["Action", "Spy", "Adventure"],
    poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    cover: "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    description: "Clockwork action spectacle, practical stunts, and spy-thriller momentum built for a big-screen mood."
  },
  {
    id: "top-gun-maverick",
    tmdbId: 361743,
    title: "Top Gun: Maverick",
    type: "Movie",
    provider: "Paramount+",
    year: 2022,
    rating: 8.2,
    runtime: "2h 11m",
    genres: ["Action", "Drama", "Aviation"],
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    cover: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    description: "A full-throttle legacy sequel with clean emotional lift and aerial action that still feels physical."
  },
  {
    id: "glass-onion",
    tmdbId: 661374,
    title: "Glass Onion",
    type: "Movie",
    provider: "Netflix",
    year: 2022,
    rating: 7.1,
    runtime: "2h 20m",
    genres: ["Mystery", "Comedy", "Crime"],
    poster: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    cover: "https://image.tmdb.org/t/p/original/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    description: "A bright, sharply dressed mystery that turns rich-people nonsense into a satisfying puzzle box."
  }
];

export const providers = ["All", ...Array.from(new Set(titles.map((title) => title.provider)))];

export function getTitle(id: string) {
  return titles.find((title) => title.id === id);
}

export function getVidKingUrl(title: StreamTitle, season = 1, episode = 1) {
  if (title.type === "Movie") return `https://www.vidking.net/embed/movie/${title.tmdbId}`;
  return `https://www.vidking.net/embed/tv/${title.tmdbId}/${season}/${episode}`;
}
