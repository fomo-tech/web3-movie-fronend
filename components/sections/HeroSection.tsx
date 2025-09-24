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
                  <div className="absolute left-10 bottom-16 md:bottom-[200px] max-w-xl text-white space-y-4">
                    {/* Title */}
                    <h2
                      className="text-4xl md:text-6xl font-extrabold tracking-tight 
             bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
             bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                    >
                      {movie.name}
                    </h2>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {movie.category.map((cat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 hover:bg-green-500 hover:text-black transition"
                        >
                          {cat.name}
                        </span>
                      ))}
                    </div>

                    {/* Movie Time */}
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-yellow-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6l4 2"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                        />
                      </svg>
                      <span className="text-sm">{movie.time}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href={`/movie/${movie.slug}`}
                        className="px-6 py-3 rounded-lg bg-[#e84142] hover:bg-[#f32727] text-white font-semibold shadow-lg transition flex items-center gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                        <span>Xem ngay</span>
                      </a>

                      <button
                        className="p-3 rounded-full bg-white/10 hover:bg-red-500 hover:text-white transition shadow-md"
                        type="button"
                        aria-label="Yêu thích"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 7v14l-6 -4l-6 4V7a4 4 0 014-4h4a4 4 0 014 4z" />
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
