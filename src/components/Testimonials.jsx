import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"



function Testimonials() {
  return (
    <motion.div 
    
    // Animation properties
    initial={{opacity:0, x:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    
    
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonies'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer 
         <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
       </h1>
         <p className='text-center text-gray-500 mb-12 mx-w-80 mx-auto'>
           Real Stories from Those who found Home with Us</p> 
             
             {/* Testimonial Data */}
        <div className='flex flex-wrap justify-center items-center gap-4 '>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='max-w-[300px] shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto' src={testimonial.image} alt={testimonial.alt} />

                    {/* Description */}
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>

                    <div className='flex justify-center items-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonial.rating}, (item, index)=> (
                            <img key={index} src={assets.star_icon} alt="" />
                        ))}
                    </div>
                    
                    {/*  Testimonial text*/}
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials