import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
            <li>
              {/* Profile Link to Open Sidebar */}
              <button
                onClick={openSidebar}
                className="hover:text-gray-200 focus:outline-none"
              >
                Profile
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Navbar;
