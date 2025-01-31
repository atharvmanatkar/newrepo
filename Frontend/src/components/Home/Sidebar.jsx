import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={closeSidebar} // Close sidebar if clicking outside
    >
      <div
        className={`fixed left-0 top-0 w-80 bg-white shadow-lg h-full transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Profile Section inside the Sidebar */}
          <div className="text-xl font-bold mb-6">Profile</div>
          <ul>
            {/* Registered Events Link */}
            <li className="mb-4">
              <Link
                to="/myevents" // Replace with the correct route for Registered Events
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeSidebar} // Close sidebar when a link is clicked
              >
                Registered Events
              </Link>
            </li>

            {/* Badges Link */}
            <li className="mb-4">
              <Link
                to="/badges" // Replace with the correct route for Badges
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeSidebar} // Close sidebar when a link is clicked
              >
                Badges
              </Link>
            </li>

            {/* Logout Link */}
            <li className="mb-4">
              <Link
                to="/logout" // Replace with the correct route for Logout or use a function for logout
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeSidebar} // Close sidebar when a link is clicked
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
