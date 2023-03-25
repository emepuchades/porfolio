import React from 'react'
import { VscGithubInverted } from "react-icons/vsc";
import Spline from '@splinetool/react-spline';

function Navbar() {
  return (
    <nav class="bg-blackdark border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="bg-blackdark container flex flex-wrap items-center justify-between mx-auto">
        <a href="" class="flex items-center">
          <Spline scene='https://prod.spline.design/LUTPyvSuiBrR3MBw/scene.splinecode' style={{ height: '100px' }} />
          <span class="self-center mx-0 text-white text-xl font-semibold whitespace-nowrap dark:text-white"> </span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <VscGithubInverted size={40} />
            </li>
            <li>
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar