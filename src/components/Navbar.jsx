import React from 'react'
import logo from '../assets/img/logo.png'


function Navbar() {
  return (
    
    <>
    <nav className="bg-indigo-700 p-5 border-b-indigo-600 border-b">
        <div className=" container mx-auto flex justify-between">

            <img src={logo} alt="" className="w-10 h-10 rounded-full hover:opacity-50 " />

            <div className='flex justify-between items-center space-x-4 '>
                <a href="#" className="bg-white text-indigo-600 rounded-md py-2 px-4 hover:opacity-50">
                  Home
                </a>
                <a href="#" className=' text-white hover:opacity-50'>
                  Jobs
                </a>
                <a href="#" className=' text-white hover:opacity-50'>
                  Add Job
                </a>
            </div>

        </div>
    </nav>

    </>

  )
}

export default Navbar
