import React from 'react'
import pin from '../assets/img/location_pin.svg'


function JobCard({type, title, description, location, salary}) {
  return (
    <>
    
          {/* Card */}
          <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">{type}</h6>
                    <h1 className='font-bold mt-2 mb-4'>{title}</h1>

                    <p className="mb-4 ">{description}</p>
                    <h6 className="text-gray-600">{salary} /year</h6>

                    <div className="flex justify-between items-center my-4">

                        <div className="flex">
                        <img src={pin} alt="" className='h-8 w-8' />
                        <h4>{location}</h4>
                        </div>

                        <a href="#" className="text-white bg-indigo-500 rounded-md py-2 px-4 hover:opacity-50">Apply</a>
                        
                    </div>
                </div>

    </>
  );

}

JobCard.defaultProps = {
    type: "Full-Time",
    title: "React.js Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum sequi tempore numquam officiis libero asperiores necessitatibus?",
    salary: "$10K - 30K", 
    location: "Lagos, Nigeria"


}


export default JobCard