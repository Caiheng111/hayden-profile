import React from "react"
import { projects } from "../../utils"
import TWW from "../../assets/images/TWW.png"
import RejectShop from "../../assets/images/rejectShop.png"

export const Project = ({
    index,
    imageName,
    projectName,
    company,
    projectIntro,
    imagePositionReverse,
    skills,
    projectLink,
    keyAchievements,
    projectTime,
    tecSkills,
    viewProject
}) => {
    return (
        <div className="projects__container" id="projects">
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
                        width: imagePositionReverse ? "100%" : "100%"
                    }}
                >
                    <img src={imageName} alt="projectOne" />
                </div>

                <div
                    className="project__contents"
                    style={{
                        width: imagePositionReverse ? "100%" : "100%"
                    }}
                >
                    <h1 className="project__contents_title">{index}</h1>
                    <h6 className="project__contents_subtitle">
                        {projectName}
                    </h6>

                    <h6 className="project__contents_company">
                        {company}/{projectTime}
                    </h6>

                    <div className="project__contents_intro">
                        <p style={{ marginBottom: "10px" }}>{projectIntro}</p>

                        {keyAchievements.length > 0 && (
                            <>
                                <h6 className="project__contents_company">
                                    Key Achievements
                                </h6>
                                <ul className="achievements">
                                    {keyAchievements.map(achievement => {
                                        return <li>{achievement}</li>
                                    })}
                                </ul>
                            </>
                        )}
                    </div>

                    <div className="project__contents_skills">
                        {skills.map(skill => {
                            return <span>{skill}</span>
                        })}
                    </div>
                    <div className="project__contents_skills">
                        {tecSkills?.map(tec => {
                            return <span>{tec}</span>
                        })}
                    </div>

                    {viewProject && (
                        <button className="view_button">
                            <a target="_blank" href={projectLink}>
                                View the project
                            </a>
                        </button>
                    )}
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
                        company={projectIn.company}
                        projectTime={projectIn.projectTime}
                        imagePositionReverse={projectIn.imagePositionReverse}
                        projectIntro={projectIn.projectIntro}
                        skills={projectIn.skills}
                        projectLink={projectIn.projectLink}
                        keyAchievements={projectIn.keyAchievements}
                        tecSkills={projectIn.tecSkills}
                        viewProject={projectIn.viewProject}
                    />
                )
            })}

            <h3 style={{ marginLeft: "5%", marginTop: "40px" }}>
                Other projects joined
            </h3>

            <div className="projects__container otherProjects">
                <div className="project__info">
                    <div className="projectImage">
                        <div className="image_container">
                            {/* <button className="view_button"> */}
                            <a
                                target="_blank"
                                href="https://www.rejectshop.com.au/"
                            >
                                <img src={TWW} alt="projectOne" />
                            </a>
                            {/* </button> */}
                        </div>

                        <div className="image_container">
                            <a
                                target="_blank"
                                href="https://www.rejectshop.com.au/"
                            >
                                <img src={RejectShop} alt="projectOne" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
