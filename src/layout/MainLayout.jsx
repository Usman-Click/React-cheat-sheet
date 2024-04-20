import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavbarCom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  return (
    <>

    <Navbar />
    <Outlet />
    <ToastContainer/>
      
    </>
  )
}

export default MainPage
