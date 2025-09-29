"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Movie } from "@/types/movie";
import MovieItem from "../ui/MovieItem";
import Link from "next/link";

interface MovieTodayProps {
  movies: Movie[];
  title?: string;
  slideKey: string;
  isNew?: boolean;
}
const MoviesToday = ({ movies, title, slideKey, isNew }: MovieTodayProps) => {
  console.log(movies);

  return (
    <section
      id="section-items"
      className="section !p-0 splide splide--items is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active mb-5"
      aria-roledescription="carousel"
    >
      <div className="max-w-90 m-auto">
        <div className="row">
          {/* section title */}
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title">
                <Link href="catalog1.html">{title}</Link>
              </h2>
              <div className="section__nav">
                <a href="catalog1.html" className="section__all">
                  Xem tất cả
                </a>
                <div className="splide__arrows splide__arrows--ltr">
                  <button
                    className={
                      "splide__arrow " + "splide__arrow--prev-view_" + slideKey
                    }
                    type="button"
                    aria-label="Go to last slide"
                    aria-controls="section-items-track"
                  >
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
                  </button>
                  <button
                    className={
                      "splide__arrow " + "splide__arrow--next-view_" + slideKey
                    }
                    type="button"
                    aria-label="Next slide"
                    aria-controls="section-items-track"
                  >
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
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end section title */}
          {/* carousel */}
          <div className="col-12">
            <div className="section__carousel">
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop
                navigation={{
                  nextEl: ".splide__arrow--next-view_" + slideKey,
                  prevEl: ".splide__arrow--prev-view_" + slideKey,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1440: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                  },
                }}
                modules={[Navigation]}
              >
                {movies.map((movie, idx) => (
                  <SwiperSlide key={idx}>
                    <MovieItem movie={movie} isNew={isNew} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* end carousel */}
        </div>
      </div>
    </section>
  );
};

export default MoviesToday;
