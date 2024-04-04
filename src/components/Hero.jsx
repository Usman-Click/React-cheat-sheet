import React from 'react'

function Hero() {
  return (

    <>
    
    <div className="flex flex-col items-center p-10 bg-indigo-700 text-white
                   md:p-20">
      <h1 className='text-4xl font-black'>Become a react dev</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque</p>
   </div>

   <div className='container mx-auto space-y-4 mt-10 flex flex-col justify-between md:space-y-0 md:flex-row md:space-x-4'>

    <div className="bg-gray-100 flex-col px-10 py-5 flex-1">
      <h1 className='font-bold m-0'>For Developers</h1>
      <p className='my-3'>Browse our catalog today and start earning</p>
      <a href="#" className='bg-black text-white mt-5 py-2 px-4 rounded-lg'>Browse</a>
    </div>

    <div className="bg-indigo-100 flex-col px-5 py-5 flex-1">
      <label className='font-bold m-0'>For Employers</label>
      <p className='my-3'>List your job and find the perfect developer for the</p>
      <a href="#" className='bg-indigo-500 text-white py-2 px-4 rounded-lg'>Add jobs</a>
    </div>

   </div>

  </>

  )
}

export default Hero
