import React from 'react'
import Sidebar from '../components/Sidebar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { DarkModeProvider } from '../components/DarkModeContext'
import Profile from '../dashpages/Profile'
import MyAgent from '../dashpages/MyAgent'
import Favorite from '../dashpages/Wishlist'
import Wishlist from '../dashpages/Wishlist'


const UserDashboard = () => {
  
  return (
   <DarkModeProvider>
   {/* <Profile/> */}
  {/* <MyAgent/> */}
  {/* <Sidebar/> */}
  <Wishlist/>
   </DarkModeProvider>
  )
}

export default UserDashboard
