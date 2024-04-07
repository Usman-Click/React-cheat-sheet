import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'

function HomePage() {
  return (
    <>
        {/* Hero section component*/}
      <Hero />

      {/* Job listings section component*/}
      <JobListings />

    </>
  )
}

export default HomePage
