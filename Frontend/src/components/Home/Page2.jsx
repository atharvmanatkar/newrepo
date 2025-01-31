import React from 'react'
import Cards from './Cards'
import cimg from '../../assets/cimg.avif'
import ill2 from '../../assets/ill2.svg'
import { Link } from "react-router-dom";
import Regevents from './Regevents';

const Page2 = () => {
  return (
    <div >
      <div>
        <h2 className='ml-40 mt-25 mb-7 text-3xl pt-3'>Ongoing Events</h2>
        <div className='flex px-25'>
          <Cards title="title" description="decription" image={cimg}/>
          <Cards title="title" description="decription" image={cimg}/>
          <Cards title="title" description="decription" image={cimg}/>
        </div>
        <Link to="/allevents" className="ml-40 text-xl">
        More Events
        </Link>
      </div>

      <div className='flex mb-10' >
        <p className='mt-20 ml-40 w-180 text-5xl'>Our website allows you to participate in hackathons and host your own, fostering innovation, collaboration, and competitive coding experiences for all.</p>
        <img src={ill2} className='h-100 mt-12' />
      </div>

      <Regevents/>
    </div>
  )
}

export default Page2
