import React from 'react'

function ManageJob() {
  return (
    <>
      <div className="bg-gray-100 rounded-sm space-y-4 p-5">
        <h1 className="font-bold">Manage job</h1>
        <button className='rounded-full bg-black text-white p-2 w-full'>Edit</button>
        <button className='rounded-full bg-red-700 text-white p-2 w-full'>Delete</button>

      </div>
    </>
  )
}

export default ManageJob
