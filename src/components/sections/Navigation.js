import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

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
            <button className="hamburgMenu" onClick={handleOpenMenu}>
                <FontAwesomeIcon icon={faBars} size="1x" bounce />
            </button>
            <nav className={`nav ${showNav ? "showNav" : ""}`}>
                <button onClick={handleCloseMenu} className="closeMenu">
                    X<i class="fa fa-Xmark"></i>
                </button>

                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            to="/"
                            className="nav__link"
                            data-tooltip="home"
                            data-smooth-scroll="home"
                            onClick={navigateTo}
                        >
                            <span className="nav__link-text anim--fadeInRight">
                                HOME
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
                            <span className="nav__link-text anim--fadeInRight">
                                ABOUT
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/blog"
                            className="nav__link"
                            data-tooltip="Blog"
                        >
                            <span className="nav__link-text anim--fadeInRight">
                                BLOGS
                            </span>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/#projects"
                            className="nav__link"
                            data-tooltip="projects"
                            data-smooth-scroll="projects"
                            onClick={navigateTo}
                        >
                            <span className="nav__link-text anim--fadeInRight">
                                PROJECTS
                            </span>
                        </Link>
                    </li>

                    <li className="nav__item">
                        <a
                            href="/Hayden_Cai_Resume.pdf"
                            className="nav__link"
                            target="_blank"
                            data-tooltip="Resume"
                            download
                        >
                            <span className="nav__link-text anim--fadeInRight">
                                RESUME
                            </span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <Link
                            to="/#contact"
                            className="nav__link"
                            data-tooltip="Contact"
                            data-smooth-scroll="contact"
                            onClick={navigateTo}
                        >
                            <span className="nav__link-text">CONTACTS</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
