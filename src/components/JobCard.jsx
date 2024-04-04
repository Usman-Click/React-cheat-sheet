import React from 'react'
import pin from '../assets/img/location_pin.svg'


function JobCard({job_type, job_desc}) {
  return (
    <>
    
          {/* Card */}
          <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">Fulltime</h6>
                    <h1 className='font-bold mt-2 mb-4'>{job_type}</h1>

                    <p className="mb-4 ">{job_desc}</p>
                    <h6 className="text-gray-600">$70k - 98k /year</h6>

                    <div className="flex justify-between items-center my-4">

                        <div className="flex">
                        <img src={pin} alt="" className='h-8 w-8' />
                        <h4>California, United State</h4>
                        </div>

                        <a href="#" className="text-white bg-indigo-500 rounded-md py-2 px-4">Apply</a>
                        
                    </div>
                </div>

    </>
  );

}

JobCard.defaultProps = {
    job_type: "React.js Developer",
    job_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum sequi tempore numquam officiis libero asperiores necessitatibus?"

}


export default JobCard