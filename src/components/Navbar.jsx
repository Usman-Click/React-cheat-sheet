import React from 'react'

function Navbar() {
  return (
    
    <>
    <nav className="bg-indigo-700 p-5 border-b-indigo-600 border-b">
        <div className=" container mx-auto flex justify-between">

            <img src="" alt="" />

            <div className='flex justify-between items-center space-x-4'>
                <a href="#" className='bg-black text-white rounded-md py-2 px-4 '>
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
