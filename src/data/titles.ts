import type { StreamTitle } from "@/types/title";

const T = "https://image.tmdb.org/t/p/w500";
const O = "https://image.tmdb.org/t/p/original";

export const titles: StreamTitle[] = [
  // ── Netflix ──────────────────────────────────────────────────────────────
  {
    id: "the-night-agent", tmdbId: 112836, title: "The Night Agent",
    type: "Series", provider: "Netflix", year: 2025, rating: 8.1,
    genres: ["Action", "Thriller", "Political"], seasons: [10, 10],
    poster: `${T}/6Fbrfdr2oR4BCgkGxHMqpD3M9aX.jpg`,
    cover:  `${O}/2meX1nMdScFOoV4370rqHWKmXhY.jpg`,
    description: "A fast political thriller built for late-night autoplay, conspiracies, and urgent phone calls."
  },
  {
    id: "glass-onion", tmdbId: 661374, title: "Glass Onion",
    type: "Movie", provider: "Netflix", year: 2022, rating: 7.1, runtime: "2h 20m",
    genres: ["Mystery", "Comedy", "Crime"],
    poster: `${T}/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg`,
    cover:  `${O}/8rpDcsfLJypbO6vREc0547VKqEv.jpg`,
    description: "A bright, sharply dressed mystery that turns rich-people nonsense into a satisfying puzzle box."
  },
  {
    id: "squid-game", tmdbId: 93405, title: "Squid Game",
    type: "Series", provider: "Netflix", year: 2024, rating: 8.0,
    genres: ["Thriller", "Drama", "Survival"], seasons: [9, 7],
    poster: `${T}/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg`,
    cover:  `${O}/qw3J9cNeLioOLoR68WX7z79aCdK.jpg`,
    description: "Desperate contestants risk their lives in deadly childhood games for a life-changing cash prize."
  },
  {
    id: "stranger-things", tmdbId: 66732, title: "Stranger Things",
    type: "Series", provider: "Netflix", year: 2025, rating: 8.7,
    genres: ["Sci-fi", "Horror", "Drama"], seasons: [8, 9, 8, 9, 9],
    poster: `${T}/49WJfeN0moxb9IPfGn8AIqMGskD.jpg`,
    cover:  `${O}/rcA17r3BYHNMpgPGNQCBvYwIBRx.jpg`,
    description: "Supernatural terror, 80s nostalgia, and a group of kids who keep saving the world from the Upside Down."
  },
  {
    id: "wednesday", tmdbId: 119051, title: "Wednesday",
    type: "Series", provider: "Netflix", year: 2024, rating: 8.1,
    genres: ["Horror", "Comedy", "Mystery"], seasons: [8, 8],
    poster: `${T}/9PFonBhy4cQy7Jz20NpMygczOkv.jpg`,
    cover:  `${O}/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg`,
    description: "Wednesday Addams navigates Nevermore Academy with dry wit, psychic visions, and a growing murder mystery."
  },
  {
    id: "ozark", tmdbId: 69656, title: "Ozark",
    type: "Series", provider: "Netflix", year: 2022, rating: 8.4,
    genres: ["Crime", "Drama", "Thriller"], seasons: [10, 10, 10, 14],
    poster: `${T}/pCGyPVrI9Fzw6rE1noNQNSX9HpO.jpg`,
    cover:  `${O}/9bKaasNFmRFNwimM0sPmtiqFkrp.jpg`,
    description: "A financial advisor drags his family into money laundering for a drug cartel in the Missouri Ozarks."
  },
  {
    id: "bridgerton", tmdbId: 96677, title: "Bridgerton",
    type: "Series", provider: "Netflix", year: 2024, rating: 7.3,
    genres: ["Romance", "Drama", "Period"], seasons: [8, 8, 8],
    poster: `${T}/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg`,
    cover:  `${O}/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
    description: "Regency-era romance, scandal, and wit set among London's glittering social season."
  },
  {
    id: "the-witcher", tmdbId: 71912, title: "The Witcher",
    type: "Series", provider: "Netflix", year: 2023, rating: 7.6,
    genres: ["Fantasy", "Action", "Adventure"], seasons: [8, 8, 8],
    poster: `${T}/7vjaCdMw15FEbXyLQTVa04URsPm.jpg`,
    cover:  `${O}/ynOAdoUN9WPt8MmNrU5cH7ePq4H.jpg`,
    description: "A monster hunter navigates a morally complex world where humans are often worse than the beasts."
  },
  {
    id: "money-heist", tmdbId: 71446, title: "Money Heist",
    type: "Series", provider: "Netflix", year: 2021, rating: 8.2,
    genres: ["Crime", "Drama", "Thriller"], seasons: [9, 6, 8, 8, 10],
    poster: `${T}/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,
    cover:  `${O}/gFk9BHF5FDEK9cEG1K6rqAJTvAH.jpg`,
    description: "A criminal mastermind orchestrates the most ambitious heist in history against the Spanish Mint."
  },
  {
    id: "emily-in-paris", tmdbId: 101311, title: "Emily in Paris",
    type: "Series", provider: "Netflix", year: 2024, rating: 7.1,
    genres: ["Comedy", "Romance", "Drama"], seasons: [10, 10, 10, 10],
    poster: `${T}/qBBoaRBGT7UgINBF8oyF6V9HWDM.jpg`,
    cover:  `${O}/4nFSRoQrEraLs2OkiBhQ5kCFzxq.jpg`,
    description: "An American marketing exec navigates love, fashion, and cultural clashes in the city of light."
  },
  {
    id: "past-lives", tmdbId: 1072790, title: "Past Lives",
    type: "Movie", provider: "Netflix", year: 2023, rating: 7.9, runtime: "1h 46m",
    genres: ["Romance", "Drama", "Indie"],
    poster: `${T}/k3waqVXSnYrZRFMEoUyMEeOAFSS.jpg`,
    cover:  `${O}/jE5o7y9K6pZtWNNMEibZ4z9mHMo.jpg`,
    description: "Two childhood sweethearts reunite over two decades and wrestle with destiny, love, and choices."
  },
  {
    id: "spider-man-across-spider-verse", tmdbId: 569094, title: "Spider-Man: Across the Spider-Verse",
    type: "Movie", provider: "Netflix", year: 2023, rating: 8.7, runtime: "2h 20m",
    genres: ["Animation", "Superhero", "Adventure"],
    poster: `${T}/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg`,
    cover:  `${O}/nGxUxi3PcDlRUPERLvFPSJGcX9K.jpg`,
    description: "Miles Morales leaps into a multiverse adventure that redefines what an animated film can be."
  },

  // ── HBO Max ───────────────────────────────────────────────────────────────
  {
    id: "the-last-of-us", tmdbId: 100088, title: "The Last of Us",
    type: "Series", provider: "HBO Max", year: 2025, rating: 8.7,
    genres: ["Drama", "Survival", "Sci-fi"], seasons: [9, 7],
    poster: `${T}/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg`,
    cover:  `${O}/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg`,
    description: "A brutal, intimate survival drama where every quiet moment has teeth and every choice leaves a mark."
  },
  {
    id: "house-of-the-dragon", tmdbId: 94997, title: "House of the Dragon",
    type: "Series", provider: "HBO Max", year: 2024, rating: 8.4,
    genres: ["Fantasy", "Drama", "Politics"], seasons: [10, 8],
    poster: `${T}/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg`,
    cover:  `${O}/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg`,
    description: "Dynastic fantasy full of family grudges, court strategy, and the glow of dragonfire."
  },
  {
    id: "barbie", tmdbId: 346698, title: "Barbie",
    type: "Movie", provider: "HBO Max", year: 2023, rating: 7.0, runtime: "1h 54m",
    genres: ["Comedy", "Fantasy", "Satire"],
    poster: `${T}/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg`,
    cover:  `${O}/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg`,
    description: "A candy-colored comedy with existential bite, big musical flourishes, and a thoughtful center."
  },
  {
    id: "euphoria", tmdbId: 85552, title: "Euphoria",
    type: "Series", provider: "HBO Max", year: 2022, rating: 8.4,
    genres: ["Drama", "Teen", "Thriller"], seasons: [8, 8],
    poster: `${T}/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg`,
    cover:  `${O}/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg`,
    description: "A visually stunning and raw portrait of addiction, identity, and trauma among high school students."
  },
  {
    id: "succession", tmdbId: 63333, title: "Succession",
    type: "Series", provider: "HBO Max", year: 2023, rating: 8.9,
    genres: ["Drama", "Satire", "Family"], seasons: [10, 10, 9, 9],
    poster: `${T}/e2X8dZtE5ASoisQJiz9SNqAlBXb.jpg`,
    cover:  `${O}/oHd4DmSf4x8I7IiIpOUwYoiKDXo.jpg`,
    description: "A ruthless media dynasty tears itself apart as the Roy siblings scheme for their father's empire."
  },
  {
    id: "white-lotus", tmdbId: 122226, title: "The White Lotus",
    type: "Series", provider: "HBO Max", year: 2024, rating: 7.9,
    genres: ["Drama", "Satire", "Mystery"], seasons: [6, 7, 8],
    poster: `${T}/5EblGFjSwqIvBbGHBuBdEPWlI4T.jpg`,
    cover:  `${O}/1Ll7fPqW3pIVrGiUiTbUFR2HWHE.jpg`,
    description: "Guests and staff at a luxury resort reveal class tensions, dark desires, and deadly secrets."
  },
  {
    id: "true-detective", tmdbId: 46648, title: "True Detective",
    type: "Series", provider: "HBO Max", year: 2024, rating: 8.9,
    genres: ["Crime", "Drama", "Mystery"], seasons: [8, 8, 8, 6],
    poster: `${T}/lteGBz5rKVQU8DjPy0BHXqvE7oR.jpg`,
    cover:  `${O}/pbRZKjRKoLBZYHPBm42bvhBFTTp.jpg`,
    description: "Anthology crime drama exploring the darkest corners of human nature through complex detectives."
  },
  {
    id: "the-penguin", tmdbId: 194764, title: "The Penguin",
    type: "Series", provider: "HBO Max", year: 2024, rating: 8.5,
    genres: ["Crime", "Drama", "Superhero"], seasons: [8],
    poster: `${T}/fayMBGnPlvKGEVxXrBpvMmADvuZ.jpg`,
    cover:  `${O}/pEaEXcBJiOEz7OdH2EBK0fD9jA3.jpg`,
    description: "Oz Cobb rises through Gotham's criminal underworld in this gritty Batman universe spin-off."
  },
  {
    id: "dune-part-two", tmdbId: 693134, title: "Dune: Part Two",
    type: "Movie", provider: "HBO Max", year: 2024, rating: 8.5, runtime: "2h 46m",
    genres: ["Sci-fi", "Epic", "Adventure"],
    poster: `${T}/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg`,
    cover:  `${O}/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg`,
    description: "Paul Atreides unites with the Fremen to exact revenge on the conspirators who destroyed his family."
  },

  // ── Prime Video ───────────────────────────────────────────────────────────
  {
    id: "fallout", tmdbId: 106379, title: "Fallout",
    type: "Series", provider: "Prime Video", year: 2024, rating: 8.4,
    genres: ["Sci-fi", "Adventure", "Dark comedy"], seasons: [8],
    poster: `${T}/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg`,
    cover:  `${O}/8NQ7wpG1jRZnObkQtwDdzMD1oY.jpg`,
    description: "Vault doors open onto a sharp, strange wasteland packed with retro-future danger and big series energy."
  },
  {
    id: "oppenheimer", tmdbId: 872585, title: "Oppenheimer",
    type: "Movie", provider: "Prime Video", year: 2023, rating: 8.5, runtime: "3h 1m",
    genres: ["Biography", "Drama", "History"],
    poster: `${T}/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg`,
    cover:  `${O}/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg`,
    description: "A meticulous, thunderous biographical drama about ambition, invention, consequence, and moral gravity."
  },
  {
    id: "the-boys", tmdbId: 76479, title: "The Boys",
    type: "Series", provider: "Prime Video", year: 2024, rating: 8.7,
    genres: ["Superhero", "Satire", "Action"], seasons: [8, 8, 8, 8],
    poster: `${T}/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg`,
    cover:  `${O}/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg`,
    description: "In a world where superheroes abuse their powers, a vigilante group fights to expose their corruption."
  },
  {
    id: "rings-of-power", tmdbId: 84773, title: "The Rings of Power",
    type: "Series", provider: "Prime Video", year: 2024, rating: 7.0,
    genres: ["Fantasy", "Adventure", "Epic"], seasons: [8, 8],
    poster: `${T}/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg`,
    cover:  `${O}/6QEBRVMIKMfuYY5NHLFPjA4BSXT.jpg`,
    description: "Epic Middle-earth adventure set thousands of years before The Lord of the Rings."
  },
  {
    id: "reacher", tmdbId: 108978, title: "Reacher",
    type: "Series", provider: "Prime Video", year: 2024, rating: 7.9,
    genres: ["Action", "Thriller", "Crime"], seasons: [8, 8, 8],
    poster: `${T}/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg`,
    cover:  `${O}/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg`,
    description: "A drifting ex-military cop gets pulled into small-town conspiracies using his fists and sharp mind."
  },
  {
    id: "invincible", tmdbId: 95557, title: "Invincible",
    type: "Series", provider: "Prime Video", year: 2024, rating: 8.7,
    genres: ["Animation", "Superhero", "Action"], seasons: [8, 8, 8],
    poster: `${T}/yDWJYRAwMNKa2FG3oKgACkxKLSa.jpg`,
    cover:  `${O}/6UH52Fmau8RPsMAbrnYIJxrjLvQ.jpg`,
    description: "A teenager discovers his father is Earth's most powerful superhero — and its greatest threat."
  },
  {
    id: "jack-ryan", tmdbId: 69740, title: "Jack Ryan",
    type: "Series", provider: "Prime Video", year: 2023, rating: 7.6,
    genres: ["Action", "Thriller", "Political"], seasons: [8, 8, 8, 8],
    poster: `${T}/oQpCfJNqDuyMD5LxFmRiCCZ5BjA.jpg`,
    cover:  `${O}/qk2SHFXlVCHFcoOPlhRNZ34Lhkb.jpg`,
    description: "CIA analyst Jack Ryan is thrust into dangerous global conspiracies far beyond his desk job."
  },
  {
    id: "the-holdovers", tmdbId: 840430, title: "The Holdovers",
    type: "Movie", provider: "Prime Video", year: 2023, rating: 7.9, runtime: "2h 13m",
    genres: ["Comedy", "Drama", "Holiday"],
    poster: `${T}/VHoqeFAs9opxe9NQnoOeGMSxjr.jpg`,
    cover:  `${O}/2E7HGJkbhWVlqMNGOyjLkktmQ50.jpg`,
    description: "A curmudgeonly teacher, a grieving cook, and a troubled student spend the holidays together."
  },

  // ── Paramount+ ────────────────────────────────────────────────────────────
  {
    id: "halo", tmdbId: 52814, title: "Halo",
    type: "Series", provider: "Paramount+", year: 2024, rating: 7.0,
    genres: ["Sci-fi", "Action", "Military"], seasons: [9, 8],
    poster: `${T}/nJUHX3XL1jMkk8honUZnUmudFb9.jpg`,
    cover:  `${O}/ab6sBnZf4YZcxOHtZP7io9A9Bdo.jpg`,
    description: "Armored sci-fi spectacle, alien conflict, and the pull of a familiar game universe."
  },
  {
    id: "mission-impossible-dead-reckoning", tmdbId: 575264, title: "Mission: Impossible – Dead Reckoning",
    type: "Movie", provider: "Paramount+", year: 2023, rating: 7.7, runtime: "2h 44m",
    genres: ["Action", "Spy", "Adventure"],
    poster: `${T}/NNxYkU70HPurnNCSiCjYAmacwm.jpg`,
    cover:  `${O}/628Dep6AxEtDxjZoGP78TsOxYbK.jpg`,
    description: "Clockwork action spectacle, practical stunts, and spy-thriller momentum built for a big-screen mood."
  },
  {
    id: "top-gun-maverick", tmdbId: 361743, title: "Top Gun: Maverick",
    type: "Movie", provider: "Paramount+", year: 2022, rating: 8.2, runtime: "2h 11m",
    genres: ["Action", "Drama", "Aviation"],
    poster: `${T}/62HCnUTziyWcpDaBO2i1DX17ljH.jpg`,
    cover:  `${O}/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg`,
    description: "A full-throttle legacy sequel with clean emotional lift and aerial action that still feels physical."
  },
  {
    id: "tulsa-king", tmdbId: 120168, title: "Tulsa King",
    type: "Series", provider: "Paramount+", year: 2024, rating: 8.1,
    genres: ["Crime", "Comedy", "Drama"], seasons: [9, 10],
    poster: `${T}/fGqWCiynBhMqe9AHLfZGMHHhYPa.jpg`,
    cover:  `${O}/9cQzH9fTCcn7dpNUjPvxVLdN1Zs.jpg`,
    description: "A New York mafia boss is exiled to Tulsa, Oklahoma and must build a new criminal empire from scratch."
  },
  {
    id: "1923", tmdbId: 130392, title: "1923",
    type: "Series", provider: "Paramount+", year: 2024, rating: 8.5,
    genres: ["Western", "Drama", "History"], seasons: [8, 8],
    poster: `${T}/9HoMSfxMBFMNTH1DpnSxSWRWO38.jpg`,
    cover:  `${O}/3bfmbpKPCImx6gJNIl0JxsNhJle.jpg`,
    description: "The Dutton family faces prohibition, drought, and historical hardship in the Yellowstone prequel."
  },

  // ── Apple TV+ ─────────────────────────────────────────────────────────────
  {
    id: "silo", tmdbId: 125988, title: "Silo",
    type: "Series", provider: "Apple TV+", year: 2025, rating: 8.1,
    genres: ["Sci-fi", "Mystery", "Drama"], seasons: [10, 10],
    poster: `${T}/1NxaSn4ver4jIvLeD7YF8cTlZjB.jpg`,
    cover:  `${O}/2eIlCirgcvEwmCSYh2wDfz5Sxvz.jpg`,
    description: "A contained mystery with industrial scale, quiet paranoia, and secrets stacked hundreds of floors deep."
  },
  {
    id: "severance", tmdbId: 95396, title: "Severance",
    type: "Series", provider: "Apple TV+", year: 2025, rating: 8.7,
    genres: ["Sci-fi", "Thriller", "Drama"], seasons: [9, 10],
    poster: `${T}/lm4AqA7Gx4TqbXGRWVkXBvKDwt8.jpg`,
    cover:  `${O}/7guEbMQ0TJCxn55tkYMJVXBuNCP.jpg`,
    description: "Employees surgically divide their work and personal memories — until the two worlds collide."
  },
  {
    id: "ted-lasso", tmdbId: 97546, title: "Ted Lasso",
    type: "Series", provider: "Apple TV+", year: 2023, rating: 8.8,
    genres: ["Comedy", "Sports", "Drama"], seasons: [10, 12, 12],
    poster: `${T}/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg`,
    cover:  `${O}/6lgBDdmJBrCdJF48m3HOvbhD6GH.jpg`,
    description: "An overly optimistic American football coach leads a struggling English soccer club with pure heart."
  },
  {
    id: "slow-horses", tmdbId: 107864, title: "Slow Horses",
    type: "Series", provider: "Apple TV+", year: 2024, rating: 8.1,
    genres: ["Spy", "Thriller", "Drama"], seasons: [6, 6, 6, 6],
    poster: `${T}/a9O4eoGBJSJ4E5KJeRZMhfcMUzJ.jpg`,
    cover:  `${O}/5WhtBHHJFzuJrjOTiJdxMTTyBUk.jpg`,
    description: "Disgraced MI5 agents stuck in a dumping ground department stumble into real, deadly conspiracies."
  },
  {
    id: "killers-of-the-flower-moon", tmdbId: 804095, title: "Killers of the Flower Moon",
    type: "Movie", provider: "Apple TV+", year: 2023, rating: 7.7, runtime: "3h 26m",
    genres: ["Crime", "Drama", "History"],
    poster: `${T}/dB6ZpCMYkTBTBtgPGkBPkBo4SFH.jpg`,
    cover:  `${O}/1X7vow16X7CnCoexXh4H4F2yDJv.jpg`,
    description: "A chilling true story of greed, murder, and the systematic killing of the Osage Nation in 1920s Oklahoma."
  },

  // ── Peacock ───────────────────────────────────────────────────────────────
  {
    id: "yellowstone", tmdbId: 73586, title: "Yellowstone",
    type: "Series", provider: "Peacock", year: 2024, rating: 8.6,
    genres: ["Western", "Drama", "Crime"], seasons: [9, 10, 10, 10, 14],
    poster: `${T}/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg`,
    cover:  `${O}/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg`,
    description: "Ranchland power struggles, sharp family loyalty, and modern western drama with a bruising edge."
  },
  {
    id: "bel-air", tmdbId: 113988, title: "Bel-Air",
    type: "Series", provider: "Peacock", year: 2024, rating: 7.4,
    genres: ["Drama", "Coming-of-age", "Family"], seasons: [10, 10, 8],
    poster: `${T}/jA8PgFiVGDGRNfbBiHMVgQ1ygUY.jpg`,
    cover:  `${O}/oI9PouC6dYZDZz5V6h0xkxQGbsw.jpg`,
    description: "A dramatic reimagining of Will Smith's classic story — same DNA, grittier tone."
  },

  // ── Disney+ ───────────────────────────────────────────────────────────────
  {
    id: "andor", tmdbId: 83867, title: "Andor",
    type: "Series", provider: "Disney+", year: 2024, rating: 8.4,
    genres: ["Sci-fi", "Drama", "Action"], seasons: [12, 12],
    poster: `${T}/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg`,
    cover:  `${O}/9kGJpnxBFEi2zMJz6UaEg1mAFAE.jpg`,
    description: "The most grounded Star Wars story ever told — a slow-burn rebel spy thriller with real stakes."
  },
  {
    id: "the-mandalorian", tmdbId: 82856, title: "The Mandalorian",
    type: "Series", provider: "Disney+", year: 2023, rating: 8.7,
    genres: ["Sci-fi", "Western", "Adventure"], seasons: [8, 8, 8],
    poster: `${T}/sWgBv7LV2reenciBiTfgFR0fzuB.jpg`,
    cover:  `${O}/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg`,
    description: "A lone bounty hunter protects a mysterious child across a lawless galaxy far, far away."
  },
  {
    id: "loki", tmdbId: 84958, title: "Loki",
    type: "Series", provider: "Disney+", year: 2023, rating: 8.2,
    genres: ["Superhero", "Sci-fi", "Fantasy"], seasons: [6, 6],
    poster: `${T}/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg`,
    cover:  `${O}/aSRBIBFMRHAHO2jU42SFXN7TDEI.jpg`,
    description: "The God of Mischief navigates a time-bending bureaucracy that governs the multiverse."
  },
  {
    id: "ahsoka", tmdbId: 114461, title: "Ahsoka",
    type: "Series", provider: "Disney+", year: 2023, rating: 7.4,
    genres: ["Sci-fi", "Action", "Adventure"], seasons: [8],
    poster: `${T}/rlB7CGWM0GxhgSYQoS8Q7DPMnmj.jpg`,
    cover:  `${O}/fHOTtOMgcVCWMbWyMDVmqISWkn4.jpg`,
    description: "Former Jedi Ahsoka Tano investigates a new threat to the galaxy in the post-Empire era."
  },
  {
    id: "poor-things", tmdbId: 792307, title: "Poor Things",
    type: "Movie", provider: "Disney+", year: 2023, rating: 8.0, runtime: "2h 21m",
    genres: ["Comedy", "Sci-fi", "Drama"],
    poster: `${T}/kCGlIMHnOm8JPXIRfnZaiKukSbH.jpg`,
    cover:  `${O}/a0U0SMNU4JaBMi0vMfFYIJqCeP5.jpg`,
    description: "A woman brought back to life explores the world with insatiable curiosity and growing independence."
  },
  {
    id: "guardians-vol-3", tmdbId: 447365, title: "Guardians of the Galaxy Vol. 3",
    type: "Movie", provider: "Disney+", year: 2023, rating: 8.0, runtime: "2h 30m",
    genres: ["Superhero", "Comedy", "Sci-fi"],
    poster: `${T}/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg`,
    cover:  `${O}/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg`,
    description: "The Guardians embark on a mission to protect Rocket, revealing a heartbreaking origin story."
  },
  {
    id: "elemental", tmdbId: 976573, title: "Elemental",
    type: "Movie", provider: "Disney+", year: 2023, rating: 7.0, runtime: "1h 41m",
    genres: ["Animation", "Comedy", "Romance"],
    poster: `${T}/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg`,
    cover:  `${O}/6vb9PzDHiiGO4zKBuQwYlnpNLMR.jpg`,
    description: "In a city where elements coexist, two unlikely elements fall for each other."
  },
];

export const providers = ["All", ...Array.from(new Set(titles.map((t) => t.provider)))];

export function getTitle(id: string) {
  return titles.find((t) => t.id === id);
}

export function getVidKingUrl(title: StreamTitle, season = 1, episode = 1) {
  if (title.type === "Movie") return `https://www.vidking.net/embed/movie/${title.tmdbId}`;
  return `https://www.vidking.net/embed/tv/${title.tmdbId}/${season}/${episode}`;
}
