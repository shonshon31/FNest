import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Navbar } from "@/components/Navbar";
import { TitleRow } from "@/components/TitleRow";
import { VidKingPlayer } from "@/components/VidKingPlayer";
import { WatchActions } from "@/components/WatchActions";
import { getTitle, titles } from "@/data/titles";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ season?: string; episode?: string }>;
};

export default async function WatchPage({ params, searchParams }: Props) {
  const { id } = await params;
  const query = await searchParams;
  const title = getTitle(id);
  if (!title) notFound();

  const season = Math.max(1, Number(query.season ?? 1));
  const maxEpisode = title.seasons?.[season - 1] ?? 1;
  const episode = Math.min(Math.max(1, Number(query.episode ?? 1)), maxEpisode);
  const related = titles.filter((item) => item.id !== title.id && (item.provider === title.provider || item.genres.some((genre) => title.genres.includes(genre))));

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <section className="relative overflow-hidden px-4 py-6 md:px-8">
        <Image src={title.cover} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/50 via-ink/90 to-ink" />

        <Link href="/" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white">
          <ChevronLeftIcon className="size-4" />
          Back home
        </Link>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <VidKingPlayer title={title} season={season} episode={episode} />
          <aside className="rounded border border-line bg-black/35 p-5 backdrop-blur">
            <div className="relative mb-4 aspect-[2/3] overflow-hidden rounded bg-panel lg:mx-auto lg:max-w-[220px]">
              <Image src={title.poster} alt="" fill sizes="220px" className="object-cover" />
            </div>
            <p className="text-xs font-black uppercase text-brand">{title.provider}</p>
            <h1 className="mt-1 text-3xl font-black">{title.title}</h1>
            <p className="mt-2 text-sm font-semibold text-zinc-300">
              {title.type} • {title.year} • {title.rating.toFixed(1)} {title.runtime ? `• ${title.runtime}` : ""}
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
