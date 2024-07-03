import React from 'react'
import Sidebar from '../components/Sidebar'
import {Route,Routes,} from "react-router-dom"
import { dashItem } from '../components/export'


const UserDashboard = () => {
  return (
   
<div className='w-full h-screen my-12 flex gap-4 '>
      <Sidebar />  
     <div className="w-full h-screen">
     <Routes>
        {dashItem.map((route,index) => (
          <Route key={index} path={route.path} Component={route.component} />
        ))}
      </Routes> 
     </div>
    </div>
  )
}

export default UserDashboard
