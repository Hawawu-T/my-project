import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import UserDashboard from './pages/UserDashboard'

import { DarkModeProvider, useDarkMode } from './components/DarkModeContext'
import NavRoute from  './pages/NavRoute'
import SignUp from './container/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import { FaMoon, FaSun } from 'react-icons/fa'
import Toggle from './components/Toggle'
import BAAAfterPage from './container/BAAAfterPage'
import ContactUsAfterPage from './container/ContacUsAfterPage'


// import SignUp from './sections/signup'


const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/dark' element={<Toggle/>}/>
        <Route path="/*" element={<NavRoute/>}/>
        <Route path="/dash/*" element={<UserDashboard/>}/>
        <Route path="/signup/*" element={<SignUp/>}/>
        <Route path="/bookaft/*" element={<BAAAfterPage/>}/>
        <Route path="/contactaft/*" element={<ContactUsAfterPage/>}/>

      </Routes>
      <Footer/> 
    </BrowserRouter>
  )
}

export default App