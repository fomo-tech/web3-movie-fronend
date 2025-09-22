// store/movieStore.ts

import { Category, Movie } from "@/types/movie";
import { create } from "zustand";

interface MovieState {
  movies: Movie[];
  categories: Category[];
  currentPage: number;
  totalPages: number;
  setMovies: (movies: Movie[]) => void;
  setCategories: (categories: Category[]) => void;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
}

export const useMovie = create<MovieState>((set) => ({
  movies: [],
  categories: [],
  currentPage: 1,
  totalPages: 1,
  setMovies: (movies) => set({ movies }),
  setCategories: (categories) => set({ categories }),
  setPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
}));
