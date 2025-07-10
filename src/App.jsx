import React from 'react'
import Header from './components/header/Header'
import './App.css'
import About from './components/about/About'
import Education from './components/educations/Education'
import Skills from './components/skills/Skills'
import WorkExperience from './components/workExperience/WorkExperience'
import MyWork from './components/myWork/MyWork'
import Contact from './components/contactUs/Contact'
import Footer from './components/Footer/Footer'
import MenuBar from './components/menuBar/MenuBar'
import { motion } from 'motion/react'

const App = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}

        className='app'>
        <MenuBar />
        <Header />
        <About />
        <Education />
        <Skills />
        <WorkExperience />
        <MyWork />
        <Contact />
      </motion.div>

      <div className="">
        <Footer />
      </div>
    </>

  )
}

export default App
