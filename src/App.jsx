import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import Header from './components/Header'
import Footer from "./components/Footer"
import UserDashboard from './pages/UserDashboard'
import Profile from './dashpages/Profile'
import MyProperties from './dashpages/MyProperties'
import Favorite from './dashpages/Favorite'
import PurchasehHistory from './dashpages/PurchasehHistory'
import MyAgent from './dashpages/MyAgent'
import { DarkModeProvider } from './components/DarkModeContext'

// import SignUp from './sections/signup'


const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dash" element={<UserDashboard/>}/>
        {/* <Route path="/profile" element={<Profile/>}/>
      <Route path="/prop" element={<MyProperties/>}/>
      <Route path="/fav" element={<Favorite/>}/>
      <Route path="/purchase" element={<PurchasehHistory/>}/>
      <Route path="/myagent" element={<MyAgent/>}/> */}
      </Routes> 
    </BrowserRouter>
  )
}

export default App