import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

function About() {
  return (
    <motion.div
    
    // Animation properties
    initial={{opacity:0, x:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    
    
    
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overfllow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span> </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About properties, Dedicated to your vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.project_img_4} alt="" className='w-full sm:w-1/2 max-w-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>On going Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>
                    we are a leading real estate company with over decade  of exprerience in dleivering br exceptional properties.
                     Our commitment to qualify and customer satisfaction has earned us a reputation for excellence in the industry..
                </p>
                <button className='bg-blue-600 text-white px-6 py-3 rounded'>Learn more</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About