"use client";

import React, { useRef, useState } from "react";
import FilterMovie from "@/components/shared/FilterMovie";
import MovieItem from "@/components/ui/MovieItem";
import Pagination from "@/components/shared/Pagination";
import { useDebounceEffect } from "@/hooks/useDebounceEffect";
import { getMovies, searchMovies } from "@/services/movie";
import { Filter, Movie, MovieResponse } from "@/types/movie";

interface CatalogProps {
  apiType: "getMovies" | "searchMovies" | "topRated"; // thêm các loại khác nếu cần
  slug?: string;
  movies: Movie[];
  totalPagesInit: number;
}

const Catalog: React.FC<CatalogProps> = ({
  apiType,
  slug,
  movies,
  totalPagesInit,
}) => {
  const [slugState, setSlugState] = useState({ label: "", value: slug || "" });
  const [dataMovies, setDataMovies] = useState<Movie[]>(movies);
  const [totalPages, setTotalPages] = useState(totalPagesInit || 1);
  const [query, setQuery] = useState<Filter & { keyword?: string }>({
    limit: 28,
    page: 1,
    sort_field: "modified",
    sort_type: "desc",
  });

  const isFirstRender = useRef(true);

  useDebounceEffect(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const fetchData = async () => {
        try {
          let data: MovieResponse | null = null;

          switch (apiType) {
            case "getMovies":
              data = await getMovies<MovieResponse>(slug || "", query);
              break;
            case "searchMovies":
              data = await searchMovies<MovieResponse>(query);
              break;

            default:
              throw new Error(`Unknown apiType: ${apiType}`);
          }

          if (data) {
            setDataMovies(data.items);
            setTotalPages(
              Math.ceil(data.params.pagination.totalItems / (query.limit || 24))
            );
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchData();
    },
    [query],
    500
  );

  return (
    <div className="section section--bb">
      <div className="max-w-90 mx-auto">
        <div className="row">
          <div className="col-12">
            <FilterMovie
              query={query}
              setQuery={setQuery}
              setSlug={setSlugState}
              slug={slugState}
            />
          </div>

          <div className="col-12">
            <div className="grid grid--catalog">
              {dataMovies.map((movie, idx) => (
                <MovieItem movie={movie} key={idx} />
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Pagination
              currentPage={query.page || 1}
              totalPages={totalPages}
              onChange={(p) => setQuery((prev) => ({ ...prev, page: p }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
