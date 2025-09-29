"use client";

import { ActorResponse, Breadcrumb, Movie, People } from "@/types/movie";
import React from "react";
import TabDetail from "./TabDetail";
import ActiorList from "./ActiorList";

interface InfoPlayerProps {
  movie: Movie;
  breadCrumb: Breadcrumb[];
  actors: ActorResponse;
}

const InfoPlayer = ({ movie, breadCrumb, actors }: InfoPlayerProps) => {
  return (
    <section className="movie-detail">
      <h1 className="movie-detail__title">{movie.name}</h1>
      <p className="movie-detail__subtitle">{movie.origin_name}</p>

      {/* Actions */}
      <div className="movie-detail__actions">
        <button className="btn btn--primary">Theo dõi</button>
        <button className="btn btn--secondary">Chia sẻ</button>
      </div>

      {/* Info */}
      <div className="movie-detail__info">
        <span className="badge">{movie.lang}</span>
        <span className="badge">{movie.quality}</span>
        <span className="rating">
          ⭐ {movie.imdb.vote_average} ({movie.imdb.vote_count})
        </span>
      </div>

      {/* Meta */}
      <div className="movie-detail__meta">
        <span>{movie.year}</span>
        <span>•</span>
        <span>{movie.episode_current}</span>
        <span>•</span>
        <span>{movie.episode_total}</span>
      </div>

      {/* Content */}
      <p
        className="movie-detail__content"
        dangerouslySetInnerHTML={{
          __html: movie.content.replace(/<[^>]*>/g, ""),
        }}
      ></p>

      {/* Genres */}
      <div className="movie-detail__genres">
        {movie.category.map((cat, idx) => (
          <span className="genre" key={idx}>
            {cat.name}
          </span>
        ))}
      </div>

      {/* Breadcrumb */}
      <div className="movie-detail__breadcrumb">
        {breadCrumb.map((bread, idx) => (
          <span className="crumb" key={idx}>
            {bread.name}
          </span>
        ))}
      </div>

      <div className="movie-detail__extras">
        <ActiorList actors={actors} />
        <TabDetail />
      </div>
    </section>
  );
};

export default InfoPlayer;
