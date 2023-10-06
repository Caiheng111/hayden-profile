import React from "react"

export default function Landing({ typedEl }) {
    return (
        <div
            id="landing"
            className="landing landing__container"
            data-name="Home"
        >
            <div className="">
                <h2>I'm Hayden Cai </h2>
                <div className="">
                    <span
                        className="landing__typeContents"
                        ref={typedEl}
                    ></span>
                </div>
            </div>
        </div>
    )
}
