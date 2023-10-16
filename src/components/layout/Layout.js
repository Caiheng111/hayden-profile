import React, { useEffect } from "react"
import Navigation from "../sections/Navigation"
import PageProgress from "@components/layout/PageProgress"
import "../../styles/main.scss"

const Layout = ({ children }) => {
    useEffect(() => {
        /** Set Scroll Event Listener */
        document.addEventListener("scrollStart", e => {
            document.title = e.detail
                ? `${e.detail.anchor.dataset.name} | Hayden Cai`
                : null
        })

        /** Scroll to Anchor Section if any */
        const hash = window.location.hash

        if (hash) {
            const section = document.getElementById(hash.replace("#", ""))
            section.scrollIntoView({ behavior: "smooth" })
        }

        return () => {}
    }, [])

    return (
        <div className="main">
            <PageProgress />
            <Navigation />
            <main id="main" className="">
                {children}
            </main>
        </div>
    )
}

export default Layout
