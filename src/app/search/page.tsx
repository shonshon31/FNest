"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { TitleCard } from "@/components/TitleCard";
import { titles, providers } from "@/data/titles";
import type { StreamTitle } from "@/types/title";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// ─── Types ────────────────────────────────────────────────────────────────────

type SearchResult = StreamTitle & { _source: "local" | "tmdb" };

// ─── Local search (instant, no API key required) ───────────────────────────

function searchLocal(query: string, type: string, provider: string): SearchResult[] {
  return titles
    .filter((title) => {
      const haystack = [title.title, title.type, title.provider, String(title.year), ...title.genres]
        .join(" ")
        .toLowerCase();
      return (
        (!query || haystack.includes(query.toLowerCase().trim())) &&
        (type === "All" || title.type === type) &&
        (provider === "All" || title.provider === provider)
      );
    })
    .map((t) => ({ ...t, _source: "local" as const }));
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function SearchPage() {
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const initialType = searchParams.get("type") ?? "All";
  const initialProvider = searchParams.get("provider") ?? "All";

  const [query, setQuery] = useState(initialQuery);
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedProvider, setSelectedProvider] = useState(initialProvider);

  const [tmdbResults, setTmdbResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Local results (always computed instantly)
  const localResults = searchLocal(query, selectedType, selectedProvider);

  // Sync URL params → state when navigating from Navbar
  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
    setSelectedType(searchParams.get("type") ?? "All");
    setSelectedProvider(searchParams.get("provider") ?? "All");
  }, [searchParams]);

  // TMDB search (debounced)
  const fetchTmdb = useCallback(async (q: string, type: string) => {
    if (!q.trim()) {
      setTmdbResults([]);
      setSearched(false);
      setApiError(null);
      return;
    }
    setLoading(true);
    setApiError(null);
    try {
      const params = new URLSearchParams({ q });
      if (type !== "All") params.set("type", type);
      const res = await fetch(`/api/search?${params}`);
      const data = await res.json() as { results: StreamTitle[]; error: string | null };
      if (data.error) {
        setApiError(data.error);
        setTmdbResults([]);
      } else {
        setTmdbResults(data.results.map((r) => ({ ...r, _source: "tmdb" as const })));
      }
    } catch {
      setApiError("Could not reach the search service.");
      setTmdbResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchTmdb(query, selectedType);
    }, 420);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, selectedType, fetchTmdb]);

  // Merge: local on top, then TMDB (de-dup by tmdbId)
  const localTmdbIds = new Set(localResults.map((r) => r.tmdbId));
  const dedupedTmdb = tmdbResults.filter((r) => !localTmdbIds.has(r.tmdbId));
  const allResults: SearchResult[] = [...localResults, ...dedupedTmdb];

  const hasQuery = query.trim().length > 0;

  return (
    <main className="min-h-screen bg-ink pb-16">
      <Navbar />
      <section className="px-4 py-8 md:px-8">

        {/* Header */}
        <p className="mb-2 text-xs font-black uppercase text-brand">Browse</p>
        <h1 className="text-4xl font-black md:text-6xl">
          {hasQuery ? `Search: ${query}` : "Movies & Series"}
        </h1>

        {/* Search bar (synced to Navbar search) */}
        <div className="mt-6 flex items-center gap-2 rounded border border-line bg-white/10 px-3 py-2 text-zinc-300 md:max-w-md">
          <MagnifyingGlassIcon className="size-5 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies or series..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
          {loading && (
            <svg className="size-4 shrink-0 animate-spin text-brand" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          )}
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["All", "Movie", "Series"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded border border-line px-3 py-2 text-sm font-bold ${
                selectedType === type ? "bg-brand text-white" : "bg-white/10 text-zinc-300"
              }`}
            >
              {type}
            </button>
          ))}
          {providers.slice(1).map((provider) => (
            <button
              key={provider}
              onClick={() => setSelectedProvider(selectedProvider === provider ? "All" : provider)}
              className={`rounded border border-line px-3 py-2 text-sm font-bold ${
                selectedProvider === provider ? "bg-brand text-white" : "bg-white/10 text-zinc-300"
              }`}
            >
              {provider}
            </button>
          ))}
        </div>

        {/* API error banner */}
        {apiError && (
          <div className="mt-4 rounded border border-yellow-600/40 bg-yellow-900/20 px-4 py-3 text-sm text-yellow-300">
            <strong>TMDB search unavailable:</strong> {apiError}
            <br />
            <span className="text-yellow-400/70">
              Add your free TMDB API key to <code className="font-mono">.env.local</code> as{" "}
              <code className="font-mono">TMDB_API_KEY=your_key_here</code> to enable full search.
              Local library results are shown below.
            </span>
          </div>
        )}

        {/* Result count */}
        <p className="mt-5 text-sm text-zinc-400">
          {loading
            ? "Searching…"
            : hasQuery
            ? `${allResults.length} result${allResults.length === 1 ? "" : "s"} found`
            : `${localResults.length} title${localResults.length === 1 ? "" : "s"} in library`}
          {hasQuery && !loading && tmdbResults.length > 0 && !apiError && (
            <span className="ml-2 text-zinc-500">
              ({localResults.length} local · {dedupedTmdb.length} from TMDB)
            </span>
          )}
        </p>

        {/* Grid */}
        {allResults.length > 0 ? (
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {allResults.map((title) => (
              <div key={title.id} className="relative">
                <TitleCard title={title} />
                {title._source === "tmdb" && (
                  <span className="absolute left-2 top-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold text-brand backdrop-blur">
                    TMDB
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          !loading && searched && (
            <div className="mt-16 text-center text-zinc-500">
              <p className="text-lg font-bold">No results for &quot;{query}&quot;</p>
              <p className="mt-1 text-sm">Try a different title or check your spelling.</p>
            </div>
          )
        )}
      </section>
    </main>
  );
}
