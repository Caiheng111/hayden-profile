import React, { useEffect, useCallback } from "react"
import { css } from "@emotion/react"

export default function PageProgress() {
    const progressBar = React.createRef()

    const pageProgressCss = css`
        top: 0;
        height: 4px;
        width: 0;
        background: #ffffff;
        z-index: 998;
        position: fixed;
    `

    const pageScrollUpdate = useCallback(() => {
        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const scrollYPosition = window.scrollY

        const scrollProgress = (scrollYPosition / documentHeight) * 100

        if (progressBar.current) {
            progressBar.current.style.width = `${scrollProgress}%`
        }
    }, [progressBar])

    useEffect(() => {
        window.addEventListener("scroll", pageScrollUpdate)

        return () => {
            window.removeEventListener("scroll", pageScrollUpdate)
        }
    }, [pageScrollUpdate])

    return <div css={pageProgressCss} ref={progressBar}></div>
}
