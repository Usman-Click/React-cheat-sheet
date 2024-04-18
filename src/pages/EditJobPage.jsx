import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import JobFormCom from '../components/JobFormCom';

function EditJobPage() {

    const id = useParams();
    const job = useLoaderData();

  return <JobFormCom isAddPage={false} job={job}/>
  
}

export default EditJobPage