import React from 'react';
import { NavLink, useLocation, } from 'react-router-dom';
import { FiHome, FiBookmark, FiUser, FiEdit } from 'react-icons/fi'; // Using Feather Icons

const Footer = () => {
  const location = useLocation();

  // Check if current route matches nav item
  const isActive = (path) => location.pathname === path;

  const tabClass = ({ isActive }) =>
    `flex justify-center items-center text-sm h-10 w-10 transition delay-100 ease-in-out ${isActive ? 'opacity-100' : 'opacity-50'
    }`;

  return (
    <nav className='fixed bottom-0 left-0 min-w-full bg-gray-900 flex items-center justify-evenly p-2 border-t-1 border-white/15'>
      <NavLink to="/home" className={tabClass} >
        <div>
          <FiHome size={20} />
        </div>
      </NavLink>

      <NavLink to="/create" className={tabClass}>
        <div>
          <FiEdit size={20} />
        </div>
      </NavLink>

      <NavLink to="/bookmarks" className={tabClass}>
        <div>
          <FiBookmark size={20} />
        </div>
      </NavLink>

      <NavLink to="/profile" className={tabClass}>
        <div>
          <FiUser size={20} />
        </div>
      </NavLink>
    </nav>
  );
};


export default Footer;