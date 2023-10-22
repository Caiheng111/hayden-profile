import React, { useState, useRef } from "react"

export const introOne = () => {
    return (
        <div className="introOne__container">
            <h3>Software Engineer</h3>
            <div className="introOne__contents">
                Software Engineer with a sound understanding of the SDLC,
                skilled in designing and building stable web based technical
                solutions to solve business problems
            </div>
            <div className="introOne__skills">
                <h6>#HTML</h6>
                <h6>#CSS3</h6>
                <h6>#React</h6>
            </div>
        </div>
    )
}

export const introTwo = () => {
    return (
        <div>
            <h3>Designer</h3>

            <div>
                Skilled at design systems, UI design and designing interfaces
                between different components. Although not many developers are
                geared towards design, I personally love to design my projects
                with tools like Figma, Adobe XD and code up a beautiful design
                with CSS. I am committed into creating usable but also creative
                UI designs.
            </div>
            <div>
                <h6> #Adobe Photoshop</h6>
                <h6> #Adobe Lightroom</h6>
                <h6> #Adobe Camera Raw</h6>
            </div>
        </div>
    )
}

export const introThree = () => {
    return (
        <div>
            <h3>Current company, job title and responsibilities</h3>

            <div>
                Including information about your present job provides your
                updated experience and enables readers to identify your current
                industry, ambition and skill set
            </div>
            <div>
                <h6> #Adobe Photoshop</h6>
                <h6> #Adobe Lightroom</h6>
                <h6> #Adobe Camera Raw</h6>
            </div>
        </div>
    )
}
export const introFour = () => {
    return (
        <div>
            <h3>Personal values</h3>

            <div>
                Describing the principles that are important to you allows you
                to broadcast your professional identity and show that you care
                about making an impact.
            </div>
            <div>
                <h6> #Adobe Photoshop</h6>
                <h6> #Adobe Lightroom</h6>
                <h6> #Adobe Camera Raw</h6>
            </div>
        </div>
    )
}
export const introFive = () => {
    return (
        <div>
            <h3>A personal story:</h3>

            <div>
                Including an anecdote in your blurb can make you more
                interesting to your reader.
            </div>
            <div>
                <h6> #Adobe Photoshop</h6>
                <h6> #Adobe Lightroom</h6>
                <h6> #Adobe Camera Raw</h6>
            </div>
        </div>
    )
}
export const introSix = () => {
    return (
        <div>
            <h3>Goals</h3>

            <div>
                Letting readers with similar goals know what you hope to
                accomplish might make them want to work with you.
            </div>
            <div>
                <h6> #Adobe Photoshop</h6>
                <h6> #Adobe Lightroom</h6>
                <h6> #Adobe Camera Raw</h6>
            </div>
        </div>
    )
}

export default function About() {
    const [progress, setProgress] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const barRef = useRef(null)

    const contents = new Array(6)

    const handleRenderContents = contentsIndex => {
        switch (contentsIndex) {
            case 0:
                return introOne()
            case 1:
                return introTwo()

            case 2:
                return introThree()
            case 3:
                return introFour()
            case 4:
                return introFive()
            case 5:
                return introSix()
            default:
                return <></>
        }
    }

    const handleDragStart = e => {
        setIsDragging(true)
        updateProgress(e)
    }

    const handleDrag = e => {
        if (!isDragging) return
        updateProgress(e)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    const updateProgress = e => {
        const rect = barRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const width = rect.right - rect.left
        const newProgress = (x / width) * 100
        setProgress(newProgress)
    }

    const calculateContentIndex = progress => {
        const segment = 100 / contents.length
        return Math.min(Math.floor(progress / segment), contents.length - 1)
    }

    return (
        <div className="about" id="about">
            <div className="about__container">
                <div className="about__contents">
                    {handleRenderContents(calculateContentIndex(progress))}
                    {/* {contents[calculateContentIndex(progress)]} */}
                </div>
                <div
                    ref={barRef}
                    className="about__progressBar"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDrag}
                    // onMouseOut={handleDrag}
                    onMouseUp={handleDragEnd}
                    onMouseOver={handleDragEnd}
                >
                    {/* Background div for the progress bar */}
                    <div className="about__backgroundBar" />

                    {/* Progressed div */}
                    <div
                        className="about__progressedBar"
                        style={{
                            width: `${progress}%`
                        }}
                    />
                    <div
                        className="about__point"
                        style={{
                            left: `${progress}%`
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
