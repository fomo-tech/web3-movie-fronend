"use client";

import FilterMovie from "@/components/shared/FilterMovie";
import MovieItem from "@/components/ui/MovieItem";
import { getMovies } from "@/services/movie";
import {
  Filter,
  Movie,
  MovieDetailResponse,
  MovieResponse,
} from "@/types/movie";
import React, { useEffect, useState } from "react";

interface CatalogProps {
  movies: Movie[];
}
const Catalog = ({ movies }: CatalogProps) => {
  const [slug, setSlug] = useState<string>("");
  const [dataMovies, setDataMovies] = useState<Movie[]>(movies);

  const [query, setQuery] = useState<Filter>({
    limit: 14,
    page: 1,
  });

  const getMoviesFilter = async () => {
    try {
      const data = await getMovies<MovieResponse>(slug, {
        ...query,
      });

      if (data) {
        setDataMovies(data.items);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (slug || query.page !== 1) {
      getMoviesFilter();
    }
  }, [slug, query]);

  return (
    <div className="section section--bb">
      <div className="max-w-90 mx-auto">
        <div className="row">
          {/* filter */}
          <div className="col-12">
            <FilterMovie />
          </div>
          {/* end filter */}
          {/* grid */}
          <div className="col-12">
            <div className="grid grid--catalog">
              {/* item */}
              {dataMovies.map((movie, idx) => {
                return <MovieItem movie={movie} key={idx} />;
              })}

              {/* end item */}
            </div>
          </div>

          {/* end grid */}
        </div>
        <div className="row">
          {/* paginator */}
          <div className="col-12">
            {/* paginator mobile */}
            <div className="paginator-mob">
              <span className="paginator-mob__pages">18 of 1713</span>
              <ul className="paginator-mob__nav">
                <li>
                  <a href="catalog1.html#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                    <span>Prev</span>
                  </a>
                </li>
                <li>
                  <a href="catalog1.html#">
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* end paginator mobile */}
            {/* paginator desktop */}
            <ul className="paginator">
              <li className="paginator__item paginator__item--prev">
                <a href="catalog1.html#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                </a>
              </li>
              <li className="paginator__item">
                <a href="catalog1.html#">1</a>
              </li>
              <li className="paginator__item paginator__item--active">
                <a href="catalog1.html#">2</a>
              </li>
              <li className="paginator__item">
                <a href="catalog1.html#">3</a>
              </li>
              <li className="paginator__item">
                <a href="catalog1.html#">4</a>
              </li>
              <li className="paginator__item">
                <span>...</span>
              </li>
              <li className="paginator__item">
                <a href="catalog1.html#">87</a>
              </li>
              <li className="paginator__item paginator__item--next">
                <a href="catalog1.html#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </a>
              </li>
            </ul>
            {/* end paginator desktop */}
          </div>
          {/* end paginator */}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
