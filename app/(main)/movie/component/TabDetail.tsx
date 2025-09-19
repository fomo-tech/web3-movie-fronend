
'use client'

import React from 'react'



const TabDetail = () => {
    return (
        <div className="row">
            {/* tabs nav */}
            <div className="col-12 ">
                <ul
                    className="nav nav-tabs main__tabs-nav main__tabs-nav--movie"
                    id="tabs-main"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            id="01main-tab"
                            className="active"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-main01"
                            type="button"
                            role="tab"
                            aria-controls="tab-main01"
                            aria-selected="true"
                        >
                            Comments (628)
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            id="02main-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tab-main02"
                            type="button"
                            role="tab"
                            aria-controls="tab-main02"
                            aria-selected="false"
                        >
                            Reviews (3)
                        </button>
                    </li>
                </ul>
            </div>
            {/* end tabs nav */}
            {/* tabs content */}
            <div className="col-12 ">
                <div className="tab-content main__tabs-content">
                    <div
                        className="tab-pane fade show active"
                        id="tab-main01"
                        role="tabpanel"
                        aria-labelledby="01main-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                            {/* comments */}
                            <div className="col-12">
                                <div className="comments">
                                    <ul className="comments__list">
                                        <li className="comments__item">
                                            <div className="comments__author">
                                                <span className="comments__name">NeoStream88</span>
                                                <span className="comments__time">
                                                    May 20, 2025, 3:47 PM
                                                </span>
                                            </div>
                                            <p className="comments__text">
                                                🌊 This was way deeper than I expected. The science
                                                angle was actually believable, and the pacing kept me
                                                hooked. I’d honestly watch a prequel just to see how she
                                                developed the tech.
                                            </p>
                                            <div className="comments__actions">
                                                <div className="comments__rate">
                                                    <button type="button">
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
                                                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                                        </svg>
                                                        12
                                                    </button>
                                                    <button type="button">
                                                        7
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
                                                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a href="movie.html#reply-id">
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
                                                        <path d="M15 14l4 -4l-4 -4" />
                                                        <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
                                                    </svg>
                                                    Reply
                                                </a>

                                            </div>
                                        </li>
                                        <li className="comments__item comments__item--answer">
                                            <div className="comments__author">
                                                <span className="comments__name">CoreUnit0x</span>
                                                <span className="comments__time">
                                                    May 20, 2025, 4:15 PM
                                                </span>
                                            </div>
                                            <p className="comments__text">
                                                🧪 Loved how it blended renewable energy with suspense.
                                                Rare to see climate sci-fi done right. 🔋🌊
                                            </p>
                                            <div className="comments__actions">
                                                <div className="comments__rate">
                                                    <button type="button">
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
                                                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                                        </svg>
                                                        8
                                                    </button>
                                                    <button type="button">
                                                        3
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
                                                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a href="movie.html#reply-id">
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
                                                        <path d="M15 14l4 -4l-4 -4" />
                                                        <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
                                                    </svg>
                                                    Reply
                                                </a>

                                            </div>
                                        </li>
                                        <li className="comments__item comments__item--quote">
                                            <div className="comments__author">
                                                <span className="comments__name">RippleTheory</span>
                                                <span className="comments__time">
                                                    May 20, 2025, 4:32 PM
                                                </span>
                                            </div>
                                            <p className="comments__text">
                                                <span>
                                                    “With great power comes great consequences — and this
                                                    film rides that wave perfectly.”
                                                </span>{" "}
                                                💬 The visuals of the ocean currents were stunning.
                                                Feels like a warning for our time wrapped in a sci-fi
                                                thriller.
                                            </p>
                                            <div className="comments__actions">
                                                <div className="comments__rate">
                                                    <button type="button">
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
                                                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                                        </svg>
                                                        11
                                                    </button>
                                                    <button type="button">
                                                        1
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
                                                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a href="movie.html#reply-id">
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
                                                        <path d="M15 14l4 -4l-4 -4" />
                                                        <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
                                                    </svg>
                                                    Reply
                                                </a>

                                            </div>
                                        </li>
                                        <li className="comments__item">
                                            <div className="comments__author">
                                                <span className="comments__name">EchoAI_91</span>
                                                <span className="comments__time">
                                                    May 20, 2025, 5:08 PM
                                                </span>
                                            </div>
                                            <p className="comments__text">
                                                🧠 Brilliant concept. Feels like this could actually
                                                happen in our world. Science + tension = win.
                                            </p>
                                            <div className="comments__actions">
                                                <div className="comments__rate">
                                                    <button type="button">
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
                                                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                                        </svg>
                                                        99
                                                    </button>
                                                    <button type="button">
                                                        35
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
                                                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a href="movie.html#reply-id">
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
                                                        <path d="M15 14l4 -4l-4 -4" />
                                                        <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
                                                    </svg>
                                                    Reply
                                                </a>

                                            </div>
                                        </li>
                                        <li className="comments__item">
                                            <div className="comments__author">
                                                <span className="comments__name">YourComment</span>
                                                <span className="comments__time">
                                                    May 20, 2025, 5:25 PM
                                                </span>
                                            </div>
                                            <p className="comments__text">
                                                🚨 Some of the dialogue was a bit clunky, but that
                                                ending? Gave me chills. 🔥 Definitely watching again.
                                            </p>
                                            <div className="comments__actions">
                                                <div className="comments__rate">
                                                    <button type="button">
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
                                                            <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                                        </svg>
                                                        74
                                                    </button>
                                                    <button type="button">
                                                        13
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
                                                            <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <a href="movie.html#reply-id">
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
                                                        <path d="M15 14l4 -4l-4 -4" />
                                                        <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
                                                    </svg>
                                                    Reply
                                                </a>

                                            </div>
                                        </li>
                                    </ul>
                                    {/* paginator mobile */}
                                    <div className="paginator-mob paginator-mob--comments">
                                        <span className="paginator-mob__pages">5 of 628</span>
                                        <ul className="paginator-mob__nav">
                                            <li>
                                                <a href="movie.html#">
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
                                                <a href="movie.html#">
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
                                    <ul className="paginator paginator--comments">
                                        <li className="paginator__item paginator__item--prev">
                                            <a href="movie.html#">
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
                                            <a href="movie.html#">1</a>
                                        </li>
                                        <li className="paginator__item paginator__item--active">
                                            <a href="movie.html#">2</a>
                                        </li>
                                        <li className="paginator__item">
                                            <a href="movie.html#">3</a>
                                        </li>
                                        <li className="paginator__item">
                                            <a href="movie.html#">4</a>
                                        </li>
                                        <li className="paginator__item">
                                            <span>...</span>
                                        </li>
                                        <li className="paginator__item">
                                            <a href="movie.html#">36</a>
                                        </li>
                                        <li className="paginator__item paginator__item--next">
                                            <a href="movie.html#">
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
                                    <form
                                        action="movie.html#"
                                        id="reply-id"
                                        className="sign__form sign__form--comments"
                                    >
                                        <div className="sign__group">
                                            <textarea
                                                id="text0"
                                                name="text0"
                                                className="sign__textarea"
                                                placeholder="Write your response"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="sign__btn sign__btn--small"
                                        >
                                            <span>Send</span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* end comments */}
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="tab-main02"
                        role="tabpanel"
                        aria-labelledby="02main-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                            {/* reviews */}
                            <div className="col-12">
                                <div className="reviews">
                                    <div className="reviews__list">
                                        <div className="reviews__item reviews__item--silver">
                                            <div className="reviews__author">
                                                <span className="reviews__name">
                                                    Great Concept, But Lacks Depth
                                                </span>
                                                <span className="reviews__time">
                                                    OceanVoyager — May 20, 2025, 6:12 PM
                                                </span>
                                                <span className="reviews__rating reviews__rating--silver">
                                                    7
                                                </span>
                                            </div>
                                            <p className="reviews__text">
                                                I love the idea behind the ocean energy technology, but
                                                the execution felt a little too rushed at times. Still,
                                                the visuals were impressive and the plot had potential.
                                                Would’ve liked to see more world-building.
                                            </p>
                                        </div>
                                        <div className="reviews__item reviews__item--gold">
                                            <div className="reviews__author">
                                                <span className="reviews__name">
                                                    Riveting Until the End
                                                </span>
                                                <span className="reviews__time">
                                                    GreenTechFan — May 20, 2025, 7:05 PM
                                                </span>
                                                <span className="reviews__rating reviews__rating--gold">
                                                    9
                                                </span>
                                            </div>
                                            <p className="reviews__text">
                                                The last 30 minutes were pure tension! The storyline was
                                                gripping, and the concept of ocean energy was so timely.
                                                Minor flaws with pacing, but overall a must-see for
                                                sci-fi lovers. A bit slow in parts, but totally worth
                                                it.
                                            </p>
                                        </div>
                                        <div className="reviews__item reviews__item--bronze">
                                            <div className="reviews__author">
                                                <span className="reviews__name">
                                                    A Solid Thriller, But Misses the Mark
                                                </span>
                                                <span className="reviews__time">
                                                    DeepBlueRider — May 20, 2025, 8:30 PM
                                                </span>
                                                <span className="reviews__rating reviews__rating--bronze">
                                                    5
                                                </span>
                                            </div>
                                            <p className="reviews__text">
                                                While the film touches on important issues like
                                                renewable energy, it doesn’t dive as deep as I hoped.
                                                Some great moments of suspense, but it often felt like
                                                it was just scratching the surface. Good watch for
                                                casual viewers, though.
                                            </p>
                                        </div>
                                    </div>
                                    <form
                                        action="movie.html#"
                                        id="add-review"
                                        className="sign__form sign__form--reviews"
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="sign__group">
                                                    <span className="sign__label">Title</span>
                                                    <input
                                                        name="titlereview"
                                                        type="text"
                                                        className="sign__input"
                                                        placeholder="Short review title"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="sign__group">
                                                    <span className="sign__label">Rating</span>
                                                    <div className="rating">
                                                        <input
                                                            defaultValue={10}
                                                            name="rate"
                                                            id="star10"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star10">
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
                                                                <path d="M8 8h1v8" />
                                                                <path d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            defaultValue={9}
                                                            name="rate"
                                                            id="star9"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star9">
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
                                                                <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            defaultValue={8}
                                                            name="rate"
                                                            id="star8"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star8">
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
                                                                <path d="M12 12h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1zh-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            defaultValue={7}
                                                            name="rate"
                                                            id="star7"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star7">
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
                                                                <path d="M10 8h4l-2 8" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            defaultValue={6}
                                                            name="rate"
                                                            id="star6"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star6">
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
                                                                <path d="M14 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
                                                            </svg>
                                                        </label>
                                                        <input
                                                            defaultValue={5}
                                                            name="rate"
                                                            id="star5"
                                                            type="radio"
                                                        />
                                                        <label htmlFor="star5">
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
                                                                <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3v-4h4" />
                                                            </svg>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="sign__group">
                                                    <span className="sign__label">Review</span>
                                                    <textarea
                                                        id="textreview"
                                                        name="textreview"
                                                        className="sign__textarea"
                                                        placeholder="Write your review"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="button"
                                                    className="sign__btn sign__btn--small"
                                                >
                                                    <span>Send</span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* end reviews */}
                        </div>
                    </div>
                </div>
            </div>
            {/* end tabs content */}
        </div>

    )
}

export default TabDetail