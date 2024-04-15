import {
  Route,
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import AddJobsPage from './pages/AddJobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'



import React from 'react'

function App() {

  const route = createBrowserRouter(
                  createRoutesFromElements(

                  <Route path='/' element={<MainLayout/>}>

                    <Route index element={<HomePage />}/>
                    <Route path='/jobs' element={<JobsPage />}/>
                    <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader}/>
                    <Route path='/add-jobs' element={<AddJobsPage />}/>
                    <Route path='*' element={<NotFoundPage />}/>

                  </Route>
                  
                  ))


  return <RouterProvider router={route} />
}

export default App

