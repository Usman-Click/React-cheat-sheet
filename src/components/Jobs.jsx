import React from 'react'
import pin from '../assets/img/location_pin.svg'
import logo from '../assets/img/logo.png'

function Jobs() {
  return (
    <>

        <section className="flex flex-col justify-between mt-12 items-center">
            {/* Title */}
            <h1 className='text-4xl font-semibold'>Browse Jobs</h1>

            {/* Jobs */}
            <div className=" container mx-auto flex flex-col items-center space-y-4 md:flex-row mt-5 md:space-x-4 md:space-y-0">

                {/* Card */}
                <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">Fulltime</h6>
                    <h1 className='font-bold mt-2 mb-4'>React.js Developer</h1>

                    <p className="mb-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum sequi tempore numquam officiis libero asperiores necessitatibus?
                    </p>
                    <h6 className="text-gray-600">$70k - 98k /year</h6>

                    <div className="flex justify-between my-4">

                        <div className="flex">
                        <img src={pin} alt="" className='h-8 w-8' />
                        <h4>California, United State</h4>
                        </div>

                        <a href="#" className="text-white bg-indigo-500 rounded-md py-2 px-4">Apply</a>
                        
                    </div>
                </div>

                  {/* Card */}
                  <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">Fulltime</h6>
                    <h1 className='font-bold mt-2 mb-4'>React.js Developer</h1>

                    <p className="mb-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum sequi tempore numquam officiis libero asperiores necessitatibus?
                    </p>
                    <h6 className="text-gray-600">$70k - 98k /year</h6>

                    <div className="flex justify-between my-4">

                        <div className="flex">
                        <img src={pin} alt="" className='h-8 w-8' />
                        <h4>California, United State</h4>
                        </div>

                        <a href="#" className="text-white bg-indigo-500 rounded-md py-2 px-4">Apply</a>
                        
                    </div>
                </div>

                  {/* Card */}
                  <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">Fulltime</h6>
                    <h1 className='font-bold mt-2 mb-4'>React.js Developer</h1>

                    <p className="mb-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum sequi tempore numquam officiis libero asperiores necessitatibus?
                    </p>
                    <h6 className="text-gray-600">$70k - 98k /year</h6>

                    <div className="flex justify-between my-4">

                        <div className="flex">
                        <img src={pin} alt="" className='h-8 w-8' />
                        <h4>California, United State</h4>
                        </div>

                        <a href="#" className="text-white bg-indigo-500 rounded-md py-2 px-4">Apply</a>
                        
                    </div>
                </div>

            </div>

            {/* Footer */}
            <a href="#" className='bg-black rounded-md text-white py-2 px-6 my-10'>Browse more</a>

        </section>

      
    </>
  )
}

export default Jobs
