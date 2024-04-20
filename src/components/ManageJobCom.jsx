import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function ManageJob({id}) {

  const navigate = useNavigate();

   // delete job
   const del = async () => {

    console.log(id);
    const req = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'DELETE'
    })

    toast('Job Deleted Sucessfully')

    navigate('/jobs');

  }
  
  return (
    <>
      <div className="bg-gray-100 rounded-sm space-y-4 p-5">
        <h1 className="font-bold">Manage job</h1>
        <Link className='rounded-full bg-black text-white p-2 w-full' to={`/edit-job/${id}`} >Edit</Link>
        <button className='rounded-full bg-red-700 text-white p-2 w-full' onClick={del}>Delete</button>

      </div>
    </>
  )
}

export default ManageJob
