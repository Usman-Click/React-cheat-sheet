import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import ManageJob from '../components/ManageJob'
import { Link } from 'react-router-dom'

function JobPage() {

    const {id} = useParams();
    const job = useLoaderData()

  return ( 
    <>

    <div className=" bg-gray-100">
      <div className="container mx-auto flex p-4 text-indigo-700 space-x-3 items-center">
       <Link to="/jobs"> <FaArrowLeft /> </Link>
        <h3>Back to jobs</h3>
      </div>
    </div>
    
    <div className="flex justify-between container mx-auto my-20 space-x-4 items-start">
      
      {/* Left side */}
      <div className="flex-1 flex-col space-y-4">
        
        <div className="p-5 bg-gray-100 space-y-2">
          <h1>{job.type}</h1>
          <h5 className=' text-2xl font-bold'>{job.title}</h5>
          <h5 className='text-red-500'>{job.location}</h5>
          </div>

          <div className="p-5 bg-gray-100 space-y-2">
          <h1 className='font-bold'>Job Descriotion</h1>
          <h5 className='opacity-50 text-base'>{job.description}</h5>
          <h5 className=''>{job.salary}</h5>
        </div>
       
      </div>

      {/* Right side */}
      <div className='w-1/3 space-y-5'>

      <div className=' bg-gray-100 p-4 space-y-4'>
        <h1 className='font-bold'>Company Information</h1>
        <h1 className='text-lg'>{job.company.name}</h1>
        <p className='opacity-50 text-base'>{job.company.description}</p>
        <div>
         <label>Email</label>
         <h5 className='p-2 bg-purple-100 rounded-md'>{job.company.contactEmail}</h5>
        </div>
        <div>
          <label>Tel</label>
         <h5 className='p-2 bg-purple-100 rounded-md'>{job.company.contactPhone}</h5>
        </div>
      </div>

      <ManageJob />

      </div>

    </div>


    </>
  )
}

const jobLoader = async ({params}) => {
    const req = await fetch (`http://localhost:5000/jobs/${params.id}`)
    const res = await req.json()
    return res;
}

export  {JobPage as default, jobLoader}