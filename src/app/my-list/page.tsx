"use client";

import { Navbar } from "@/components/Navbar";
import { TitleCard } from "@/components/TitleCard";
import { useMovieStore } from "@/store/useMovieStore";

export default function MyListPage() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <section className="px-4 py-8 md:px-8">
        <p className="mb-2 text-xs font-black uppercase text-brand">Saved locally</p>
        <h1 className="text-4xl font-black md:text-6xl">My List</h1>
        {favorites.length ? (
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {favorites.map((title) => (
              <TitleCard key={title.id} title={title} />
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded border border-dashed border-line bg-white/[0.04] p-10 text-center text-zinc-400">
            Save movies and series from any poster card. No account required.
          </div>
        )}
      </section>
    </main>
  );
}
