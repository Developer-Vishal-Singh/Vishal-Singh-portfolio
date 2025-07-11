import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import './Header_icons.css'

const Header_icons = () => {
    return (
        <div className='icons'>
            <a href="https://www.linkedin.com/in/vishal-singh-054a87190/"><CiLinkedin className='icon' /></a>
            <a href="https://github.com/Developer-Vishal-Singh"><FaGithub className='icon' /></a>
            <FaInstagram className='icon' />
            <CiTwitter className='icon' />
        </div>
    )
}

export default Header_icons
