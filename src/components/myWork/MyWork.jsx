import React from 'react'
import './MyWork.css'
import portfolio1 from '../../assets/car-rental.png'
import portfolio2 from '../../assets/food-app.png'
import portfolio3 from '../../assets/google-gemini.png'
import portfolio4 from '../../assets/portfolio.png'
import portfolio5 from '../../assets/weather.png'
import portfolio6 from '../../assets/Todo_Jquery.png'

const MyWork = () => {

    const projectsData = [
        {
            id: 1,
            image: portfolio1,
            github: "https://github.com/Developer-Vishal-Singh/Car_Rental",
            title: "LUXURY CAR RENTAL BOOKING",
            technology: "React.js | Node.js | Express.js | MongoDB | Tailwind CSS | ImageKit Storage"
        },
        {
            id: 2,
            image: portfolio2,
            github: "https://github.com/Developer-Vishal-Singh/Food_Delivery_App",
            title: "Online FOOD ORDERING",
            technology: "React.js | Node.js | Express.js | MongoDB | Stripe Payment Gateway"
        },
        {
            id: 3,
            image: portfolio3,
            github: "https://github.com/Developer-Vishal-Singh/Google-Gemini-Clone",
            title: "Google-Gemini", technology: "React.js | CSS | Google-Gemini API"
        },
        {
            id: 4,
            image: portfolio4,
            github: "https://github.com/Developer-Vishal-Singh/Vishal-Singh-portfolio",
            title: "Portfolio", technology: "React.js | CSS | Motion "
        },
        {
            id: 5,
            image: portfolio5,
            github: "https://github.com/Developer-Vishal-Singh/Weather-app",
            title: "Weather Informations",
            technology: "HTML | CSS | JavaScript | Weather API"
        },
        {
            id: 6,
            image: portfolio6,
            github: "https://github.com/Developer-Vishal-Singh/Todo-JQuery",
            title: "Todo List",
            technology: "HTML | CSS | jQuery"
        }
    ]

    return (
        <div className='mywork' id='mywork'>
            <div className='mywork-title'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>

            <div className='mywork-section'>
                {projectsData.map((project, index) => (
                    <div key={index} className='mywork-section-project'>
                        <img src={project.image} alt="" />
                        <h3>{project.title}</h3>
                        <p>{project.technology}</p>
                        <div className='btn'>
                            <a href={project.github}><button className='btn-light'>Github </button></a>
                            <a href={project.github}><button className='btn-dark'>Live Demo </button></a>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default MyWork
