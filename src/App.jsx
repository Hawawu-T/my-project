import React from 'react'
import { DarkModeProvider }  from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Agents from './sections/Agents'
import Popular from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'
// import SignUp from './sections/signup'

const App = () => {
  return (
    <>
    <DarkModeProvider>
      <Header />
      <Hero />
      {/* <SignUp /> */}
      <About />
      <Popular />
      <Properties />
      <Services />
      <Agents />
      <Contact />
      <Footer />
    </DarkModeProvider>
    </>
  )
}

export default App