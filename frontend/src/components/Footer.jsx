import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiCompass, FiBookmark, FiUser, FiEdit  } from 'react-icons/fi'; // Using Feather Icons

const Footer = () => {
  const location = useLocation();

  // Check if current route matches nav item
  const isActive = (path) => location.pathname === path;

  return (
    <nav className='fixed bottom-0 left-0 min-w-full bg-black flex items-center justify-evenly p-2'>
      <Link to="/home" >
        <div className='flex justify-center items-center text-sm h-10 w-10'>
          <FiHome size={20} />
        </div>
      </Link>

      <Link to="/create" >
        <div className='flex justify-center items-center text-sm h-10 w-10'>
          <FiEdit  size={20} />
        </div>
      </Link>

      <Link to="/bookmarks" >
        <div className='flex justify-center items-center text-sm h-10 w-10'>
          <FiBookmark size={20} />
        </div>
      </Link>

      <Link to="/profile" >
        <div className='flex justify-center items-center text-sm h-10 w-10'>
          <FiUser size={20} />
        </div>
      </Link>
    </nav>
  );
};


export default Footer;