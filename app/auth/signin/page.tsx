import React from 'react'

const SignIn = () => {
    return (
        <div className="sign">
            {/* section bg */}
            <div className="section__bg">
                <div className="star" id="stars" />
                <div className="star" id="stars2" />
                <div className="star" id="stars3" />
            </div>
            {/* sign content */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            {/* authorization form */}
                            <form action="signin.html#" className="sign__form">
                                <a href="index.html" className="sign__logo">
                                    <img src="img/logo.svg" alt="" />
                                </a>
                                <div className="sign__group">
                                    <input
                                        name="email0"
                                        type="text"
                                        className="sign__input"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="sign__group">
                                    <input
                                        name="pass0"
                                        type="password"
                                        className="sign__input"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="sign__group sign__group--checkbox">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"

                                    />
                                    <label htmlFor="remember">Remember Me</label>
                                </div>
                                <button className="sign__btn sign__btn--big" type="button">
                                    <span>Sign in</span>
                                </button>
                                <span className="sign__delimiter">or</span>
                                <div className="sign__social">
                                    <a className="fb" href="signin.html#">
                                        Sign in with
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
                                    <a className="tw" href="signin.html#">
                                        Sign in with
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
                                    <a className="gl" href="signin.html#">
                                        Sign in with
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
                                            <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
                                        </svg>
                                    </a>
                                </div>
                                <span className="sign__text">
                                    Don't have an account? <a href="signup.html">Sign up!</a>
                                </span>
                                <span className="sign__text">
                                    <a href="forgot.html">Forgot password?</a>
                                </span>
                            </form>
                            {/* end authorization form */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn