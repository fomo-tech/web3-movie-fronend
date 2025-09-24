"use client";

import { Movie } from "@/types/movie";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  movies?: Movie[];
}

const MovieSectionHome = ({ movies }: HeroSectionProps) => {
  return (
    <div className="section !p-0   md:mt-[-50px]">
      <div className="max-w-[90%] m-auto">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title mb-3">Trending</h2>
              <div className="section__nav">
                <div className="splide__arrows splide__arrows--ltr">
                  <button
                    className="splide__arrow splide__arrow--prev"
                    type="button"
                    aria-label="Go to last slide"
                    aria-controls="section-contests-track"
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
                    className="splide__arrow splide__arrow--next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="section-contests-track"
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
          <div className="col-12">
            <div
              style={{
                padding: 0,
              }}
              id="carousel"
              className="carousel splide splide--carousel is-overflow is-initialized splide--loop splide--ltr splide--draggable is-active"
              role="region"
              aria-roledescription="carousel"
            >
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop
                autoplay={{
                  delay: 4000, // 4s đổi slide
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".splide__arrow--next",
                  prevEl: ".splide__arrow--prev",
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {movies &&
                  movies.map((movie) => (
                    <SwiperSlide key={movie._id}>
                      <div className="itemcard">
                        <div className="itemcard__cover">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${movie.poster_url}`}
                            fill
                            alt={movie.origin_name}
                            quality={100}
                            className="itemcard__bg"
                          />

                          <Link href="movie.html" className="item__play">
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M7 4v16l13 -8z" />
                            </svg>
                          </Link>
                          {/* <span className="item__rate item__rate--gold">
                            <span>
                              {Number(movie.tmdb.vote_average?.toFixed(1))}
                            </span>
                          </span> */}
                          <button className="item__favorite" type="button">
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                            </svg>
                          </button>
                          <div className="item__labels">
                            <span
                              className="item__promo"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Early access"
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
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                              </svg>
                            </span>
                          </div>
                          {/* <div
                      className="itemcard__hash"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="You earn FXC per min"
                    >
                      <img src="img/currencies/flixcoin.svg" alt="" />
                      <span>+ 0.002</span>
                    </div> */}
                          <div className="itemcard__title">
                            <h3>{movie.name}</h3>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="carousel__navs">
                <div className="splide__arrows splide__arrows--ltr">
                  <button
                    className="splide__arrow splide__arrow--prev"
                    type="button"
                    aria-label="Go to last slide"
                    aria-controls="carousel-track"
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
                    className="splide__arrow splide__arrow--next"
                    type="button"
                    aria-label="Next slide"
                    aria-controls="carousel-track"
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
        </div>
      </div>
    </div>
  );
};

export default MovieSectionHome;
