import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

function Navbar(){
    const [showMobileMenu, setShowMobileMenu] = useState(false)


    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
         // Cleanup: Re-enable body scroll when the component unmounts or menu closes
        return () => {
            document.body.style.overflow = 'auto';
        }
    },[showMobileMenu])

  return (
    <div className=' absolute top-0 left-0  w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-trasparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex text-white space-x-6'>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonies" className='cursor-pointer hover:text-gray-400'>Testimonies</a>
            </ul>
            <button className='hidden md:block cursor-pointer text-white hover:bg-white rounded-full px-6 py-2 hover:text-gray-400'>Sign up</button>
            <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* ---Mobile-menu---- */}
        <div className={`container md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white`}>
            {/* icon */}
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
            </div>
            {/* font-bold or font-medium */}
            <ul className='flex flex-col items-center gap-2 mt-2 bold text-lg font-bold'>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Project" className='px-4 py-2 rounded-full inline-block'>Projects</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Testimony" className='px-4 py-2 rounded-full inline-block'>Testimonies</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar