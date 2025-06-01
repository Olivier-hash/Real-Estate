import React from 'react'
import {assets} from '../assets/assets'

function Navbar(){
  return (
    <div className=' absolute top-0 left-0  w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-trasparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex text-white space-x-6'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonies</a>
            </ul>
            <button className='hidden md:block cursor-pointer text-white hover:bg-white rounded-full px-6 py-2 hover:text-gray-400'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar