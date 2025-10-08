"use client";

import { useApp } from "@/store/useApp";
import clsx from "clsx";
import React, { useState } from "react";
import FilterDropdown from "../common/FilterDropdown";
import { useMovie } from "@/store/useMovie";
import { Filter, Movie, MovieResponse } from "@/types/movie";
import { useDebounceEffect } from "@/hooks/useDebounceEffect";
import { searchMovies } from "@/services/movie";

const SearchPopup = () => {
  const { isShowSearchPopup, toggleSearchPopup } = useApp();

  const [slug, setSlug] = useState<{ label: string; value: string }>({
    label: "",
    value: "",
  });
  const [dataMovies, setDataMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState<Filter & { keyword?: string }>({
    limit: 28,
    page: 1,
    sort_field: "modified",
    sort_type: "desc",
  });
  const { listMovie } = useMovie();

  useDebounceEffect(
    () => {
      const fetchData = async () => {
        try {
          let data: MovieResponse | null = null;

          data = await searchMovies<MovieResponse>(query);

          if (data) {
            setDataMovies(data.items);
            setTotalPages(
              Math.ceil(data.params.pagination.totalItems / (query.limit || 24))
            );
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchData();
    },
    [query],
    500
  );

  return (
    <div
      className={clsx("multisearch", {
        "multisearch--active": isShowSearchPopup,
      })}
    >
      <div className="multisearch__content">
        {/* search form */}
        <button
          className="multisearch__close"
          type="button"
          onClick={() => toggleSearchPopup()}
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
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <form action="news.html#" className="multisearch__form">
          <div
            style={{
              marginLeft: "-16px",
            }}
          >
            <FilterDropdown
              id="filterDrop3"
              label={slug.label || "Danh sách phim"}
              labelSelected={slug.label || "Danh sách phim"}
              type="list"
              items={listMovie.map((l) => ({
                label: l.name,
                value: l.slug,
                checked: false,
              }))}
              onChange={(item, index) => {
                setSlug({ label: item.label, value: listMovie[index].slug });
              }}
            />
          </div>
          <input
            style={{ flex: 1, marginLeft: "10px" }}
            type="text"
            id="msit"
            className="multisearch__input"
            placeholder="Search"
          />
        </form>
        {/* end search form */}
        {/* tags */}
        <div className="multisearch__tags">
          <button className="multisearch__tag active" type="button">
            <span># Early Access</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># Marvel</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># 2025</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># Netflix</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># HBO</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># Comedy</span>
          </button>
          <button className="multisearch__tag" type="button">
            <span># Free</span>
          </button>
        </div>
        {/* end tags */}
        {/* results */}
        <div className="multisearch__results">
          <div className="row g-3">
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover12.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>8.4</span>
                  </span>
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
                    <a href="movie.html">Echoes of Eternity</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Action</a>
                    <a href="catalog1.html">Triler</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn FXC per min"
                  >
                    <img src="img/currencies/flixcoin.svg" alt="" />
                    <span>+ 0.005</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover2.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>7.1</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">Benched</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Comedy</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn DOGE per min"
                  >
                    <img src="img/currencies/doge.svg" alt="" />
                    <span>+ 0.0002</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover9.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--silver">
                    <span>6.8</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">Survival Spliton</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Comedy</a>
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn FXC per min"
                  >
                    <img src="img/currencies/flixcoin.svg" alt="" />
                    <span>+ 0.001</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover8.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>7.9</span>
                  </span>
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
                    <a href="movie.html">Green Hell</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Romance</a>
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn FXC per min"
                  >
                    <img src="img/currencies/flixcoin.svg" alt="" />
                    <span>+ 0.004</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover13.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>9.1</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">The Chebod</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn ETH per min"
                  >
                    <img src="img/currencies/eth.svg" alt="" />
                    <span>+ 0.00022</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover6.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--silver">
                    <span>6.8</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">Shattered Realities</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn BNB per min"
                  >
                    <img src="img/currencies/bnb.svg" alt="" />
                    <span>+ 0.00035</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover14.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>8.2</span>
                  </span>
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
                    <a href="movie.html">Lost in the Abyss</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Romance</a>
                    <a href="catalog1.html">Drama</a>
                    <a href="catalog1.html">Music</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn USDC per min"
                  >
                    <img src="img/currencies/usdc.svg" alt="" />
                    <span>+ 0.00035</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover5.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--silver">
                    <span>6.7</span>
                  </span>
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
                    <a href="movie.html">Fragments of Time</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn FXC per min"
                  >
                    <img src="img/currencies/flixcoin.svg" alt="" />
                    <span>+ 0.001</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover3.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--silver">
                    <span>6.9</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">I Dream in Another Language</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Music</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn AVAX per min"
                  >
                    <img src="img/currencies/flixcoin.svg" alt="" />
                    <span>+ 0.0015</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover18.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>8.8</span>
                  </span>
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
                    <a href="movie.html">Celestial Journey</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Romance</a>
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn AVAX per min"
                  >
                    <img src="img/currencies/avax.svg" alt="" />
                    <span>+ 0.00001</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover15.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--gold">
                    <span>9.1</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">The Chebod</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn ETH per min"
                  >
                    <img src="img/currencies/eth.svg" alt="" />
                    <span>+ 0.00022</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
              <div className="item">
                <div className="item__cover">
                  <img src="img/covers/cover16.jpg" alt="" />
                  <a href="movie.html" className="item__play">
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
                  </a>
                  <span className="item__rate item__rate--silver">
                    <span>6.8</span>
                  </span>
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="item__content">
                  <h2 className="item__title">
                    <a href="movie.html">Shattered Realities</a>
                  </h2>
                  <span className="item__category">
                    <a href="catalog1.html">Drama</a>
                  </span>
                  <div
                    className="item__hash"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="You earn BNB per min"
                  >
                    <img src="img/currencies/bnb.svg" alt="" />
                    <span>+ 0.00035</span>
                    <span>/ min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end results */}
      </div>
    </div>
  );
};

export default SearchPopup;
