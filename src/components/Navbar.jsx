import React from 'react'
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'


function Navbar() {

  const activeBtn = ({isActive}) => isActive ? 
  'bg-white text-indigo-600 rounded-md py-2 px-4 hover:opacity-50' :
   'text-white hover:opacity-50'

  return (    
    <>
    <nav className="bg-indigo-700 p-5 border-b-indigo-600 border-b">
        <div className=" container mx-auto flex justify-between">

            <div className="flex items-center">
            <img src={logo} alt="" className="w-10 h-10 rounded-full hover:opacity-50 " />
            <h1 className="font-bold text-white text-2xl ml-2">React Jobs</h1>

            </div>

            <div className='flex justify-between items-center space-x-4 '>
                <NavLink to="/" className={activeBtn}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={activeBtn}>
                  Jobs
                </NavLink>
                <NavLink to="add-jobs" className={activeBtn}>
                  Add Job
                </NavLink>
            </div>

        </div>
    </nav>

    </>

  )
}

export default Navbar
