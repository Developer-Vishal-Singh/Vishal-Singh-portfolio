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
                        <p>I'm Vishal, A motivated Full Stack Developer with expertise in the MERN Stack (MongoDB, Express.js, React, Node.js).
                            Proven ability to design, develop, and deploy robust and scalable web applications. Passionate about creating intuitive user experiences.
                            I am an active learner who believes in the value of technology and teamwork.
                            I am skilled in Basic Data Structures and Algorithms. Looking forward to great opportunities to learn new technologies ,
                            skills and willing to work under pressure on projects and deadline with the given time limit or target.</p>
                    </div>

                    <div>
                        <a href="#contact"><button className='btn-dark'>Let's Talk</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
