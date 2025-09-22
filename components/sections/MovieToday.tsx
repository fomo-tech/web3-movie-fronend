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
}
const MoviesToday = ({ movies, title }: MovieTodayProps) => {
  return (
    <section
      id="section-items"
      className="section splide splide--items is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
      aria-roledescription="carousel"
    >
      <div className="container">
        <div className="row">
          {/* section title */}
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title">
                <Link href="catalog1.html">{title}</Link>
              </h2>
              <div className="section__nav">
                <a href="catalog1.html" className="section__all">
                  View all
                </a>
                <div className="splide__arrows splide__arrows--ltr">
                  <button
                    className="splide__arrow splide__arrow--prev-view"
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
                    className="splide__arrow splide__arrow--next-view"
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
                autoplay={{
                  delay: 4000, // 4s đổi slide
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".splide__arrow--next-view",
                  prevEl: ".splide__arrow--prev-view",
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
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                modules={[Navigation, Autoplay]}
              >
                {movies.map((movie, idx) => (
                  <SwiperSlide key={idx}>
                    <MovieItem movie={movie} />
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
