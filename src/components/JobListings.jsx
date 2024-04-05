import React from 'react'
import JobListing from './JobListing'
import Jobs from '../data/jobs.json'

const recentJobs = Jobs.slice(0, 3)

function JobListings() {
  return (
    <>

        <section className="flex flex-col justify-between mt-12 items-center">

              {/* Title */}
              <h1 className='text-4xl font-semibold'>Browse Jobs</h1>

              {/* Jobs */}
                <div className=" container mx-auto grid grid-col-1 gap-6 md:grid-cols-3">

                  {recentJobs.map((job) => (

                      <JobListing 
                      key={job.id} 
                      type={job.type}
                      title={job.title}
                      location={job.salary}
                      description={job.description}
                      salary={job.salary}
                      />                  

                  ))}                             

                </div>

              {/* Footer */}
              <a href="#" className='bg-black rounded-md text-white py-2 px-6 my-10 hover:opacity-50'>Browse more</a>

        </section>

      
    </>
  )
}

export default JobListings
