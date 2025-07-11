import React from 'react'
import './Footer.css'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <a className='footer-name' href="#">VISHAL</a>
            <div className='ul'>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#experience"><li>Experience</li></a>
                    <a href="#education"><li>Education</li></a>
                    <a href="#mywork"><li>Portfolio</li></a>
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </div>
            <div className='footer-icon'>
                <a href="https://www.linkedin.com/in/vishal-singh-054a87190/"><SlSocialLinkedin /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><CiTwitter /></a>
                <a href="https://github.com/Developer-Vishal-Singh"><FaSquareGithub /></a>
            </div>
            <div>
                <p>© All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer
