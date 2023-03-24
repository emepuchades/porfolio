import React from 'react'
import Profile from '../../assets/profile.png'
import './Dashboard.css'
import Spline from '@splinetool/react-spline'
import SplineComponent from '../../components/SplineComponent'
import Navbar from '../../components/Navbar'
import FirstSection from '../../components/FirstSection'
//import SplineComponent from '../../components/SplineComponent'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <FirstSection />
    </div>
  )
}

export default Dashboard