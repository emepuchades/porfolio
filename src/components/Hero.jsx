import React, {useState} from 'react'

//Images 
import Me from '../assets/images/banner-me.png'
import Node from '../assets/images/nodejs-logo.png'
import ReactJS from '../assets/images/react-logo.png'
import Firebase from '../assets/images/firebase-logo.png'
import Rails from "../assets/images/rails-logo.png";

function Hero() {
        const [menu, setMenu] = useState(false);

  return (
    <div class="bg-cream">
      <div class="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
        <div class="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="my-4 text-5xl font-bold leading-tight text-darken"
          >
            <span class="text-yellow-500">Maria Puchades</span> <br></br>
            Software developer
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            class="leading-normal text-2xl mb-8"
          >
            Full Stack developement in Valencia, with a particular passion for
            develop, design and creativity
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
          >
            <button class="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Ver mi Experiencia
            </button>
            <div class="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              <button class="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                <svg
                  class="w-5 h-5 ml-2"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                    fill="#23BDEE"
                  />
                </svg>
              </button>
              <span class="cursor-pointer">Ver mi porfolio</span>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 lg:-mt-10 relative" id="girl">
          <img
            data-aos="fade-up"
            data-aos-once="true"
            class="w-10/12 mx-auto 2xl:-mb-20"
            src={Me}
          />
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            class="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating-4"
          >
            <img class="bg-opacity-80 rounded-lg h-12 sm:h-14" src={ReactJS} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            class="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-32 lg:right-16 floating"
          >
            <img class="bg-opacity-80 rounded-lg h-12 sm:h-14" src={Rails} />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-once="true"
            class="absolute bottom-14 -left-4 sm:left-2 sm:bottom-20 lg:bottom-24 lg:-left-4 floating"
          >
            <img
              class="bg-opacity-80 rounded-lg h-20 sm:h-10"
              src={Node}
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-once="true"
            class="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4"
          >
            <img
              class="bg-opacity-80 rounded-lg h-12 sm:h-14"
              src={Firebase}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero