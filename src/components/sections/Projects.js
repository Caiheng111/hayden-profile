import React from "react"
import { projects } from "../../utils"

export const Project = ({
    index,
    imageName,
    projectName,
    projectIntro,
    imagePositionReverse,
    skills,
    projectLink
}) => {
    return (
        <div className="projects__container">
            <div
                className={
                    imagePositionReverse
                        ? "project__info"
                        : "project__info_reverse"
                }
            >
                <div
                    className="projectImage"
                    style={{
                        width: imagePositionReverse ? "100%" : "90%",
                        marginRight: imagePositionReverse ? "5%" : "0"
                    }}
                >
                    <img src={imageName} alt="projectOne" />
                </div>

                <div
                    className="project__contents"
                    style={{
                        width: imagePositionReverse ? "100%" : "90%",
                        marginRight: !imagePositionReverse ? "2%" : "0"
                    }}
                >
                    <h1 className="project__contents_title">{index}</h1>
                    <h6 className="project__contents_subtitle">
                        {projectName}
                    </h6>

                    <h6 className="project__contents_company">
                        Bendigo and Adelaide Bank
                    </h6>
                    <h6 className="project__contents_projectTime">
                        05-present
                    </h6>

                    <div className="project__contents_intro">
                        <p>{projectIntro}</p>
                    </div>

                    <div className="project__contents_skills">
                        {skills.map(skill => {
                            return <span>{skill}</span>
                        })}
                    </div>

                    <button className="view_button">
                        <a target="_blank" href={projectLink}>
                            View the project
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <div id="projects" className="projects" data-name="projects">
            <h1>PROJECTS</h1>
            {projects.map(projectIn => {
                return (
                    <Project
                        index={projectIn.index}
                        imageName={projectIn.imageName}
                        projectName={projectIn.projectName}
                        imagePositionReverse={projectIn.imagePositionReverse}
                        projectIntro={projectIn.projectIntro}
                        skills={projectIn.skills}
                        projectLink={projectIn.projectLink}
                    />
                )
            })}

            <h3>Other projects joined</h3>
        </div>
    )
}
