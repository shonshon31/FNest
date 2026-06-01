import { Navbar } from "@/components/Navbar";
import { TitleCard } from "@/components/TitleCard";
import { providers, titles } from "@/data/titles";

type Props = {
  searchParams: Promise<{ q?: string; type?: string; provider?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q?.toLowerCase().trim() ?? "";
  const selectedType = params.type ?? "All";
  const selectedProvider = params.provider ?? "All";
  const filtered = titles.filter((title) => {
    const haystack = [title.title, title.type, title.provider, title.year, ...title.genres].join(" ").toLowerCase();
    return (
      (!query || haystack.includes(query)) &&
      (selectedType === "All" || title.type === selectedType) &&
      (selectedProvider === "All" || title.provider === selectedProvider)
    );
  });

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <section className="px-4 py-8 md:px-8">
        <p className="mb-2 text-xs font-black uppercase text-brand">Browse</p>
        <h1 className="text-4xl font-black md:text-6xl">{query ? `Search: ${params.q}` : "Movies & Series"}</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {["All", "Movie", "Series"].map((type) => (
            <a key={type} href={`/search?type=${type}${selectedProvider !== "All" ? `&provider=${encodeURIComponent(selectedProvider)}` : ""}`} className={`rounded border border-line px-3 py-2 text-sm font-bold ${selectedType === type ? "bg-brand" : "bg-white/10 text-zinc-300"}`}>
              {type}
            </a>
          ))}
          {providers.map((provider) => (
            <a key={provider} href={`/search?provider=${encodeURIComponent(provider)}${selectedType !== "All" ? `&type=${selectedType}` : ""}`} className={`rounded border border-line px-3 py-2 text-sm font-bold ${selectedProvider === provider ? "bg-brand" : "bg-white/10 text-zinc-300"}`}>
              {provider}
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm text-zinc-400">{filtered.length} title{filtered.length === 1 ? "" : "s"} found</p>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filtered.map((title) => (
            <TitleCard key={title.id} title={title} />
          ))}
        </div>
      </section>
    </main>
  );
}
