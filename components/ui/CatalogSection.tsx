import React from 'react'

const CatalogSection = () => {
    return (
        <>
            {/* catalog */}
            <div className="section section--bb">
                <div className="container">
                    <div className="row">
                        {/* filter */}
                        <div className="col-12">
                            <div className="filter">
                                <div className="filter__search">
                                    <input type="text" placeholder="Search" />
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
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                        <path d="M21 21l-6 -6" />
                                    </svg>
                                    <button className="filter__search-clear" type="button">
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
                                </div>
                                <div className="dropdown filter__dropdown filter__dropdown--checkboxes">
                                    <button
                                        className="filter__btn"
                                        type="button"
                                        id="filterDrop0"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="filter__btn-icon">
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
                                                <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                <path d="M4 6l8 0" />
                                                <path d="M16 6l4 0" />
                                                <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                <path d="M4 12l2 0" />
                                                <path d="M10 12l10 0" />
                                                <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                                <path d="M4 18l11 0" />
                                                <path d="M19 18l1 0" />
                                            </svg>
                                        </span>
                                        <span className="filter__btn-name">All Сategories</span>
                                        <span className="filter__btn-counter" />
                                        <span className="filter__btn-mask">
                                            <span className="filter__btn-title">Сategories</span>
                                            <span className="filter__btn-clear">
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
                                                    <path d="M18 6 6 18" />
                                                    <path d="m6 6 12 12" />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="filter__btn-arrow">
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
                                                <path d="M6 9l6 6l6 -6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        className="dropdown-menu dropdown-menu-end filter__dropdown-menu"
                                        aria-labelledby="filterDrop0"
                                    >
                                        <button className="filter__dropdown-clear" type="button">
                                            Clear All
                                        </button>
                                        <ul className="filter__dropdown-checkboxes">
                                            <li>
                                                <input id="sort0" name="sort0" type="checkbox" />
                                                <label htmlFor="sort0">
                                                    Action <span>462</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort1" name="sort1" type="checkbox" />
                                                <label htmlFor="sort1">
                                                    Adventure <span>1 204</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort2" name="sort2" type="checkbox" />
                                                <label htmlFor="sort2">
                                                    Animation <span>89</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort3" name="sort3" type="checkbox" />
                                                <label htmlFor="sort3">
                                                    Biography <span>103</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort4" name="sort4" type="checkbox" />
                                                <label htmlFor="sort4">
                                                    Comedy <span>2 094</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort5" name="sort5" type="checkbox" />
                                                <label htmlFor="sort5">
                                                    Documentary <span>923</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort6" name="sort6" type="checkbox" />
                                                <label htmlFor="sort6">
                                                    Drama <span>781</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort7" name="sort7" type="checkbox" />
                                                <label htmlFor="sort7">
                                                    Education <span>62</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort8" name="sort8" type="checkbox" />
                                                <label htmlFor="sort8">
                                                    Fantasy <span>803</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort9" name="sort9" type="checkbox" />
                                                <label htmlFor="sort9">
                                                    History <span>1 942</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort10" name="sort10" type="checkbox" />
                                                <label htmlFor="sort10">
                                                    Horror <span>693</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input id="sort11" name="sort11" type="checkbox" />
                                                <label htmlFor="sort11">
                                                    Kind <span>105</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dropdown filter__dropdown filter__dropdown--sort">
                                    <button
                                        className="filter__btn"
                                        type="button"
                                        id="filterDrop1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="filter__btn-icon">
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
                                                <path d="m3 16 4 4 4-4" />
                                                <path d="M7 20V4" />
                                                <path d="M20 8h-5" />
                                                <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
                                                <path d="M15 14h5l-5 6h5" />
                                            </svg>
                                        </span>
                                        <span className="filter__btn-name">Featured</span>
                                        <span className="filter__btn-arrow">
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
                                                <path d="M6 9l6 6l6 -6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <div
                                        className="dropdown-menu dropdown-menu-end filter__dropdown-menu"
                                        aria-labelledby="filterDrop1"
                                    >
                                        <ul className="filter__dropdown-list">
                                            <li className="active">
                                                <span>Featured</span>
                                            </li>
                                            <li>
                                                <span>Most Popular</span>
                                            </li>
                                            <li>
                                                <span>Recently Played</span>
                                            </li>
                                            <li>
                                                <span>Recently Added</span>
                                            </li>
                                            <li>
                                                <span>Random</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end filter */}
                        {/* grid */}
                        <div className="col-12">
                            <div className="grid grid--catalog">
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover.jpg" alt="" />
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Lost in the Abyss</a>
                                        </h3>
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
                                {/* end item */}
                                {/* item */}
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Benched</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn FXC per min"
                                        >
                                            <img src="img/currencies/flixcoin.svg" alt="" />
                                            <span>+ 0.002</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                        <span className="item__rate item__rate--bronze">
                                            <span>6.3</span>
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Whitney</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Romance</a>
                                            <a href="catalog1.html">Drama</a>
                                            <a href="catalog1.html">Music</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn ETH per min"
                                        >
                                            <img src="img/currencies/eth.svg" alt="" />
                                            <span>+ 0.0005</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover4.jpg" alt="" />
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
                                                className="item__new"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="New release"
                                            >
                                                New
                                            </span>
                                        </div>
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Blindspotting</a>
                                        </h3>
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
                                {/* end item */}
                                {/* item */}
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Fragments of Time</a>
                                        </h3>
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
                                            <span>+ 0.003</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">The Last Guardian</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn USDT per min"
                                        >
                                            <img src="img/currencies/usdt.svg" alt="" />
                                            <span>+ 0.001</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover7.jpg" alt="" />
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
                                                className="item__new"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="New release"
                                            >
                                                New
                                            </span>
                                        </div>
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Benched</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn USDT per min"
                                        >
                                            <img src="img/currencies/usdt.svg" alt="" />
                                            <span>+ 0.0002</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                        <span className="item__rate item__rate--bronze">
                                            <span>5.5</span>
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
                                        </div>
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Green Hell</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Action</a>
                                            <a href="catalog1.html">Triler</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn DOGE per min"
                                        >
                                            <img src="img/currencies/doge.svg" alt="" />
                                            <span>+ 0.001</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Silent Shadows</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                            <a href="catalog1.html">Drama</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn DOGE per min"
                                        >
                                            <img src="img/currencies/doge.svg" alt="" />
                                            <span>+ 0.0012</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover10.jpg" alt="" />
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
                                        <span className="item__rate item__rate--bronze">
                                            <span>5.6</span>
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Beyond the Horizon</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Romance</a>
                                            <a href="catalog1.html">Drama</a>
                                            <a href="catalog1.html">Music</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn AVAX per min"
                                        >
                                            <img src="img/currencies/avax.svg" alt="" />
                                            <span>+ 0.0008</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover11.jpg" alt="" />
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
                                            <span>9.2</span>
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Heart of the Storm</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn FXC per min"
                                        >
                                            <img src="img/currencies/flixcoin.svg" alt="" />
                                            <span>+ 0.006</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Shattered Realities</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Action</a>
                                            <a href="catalog1.html">Triler</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn LTC per min"
                                        >
                                            <img src="img/currencies/ltc.svg" alt="" />
                                            <span>+ 0.0001</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Echoes of Eternity</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Action</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn USDT per min"
                                        >
                                            <img src="img/currencies/usdt.svg" alt="" />
                                            <span>+ 0.001</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                        <span className="item__rate item__rate--bronze">
                                            <span>5.5</span>
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
                                        </div>
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Silent Dawn</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Action</a>
                                            <a href="catalog1.html">Triler</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn DOGE per min"
                                        >
                                            <img src="img/currencies/doge.svg" alt="" />
                                            <span>+ 0.001</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Eternal Horizon</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Comedy</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn FXC per min"
                                        >
                                            <img src="img/currencies/flixcoin.svg" alt="" />
                                            <span>+ 0.002</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                    </div>
                                    <div className="item__content">
                                        <h3 className="item__title">
                                            <a href="movie.html">Whispers in the Wind</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Action</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn FXC per min"
                                        >
                                            <img src="img/currencies/flixcoin.svg" alt="" />
                                            <span>+ 0.003</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
                                <div className="item">
                                    <div className="item__cover">
                                        <img src="img/covers/cover17.jpg" alt="" />
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Fragments of Time</a>
                                        </h3>
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
                                            <span>+ 0.003</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                                {/* item */}
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
                                        <span className="item__rate item__rate--bronze">
                                            <span>5.6</span>
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
                                        <h3 className="item__title">
                                            <a href="movie.html">Midnight Echoes</a>
                                        </h3>
                                        <span className="item__category">
                                            <a href="catalog1.html">Romance</a>
                                            <a href="catalog1.html">Drama</a>
                                            <a href="catalog1.html">Music</a>
                                        </span>
                                        <div
                                            className="item__hash"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            data-bs-title="You earn AVAX per min"
                                        >
                                            <img src="img/currencies/avax.svg" alt="" />
                                            <span>+ 0.0007</span>
                                            <span>/ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* end item */}
                            </div>
                        </div>
                        {/* end grid */}
                    </div>
                    <div className="row">
                        {/* paginator */}
                        <div className="col-12">
                            {/* paginator mobile */}
                            <div className="paginator-mob">
                                <span className="paginator-mob__pages">18 of 1713</span>
                                <ul className="paginator-mob__nav">
                                    <li>
                                        <a href="index2.html#">
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
                                            <span>Prev</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index2.html#">
                                            <span>Next</span>
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
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* end paginator mobile */}
                            {/* paginator desktop */}
                            <ul className="paginator">
                                <li className="paginator__item paginator__item--prev">
                                    <a href="index2.html#">
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
                                    </a>
                                </li>
                                <li className="paginator__item">
                                    <a href="index2.html#">1</a>
                                </li>
                                <li className="paginator__item paginator__item--active">
                                    <a href="index2.html#">2</a>
                                </li>
                                <li className="paginator__item">
                                    <a href="index2.html#">3</a>
                                </li>
                                <li className="paginator__item">
                                    <a href="index2.html#">4</a>
                                </li>
                                <li className="paginator__item">
                                    <span>...</span>
                                </li>
                                <li className="paginator__item">
                                    <a href="index2.html#">87</a>
                                </li>
                                <li className="paginator__item paginator__item--next">
                                    <a href="index2.html#">
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
                                    </a>
                                </li>
                            </ul>
                            {/* end paginator desktop */}
                        </div>
                        {/* end paginator */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default CatalogSection