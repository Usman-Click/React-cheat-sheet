import React from 'react'

function AddJobsPage() {
  return (

    <>
      
      <div className="bg-gray-100 p-4 w-1/2 mx-auto my-20 space-y-4 md:w-1/3">
        <h1 className="font-bold text-2xl text-center">Add Job</h1>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Job Type</label>
        <select name="" id="" className='w-full p-2 border mt-1'>
          <option value="">Full-Time</option>
          <option value="">Part-Time</option>
        </select>
        </div>
      
        <div>
        <label htmlFor="" className='font-bold text-sm'>Job Listing Name</label>
        <input type="text" tabIndex={20} placeholder='eg: fullstack developer ' className='border w-full p-2 mt-1'/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Description</label>
        <textarea  placeholder='Description '  className='border w-full p-2 mt-1'/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Salary</label>
        <select name="" id="" className='w-full p-2 border mt-1'>
          <option value="">Under $50k</option>
          <option value="">Above $50k</option>
          <option value="">$100k-$200k</option>
        </select>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Location</label>
        <input type='text' placeholder='eg: Lagos, Nigeria '  className='border w-full p-2 mt-1'/>
        </div>

        <h1 className="font-bold text-2xl">Company info</h1>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Name</label>
        <input type='text' placeholder='Nexawave technologies '  className='border w-full p-2 mt-1'/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Description</label>
        <textarea  placeholder='Description '  className='border w-full p-2 mt-1'/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Email</label>
        <input type='email' placeholder='Nexawave@mail.com '  className='border w-full p-2 mt-1'/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Tel</label>
        <input type='number' placeholder='+222-333-22-111 '  className='border w-full p-2 mt-1'/>
        </div>

        <button type="submit" className='bg-indigo-600 rounded-full text-white font-bold p-2 w-full'>Add Job</button>

      </div>

    </>

  )
}

export default AddJobsPage
