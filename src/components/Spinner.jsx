import React from 'react'
import ClipLoader from 'react-spinners/FadeLoader'

const style = {
  display: 'block',
  margin: "100px auto",
  borderColor: 'purple'
}


function Spinner() {
  return (
    <ClipLoader
        size={150}
        aria-label='loading...'
        color='purple'
        cssOverride={style}
  />
  )
}

export default Spinner