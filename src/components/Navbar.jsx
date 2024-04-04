import React from 'react'
import logo from '../assets/img/logo.png'


function Navbar() {
  return (
    
    <>
    <nav className="bg-indigo-700 p-5 border-b-indigo-600 border-b">
        <div className=" container mx-auto flex justify-between">

            <img src={logo} alt="" className="w-10 h-10 rounded-full" />

            <div className='flex justify-between items-center space-x-4'>
                <a href="#" className="bg-white text-indigo-600 rounded-md py-2 px-4">
                  Home
                </a>
                <a href="#" className=' text-white'>
                  Jobs
                </a>
                <a href="#" className=' text-white'>
                  Add Job
                </a>
            </div>

        </div>
    </nav>

    </>

  )
}

export default Navbar
