"use client";

import React from "react";
import Pagination from "../shared/Pagination";
import { Movie } from "@/types/movie";
import FilterMovie from "../shared/FilterMovie";
import MovieItem from "../ui/MovieItem";

interface CatalogSectionProps {
  movies: Movie[];
  showPagination?: boolean;
  showFilter?: boolean;
}

const CatalogSection = ({
  movies,
  showFilter,
  showPagination,
}: CatalogSectionProps) => {
  return (
    <>
      {/* catalog */}
      <div className="section section--bb">
        <div className="container">
          <div className="row">
            {/* {showFilter && <FilterMovie />} */}

            {/* grid */}
            <div className="col-12">
              <div className="grid grid--catalog">
                {/* item */}
                {movies.map((movie, idx) => (
                  <MovieItem movie={movie} key={idx} />
                ))}
                {/* end item */}
              </div>
            </div>
            {/* end grid */}
          </div>
          <div className="row">
            {/* paginator */}
            <div className="col-12">
              {/* {showPagination && (
                <Pagination currentPage={10} totalPages={100} />
              )} */}
            </div>
            {/* end paginator */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogSection;
