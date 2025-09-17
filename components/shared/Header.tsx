import Image from 'next/image'
import React from 'react'

import logo from '@/img/logo.svg'
import usdt from '@/img/currencies/usdt.svg'

const Header = () => {
    return (
        <>
            {/* header */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                {/* logo */}
                                <a href="index.html" className="header__logo">
                                    <Image src={logo} alt="" />
                                </a>
                                {/* end logo */}
                                {/* search btn */}
                                <button className="header__search" type="button">
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
                                    <span>Search</span>
                                </button>
                                {/* end search btn */}
                                {/* dropdown menu */}
                                <div className="header__dropdown">
                                    <button
                                        className="header__dropdown-btn"
                                        type="button"
                                        id="dropdownMenu0"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
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
                                            <path d="M4 8l16 0" />
                                            <path d="M4 16l16 0" />
                                        </svg>
                                    </button>
                                    <ul
                                        className="dropdown-menu header__dropdown-menu header__dropdown-menu--noicon"
                                        aria-labelledby="dropdownMenu0"
                                    >
                                        <li>
                                            <a href="signin.html">Sign in</a>
                                        </li>
                                        <li>
                                            <a href="signup.html">Sign up</a>
                                        </li>
                                        <li>
                                            <a href="forgot.html">Forgot password</a>
                                        </li>
                                        <li>
                                            <a href="404.html">404 Page</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* end dropdown menu */}
                                <div className="header__auth">
                                    {/* balance */}
                                    <div className="header__balance">
                                        <div className="header__balance-dropdown">
                                            <button
                                                className="header__balance-dropdown-btn"
                                                type="button"
                                                id="dropdownBalance"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <Image src={usdt} alt="" />
                                                <span>107.03753019</span>
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

                                        </div>
                                        <button
                                            className="header__wallet"
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#wallet-modal"
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
                                                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* end balance */}
                                    {/* notices */}
                                    <div className="header__notices">
                                        <button
                                            className="header__notices-btn"
                                            type="button"
                                            id="dropdownNotices"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
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
                                                <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                                <path d="M17 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            </svg>
                                            <span>4</span>
                                        </button>
                                        {/* <div
                                            className="dropdown-menu dropdown-menu-end header__dropdown-notices"
                                            aria-labelledby="dropdownNotices"
                                        >
                                            <ul className="header__notes">
                                                <li>
                                                    <img src="img/currencies/flixcoin.svg" alt="" />
                                                    <p>Received 38 FXC</p>
                                                    <span>2 hours ago</span>
                                                </li>
                                                <li>
                                                    <img src="img/currencies/usdt.svg" alt="" />
                                                    <p>Withdrawn 300 USDT</p>
                                                    <span>5 hours ago</span>
                                                </li>
                                                <li>
                                                    <img src="img/currencies/doge.svg" alt="" />
                                                    <p>Received 17 DOGE</p>
                                                    <span>6 hours ago</span>
                                                </li>
                                                <li>
                                                    <img src="img/currencies/flixcoin.svg" alt="" />
                                                    <p>Received 22 FXC</p>
                                                    <span>6 hours ago</span>
                                                </li>
                                            </ul>
                                            <button className="header__notices-clear" type="button">
                                                Clear All
                                            </button>
                                        </div> */}
                                    </div>
                                    {/* end notices */}
                                    {/* profile */}
                                    <div className="header__profile">
                                        <button
                                            className="header__sign-in header__sign-in--user"
                                            type="button"
                                            id="dropdownUser"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
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
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                            </svg>
                                        </button>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end header__dropdown-menu"
                                            aria-labelledby="dropdownUser"
                                        >
                                            <li>
                                                <a href="profile.html">
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
                                                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                                                    </svg>
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html#tab-main02">
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
                                                        <path d="M8 3h-2l-3 9" />
                                                        <path d="M16 3h2l3 9" />
                                                        <path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
                                                        <path d="M7 16h1" />
                                                        <path d="M16 16h1" />
                                                    </svg>
                                                    Subscription
                                                </a>
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
                                                    Watchlist
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html#tab-main04">
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
                                                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                    </svg>
                                                    Settings
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
                                                        <path d="M15.02 19.52c-2.341 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.649 1.407 2.575 3.253 2.742 5.152" />
                                                        <path d="M19 22v.01" />
                                                        <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                                                    </svg>
                                                    Requests
                                                </a>
                                            </li>
                                            <li>
                                                <a href="profile.html#tab-main05">
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
                                                        <path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
                                                        <path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" />
                                                        <path d="M9 12h8" />
                                                        <path d="M14 15l3 -3l-3 -3" />
                                                    </svg>
                                                    Transactions
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end profile */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header