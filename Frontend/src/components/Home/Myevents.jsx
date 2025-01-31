import React from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import cimg from '../../assets/cimg.avif'

const Myevents = () => {
  return (
    <div>
       <Navbar/>
       <div>
        <h2 className='ml-30 mt- mb-7 text-3xl pt-3 mt-20'>Registered Events</h2>
        <div className='flex px-15 mb-10'>
          <Cards title="title" description="decription" image={cimg}/>
        </div>
      </div>
    </div>
  ) 
}

export default Myevents
