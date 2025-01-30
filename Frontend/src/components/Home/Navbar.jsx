import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg justify-around">
          <li><a href="#" className="hover:text-gray-200">Home</a></li>
          <li><a href="#" className="hover:text-gray-200">About</a></li>
          <li><a href="#" className="hover:text-gray-200">Services</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
