import React from 'react'
import Sidebar from '../components/Sidebar'
import {Route,Routes,} from "react-router-dom"
import { dashItem } from '../components/export'


const UserDashboard = () => {
  return (
   
<div className='w-full my-12 flex gap-4'>
      <Sidebar />  
       <Routes>
        {dashItem.map((route,index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes> 
    </div>
  )
}

export default UserDashboard
