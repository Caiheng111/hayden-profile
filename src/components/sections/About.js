import React, { useState, useRef } from "react"

export default function About() {
    const [progress, setProgress] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const barRef = useRef(null)

    const contents = [
        "Content 1",
        "Content 2",
        "Content 3",
        "Content 4",
        "Content 5",
        "Content 6",
        "Content 7",
        "Content 8",
        "Content 9"

        // ... add more content as needed
    ]

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
        <div style={{ position: "relative" }}>
            <div style={{ color: "white" }}>
                {contents[calculateContentIndex(progress)]}
            </div>
            <div
                ref={barRef}
                style={{
                    height: "5px",
                    width: "70%",
                    backgroundColor: "#ccc",
                    position: "relative",
                    cursor: "pointer"
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDrag}
                // onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "-10px",
                        left: `${progress}%`,
                        transform: "translateX(-50%)",
                        width: "30px",
                        height: "30px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }}
                />
            </div>
        </div>
    )
}
