import React from 'react'


// import cimg from "../../assets/cimg.avif"

import Navbar from './Navbar'
import Page1 from './Page1'
import Page2 from './Page2'
import Footer from './Footer'
import AllEvents from './AllEvents.jsx'


const Home = () => {
  return (
    <div className='h-full'>
      <Navbar/>
      <Page1 />
      <Page2/>
      <AllEvents/>
      <Footer/>
    </div>

  )
}

export default Home
