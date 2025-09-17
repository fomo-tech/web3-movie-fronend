import React from 'react'

const Profile = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section__head">
                                {/* section title */}
                                <h1 className="section__title section__title--head">Profile</h1>
                                {/* end section title */}
                                {/* breadcrumbs */}
                                <ul className="breadcrumbs breadcrumbs--tablet">
                                    <li className="breadcrumbs__item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumbs__item breadcrumbs__item--active">
                                        Profile
                                    </li>
                                </ul>
                                {/* end breadcrumbs */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end head */}
            {/* profile */}
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* tabs nav */}
                        <div className="col-12">
                            <ul
                                className="nav nav-tabs main__tabs-nav"
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
                                        Overview
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
                                        tabIndex={-1}
                                    >
                                        Subs
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        id="03main-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-main03"
                                        type="button"
                                        role="tab"
                                        aria-controls="tab-main03"
                                        aria-selected="false"
                                        tabIndex={-1}
                                    >
                                        Verify
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        id="04main-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-main04"
                                        type="button"
                                        role="tab"
                                        aria-controls="tab-main04"
                                        aria-selected="false"
                                        tabIndex={-1}
                                    >
                                        Settings
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        id="05main-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#tab-main05"
                                        type="button"
                                        role="tab"
                                        aria-controls="tab-main05"
                                        aria-selected="false"
                                        tabIndex={-1}
                                    >
                                        Transactions
                                    </button>
                                </li>
                            </ul>
                        </div>
                        {/* end tabs nav */}
                        {/* tabs content */}
                        <div className="col-12">
                            <div className="tab-content main__tabs-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="tab-main01"
                                    role="tabpanel"
                                    aria-labelledby="01main-tab"
                                    tabIndex={0}
                                >
                                    <div className="row gx-3">
                                        {/* stats */}
                                        <div className="col-12 col-sm-6 col-xl-3">
                                            <div className="stats">
                                                <span>You earned</span>
                                                <p>
                                                    <img src="img/fiat/usd.svg" alt="" /> 2 272.94 USD
                                                </p>
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
                                                    <path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5" />
                                                    <path d="M19 21v1m0 -8v1" />
                                                    <path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2" />
                                                    <path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1" />
                                                    <path d="M8 14v.01" />
                                                    <path d="M8 17v.01" />
                                                    <path d="M12 13.99v.01" />
                                                    <path d="M12 17v.01" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* end stats */}
                                        {/* stats */}
                                        <div className="col-12 col-sm-6 col-xl-3">
                                            <div className="stats">
                                                <span>Farm Speed</span>
                                                <p>
                                                    <img src="img/currencies/flixcoin.svg" alt="" /> 98.941057{" "}
                                                    <b>/ month</b>
                                                </p>
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
                                                    <path d="M12 18m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                    <path d="M3 9l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0" />
                                                    <path d="M12 18l-2.2 -12.8" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* end stats */}
                                        {/* stats */}
                                        <div className="col-12 col-sm-6 col-md-4 col-xl-2">
                                            <div className="stats">
                                                <span>Access</span>
                                                <p className="green">FREE</p>
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
                                                    <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                                                    <path d="M15 9h.01" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* end stats */}
                                        {/* stats */}
                                        <div className="col-6 col-sm-6 col-md-4 col-xl-2">
                                            <div className="stats">
                                                <span>Referrals</span>
                                                <p>
                                                    1 678 <sub className="red">- 23</sub>
                                                </p>
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
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                                    <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                    <path d="M19 21v1m0 -8v1" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* end stats */}
                                        {/* stats */}
                                        <div className="col-6 col-sm-12 col-md-4 col-xl-2">
                                            <div className="stats">
                                                <span>Income</span>
                                                <p>
                                                    $329 <sub className="green">+ 9.7%</sub>
                                                </p>
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
                                            </div>
                                        </div>
                                        {/* end stats */}
                                    </div>
                                    <div className="row gx-3">
                                        {/* dashbox */}
                                        <div className="col-12 col-xl-6">
                                            <div className="dashbox">
                                                <div className="dashbox__title">
                                                    <h3>
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
                                                        </svg>{" "}
                                                        Latest Transactions
                                                    </h3>
                                                    <div className="dashbox__wrap">
                                                        <button
                                                            className="dashbox__refresh"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Refresh"
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
                                                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                                            </svg>
                                                        </button>
                                                        <a
                                                            className="dashbox__more"
                                                            href="profile.html#tab-main05"
                                                        >
                                                            <span>View All</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="dashbox__table-wrap">
                                                    <div className="table-responsive">
                                                        <table className="xtable xtable--profile">
                                                            <thead>
                                                                <tr>
                                                                    <th>Id</th>
                                                                    <th>Type</th>
                                                                    <th>You earned</th>
                                                                    <th>Date and Time</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            241
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
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
                                                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                                <path d="M8 4l0 16" />
                                                                                <path d="M16 4l0 16" />
                                                                                <path d="M4 8l4 0" />
                                                                                <path d="M4 16l4 0" />
                                                                                <path d="M4 12l16 0" />
                                                                                <path d="M16 8l4 0" />
                                                                                <path d="M16 16l4 0" />
                                                                            </svg>
                                                                            Watch &amp; Earn
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img src="img/currencies/doge.svg" alt="" />
                                                                            <span>35.02</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
                                                                            06.05.25 / 01:34 PM
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            240
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--green-icon">
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
                                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                                <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                            </svg>
                                                                            Withdrawal
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img src="img/currencies/usdt.svg" alt="" />
                                                                            <span>500.00</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
                                                                            01.01.24 / 09:01 AM
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            239
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
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
                                                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                                <path d="M8 4l0 16" />
                                                                                <path d="M16 4l0 16" />
                                                                                <path d="M4 8l4 0" />
                                                                                <path d="M4 16l4 0" />
                                                                                <path d="M4 12l16 0" />
                                                                                <path d="M16 8l4 0" />
                                                                                <path d="M16 16l4 0" />
                                                                            </svg>
                                                                            Watch &amp; Earn
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>12.792</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
                                                                            08.07.24 / 11:43 PM
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            238
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
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
                                                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                                <path d="M8 4l0 16" />
                                                                                <path d="M16 4l0 16" />
                                                                                <path d="M4 8l4 0" />
                                                                                <path d="M4 16l4 0" />
                                                                                <path d="M4 12l16 0" />
                                                                                <path d="M16 8l4 0" />
                                                                                <path d="M16 16l4 0" />
                                                                            </svg>
                                                                            Watch &amp; Earn
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>47.526</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
                                                                            04.02.24 / 08:29 AM
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            237
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--green-icon">
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
                                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                                <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                            </svg>
                                                                            Deposite
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img src="img/currencies/usdt.svg" alt="" />
                                                                            <span>100.00</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__text">
                                                                            02.02.24 / 08:44 AM
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end dashbox */}
                                        {/* dashbox */}
                                        <div className="col-12 col-xl-6">
                                            <div className="dashbox">
                                                <div className="dashbox__title">
                                                    <h3>
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
                                                            <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5z" />
                                                            <path d="M4 17v-1a8 8 0 1 1 16 0v1a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                                        </svg>{" "}
                                                        Most Profitable
                                                    </h3>
                                                    <div className="dashbox__wrap">
                                                        <button
                                                            className="dashbox__refresh"
                                                            type="button"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            data-bs-title="Refresh"
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
                                                                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                                                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="dashbox__table-wrap">
                                                    <div className="table-responsive">
                                                        <table className="xtable xtable--profile">
                                                            <thead>
                                                                <tr>
                                                                    <th>Id</th>
                                                                    <th>Title</th>
                                                                    <th>You earned</th>
                                                                    <th>Watchlist</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            824
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="movie.html" className="xtable__title">
                                                                            Another Language
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>252.905</span>
                                                                            <span>
                                                                                ≈ <b>$391.97</b>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="xtable__favorite xtable__favorite--active"
                                                                            type="button"
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
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            602
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="tvseries.html"
                                                                            className="xtable__title"
                                                                        >
                                                                            Benched
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>227.037</span>
                                                                            <span>
                                                                                ≈ <b>$366.05</b>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="xtable__favorite"
                                                                            type="button"
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
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            538
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="movie.html" className="xtable__title">
                                                                            Whitney
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>105.693</span>
                                                                            <span>
                                                                                ≈ <b>$294.16</b>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="xtable__favorite"
                                                                            type="button"
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
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            129
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a
                                                                            href="tvseries.html"
                                                                            className="xtable__title"
                                                                        >
                                                                            Blindspotting
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img src="img/currencies/doge.svg" alt="" />
                                                                            <span>735.039</span>
                                                                            <span>
                                                                                ≈ <b>$163.48</b>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="xtable__favorite xtable__favorite--active"
                                                                            type="button"
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
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                            360
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="movie.html" className="xtable__title">
                                                                            Another
                                                                        </a>
                                                                    </td>
                                                                    <td>
                                                                        <div className="xtable__pair">
                                                                            <img
                                                                                src="img/currencies/flixcoin.svg"
                                                                                alt=""
                                                                            />
                                                                            <span>81.062</span>
                                                                            <span>
                                                                                ≈ <b>$240.36</b>
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <button
                                                                            className="xtable__favorite xtable__favorite--active"
                                                                            type="button"
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
                                                                                <path
                                                                                    stroke="none"
                                                                                    d="M0 0h24v24H0z"
                                                                                    fill="none"
                                                                                />
                                                                                <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
                                                                            </svg>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end dashbox */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-main02"
                                    role="tabpanel"
                                    aria-labelledby="02main-tab"
                                    tabIndex={0}
                                >
                                    <div className="row gx-3">
                                        {/* plan */}
                                        <div className="col-12 col-md-6 order-md-2 col-lg-4 order-lg-1">
                                            <div className="plan plan--active">
                                                <div className="plan__content">
                                                    <div className="plan__head">
                                                        <h3 className="plan__title">Starter</h3>
                                                        <span className="plan__price">Free</span>
                                                    </div>
                                                    <ul className="plan__list">
                                                        <li className="plan__item">
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
                                                                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                                                <path d="M18 14v4h4" />
                                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                                <path d="M15 3v4" />
                                                                <path d="M7 3v4" />
                                                                <path d="M3 11h16" />
                                                            </svg>{" "}
                                                            Unlimited time
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                                                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                                                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                            </svg>{" "}
                                                            <b>49.00 FXC</b> / min
                                                        </li>
                                                        <li className="plan__item plan__item--none">
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
                                                                <path d="M9 12l6 0" />
                                                            </svg>{" "}
                                                            No Advertising
                                                        </li>
                                                        <li className="plan__item plan__item--none">
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
                                                                <path d="M9 12l6 0" />
                                                            </svg>{" "}
                                                            Early Access
                                                        </li>
                                                        <li className="plan__item plan__item--none">
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
                                                                <path d="M9 12l6 0" />
                                                            </svg>{" "}
                                                            Exclusive Сontests
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="plan__cellar">
                                                    <a href="signup.html" className="plan__btn">
                                                        <span>Current plan</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end plan */}
                                        {/* plan */}
                                        <div className="col-12 col-md-6 order-md-3 col-lg-4 order-lg-2">
                                            <div className="plan plan--clouds">
                                                <div className="plan__content">
                                                    <div className="plan__head">
                                                        <h3 className="plan__title">Premium</h3>
                                                        <span className="plan__price">$19.00</span>
                                                    </div>
                                                    <ul className="plan__list">
                                                        <li className="plan__item">
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
                                                                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                                                <path d="M18 14v4h4" />
                                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                                <path d="M15 3v4" />
                                                                <path d="M7 3v4" />
                                                                <path d="M3 11h16" />
                                                            </svg>{" "}
                                                            1 Month
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                                                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                                                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                            </svg>{" "}
                                                            <b>169.00 FXC</b> / min
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M4.91 4.949a9.968 9.968 0 0 0 -2.91 7.051c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05 -2.909" />
                                                                <path d="M20.778 16.793a9.955 9.955 0 0 0 1.222 -4.793c0 -5.523 -4.477 -10 -10 -10c-1.74 0 -3.376 .444 -4.8 1.225" />
                                                                <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138 -1.358" />
                                                                <path d="M9.854 9.853c.094 .196 .146 .415 .146 .647v4.5" />
                                                                <path d="M7 13h3" />
                                                                <path d="M14 14v1h1" />
                                                                <path d="M17 13v-2a2 2 0 0 0 -2 -2h-1v1" />
                                                                <path d="M3 3l18 18" />
                                                            </svg>{" "}
                                                            No Advertising
                                                        </li>
                                                        <li className="plan__item plan__item--none">
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
                                                                <path d="M9 12l6 0" />
                                                            </svg>{" "}
                                                            Early Access
                                                        </li>
                                                        <li className="plan__item plan__item--none">
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
                                                                <path d="M9 12l6 0" />
                                                            </svg>{" "}
                                                            Exclusive Сontests
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="plan__cellar">
                                                    <button
                                                        className="plan__btn"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#access-modal"
                                                    >
                                                        <span>Choose Plan</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end plan */}
                                        {/* plan */}
                                        <div className="col-12 col-md-12 order-md-1 col-lg-4 order-lg-3">
                                            <div className="plan plan--pink">
                                                <div className="plan__content">
                                                    <div className="plan__head">
                                                        <h3 className="plan__title">Cinematic</h3>
                                                        <span className="plan__price">$29.00</span>
                                                    </div>
                                                    <ul className="plan__list">
                                                        <li className="plan__item">
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
                                                                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                                                                <path d="M18 14v4h4" />
                                                                <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                                                <path d="M15 3v4" />
                                                                <path d="M7 3v4" />
                                                                <path d="M3 11h16" />
                                                            </svg>{" "}
                                                            3 Months
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                                                                <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                                                                <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                            </svg>{" "}
                                                            <b>289.00 FXC</b> / min
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M4.91 4.949a9.968 9.968 0 0 0 -2.91 7.051c0 5.523 4.477 10 10 10a9.968 9.968 0 0 0 7.05 -2.909" />
                                                                <path d="M20.778 16.793a9.955 9.955 0 0 0 1.222 -4.793c0 -5.523 -4.477 -10 -10 -10c-1.74 0 -3.376 .444 -4.8 1.225" />
                                                                <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.138 -1.358" />
                                                                <path d="M9.854 9.853c.094 .196 .146 .415 .146 .647v4.5" />
                                                                <path d="M7 13h3" />
                                                                <path d="M14 14v1h1" />
                                                                <path d="M17 13v-2a2 2 0 0 0 -2 -2h-1v1" />
                                                                <path d="M3 3l18 18" />
                                                            </svg>{" "}
                                                            No Advertising
                                                        </li>
                                                        <li className="plan__item">
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
                                                            </svg>{" "}
                                                            Early Access
                                                        </li>
                                                        <li className="plan__item">
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
                                                                <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                                                                <path d="M12 8l0 13" />
                                                                <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                                                                <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                                                            </svg>{" "}
                                                            Exclusive Сontests
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="plan__cellar">
                                                    <button
                                                        className="plan__btn"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#access-modal"
                                                    >
                                                        <span>Choose Plan</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end plan */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-main03"
                                    role="tabpanel"
                                    aria-labelledby="03main-tab"
                                    tabIndex={0}
                                >
                                    <div className="row">
                                        {/* verification */}
                                        <div className="col-12">
                                            <div className="verification verification--done">
                                                <div className="verification__icon">
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
                                                        <circle cx={12} cy={12} r={10} />
                                                        <path d="m9 12 2 2 4-4" />
                                                    </svg>
                                                </div>
                                                <div className="verification__head">
                                                    <h3 className="verification__title">
                                                        Email Verification
                                                    </h3>
                                                    <span className="verification__status">Completed</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end verification */}
                                        {/* verification */}
                                        <div className="col-12">
                                            <div className="verification verification--requested">
                                                <div className="verification__icon">
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
                                                        <circle cx={12} cy={12} r={10} />
                                                        <path d="m9 12 2 2 4-4" />
                                                    </svg>
                                                </div>
                                                <div className="verification__head">
                                                    <h3 className="verification__title">
                                                        Level 1 KYC: Basic Information
                                                    </h3>
                                                    <span className="verification__status">Requested</span>
                                                </div>
                                                <p className="verification__text">
                                                    Fill in your details for us to get to know you better
                                                </p>
                                                <button
                                                    className="verification__btn"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#verify1-modal"
                                                >
                                                    <span>Verify Now</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* end verification */}
                                        {/* verification */}
                                        <div className="col-12">
                                            <div className="verification">
                                                <div className="verification__icon">
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
                                                        <circle cx={12} cy={12} r={10} />
                                                        <path d="m9 12 2 2 4-4" />
                                                    </svg>
                                                </div>
                                                <div className="verification__head">
                                                    <h3 className="verification__title">
                                                        Level 2 KYC: Identity Verification
                                                    </h3>
                                                    <span className="verification__status">Incomplete</span>
                                                </div>
                                                <p className="verification__text">
                                                    Upload a copy of your ID
                                                </p>
                                                <button
                                                    className="verification__btn"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#verify2-modal"
                                                >
                                                    <span>Verify Now</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* end verification */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-main04"
                                    role="tabpanel"
                                    aria-labelledby="04main-tab"
                                    tabIndex={0}
                                >
                                    <div className="row gx-3">
                                        {/* two-factor */}
                                        <div className="col-12 col-xxl-6">
                                            <div className="sign__form sign__form--full sign__form--bg">
                                                <h2 className="sign__title">Two-Factor Authentication</h2>
                                                <p className="sign__text sign__text--left">
                                                    Enhance your security by utilizing 2-factor verification
                                                    using an authenticator app for all future logins,
                                                    withdrawals, and tipping.
                                                </p>
                                                <button
                                                    className="sign__btn sign__btn--small"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#2fa-modal"
                                                >
                                                    <span>Enable</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* end two-factor */}
                                        {/* password */}
                                        <div className="col-12 col-xxl-6">
                                            <div className="sign__form sign__form--full sign__form--bg">
                                                <h2 className="sign__title">Change Password</h2>
                                                <p className="sign__text sign__text--left">
                                                    Last changed: May 16, 2025 <br />
                                                    Last confirmation: July 2, 2025
                                                </p>
                                                <button
                                                    className="sign__btn sign__btn--small"
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#pass-modal"
                                                >
                                                    <span>Change</span>
                                                </button>
                                            </div>
                                        </div>
                                        {/* end password */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="tab-main05"
                                    role="tabpanel"
                                    aria-labelledby="05main-tab"
                                    tabIndex={0}
                                >
                                    {/* mobile table */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mob-table mob-table--bg mob-table--mt">
                                                <ul className="mob-table__row">
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Id</span>
                                                        <div className="xtable__text">241</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Type</span>
                                                        <div className="xtable__text">
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
                                                            Watch &amp; Earn
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">You Earned</span>
                                                        <div className="xtable__pair">
                                                            <img src="img/currencies/doge.svg" alt="" />
                                                            <span>35.02</span>
                                                            <span>
                                                                ≈ <b>$13.97</b>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Date and Time</span>
                                                        <div className="xtable__text">05.03.25 / 03:04 AM</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Status</span>
                                                        <div className="xtable__text xtable__text--pink">
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
                                                                <path d="M12 12h3.5" />
                                                                <path d="M12 7v5" />
                                                            </svg>{" "}
                                                            Pending
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">Wallet</span>
                                                        <div className="xtable__text">
                                                            8m7epXThQF...ZXBybGctP
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="mob-table__row">
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Id</span>
                                                        <div className="xtable__text">240</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Type</span>
                                                        <div className="xtable__text xtable__text--green-icon">
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
                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                            </svg>
                                                            Withdrawal
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">You Earned</span>
                                                        <div className="xtable__pair">
                                                            <img src="img/currencies/usdt.svg" alt="" />
                                                            <span>500.00</span>
                                                            <span>
                                                                ≈ <b>$499.91</b>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Date and Time</span>
                                                        <div className="xtable__text">05.03.25 / 03:00 AM</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Status</span>
                                                        <div className="xtable__text xtable__text--green">
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
                                                                <path d="M9 12l2 2l4 -4" />
                                                            </svg>{" "}
                                                            Done
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">Wallet</span>
                                                        <div className="xtable__text">
                                                            6rxMoc7su5...Vkw2n42Uq
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="mob-table__row">
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Id</span>
                                                        <div className="xtable__text">239</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Type</span>
                                                        <div className="xtable__text">
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
                                                            Watch &amp; Earn
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">You Earned</span>
                                                        <div className="xtable__pair">
                                                            <img src="img/currencies/flixcoin.svg" alt="" />
                                                            <span>12.792</span>
                                                            <span>
                                                                ≈ <b>$8.34</b>
                                                            </span>
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Date and Time</span>
                                                        <div className="xtable__text">05.03.25 / 02:56 AM</div>
                                                    </li>
                                                    <li className="mob-table__item">
                                                        <span className="mob-table__title">Status</span>
                                                        <div className="xtable__text xtable__text--red">
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
                                                                <path d="M10 10l4 4m0 -4l-4 4" />
                                                            </svg>{" "}
                                                            Error
                                                        </div>
                                                    </li>
                                                    <li className="mob-table__item mob-table__item--full">
                                                        <span className="mob-table__title">Wallet</span>
                                                        <div className="xtable__text">
                                                            3waSDQqDPh...vTwUnSzRC
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end mobile table */}
                                    {/* tablet and desk table */}
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="main__table main__table--mt">
                                                <div className="table-responsive">
                                                    <table className="xtable">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <button className="active" type="button">
                                                                        Id
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th>
                                                                    <button type="button">
                                                                        Type
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th>
                                                                    <button type="button">
                                                                        You Earned
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th>
                                                                    <button type="button">
                                                                        Wallet
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th>
                                                                    <button type="button">
                                                                        Status
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                                <th>
                                                                    <button type="button">
                                                                        Date and Time
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
                                                                            <path d="M7 7l5 5l5 -5" />
                                                                            <path d="M7 13l5 5l5 -5" />
                                                                        </svg>
                                                                    </button>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        241
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/doge.svg" alt="" />
                                                                        <span>35.02</span>
                                                                        <span>
                                                                            ≈ <b>$13.97</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        8m7epXThQF...ZXBybGctP
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--pink">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M12 12h3.5" />
                                                                            <path d="M12 7v5" />
                                                                        </svg>{" "}
                                                                        Pending
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 03:04 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        240
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green-icon">
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
                                                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                        </svg>
                                                                        Withdrawal
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/usdt.svg" alt="" />
                                                                        <span>500.00</span>
                                                                        <span>
                                                                            ≈ <b>$499.91</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        6rxMoc7su5...Vkw2n42Uq
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:54 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        239
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/flixcoin.svg" alt="" />
                                                                        <span>12.792</span>
                                                                        <span>
                                                                            ≈ <b>$8.34</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        3waSDQqDPh...vTwUnSzRC
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:41 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        238
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/flixcoin.svg" alt="" />
                                                                        <span>47.526</span>
                                                                        <span>
                                                                            ≈ <b>$35.02</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        vXU48yNRcg...vsoM8Gkn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:30 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        237
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green-icon">
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
                                                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                        </svg>
                                                                        Deposite
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/usdt.svg" alt="" />
                                                                        <span>100.00</span>
                                                                        <span>
                                                                            ≈ <b>$99.99</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        HMWmQyZqQc...9VwrgpAhd
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:18 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        236
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/dash.svg" alt="" />
                                                                        <span>35.02</span>
                                                                        <span>
                                                                            ≈ <b>$13.97</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        H4D13Vfgtf...1jNSEYEgp
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--red">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M10 10l4 4m0 -4l-4 4" />
                                                                        </svg>{" "}
                                                                        Error
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:11 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        235
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green-icon">
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
                                                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                        </svg>
                                                                        Withdrawal
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/usdc.svg" alt="" />
                                                                        <span>500.00</span>
                                                                        <span>
                                                                            ≈ <b>$499.91</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        AjdbJ27Hrs...QJ1NutcXU
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:08 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        234
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/ltc.svg" alt="" />
                                                                        <span>9.396</span>
                                                                        <span>
                                                                            ≈ <b>$5.46</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        G2yDddjfhu...bAZKzxmmc
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 02:04 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        233
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
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
                                                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                                            <path d="M8 4l0 16" />
                                                                            <path d="M16 4l0 16" />
                                                                            <path d="M4 8l4 0" />
                                                                            <path d="M4 16l4 0" />
                                                                            <path d="M4 12l16 0" />
                                                                            <path d="M16 8l4 0" />
                                                                            <path d="M16 16l4 0" />
                                                                        </svg>
                                                                        Watch &amp; Earn
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/flixcoin.svg" alt="" />
                                                                        <span>42.025</span>
                                                                        <span>
                                                                            ≈ <b>$32.53</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        DsyBgcCUk7...nk8uCvp3i
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 01:56 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--small xtable__text--grey">
                                                                        232
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green-icon">
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
                                                                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                                                            <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
                                                                        </svg>
                                                                        Deposite
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__pair">
                                                                        <img src="img/currencies/usdt.svg" alt="" />
                                                                        <span>50.00</span>
                                                                        <span>
                                                                            ≈ <b>$49.99</b>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--grey">
                                                                        HbmJu3dQ46...V3Hoavgmv
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text xtable__text--green">
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
                                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                                            <path d="M9 12l2 2l4 -4" />
                                                                        </svg>{" "}
                                                                        Done
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="xtable__text">
                                                                        05.03.25 / 01:28 AM
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* paginator */}
                                        <div className="col-12">
                                            {/* paginator mobile */}
                                            <div className="paginator-mob">
                                                <span className="paginator-mob__pages">10 of 2153</span>
                                                <ul className="paginator-mob__nav">
                                                    <li>
                                                        <a href="profile.html#">
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
                                                        <a href="profile.html#">
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
                                                    <a href="profile.html#">
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
                                                    <a href="profile.html#">1</a>
                                                </li>
                                                <li className="paginator__item paginator__item--active">
                                                    <a href="profile.html#">2</a>
                                                </li>
                                                <li className="paginator__item">
                                                    <a href="profile.html#">3</a>
                                                </li>
                                                <li className="paginator__item">
                                                    <a href="profile.html#">4</a>
                                                </li>
                                                <li className="paginator__item">
                                                    <span>...</span>
                                                </li>
                                                <li className="paginator__item">
                                                    <a href="profile.html#">87</a>
                                                </li>
                                                <li className="paginator__item paginator__item--next">
                                                    <a href="profile.html#">
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
                                    {/* end tablet and desk table */}
                                </div>
                            </div>
                        </div>
                        {/* end tabs content */}
                    </div>
                </div>
            </div>
            {/* end profile */}

        </>
    )
}

export default Profile