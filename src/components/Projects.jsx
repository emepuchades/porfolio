import React, {useState, useEffect, useRef} from "react";
import "pure-react-carousel/dist/react-carousel.es.css";

import data from "./data.json";
import Carousel from "./Carousel/AppCarousel";


function Projects() {
  const dataProject = ['Slider 1', 'Slider 2', 'Slider 3' ];

  return (
    <div class="items-center px-16  sm:space-x-8 mt-4 mb-4">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Proyectos
        </span>
      </h1>
      <div className="flex flex-col items-center p-8 gap-10">
        <h1 className="text-3xl font-bold">Tailwindcss Carousel</h1>
        <Carousel data={dataProject} />
      </div>

      <a>Mas Proyectos</a>
    </div>
  );
}

export default Projects;
