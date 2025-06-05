import React, { useState } from 'react'
import {assets, projectsData} from '../assets/assets'


function Projects() {

  // scrolling functionality for slider buttons
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const nextProject = ()=> {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }
    const prevProject = ()=> {
      // if ur at the first project(index 0) it jumps to the last project
      // rember array are zero indexed that's why we use projectData.length -1
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
  }

  return (
    <div className='container  mx-auto  py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Projects'>
        <h1 className='text-center justify-end mb-5 text-2xl sm:text-4xl font-bold mb-2'>Projects 
            <span className='underline underline-offset-4 decorated-1 under'>Completed</span>
        </h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting spaces, Building Legacies-Explore our portifolio</p>

        {/* slider buttons */}

        <div className='flex justify-end items-center mb-8'>

          <button onClick={prevProject}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project'>
            <img src={assets.left_arrow} alt="previous" />
          </button>

          <button onClick={{nextProject}}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project'>
            <img src={assets.right_arrow} alt="Next" />
          </button>

        </div>

        {/* project slider container */}
        <div className='overflow-hidden '>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
          >
            {projectsData.map((project, index)=>(
              <div  key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                       <h2 className='text-xl font-semibold text-gray-800'>
                            {project.title}
                      </h2> 
                      <p className='text-gray-500 text-sm'>
                            {project.price}  <span></span> {project.location}
                      </p>              
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects