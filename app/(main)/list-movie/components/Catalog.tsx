"use client";

import React, { useEffect, useState, useRef } from "react";
import FilterMovie from "@/components/shared/FilterMovie";
import MovieItem from "@/components/ui/MovieItem";
import { searchMovies } from "@/services/movie";
import { Filter, Movie, MovieResponse } from "@/types/movie";
import { useDebounceEffect } from "@/hooks/useDebounceEffect";
import Pagination from "@/components/shared/Pagination";
import { set } from "react-hook-form";

interface CatalogProps {
  movies: Movie[];
  totalPagesInit: number;
}

const Catalog = ({ movies, totalPagesInit }: CatalogProps) => {
  const [slug, setSlug] = useState({ label: "", value: "" });
  const [dataMovies, setDataMovies] = useState<Movie[]>(movies);
  const [totalPages, setTotalPages] = useState(totalPagesInit || 1);
  const [query, setQuery] = useState<Filter & { keyword?: string }>({
    limit: 28,
    page: 1,
    sort_field: "modified",
    sort_type: "desc",
  });

  // ✅ Dùng ref để bỏ qua lần chạy đầu tiên (mount)
  const isFirstRender = useRef(true);

  useDebounceEffect(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const fetchMovies = async () => {
        try {
          const data = await searchMovies<MovieResponse>(query);
          if (data) {
            setDataMovies(data.items);
            setTotalPages(Math.ceil(data.params.pagination.totalItems / 24));
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchMovies();
    },
    [query],
    500 // delay 500ms
  );

  return (
    <div className="section section--bb">
      <div className="max-w-90 mx-auto">
        <div className="row">
          {/* Filter */}
          <div className="col-12">
            <FilterMovie
              query={query}
              setQuery={setQuery}
              setSlug={setSlug}
              slug={slug}
            />
          </div>

          {/* Grid */}
          <div className="col-12">
            <div className="grid grid--catalog">
              {dataMovies.map((movie, idx) => (
                <MovieItem movie={movie} key={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Paginator */}
        <div className="row">
          <div className="col-12">
            {/* paginator desktop (ví dụ, bạn có thể refactor thêm sau) */}
            <Pagination
              currentPage={query.page || 1}
              totalPages={totalPages}
              onChange={(p) => {
                setQuery((prev) => ({ ...prev, page: p }));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
