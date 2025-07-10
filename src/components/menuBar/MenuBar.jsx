import React, { useState } from 'react'
import './MenuBar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineRoundaboutRight } from "react-icons/md";


const MenuBar = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className='menu'>

            <div className='menubar'>
                <a className={menu === 'home' ? 'active' : " "} onClick={() => setMenu("home")} href="#"><IoHomeOutline /></a>
                <a className={menu === 'about' ? 'active' : " "} onClick={() => setMenu("about")} href="#about"><MdOutlineRoundaboutRight /></a>
                <a className={menu === 'skill' ? 'active' : " "} onClick={() => setMenu("skill")} href="#skill"><GiSkills /></a>
                <a className={menu === 'education' ? 'active' : " "} onClick={() => setMenu("education")} href="#education"><MdCastForEducation /></a>
                <a className={menu === 'contact' ? 'active' : " "} onClick={() => setMenu("contact")} href="#contact"><MdOutlineContactPhone /></a>
            </div>

        </div>
    )
}

export default MenuBar
