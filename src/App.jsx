//import React from 'react'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/hero/hero'
import Mywork from './components/Mywork/Mywork'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}


export default App
