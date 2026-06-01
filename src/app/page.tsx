import { ContinueWatching } from "@/components/ContinueWatching";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";
import { TitleRow } from "@/components/TitleRow";
import { titles } from "@/data/titles";

export default function HomePage() {
  const topRated = [...titles].sort((a, b) => b.rating - a.rating);
  const movies = titles.filter((title) => title.type === "Movie");
  const series = titles.filter((title) => title.type === "Series");
  const netflix = titles.filter((title) => title.provider === "Netflix");
  const premium = titles.filter((title) => ["HBO Max", "Prime Video", "Paramount+"].includes(title.provider));

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <HeroCarousel items={titles} />
      <ContinueWatching />
      <TitleRow title="Trending Streams" items={titles} />
      <TitleRow title="Top Rated" items={topRated} />
      <TitleRow title="Movies" items={movies} />
      <TitleRow title="Series" items={series} />
      <TitleRow title="Netflix Picks" items={netflix} />
      <TitleRow title="Prime, HBO Max & Paramount+" items={premium} />
    </main>
  );
}
