import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function JobPage() {

    const {id} = useParams();

  return ( 
    <div>job</div>
  )
}

const jobLoader = async ({params}) => {
    const req = await fetch (`http://localhost:5000/jobs/${params.id}`)
    const res = req.json
    return res;
}

export  {JobPage as default, jobLoader}