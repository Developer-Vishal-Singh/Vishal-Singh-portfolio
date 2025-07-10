import React from 'react'
import './MyWork.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.jpg'
import portfolio5 from '../../assets/portfolio5.png'
import portfolio6 from '../../assets/portfolio6.jpg'

const MyWork = () => {

    const projectsData = [
        { id: 1, title: "SocioPedia", technology: "React.js | Node.js | Express.js | MongoDB | Redux | Material UI" },
        { id: 2, title: "CarHub", technology: "Next.js | React.js | TypeScript | Tailwind CSS | Rapid API | Headless UI" },
        { id: 3, title: "GPT Mapper", technology: "React.js | Node.js | Chart.js | Puppeeter | ChatGPT API" },
        { id: 4, title: "Portfolio", technology: "React.js | HTML | CSS" },
        { id: 5, title: "My Finance Friend", technology: "HTML | CSS | JavaScript" },
        { id: 6, title: "Travel Guide", technology: "React.js | HTML | CSS" }
    ]

    const image = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6]

    return (
        <div className='mywork'>
            <div className='mywork-title'>
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>
            </div>

            <div className='mywork-section'>
                {projectsData.map((project, index) => (
                    <div key={index} className='mywork-section-project'>
                        <img src={image[index]} alt="" />
                        <h3>{project.title}</h3>
                        <p>{project.technology}</p>
                        <div className='btn'>
                            <button className='btn-light'>Github</button>
                            <button className='btn-dark'>Live Demo</button>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    )
}

export default MyWork
