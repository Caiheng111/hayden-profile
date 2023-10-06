import React, { useEffect } from "react"

import Layout from "../components/layout/Layout"
import Landing from "../components/sections/Landing"
import About from "../components/sections/About"

// Third Party
import Typed from "typed.js"

const HomePage = () => {
    const typedEl = React.createRef()
    useEffect(() => {
        const typedJSOptions = {
            strings: ["Software Developer.", "Designer."],
            typeSpeed: 100,
            loop: true
        }

        let typed = new Typed(typedEl.current, typedJSOptions)

        return () => {
            typed.destroy()
        }
    }, [typedEl])

    return (
        <Layout>
            <Landing typedEl={typedEl} />
            <About />
        </Layout>
    )
}

export default HomePage
