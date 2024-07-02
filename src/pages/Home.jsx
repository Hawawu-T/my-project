import React from 'react'
import { DarkModeProvider }  from '../components/DarkModeContext'

import Hero from '../sections/Hero'
import About from '../sections/About'
import Agents from '../sections/Agents'
import Popular from '../sections/PopularAreas'
import Properties from '../sections/Properties'
import Services from '../sections/Services'
import Contact from '../sections/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Toggle from '../components/Toggle'
const Home = () => {
  return (
    
   <div> 
    <Hero />
{/* <SignUp /> */}
    <About />
    <Popular />
    <Properties />
    <Services />
    <Agents />
    <Contact />
   </div>
  
  )
  
}
   

export default Home
