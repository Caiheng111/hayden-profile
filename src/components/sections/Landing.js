import React from "react"
// import Container from "@components/layout/Container"
// import LazyLoad from "react-lazyload"
// import SEO from "@components/seo/Seo"
// import { navigateTo } from "@components/layout/Navigation"

// import Fade from "react-reveal/Fade"

export default function Landing({ typedEl }) {
    return (
        <div id="landing" className="landing__container" data-name="Home">
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
