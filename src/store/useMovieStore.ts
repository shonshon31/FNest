"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StreamTitle, WatchProgress } from "@/types/title";

type MovieState = {
  favorites: StreamTitle[];
  progress: WatchProgress[];
  theaterMode: boolean;
  toggleFavorite: (title: StreamTitle) => void;
  isFavorite: (titleId: string) => boolean;
  saveProgress: (progress: WatchProgress) => void;
  setTheaterMode: (enabled: boolean) => void;
};

export const useMovieStore = create<MovieState>()(
  persist(
    (set, get) => ({
      favorites: [],
      progress: [],
      theaterMode: false,
      toggleFavorite: (title) => {
        const exists = get().favorites.some((item) => item.id === title.id);
        set({ favorites: exists ? get().favorites.filter((item) => item.id !== title.id) : [title, ...get().favorites] });
      },
      isFavorite: (titleId) => get().favorites.some((item) => item.id === titleId),
      saveProgress: (next) => {
        const previous = get().progress.filter((item) => item.titleId !== next.titleId);
        set({ progress: [next, ...previous].slice(0, 50) });
      },
      setTheaterMode: (theaterMode) => set({ theaterMode })
    }),
    {
      name: "flicknest-store",
      partialize: (state) => ({
        favorites: state.favorites,
        progress: state.progress
      })
    }
  )
);
