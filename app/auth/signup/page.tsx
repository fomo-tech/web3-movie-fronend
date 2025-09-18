import React from 'react'
import FormSignUp from './FormSignUp'

const Signup = () => {
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
                            <FormSignUp />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup