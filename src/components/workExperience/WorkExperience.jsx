import React from 'react'
import './WorkExperience.css'

const WorkExperience = () => {
    return (
        <div className='experience' id='experience'>

            <div className='experience-title'>
                <h2>Work Experience [Democ]</h2>
            </div>

            <div className='experience-sections'>

                <div className='experience-section'>
                    <div className='dot'></div>
                    <h3>Software Development Engineer</h3>
                    <p>Hopstack </p>
                    <h6>July 2024 - Present</h6>
                    <div className='experience-section-content'>
                        <section>• Bundling Summary Screen: Designed a user-friendly interface to display bundling
                            statistics and built optimized Node.js APIs to streamline data retrieval and enhance warehouse workflows.</section>
                        <section>• Rate Shopping Feature: Implemented carrier comparison and Incoterm selection with a React.js
                            interface and optimized APIs for real-time updates and accurate data retrieval.</section>
                    </div>
                </div>

                <div className='experience-section'>
                    <div className='dot'>
                    </div>
                    <h3>Software Developer Intern</h3>
                    <p>Hopstack</p>
                    <h6>Feb 2024 - May 2024</h6>
                    <div className='experience-section-content'>
                        <section>• Tax Calculation Functionality: Developed a system to calculate taxes on shipped items, reducing API errors and improving user input accuracy.</section>
                        <section>• Payment Due Notifications: Implemented notifications for due and overdue payments, reducing overdue payments and improving compliance across 25,000+ accounts.</section>
                    </div>
                </div>

                <div className='experience-section'>
                    <div className='dot'>
                    </div>
                    <h3>Software Developer Intern</h3>
                    <p>Data Knobs</p>
                    <h6>July 2023 - August 2023</h6>
                    <div className='experience-section-content'>
                        <section>• Integrated Pixabay API to enable real-time image searches , enhancing the visual appeal of the application.</section>
                        <section>• Designed and developed user-friendly, responsive interfaces using React and deployed the websites using Firebase.</section>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkExperience
