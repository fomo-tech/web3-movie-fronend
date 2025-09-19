'use client'

import { Movie } from "@/types/movie";
// components/MovieItem.tsx
import Image from "next/image";
import Link from "next/link";



export interface MovieItemProps {
    movie: Movie
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {


    return (
        <div className="item">
            <div className="item__cover">
                <Image
                    src={`${process.env.NEXT_PUBLIC_CDN_IMAGE_MOVIE}/uploads/movies/${movie.thumb_url}`}
                    fill
                    alt={movie.origin_name}
                    quality={100}
                    style={{ objectFit: "cover" }}
                />

                <Link href={'/movie/' + movie.slug} className="item__play" tabIndex={-1}>
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
                        <path d="M7 4v16l13 -8z" />
                    </svg>
                </Link>

                <span className="item__rate item__rate--gold">
                    <span>{Number(movie.tmdb.vote_average?.toFixed(1))}</span>
                </span>

                <button className="item__favorite" type="button" tabIndex={-1}>
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

                <div className="item__labels">
                    <span
                        className="item__new"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="New release"
                    >
                        New
                    </span>
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
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="item__content">
                <h2 className="item__title">
                    <Link href={'/movie/' + movie.slug} tabIndex={-1}>
                        {movie.name}
                    </Link>
                </h2>
                <span className="item__category">
                    {movie.category.slice(0, 2).map((cat, idx) => (
                        <Link href="" key={idx} >
                            {cat.name}
                        </Link>
                    ))}
                </span>
            </div>
        </div >
    );
};

export default MovieItem;
