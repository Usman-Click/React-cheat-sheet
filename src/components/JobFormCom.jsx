import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function JobFormCom({isAddPage, job}) {

    const [type, setType] = useState(!isAddPage ? job.type : 'Full-Time');
    const [title, setTitle] = useState(!isAddPage ? job.title : "");
    const [desc, setDesc] = useState(!isAddPage ? job.description : "");
    const [salary, setSalary] = useState(!isAddPage ? job.salary : 'Under $50k');
    const [location, setLocation] = useState(!isAddPage ? job.location : "");
    const [companyName, setCompanyName] = useState(!isAddPage ? job.company.name : "");
    const [companyDesc, setCompanyDesc] = useState(!isAddPage ? job.description : "");
    const [companyMail, setCompanyMail] = useState(!isAddPage ? job.company.contactEmail : "");
    const [companyTel, setCompanyTel] = useState(!isAddPage ? job.company.contactPhone : "");
  
    const navigate = useNavigate();
  
    // On form submit
    const submitForm = (e) => {
      e.preventDefault()
  
      const newJob = {
        "title": title,
        "type": type,
        "description": desc,
        "location": location,
        "salary": salary,
        "company": {
          "name": companyName,
          "description": companyDesc,
          "contactEmail": companyMail,
          "contactPhone": companyTel
        }
  
      }

       isAddPage ? addNewJob(newJob) : editJob(newJob);
       return navigate('/jobs')
    }


    // Add job
    const addNewJob =  async (newJob) => {
   
    const req = await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })

  }

  // Edit job
  const editJob = async (updatedJob) => {
    const req = await fetch(`http://localhost:5000/jobs/${job.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedJob),
        headers: {
            'content-type': 'application/json'
        } 
    })

       
  }

  return (
    <>

<div className="bg-gray-100 p-4 w-1/2 mx-auto my-20 space-y-4 md:w-1/3">
        <h1 className="font-bold text-2xl text-center">{isAddPage ? 'Add Job' : 'Edit Job'}</h1>
    
    <form  onSubmit={submitForm}>
        
    <div>
        <label htmlFor="" className='font-bold text-sm'>Job Type</label>
        <select name="" id="" className='w-full p-2 border mt-1' value={type} onChange={(e) => setType(e.target.value)}>
          <option >Full-Time</option>
          <option >Part-Time</option>
          <option >Remote</option>
          <option >Internship</option>
        </select>
        </div>
      
        <div>
        <label htmlFor="" className='font-bold text-sm'>Job Title</label>
        <input type="text" placeholder='eg: fullstack developer ' className='border w-full p-2 mt-1'
        value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Description</label>
        <textarea  placeholder='Description '  className='border w-full p-2 mt-1' value={desc} onChange={(e) => setDesc(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Salary</label>
        <select name="" id="" className='w-full p-2 border mt-1'  value={salary} onChange={(e) => setSalary(e.target.value)}>
          <option >Under $50k</option>
          <option >Above $50k</option>
          <option >$100k-$200k</option>
        </select>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Location</label>
        <input type='text' placeholder='eg: Lagos, Nigeria '  className='border w-full p-2 mt-1'
         value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>

        <h1 className="font-bold text-2xl">Company info</h1>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Name</label>
        <input type='text' placeholder='Nexawave technologies '  className='border w-full p-2 mt-1'
         value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Description</label>
        <textarea  placeholder='Description '  className='border w-full p-2 mt-1' 
         value={companyDesc} onChange={(e) => setCompanyDesc(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Email</label>
        <input type='email' placeholder='Nexawave@mail.com '  className='border w-full p-2 mt-1'
         value={companyMail} onChange={(e) => setCompanyMail(e.target.value)}/>
        </div>

        <div>
        <label htmlFor="" className='font-bold text-sm'>Tel</label>
        <input type='text' placeholder='+222-333-22-111 '  className='border w-full p-2 mt-1'
         value={companyTel} onChange={(e) => setCompanyTel(e.target.value)}/>
        </div>

        <button type="submit" className='bg-indigo-600 rounded-full text-white font-bold p-2 w-full'>{isAddPage ? 'Add Job' : 'Update Job'}</button>

        </form>
    </div>
    
    </>
  )
}

export default JobFormCom
