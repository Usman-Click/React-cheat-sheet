import React from 'react'
import {FaMapMarker} from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function JobCard({id, type, title, description, location, salary}) {

  // showFullDesc = val of the state
  // setShowFullDesc = func to set the val
  // useState(false) = default val something like sharepref
  const [showFullDesc, setShowFullDesc] = useState(false);
  if(!showFullDesc) {
    description = description.substring(0,90) + "...";
  }

  return (
    <>
    
      
          {/* Card */}
          <div className="flex flex-col bg-grey-100 p-5  bg-gray-100">
                    <h6 className="text-gray-600">{type}</h6>
                    <h1 className='font-bold mt-2 mb-4'>{title}</h1>

                    <p>{description}</p>

                    {/* setShowFullDesc(true) / setShowFullDesc(false) */}
                    <button className='text-indigo-600 self-start my-2 mb-4'
                            onClick={() => setShowFullDesc((prevState) => (!prevState))}>

                      {showFullDesc ? 'See less' : 'See more'}

                    </button>

                    <h6 className="text-gray-600">{salary} /year</h6>

                    <div className="flex justify-between items-center my-4">

                        <div className="flex items-center text-orange-800">
                        <FaMapMarker className='mr-1'/>
                        <h4>{location}</h4>
                        </div>

                        <Link to={`/jobs/${id}`} className="text-white bg-indigo-500 rounded-md py-2 px-4 hover:opacity-50">
                          Apply</Link>
                        
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