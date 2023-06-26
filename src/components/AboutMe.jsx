import React from "react";
import './components.style.css'

function Aboutme() {
  return (
    <div class="items-center px-16 max-sm:px-2 sm:space-x-8 mt-16 mb-8">
      <h2 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
          Sobre Mi
        </span>
      </h2>
      <div class="sm:flex items-center px-16 max-sm:px-2 sm:space-x-8 mt-36 mb-36">
        <div data-aos="fade-right" class="sm:w-2/3 relative">
          <div class="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
          <h1 class="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            Hola! Soy Maria{" "}
            <span class="text-yellow-500"> desarrolladora de software </span>
          </h1>
          <p class="py-5 lg:pr-32">
            ¡Hola! Mi nombre es María y mi interés por el desarrollo web comenzó
            en el instituto, donde aprendi HTML CSS. Ademas, de a conceptos básico
            sobre bases de datos, lo cual me enamoró
            de la programación. <br></br>
            Realicé algunos pequeños proyectos web hasta que
            decidí estudiar el grado de desarrollo de aplicaciones web. Después de graduarme,
            tuve la suerte de trabajar en varias empresas donde aprendí mucho
            sobre React, Ruby on Rails, Mongo, MySQL, Node y Firebase. <br></br>
            Mi pasión por la programación me ha llevado a crear mi primera aplicación, la
            cual lanzaré en unos pocos meses.
          </p>
    
        </div>
        <div data-aos="fade-left" class="sm:w-1/3 relative mt-10 sm:mt-0">
          <h1 class="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            FULL STACK DEVELOPMENT
          </h1>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            React
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Ruby on Rails
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            NodeJS
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Javascript
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            MongoDB
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Mysql
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Firebase
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            HTML
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            CSS
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            GIT
          </span>
          <h1 class="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
            DESIGN
          </h1>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Figma
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Web design
          </span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Web design
          </span>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
