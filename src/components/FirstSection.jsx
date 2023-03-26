import React from 'react'
import SplineComponent from './SplineComponent'
import '../App.css'

function FirstSection() {
  return (
    <div className='first-section'>
      
      <div className='first-section-left'>
        <h1 class="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
          Front-End
          Software
          Developer
        </h1>
        <p class="text-lg font-normal text-white dark:text-gray-400">
          Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          ABOUT ME
        </button>
      </div>
      <div className='first-section-rigth'>
        <SplineComponent url='https://prod.spline.design/8KvQ4McS5dDFhhwQ/scene.splinecode' />
      </div>
    </div>
  )
}

export default FirstSection