import React from 'react'
import './Skills.css'
import { BsBoxArrowRight } from "react-icons/bs";

const Skills = () => {

    const icon = <BsBoxArrowRight />;

    const skillFrontend = [
        { id: 1, title: "HTML", content: "Experienced" },
        { id: 2, title: "CSS", content: "Experienced" },
        { id: 3, title: "Javascript", content: "Intermediate" },
        { id: 4, title: "Bootstrap", content: "Intermediate" },
        { id: 5, title: "ReactJs", content: "Intermediate" },
        { id: 6, title: "jQuery", content: "Intermediate" },
        { id: 7, title: "Tailwind CSS", content: "Intermediate" }
        // { id: 8, title: "REST ", content: "Intermediate" }
    ]

    const skillBackend = [
        { id: 1, title: "NodeJs", content: "Intermediate" },
        { id: 2, title: "MongoDB", content: "Intermediate" },
        { id: 3, title: "ExpressJS", content: "Intermediate" },
        { id: 4, title: "SQL", content: "Intermediate" },
        { id: 5, title: "Postman", content: "Intermediate" },
        { id: 6, title: "Git-Github", content: "Intermediate" }
    ]

    return (
        <div className='skill' id="skill">

            <div className='skill-title'>
                <h5>What skills I have</h5>
                <h2>Skills</h2>
            </div>

            <div className='skill-contents'>
                <div className='skill-content'>
                    <h3>Frontend Development</h3>
                    <div className='skill-content-footer'>
                        {skillFrontend.map((skill, index) => (
                            <div key={index} className='skill-content-footer-sections'>
                                <span><BsBoxArrowRight /></span>
                                <section className='skill-content-footer-section'>
                                    <h4>{skill.title}</h4>
                                    <small>{skill.content}</small>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='skill-content'>
                    <h3>Backend Development</h3>
                    <div className='skill-content-footer'>
                        {skillBackend.map((skill, index) => (
                            <div key={index} className='skill-content-footer-sections'>
                                <span><BsBoxArrowRight /></span>
                                <section className='skill-content-footer-section'>
                                    <h4>{skill.title}</h4>
                                    <small>{skill.content}</small>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Skills
