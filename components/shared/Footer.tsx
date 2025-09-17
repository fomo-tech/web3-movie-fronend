'use client'

import React from 'react'

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-4 order-md-1 order-lg-4 order-xl-1">
                            <div className="footer__btns">
                                <a href="index2.html#" className="footer__btn footer__btn--app">
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
                                        <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
                                        <path d="M7 14h5m2.9 0h2.1" />
                                        <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
                                    </svg>{" "}
                                    App store
                                </a>
                                <a href="index2.html#" className="footer__btn footer__btn--play">
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
                                        <path d="M4 3.71v16.58a.7 .7 0 0 0 1.05 .606l14.622 -8.42a.55 .55 0 0 0 0 -.953l-14.622 -8.419a.7 .7 0 0 0 -1.05 .607z" />
                                        <path d="M15 9l-10.5 11.5" />
                                        <path d="M4.5 3.5l10.5 11.5" />
                                    </svg>{" "}
                                    Play store
                                </a>
                            </div>
                            <p className="footer__tagline">
                                Web3 Online Cinema. Watch to Earn FXC Coins. <br />
                                Experience an innovative gaming ecosystem <br />
                                where you can both watch and earn.
                            </p>
                            <div className="footer__lang">
                                <a
                                    className="footer__lang-btn"
                                    href="index2.html#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img src="img/flags/uk.svg" alt="" />
                                    <span>English</span>
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
                                </a>
                                <ul className="dropdown-menu footer__lang-dropdown">
                                    <li>
                                        <a href="index2.html#">
                                            <img src="img/flags/spain.svg" alt="" />
                                            <span>Spanish</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index2.html#">
                                            <img src="img/flags/france.svg" alt="" />
                                            <span>French</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="index2.html#">
                                            <img src="img/flags/china.svg" alt="" />
                                            <span>Chinese</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-2 order-xl-3 offset-md-2 offset-lg-0">
                            <h6 className="footer__title">Company</h6>
                            <div className="footer__nav">
                                <a href="about.html">About Us</a>
                                <a href="news.html">News</a>
                                <a href="about.html">Resources</a>
                                <a href="about.html">Partners</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 col-xl-4 order-3 order-md-3 order-lg-1 order-xl-2">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="footer__title">Watch &amp; Earn</h6>
                                </div>
                                <div className="col-6">
                                    <div className="footer__nav">
                                        <a className="green" href="affiliate.html">
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
                                            Affiliate
                                        </a>
                                        <a className="red" href="token.html">
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
                                            Token
                                        </a>
                                        <a className="blue" href="invest.html">
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
                                            Invest
                                        </a>
                                        <a className="purple" href="contest.html">
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
                                            Contest
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="footer__nav">
                                        <a href="catalog1.html">Catalog</a>
                                        <a href="access.html">Early Access</a>
                                        <a href="about.html">Benefits</a>
                                        <a href="about.html">Features</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 col-xl-2 order-2 order-md-4 order-lg-3 order-xl-4">
                            <h6 className="footer__title">Support</h6>
                            <div className="footer__nav">
                                <a href="support.html">Ask a Question</a>
                                <a href="faq.html">FAQ</a>
                                <a href="privacy.html">Privacy Policy</a>
                                <a href="privacy.html">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="footer__content">
                                <div className="footer__social">
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
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                        </svg>
                                    </a>
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
                                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                        </svg>
                                    </a>
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
                                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16.5 7.5l0 .01" />
                                        </svg>
                                    </a>
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
                                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                        </svg>
                                    </a>
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
                                            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                                            <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                                        </svg>
                                    </a>
                                </div>
                                <small className="footer__copyright">
                                    © FlixCoin, 2025. Created by{" "}
                                    <a
                                        href="https://themeforest.net/user/dmitryvolkov/portfolio"
                                        target="_blank"
                                    >
                                        Dmitry Volkov
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer