import React from 'react'
import { Link } from 'react-router-dom'

function ManageJob({id}) {

  const del = (id) => {

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
