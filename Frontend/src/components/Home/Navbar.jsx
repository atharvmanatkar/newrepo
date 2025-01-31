import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">EventEcho</h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg justify-around">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/aboutus" className="hover:text-gray-200">About</Link></li>
        <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
        <li><Link to="/" className="hover:text-gray-200">Profile</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
