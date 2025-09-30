"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import React from "react";
import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  movies?: Movie[];
}
const HeroSection = ({ movies }: HeroSectionProps) => {
  return (
    <section id="hero" className="hero  splide splide--hero">
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
        className="hero-swiper"
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <div className="hero__slide">
                {/* slide bg */}
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${movie.poster_url}`}
                  fill
                  alt={movie.name}
                  className="hero__bg"
                  style={{ objectFit: "cover" }}
                />
                {/* slide content */}
                <div className="hero__content">
                  <div className="hero-text-box">
                    <h2>{movie.name}</h2>

                    <div className="categories">
                      {movie.category.map((cat, idx) => (
                        <span key={idx}>{cat.name}</span>
                      ))}
                    </div>

                    <div className="movie-info">
                      <span>
                        {movie.year} | {movie.episode_current}
                      </span>
                    </div>

                    <div className="actions">
                      <Link href={`/movie/${movie.slug}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>

                        <span>Xem ngay</span>
                      </Link>
                      <button type="button" aria-label="Yêu thích">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="hero__navs">
        <div className="splide__arrows splide__arrows--ltr">
          <button
            className="splide__arrow splide__arrow--prev"
            type="button"
            aria-label="Go to last slide"
            aria-controls="hero-track"
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
            aria-controls="hero-track"
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
    </section>
  );
};

export default HeroSection;
