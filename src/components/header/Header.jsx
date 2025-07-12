import React from 'react'
import './Header.css'
import avatar2 from '../../assets/avatar2.jpg'
import vishal from '../../assets/Vishal.pdf'
import Header_icons from './Header_icons'


const Header = () => {
    return (
        <header>
            <div className='header'>
                <h5 className='header-first'>Hello I'm</h5>
                <h1>Vishal Singh</h1>
                <h5>Fullstack Developer</h5>
            </div>

            <div className='header-btn'>
                <a href={vishal} download target="_blank"><button className='btn-light'>Download CV</button></a>
                <a href="#contact"><button className='btn-dark'>Let's talk</button></a>
            </div>

            <div className='header-bottom'>
                <div className='header-bottom-icon'>
                    <Header_icons />
                </div>
                <div>
                    <img src={avatar2} alt="" />
                </div>
                <div>
                    <h5>Scroll Down</h5>
                </div>
            </div>

        </header>
    )
}

export default Header
