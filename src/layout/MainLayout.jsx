import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavbarCom'


function MainPage() {
  return (
    <>

    <Navbar />
    <Outlet />
      
    </>
  )
}

export default MainPage
