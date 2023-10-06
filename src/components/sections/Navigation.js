import React, { useState } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

export const navigateTo = e => {
    if (window.location.pathname === "/") {
        e.preventDefault()

        const scrollToElement = document.getElementById(
            e.currentTarget.dataset.smoothScroll
        )

        scrollToElement.scrollIntoView({ behavior: "smooth" })
    }
}

export default function Navigation() {
    const [showNav, setShowNav] = useState(false)

    const handleOpenMenu = () => {
        setShowNav(true)
    }
    const handleCloseMenu = () => {
        setShowNav(false)
    }
    return (
        <>
            <div>
                <button className="hamburgMenu" onClick={handleOpenMenu}>
                    MENU
                </button>
            </div>

            {showNav && (
                <nav className="nav">
                    <button className="closeMenu" onClick={handleCloseMenu}>
                        Close
                    </button>
                    <Fade cascade>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link
                                    to="/"
                                    className="nav__link"
                                    data-tooltip="Home"
                                    data-smooth-scroll="landing"
                                    onClick={navigateTo}
                                >
                                    {/* <i className="fas fa-angle-double-right"></i> */}
                                    <span className="link-text nav__logo-text anim--fadeInRight">
                                        LOGO
                                    </span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    to="/#about"
                                    className="nav__link"
                                    data-tooltip="About"
                                    data-smooth-scroll="about"
                                    onClick={navigateTo}
                                >
                                    {/* <i className="fas fa-user"></i> */}
                                    <span className="nav__link-text anim--fadeInRight">
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    to="/blog"
                                    className="nav__link"
                                    data-tooltip="Blog"
                                >
                                    {/* <i className="fas fa-blog"></i> */}
                                    <span className="nav__link-text anim--fadeInRight">
                                        Blog
                                    </span>
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link
                                    to="/#featured"
                                    className="nav__link"
                                    data-tooltip="Featured"
                                    data-smooth-scroll="featured"
                                    onClick={navigateTo}
                                >
                                    {/* <i className="fas fa-code-branch"></i> */}
                                    <span className="nav__link-text anim--fadeInRight">
                                        Business Projects
                                    </span>
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link
                                    to="/#contact"
                                    className="nav__link"
                                    data-tooltip="Contact"
                                    data-smooth-scroll="contact"
                                    onClick={navigateTo}
                                >
                                    {/* <i className="fas fa-phone"></i> */}
                                    <span className="nav__link-text">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </Fade>
                </nav>
            )}
        </>
    )
}
