import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="error">
            {/* section bg */}
            <div className="section__bg">
                <div className="star" id="stars" />
                <div className="star" id="stars2" />
                <div className="star" id="stars3" />
            </div>
            {/* error content */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="error__wrap">
                            <div className="error__content">
                                <h1 className="error__title">404</h1>
                                <p className="error__text">
                                    The page you are looking for <br />
                                    not available!
                                </p>
                                <Link href={"/"} className="error__btn">
                                    <span>Go back</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default NotFound