import React from 'react'
import Hero from '../components/HeroCom'
import JobListings from '../components/JobListingsCom'

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
