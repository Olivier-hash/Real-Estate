import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden'id='Footer' >
        {/* information, links and  Email addes*/}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            {/* three columns */}
          <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-400 mt-4'>Your trusted partner in finding the perfect Home.</p>
          </div>  
             {/* menu items */}
          <div>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact Us</a>
                <a href="">Privacy policy</a>
            </ul>
          </div>
          <div></div>
        </div>
        <div></div>
    </div>
  )
}

export default Footer