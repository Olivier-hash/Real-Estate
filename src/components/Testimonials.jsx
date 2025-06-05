import React from 'react'
import { testimonialsData } from '../assets/assets'
function Testimonials() {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
       <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer 
         <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
        </h1>
       <p className='text-center text-gray-500 mb-12 mx-w-80 mx-auto'>
        Real Stories from Those who found Home with Us</p> 
             
             {/* Testimonial Data */}
        <div className=''>
            {testimonialsData.map((testimonial, index) => (
                <div key={index}>
                    <img src={testimonial.image} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials