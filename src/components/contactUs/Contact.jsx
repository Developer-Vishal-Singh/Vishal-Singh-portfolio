import React from 'react'
import './Contact.css'
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
    return (
        <div className='contact' id='contact'>

            <div className='contact-title'>
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>

            <div className='contact-content'>
                <div className="contact-content-left">
                    <div className='contact-card'>
                        <span><MdOutlineMail /></span>
                        <h4>Email</h4>
                        <h5>vishalCodeOne@gmail.com</h5>
                        <a href="mailto:vishalcodeone@gmail.com">Send a message</a>
                    </div>
                    <div className='contact-card'>
                        <span><FaWhatsapp /></span>
                        <h4>Whatsapp</h4>
                        <h5>+91 9990628212</h5>
                        <a href="https://wa.me/9990628212">Connect</a>
                    </div>
                    <div className='contact-card'>
                        <span><CiLinkedin /></span>
                        <h4>Linkendin</h4>
                        <h5>vishal-singh-054a87190</h5>
                        <a href="https://www.linkedin.com/in/vishal-singh-054a87190/">Connect</a>
                    </div>
                </div>

                <div className="contact-content-right">
                    <form >
                        <input type="text" placeholder='Your Full Name' />
                        <input type="email" placeholder='Your email' />
                        <textarea rows={5} name="" id="" placeholder='Your message'></textarea>
                        <button className='btn-dark'>Send Message</button>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact
