import React from 'react'
import JobCard from './JobCard'


const job_type="React.js Developer";
const job_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum sequi tempore numquam officiis libero asperiores necessitatibus?";

function Jobs() {
  return (
    <>

        <section className="flex flex-col justify-between mt-12 items-center">
            {/* Title */}
            <h1 className='text-4xl font-semibold'>Browse Jobs</h1>

            {/* Jobs */}
            <div className=" container mx-auto flex flex-col items-center space-y-4 md:flex-row mt-5 md:space-x-4 md:space-y-0">

            {/* Card 1 */}
            <JobCard/>

            {/* Card 2 */}
            <JobCard job_type='React Native Developer'/>

            {/* Card 3 */}
            <JobCard />

              

            </div>

            {/* Footer */}
            <a href="#" className='bg-black rounded-md text-white py-2 px-6 my-10 hover:opacity-50'>Browse more</a>

        </section>

      
    </>
  )
}

export default Jobs
