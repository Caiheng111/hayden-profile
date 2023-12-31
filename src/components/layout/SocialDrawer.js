import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"

export default function SocialDrawer() {
    const drawerParent = React.createRef()
    const drawerEl = React.createRef()

    const toggleDrawer = () => {
        if (drawerEl.current.style.maxHeight) {
            drawerEl.current.style.maxHeight = null
            drawerEl.current.dataset.toggle = "hidden"
        } else {
            drawerEl.current.style.maxHeight =
                drawerEl.current.scrollHeight + "px"
            drawerEl.current.dataset.toggle = "visible"
        }
    }

    return (
        <div className="drawer" ref={drawerParent}>
            <ul
                className="drawer__content"
                data-toggle="visible"
                ref={drawerEl}
            >
                <li>
                    <a
                        href="https://www.linkedin.com/in/hengcai/"
                        target="_blank"
                    >
                        <i class="fa fa-linkedin-square icon "></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/Caiheng111" target="_blank">
                        <i class="fa fa-github-square icon"></i>
                    </a>
                </li>
            </ul>
            <div
                className="drawer__toggle"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
                role="button"
                tabIndex="0"
            >
                <FontAwesomeIcon icon={faShareNodes} />
            </div>
        </div>
    )
}
