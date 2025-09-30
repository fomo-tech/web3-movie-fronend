// store/movieStore.ts

import { Category, ListMovie, Movie, National } from "@/types/movie";
import { create } from "zustand";

interface MovieState {
  movies: Movie[];
  listMovie: ListMovie[];
  categories: Category[];
  nationals: National[];
  currentPage: number;
  totalPages: number;
  setMovies: (movies: Movie[]) => void;
  setCategories: (categories: Category[]) => void;
  setNationals: (nationals: National[]) => void;
  setPage: (page: number) => void;
  setTotalPages: (total: number) => void;
}

export const useMovie = create<MovieState>((set) => ({
  listMovie: [
    { id: 1, name: "Phim mới", slug: "phim-moi" },
    { id: 2, name: "Phim bộ", slug: "phim-bo" },
    { id: 3, name: "Phim lẻ", slug: "phim-le" },
    { id: 4, name: "TV Shows", slug: "tv-shows" },
    { id: 5, name: "Hoạt hình", slug: "hoat-hinh" },
    { id: 6, name: "Phim Vietsub", slug: "phim-vietsub" },
    { id: 7, name: "Phim thuyết minh", slug: "phim-thuyet-minh" },
    { id: 8, name: "Phim lồng tiếng", slug: "phim-long-tieng" },
    { id: 9, name: "Phim bộ đang chiếu", slug: "phim-bo-dang-chieu" },
    { id: 10, name: "Phim bộ hoàn thành", slug: "phim-bo-hoan-thanh" },
    { id: 11, name: "Phim sắp chiếu", slug: "phim-sap-chieu" },
    { id: 12, name: "Subteam", slug: "subteam" },
    { id: 13, name: "Phim chiếu rạp", slug: "phim-chieu-rap" },
  ],
  movies: [],
  categories: [],
  nationals: [],
  currentPage: 1,
  totalPages: 1,
  setMovies: (movies) => set({ movies }),
  setCategories: (categories) => set({ categories }),
  setNationals: (nationals) => set({ nationals }),
  setPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),
}));
