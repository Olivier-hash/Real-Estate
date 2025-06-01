import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center items-center w-full overfolw-hidden' style={{ backgroundImage: "url('/header_img.png')"}} id='Header'>
    <Navbar/>
    <div>
        <h2>Explore homes that fit your dreams</h2>
        <div>
            <a href="#">Projects</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
    </div>
  )
}

export default Header