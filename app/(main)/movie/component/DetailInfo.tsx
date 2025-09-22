'use client'

import Modal from '@/components/common/Modal'
import { MovieDetailResponse } from '@/types/movie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'

interface DetailInfoProps {
    detail: MovieDetailResponse
}

const DetailInfo = ({ detail }: DetailInfoProps) => {
    const [trailerOpen, setTrailerOpen] = useState(false)
    return (
        <>
            <Modal isOpen={trailerOpen} onClose={() => setTrailerOpen(false)}>

                <div className="trailer-wrapper">
                    <ReactPlayer
                        autoPlay
                        muted
                        src={detail.item.trailer_url} // URL trailer
                        controls
                        className="react-player-inner"
                        width="100%"
                        height="100%"
                    />
                </div>
            </Modal>
            {/* movie */}
            <section className="movie">
                {/* bg (can be removed) */}
                <Image className="movie__bg" src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${detail.item.poster_url}`} fill alt={detail.item.name} objectFit="cover"

                />
                <div className="container">
                    <div className="row">
                        {/* movie content */}
                        <div className="col-12 col-lg-10  col-xl-12  col-xxl-8 ">
                            <div className="movie__content">
                                <h1 className="hero__title">
                                    {detail.item.name} <sub className="gold">{Number(detail.item.tmdb.vote_average?.toFixed(1))}</sub>
                                </h1>
                                <p className="hero__text"
                                    dangerouslySetInnerHTML={{
                                        __html: detail.item.content.replace(/<[^>]*>/g, ""),
                                    }}
                                >

                                </p>
                                <ul className="hero__meta">
                                    <li>
                                        <span>Đạo Diễn:{" "}</span>
                                        {
                                            detail.item.director.map((director, i) => (
                                                <Link href="actor.html" key={i}>
                                                    {director}
                                                    {i < detail.item.director.length - 1 && ", "}
                                                </Link>
                                            ))
                                        }

                                    </li>
                                    <li>
                                        <span>Diễn viên:{" "}</span>
                                        {detail.item.actor.map((actor, i) => (
                                            <Link href="actor.html" key={i}>
                                                {actor}

                                            </Link>

                                        ))}


                                    </li>
                                    <li>
                                        <span>Thể loại:{" "}</span>
                                        {detail.item.category.map((category, i) => (
                                            <a href="catalog1.html" key={i}>
                                                {category.name}
                                                {i < detail.item.category.length - 1 && ", "}
                                            </a>
                                        ))}


                                    </li>
                                    <li>
                                        <span> Năm Phát Hành: {" "}</span> {detail.item.year}
                                    </li>
                                    <li>
                                        <span>Thời lượng:{" "}</span> {detail.item.time}
                                    </li>
                                    <li>
                                        <span>Quốc Gia: {" "}</span>
                                        {
                                            detail.item.country.map((country, i) => (
                                                <a href="catalog1.html" key={i}>
                                                    {country.name}
                                                    {i < detail.item.country.length - 1 && ", "}
                                                </a>
                                            ))

                                        }
                                    </li>
                                </ul>

                                <div className="hero__actions">

                                    <Link href={'/movie/play/' + detail.item.slug}>
                                        <button className="btn-trailer">
                                            Xem phim
                                        </button>
                                    </Link>

                                    {
                                        detail.item.trailer_url &&
                                        <button className="hero__btn hero__btn--review" type="button"
                                            onClick={() => setTrailerOpen(true)}
                                        >
                                            <span>
                                                Trailer
                                            </span>
                                        </button>
                                    }

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
                                {/* player */}
                            </div>
                        </div>
                        {/* end movie content */}
                    </div>
                </div>
            </section >
        </>
    )
}

export default DetailInfo