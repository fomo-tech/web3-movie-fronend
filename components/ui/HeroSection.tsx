'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'
import React, { useEffect } from 'react'
import { getHome, getMovie, getMovies } from '@/services/movie';
import { Movie, MovieResponse } from '@/types/movie';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
    movies?: Movie[];
}
const HeroSection = ({ movies }: HeroSectionProps) => {

    return (
        <section id="hero" className="hero splide splide--hero">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop
                autoplay={{
                    delay: 4000, // 4s đổi slide
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.splide__arrow--next',
                    prevEl: '.splide__arrow--prev',
                }}
                modules={[Navigation, Autoplay]}
                className="hero-swiper"
            >
                {
                    movies && movies.map((movie) => (
                        <SwiperSlide key={movie._id}>
                            <div className="hero__slide">
                                {/* slide bg */}
                                <Image src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${movie.poster_url}`} fill alt={movie.name} className="hero__bg" />
                                {/* slide content */}
                                <div className="hero__content">
                                    <h2 className="hero__title">
                                        {movie.name} <sub className="gold">{Number(movie.tmdb.vote_average?.toFixed(1))}</sub>
                                    </h2>
                                    <p className="hero__text">
                                        {movie.name}
                                    </p>
                                    <p className="hero__category">
                                        {
                                            movie.category.map((cat, idx) => (
                                                <Link href="#" key={idx}>{cat.name}</Link>
                                            ))
                                        }

                                    </p>
                                    <div
                                        className="hero__hash"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="You earn FXC per min"
                                    >

                                        <span>{movie.time}</span>

                                    </div>
                                    <div className="hero__actions">
                                        <a href="movie.html" className="hero__btn">
                                            <span>Xem ngay</span>
                                        </a>
                                        <button className="hero__favorite" type="button">
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
                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


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
    )
}

export default HeroSection