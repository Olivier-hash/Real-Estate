import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover flex bg-center items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')"}} id='Header'>
    <Navbar/>
    <motion.div 
    
    // Animation properties
    initial={{opacity:0, y:100}}
    transition={{duration: 1.5}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    
    className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>   
        {/* alternative class option flex flex-col text-center  */}
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'> made <br /> by <br />Olivier Rukundo</h2>
        <div className='space-x-6 mt-16'>
            <a href="#Project" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#Contact" className='border border-white bg-blue-400 px-8 py-3 rounded'>Contact Us</a>
        </div>
    </motion.div>
    </div>
  )
}

export default Header