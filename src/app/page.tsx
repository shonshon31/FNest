import { ContinueWatching } from "@/components/ContinueWatching";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";
import { TitleRow } from "@/components/TitleRow";
import { titles as rawTitles } from "@/data/titles";
import { hydrateTitles } from "@/lib/tmdb";

export default async function HomePage() {
  // Fetch live posters/covers from TMDB for every title
  const titles = await hydrateTitles(rawTitles);

  const trending  = [...titles].sort((a, b) => b.rating - a.rating);
  const topRated  = titles.filter((t) => t.rating >= 8.4).sort((a, b) => b.rating - a.rating);
  const movies    = titles.filter((t) => t.type === "Movie");
  const series    = titles.filter((t) => t.type === "Series");
  const netflix   = titles.filter((t) => t.provider === "Netflix");
  const hbo       = titles.filter((t) => t.provider === "HBO Max");
  const prime     = titles.filter((t) => t.provider === "Prime Video");
  const disney    = titles.filter((t) => t.provider === "Disney+");
  const apple     = titles.filter((t) => t.provider === "Apple TV+");
  const paramount = titles.filter((t) => t.provider === "Paramount+");
  const action    = titles.filter((t) => t.genres.some((g) => ["Action", "Thriller", "Spy"].includes(g)));
  const scifi     = titles.filter((t) => t.genres.some((g) => ["Sci-fi", "Sci-fi & Fantasy"].includes(g)));
  const crime     = titles.filter((t) => t.genres.some((g) => ["Crime", "Mystery"].includes(g)));

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <HeroCarousel items={titles} />
      <ContinueWatching />
      <TitleRow title="🔥 Trending Now"       items={trending} />
      <TitleRow title="⭐ Top Rated"           items={topRated} />
      <TitleRow title="🎬 Movies"              items={movies} />
      <TitleRow title="📺 Series"              items={series} />
      <TitleRow title="Netflix Picks"          items={netflix} />
      <TitleRow title="HBO Max"                items={hbo} />
      <TitleRow title="Prime Video"            items={prime} />
      <TitleRow title="Disney+"                items={disney} />
      <TitleRow title="Apple TV+"              items={apple} />
      <TitleRow title="Paramount+"             items={paramount} />
      <TitleRow title="Action & Thriller"      items={action} />
      <TitleRow title="Sci-Fi Universe"        items={scifi} />
      <TitleRow title="Crime & Mystery"        items={crime} />

      <footer className="mt-8 py-4 text-center text-[10px] tracking-widest text-zinc-700 select-none">
        shon
        
        
        
        
        niqqa jai
      </footer>
    </main>
  );
}
