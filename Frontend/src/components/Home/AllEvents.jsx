import React from 'react';
import cimg from "../../assets/cimg.avif";
import Navbar from './Navbar';

const Cards = () => {
  const [events] = React.useState([
    { title: 'Ongoing Event 1', description: 'Description for ongoing event 1', type: 'ongoing' },
    { title: 'Upcoming Event 1', description: 'Description for upcoming event 1', type: 'upcoming' },
    { title: 'Finished Event 1', description: 'Description for finished event 1', type: 'finished' },
    { title: 'Ongoing Event 2', description: 'Description for ongoing event 2', type: 'ongoing' },
    { title: 'Upcoming Event 2', description: 'Description for upcoming event 2', type: 'upcoming' },
    { title: 'Finished Event 2', description: 'Description for finished event 2', type: 'finished' },
  ]);

  return (
    <div className="w-full">
      <Navbar />
      <h2 className='ml-20 text-3xl mt-10'>All Events</h2>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 mx-10 mt-5 mb-10"> {/* Adjusted gap */}
        {events.map((event, index) => (
          <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white mb-4"> {/* Added mb-4 to all cards */}
            <img className="w-full h-48 object-cover" src={cimg} alt={event.title} />
            <div className="px-6 py-5">
              <div className="font-bold text-xl mb-2">{event.title}</div>
              <p className="text-gray-700 text-base">{event.description}</p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
