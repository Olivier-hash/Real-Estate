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
          <div className='w-full md:w-1/5 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 mb-8 text-gray-400'>
                <a href="#Header" className='hover:text-white'>Home</a>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Contact" className='hover:text-white'>Contact Us</a>
                <a href="" className='hover:text-white'>Privacy policy</a>
            </ul>
          </div>
              {/* info,newsletters */}
          <div className='w-full md:w-1/3 '>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources, sent to your inbox weekly</p>
            <div className='flex gap-2'>
                <input className='p-2 rounded bg-gray-400 border border-gray-700  focus:outline-none w-full md:w-auto' 
                type="email" placeholder='Enter your email'/>
                <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
          </div>
          
        </div>
        {/* message */}
        <div className='border-t border-gray-700 py-4 mt-10 text-gray-500 text-center'>
            Copyright &copy; 2025 Real Estate .All Right Reserved
        </div>
    </div>
  )
}

export default Footer