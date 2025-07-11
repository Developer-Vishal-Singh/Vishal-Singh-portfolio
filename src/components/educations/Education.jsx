import React from 'react'
import './Education.css'

const Education = () => {
    return (
        <div className='education' id='education'>
            <div className='education-title'>
                <h5>What I have studied</h5>
                <h2>Education</h2>
            </div>

            <div className='education-content'>
                <div className='education-content-card'>
                    <h3>Bachelor's of Computer Application</h3>
                    <p>Indira Gandhi National Open University, Delhi</p>
                </div>
                <div className='education-content-card'>
                    <h3>Senior Secondary School</h3>
                    <p>Govt. Boys Senior Secondary School, Delhi</p>
                </div>
                <div className='education-content-card'>
                    <h3>Secondary School</h3>
                    <p>Govt. Boys Senior Secondary School, Delhi</p>
                </div>
            </div>
        </div>
    )
}

export default Education
