'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'
import React from 'react'

const HeroSection = () => {
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
                <SwiperSlide>
                    <div className="hero__slide">
                        {/* slide bg */}
                        <img src="/img/bg/slide__bg-1.jpg" alt="" className="hero__bg" />
                        {/* slide content */}
                        <div className="hero__content">
                            <h2 className="hero__title">
                                Savage Beauty <sub className="gold">9.8</sub>
                            </h2>
                            <p className="hero__text">
                                A brilliant scientist discovers a way to harness the power of the ocean's
                                currents to create a new, renewable energy source. But when her
                                groundbreaking technology falls into the wrong hands, she must race
                                against time to stop it from being used for evil.
                            </p>
                            <p className="hero__category">
                                <a href="catalog1.html">Action</a>
                                <a href="catalog1.html">Drama</a>
                                <a href="catalog1.html">Comedy</a>
                            </p>
                            <div
                                className="hero__hash"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="You earn FXC per min"
                            >
                                <img src="img/currencies/flixcoin.svg" alt="" />
                                <span>+ 0.005</span>
                                <span>/ min</span>
                            </div>
                            <div className="hero__actions">
                                <a href="movie.html" className="hero__btn">
                                    <span>Watch now</span>
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
                <SwiperSlide>
                    <div className="hero__slide">
                        {/* slide bg */}
                        <img src="/img/bg/slide__bg-1.jpg" alt="" className="hero__bg" />
                        {/* slide content */}
                        <div className="hero__content">
                            <h2 className="hero__title">
                                Savage Beauty <sub className="gold">9.8</sub>
                            </h2>
                            <p className="hero__text">
                                A brilliant scientist discovers a way to harness the power of the ocean's
                                currents to create a new, renewable energy source. But when her
                                groundbreaking technology falls into the wrong hands, she must race
                                against time to stop it from being used for evil.
                            </p>
                            <p className="hero__category">
                                <a href="catalog1.html">Action</a>
                                <a href="catalog1.html">Drama</a>
                                <a href="catalog1.html">Comedy</a>
                            </p>
                            <div
                                className="hero__hash"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="You earn FXC per min"
                            >
                                <img src="img/currencies/flixcoin.svg" alt="" />
                                <span>+ 0.005</span>
                                <span>/ min</span>
                            </div>
                            <div className="hero__actions">
                                <a href="movie.html" className="hero__btn">
                                    <span>Watch now</span>
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