import React from 'react'
import Hero from './components/Hero';
import Header from './components/Header';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Appointment from './components/Appoinment';
import Services from './components/Services'

import { BrowserRouter,Router,Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
      {/* <Router>
        <Route to='/'> home</Route>
        <Route to ='/price'> Prices </Route>
        <Route to = '/contact'> Contact</Route>
        <Route to= '/appoinment'> Appoinment</Route>
      </Router> */}
      
    <Header />
    <Hero />
    <Services/>
    <Prices />
    <Appointment/>
    <Contact />
    <Footer />
  </div>
  )
}

export default App
