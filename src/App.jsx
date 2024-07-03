import React from 'react'

import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import UserDashboard from './pages/UserDashboard'

import {useDarkMode } from './components/DarkModeContext'
import NavRoute from  './pages/NavRoute'
import SignUp from './container/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import BAAAfterPage from './container/BAAAfterPage'
import ContactUsAfterPage from './container/ContacUsAfterPage'


// import SignUp from './sections/signup'


const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
     <BrowserRouter>
    <div className="flex flex-col min-h-screen">
    <Header/>
      
     <main className="flex-grow">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<NavRoute/>}/>
        <Route path="/dash/*"  element={<UserDashboard/>}/>
        <Route path="/signup/*" element={<SignUp/>}/>
        <Route path="/bookaft/*" element={<BAAAfterPage/>}/>
        <Route path="/contactaft/*" element={<ContactUsAfterPage/>}/>
      </Routes>
     </main>
      
      <Footer/> 
     
    </div>
    </BrowserRouter>
  )
}

export default App