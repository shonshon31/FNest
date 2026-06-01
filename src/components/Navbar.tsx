"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/search?type=Movie", label: "Movies" },
  { href: "/search?type=Series", label: "Series" },
  { href: "/my-list", label: "My List" }
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed) router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <header className="sticky top-0 z-40 grid gap-3 border-b border-line bg-ink/82 px-4 py-3 backdrop-blur-xl md:grid-cols-[auto_1fr_minmax(260px,420px)] md:items-center md:px-8">
      <Link href="/" className="inline-flex items-center gap-3 text-lg font-black">
        <span className="grid size-9 place-items-center rounded bg-brand shadow-glow">F</span>
        FlickNest
      </Link>

      <nav className="hide-scrollbar flex gap-1 overflow-x-auto md:justify-center">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded px-3 py-2 text-sm font-bold transition hover:bg-white/10 ${
              pathname === item.href.split("?")[0] ? "bg-white/10 text-white" : "text-zinc-400"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <form onSubmit={submit} className="flex min-h-11 items-center gap-2 rounded border border-line bg-white/10 px-3 text-zinc-300">
        <MagnifyingGlassIcon className="size-5" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search movies or series..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />
      </form>
    </header>
  );
}
