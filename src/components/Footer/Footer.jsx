import React from 'react'
import './Footer.css'
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='footer'>
            <a href="#">VISHAL</a>
            <div className='ul'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Education</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-icon'>
                <span><SlSocialLinkedin /></span>
                <span><FaInstagram /> </span>
                <span><CiTwitter /></span>
                <span><FaSquareGithub /></span>
            </div>
            <div>
                <p>© All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer
