import React from 'react'
import './About.css'
import { GrProjects } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-header'>
                <h5>Get to Know</h5>
                <h2>About Me</h2>
            </div>

            <div className='about-content'>
                <div className='about-cards'>
                    <div className='card'>
                        <MdOutlineSupportAgent />
                        <h5>Support</h5>
                        <small>Remote/On-Site</small>
                    </div>
                    <div className='card'>
                        <GrProjects />
                        <h5>Projects</h5>
                        <small>15+ Projects</small>
                    </div>
                </div>

                <div className='about-content-bottom'>
                    <div className='about-paragraph'>
                        <p>I'm Vishal, currently working as an SDE at Hopstack. I graduated in 2024 with a B.Tech in Information Technology
                            from Guru Gobind Singh Indraprastha University. I am an active learner who believes in the value of technology and teamwork.
                            I am skilled in C++, Data Structures, and Algorithms, and MERN stack. Looking forward to great opportunities to learn new technologies ,
                            skills and willing to work under pressure on projects and deadline with the given time limit or target.</p>
                    </div>

                    <div>
                        <button className='btn-dark'>Let's Talk</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
