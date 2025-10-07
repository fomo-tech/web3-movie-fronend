"use client";

import React from "react";
import logo from "@/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/routes";
import clsx from "clsx";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* sidebar */}
      <div className="sidebar">
        <div className="sidebar__head">
          {/* logo */}
          <a href="index.html" className="sidebar__logo">
            <Image src={logo} alt="" />
          </a>
          {/* end logo */}
        </div>
        <div className="sidebar__content">
          <div className="sidebar__menu">
            <ul className="sidebar__nav">
              <li className={clsx({ active: pathname === ROUTES.home })}>
                <Link href={ROUTES.home}>
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
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li className={clsx({ active: pathname === ROUTES.movies })}>
                <Link href={ROUTES.movies}>
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
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 4l0 16" />
                    <path d="M16 4l0 16" />
                    <path d="M4 8l4 0" />
                    <path d="M4 16l4 0" />
                    <path d="M4 12l16 0" />
                    <path d="M16 8l4 0" />
                    <path d="M16 16l4 0" />
                  </svg>
                  <span>Movies</span>
                  {/* <p>25 947</p> */}
                </Link>
              </li>
              <li>
                <a href="catalog2.html">
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
                    <path d="M4 20h16" />
                    <path d="M20 16v-10a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v10l4 -6c2.667 1.333 5.333 1.333 8 0l4 6z" />
                  </svg>
                  <span>TV Series</span> <p>7 208</p>
                </a>
              </li>
              <li>
                <a href="onlinetv.html">
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
                    <path d="M18.364 19.364a9 9 0 1 0 -12.728 0" />
                    <path d="M15.536 16.536a5 5 0 1 0 -7.072 0" />
                    <path d="M12 13m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <span>Online TV</span>
                </a>
              </li>
              <li>
                <button
                  className="sidebar__collapsed collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-menu0"
                  aria-expanded="false"
                  aria-controls="collapse-menu0"
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
                    <path d="M4 4h6v6h-6z" />
                    <path d="M14 4h6v6h-6z" />
                    <path d="M4 14h6v6h-6z" />
                    <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  </svg>
                  <span>Categories</span>
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
                </button>
              </li>
              <li>
                <ul
                  id="collapse-menu0"
                  className="sidebar__nav sidebar__nav--collapse collapse"
                >
                  <li>
                    <a href="catalog1.html">
                      <span>Action</span>
                      <p>462</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Adventure</span>
                      <p>1 204</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Animation</span>
                      <p>89</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Biography</span>
                      <p>103</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Comedy</span>
                      <p>2 094</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Documentary</span>
                      <p>923</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Drama</span>
                      <p>781</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Education</span>
                      <p>62</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Fantasy</span>
                      <p>803</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>History</span>
                      <p>1 942</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Horror</span>
                      <p>693</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Kids</span>
                      <p>105</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Military/War</span>
                      <p>1 931</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Mystery/Crime</span>
                      <p>2 056</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Politics</span>
                      <p>705</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Romance</span>
                      <p>1 684</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Sci-Fi</span>
                      <p>558</p>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Western</span>
                      <p>726</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="watchlist.html">
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
                    <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
                    <path d="M11 3h5a3 3 0 0 1 3 3v11" />
                  </svg>
                  <span>Watchlist</span>
                  <p>36</p>
                </a>
              </li>
            </ul>
            <ul className="sidebar__nav">
              <li>
                <a href="affiliate.html">
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
                    <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                    <path d="M11.683 12.317l5.759 -5.759" />
                    <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                    <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                    <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                    <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                  </svg>
                  <span>Affiliate</span>
                </a>
              </li>
              <li>
                <a href="token.html">
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
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                    <path d="M12 7v10" />
                  </svg>
                  <span>Token</span>
                </a>
              </li>
              <li>
                <a href="invest.html">
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
                    <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                    <path d="M4 6v6c0 1.657 3.582 3 8 3c.415 0 .822 -.012 1.22 -.035" />
                    <path d="M20 10v-4" />
                    <path d="M4 12v6c0 1.657 3.582 3 8 3c.352 0 .698 -.009 1.037 -.025" />
                    <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                    <path d="M19 21v1m0 -8v1" />
                  </svg>
                  <span>Invest</span>
                </a>
              </li>
              <li>
                <a href="contest.html">
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
                    <path d="M8 21l8 0" />
                    <path d="M12 17l0 4" />
                    <path d="M7 4l10 0" />
                    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                    <path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  </svg>
                  <span>Weekly Race</span>
                </a>
              </li>
            </ul>
            <ul className="sidebar__nav">
              <li>
                <button
                  className="sidebar__collapsed collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse-menu1"
                  aria-expanded="false"
                  aria-controls="collapse-menu1"
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
                    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                  </svg>
                  <span>Pages</span>
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
                </button>
              </li>
              <li>
                <ul
                  id="collapse-menu1"
                  className="sidebar__nav sidebar__nav--collapse collapse"
                >
                  <li>
                    <a href="index.html">
                      <span>Home v1</span>
                    </a>
                  </li>
                  <li>
                    <a href="index2.html">
                      <span>Home v2</span>
                    </a>
                  </li>
                  <li>
                    <a href="catalog1.html">
                      <span>Catalog (Pagination)</span>
                    </a>
                  </li>
                  <li>
                    <a href="catalog2.html">
                      <span>Catalog (Dynamic Feed)</span>
                    </a>
                  </li>
                  <li>
                    <a href="movie.html">
                      <span>Movie (HTML5 Video)</span>
                    </a>
                  </li>
                  <li>
                    <a href="tvseries.html">
                      <span>TV Series (HTML5 Video)</span>
                    </a>
                  </li>
                  <li>
                    <a href="stream.html">
                      <span>Stream (YouTube)</span>
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <span>About Us</span>
                    </a>
                  </li>
                  <li>
                    <a href="profile.html">
                      <span>Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="article.html">
                      <span>Article</span>
                    </a>
                  </li>
                  <li>
                    <a href="actor.html">
                      <span>Actor</span>
                    </a>
                  </li>
                  <li>
                    <a href="chat.html">
                      <span>Chat</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="sidebar__nav">
              <li>
                <a href="access.html">
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
                  <span>Early Access</span>
                </a>
              </li>
              <li>
                <a href="news.html">
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
                    <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                    <path d="M8 8l4 0" />
                    <path d="M8 12l4 0" />
                    <path d="M8 16l4 0" />
                  </svg>
                  <span>News</span>
                </a>
              </li>
              <li>
                <a href="faq.html">
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
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 17l0 .01" />
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                  </svg>
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href="support.html">
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
                    <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                    <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                    <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                    <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                  </svg>
                  <span>Live Support</span>
                </a>
              </li>
              <li>
                <a href="privacy.html">
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
                    <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
