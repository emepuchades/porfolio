import React from 'react'
import './Dashboard.css'

// Components
import Navbar from '../../components/Navbar'
import Aboutme from '../../components/Aboutme'
import Projects from '../../components/Projects'
import Notes from '../../components/Notes'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Dashboard