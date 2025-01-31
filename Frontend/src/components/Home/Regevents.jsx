import React from 'react'
import Cards from './Cards'
import cimg from '../../assets/cimg.avif'

const Regevents = () => {
  return (
    <div>
       <div>
        <h2 className='ml-40 mt- mb-7 text-3xl pt-3'>Registered Events</h2>
        <div className='flex px-25 mb-10'>
          <Cards title="title" description="decription" image={cimg}/>
        </div>
      </div>
    </div>
  )
}

export default Regevents
