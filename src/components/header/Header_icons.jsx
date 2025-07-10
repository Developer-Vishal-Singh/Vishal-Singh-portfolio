import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import './Header_icons.css'

const Header_icons = () => {
    return (
        <div className='icons'>
            <CiLinkedin className='icon' />
            <FaGithub className='icon' />
            <FaInstagram className='icon' />
            <CiTwitter className='icon' />
        </div>
    )
}

export default Header_icons
