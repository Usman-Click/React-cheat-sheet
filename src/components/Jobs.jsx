import React from 'react'

function Jobs() {
  return (
    <>

        <section className="flex flex-col justify-between mt-12 items-center">
            <h1 className='text-4xl font-semibold'>Browse Jobs</h1>

            <div className="flex flex-col space-x-4 md:flex-row mt-5">

                <div className="flex flex-col bg-grey-100 p-3">
                    <h6 className="text-gray-600">Fulltime</h6>
                    <h1 className='font-bold mt-2 mb-4'>React.js Developer</h1>
                    <p className="mb-4 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  ipsum sequi tempore numquam officiis libero asperiores necessitatibus?
                    </p>
                    <h6 className="text-gray-600">$70k - 98k /year</h6>
                </div>

            </div>

        </section>

      
    </>
  )
}

export default Jobs
