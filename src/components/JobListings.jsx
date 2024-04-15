import React from 'react'
import JobListing from './JobListing'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function JobListings({showAllJobs = false,}) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // its takes 2 param, a callback array and list-depencies (in most cases : an empty array)
  useEffect(() => {
      const fetchJobs = async() => {
        try{
            // featch the data
            const resourse = await fetch('http://localhost:5000/jobs');
            // convert the data
            const data = await resourse.json();
             // save the data
            setJobs(data);
        }catch(error){
              console.log('Erroe loading data', error);
        }finally{
            // set loading to false since it finsihe fetching rhe data
            setLoading(false);
        }
      }

      fetchJobs();
  }, []);

  // return recent / all jobs
//  var JobListings = showAllJobs ? jobs : jobs.slice(0, 3);

  return (
    <>

        <section className="flex flex-col justify-between mt-12 items-center">

              {/* Title */}
              <h1 className='text-4xl font-semibold mb-8'>{showAllJobs ? 'ALL Jobs' : 'Recent Jobs'}</h1>

              {/* Jobs */}
                <div className=" container mx-auto grid grid-col-1 gap-6 md:grid-cols-3">
                  {
                  
                  loading ? (<h3>Loading</h3>)
                   :
                   ( <>  
                 
                      {jobs.map((job) => (

                        <JobListing 
                        id={job.id} key={job.id} type={job.type} title={job.title}
                        location={job.location} description={job.description}salary={job.salary}
                        />                  

                     ))} 
                  
                  </>)

                  }
                
                </div>

              {/* Footer */}
              <Link to="#" className='bg-black rounded-md text-white py-2 px-6 my-10 hover:opacity-50'>Browse more</Link>

        </section>

      
    </>
  )
}

export default JobListings
