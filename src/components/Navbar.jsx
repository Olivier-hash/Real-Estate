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
            <img src={assets.menu_icon} className='md:hidden w-7' alt="" />
        </div>
        {/* ---Mobile-menu---- */}
        <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden'>
            <ul>
                <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a href="#Project" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a href="#Testimony" className='px-4 py-2 rounded-full inline-block'>Testimonies</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar