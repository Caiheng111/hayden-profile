import React, { useState, useRef } from "react"

const rolesData = {
    Developer: {
        title: "Software developer",
        description:
            "Dedicated and detail-oriented Front-End Developer with over 3 years of experience creating visually appealing, responsive, and user-centric websites and applications. Proficient in modern web technologies including React.js,Next.js,BFF(Backends For Frontend Pattern), TypeGraphQL, Material-UI, TypeScript.etc . Adept at collaborating with designers, back-end developers, and stakeholders to ensure a seamless and interactive user experience."
    },
    Designer: {
        title: "Designer",
        description:
            "Skilled at design systems, UI design and designing interfaces between different components. Although not many developers are geared towards design, I personally love to design my projects with tools like Figma, Adobe XD and code up a beautiful design with CSS. I am committed into creating usable but also creative UI designs."
    }
}

function RoleDetails({ roleName }) {
    const role = rolesData[roleName]

    return (
        <div className="roles_details">
            <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                {role?.title}
            </h2>
            <p className="role_description">{role?.description}</p>
        </div>
    )
}

function RoleList({ onRoleClick }) {
    return (
        <div className="roleList">
            <h3 className="aboutMe_title">ABOUT ME</h3>
            <div className="roleList_container">
                {Object.keys(rolesData).map(role => (
                    <button key={role} onClick={() => onRoleClick(role)}>
                        {role}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default function About() {
    const [selectedRole, setSelectedRole] = useState("Developer")
    return (
        <div className="about" id="about">
            <div className="about__left_container">
                <RoleDetails roleName={selectedRole} />
            </div>

            <div className="about__right_container">
                <RoleList onRoleClick={setSelectedRole} />
            </div>
        </div>
    )
}
