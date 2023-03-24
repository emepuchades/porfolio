import React from 'react'
import SplineComponent from './SplineComponent'
import '../App.css'

function FirstSection() {
  return (
    <div className='first-section'>
      <div className='first-section-left'>
        <h1>Software developer</h1>
        <p>dskjfiopsdhfshDOFUHAPSUDHFUIASDHFHDSFNMNDSUFJHSDUF</p>
      </div>
      <div className='first-section-rigth'>
        <SplineComponent url='https://prod.spline.design/uDgVF-8zVxYEZX2Z/scene.splinecode' />
      </div>
    </div>
  )
}

export default FirstSection