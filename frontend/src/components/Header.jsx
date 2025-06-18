import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 min-w-full flex items-center z-10 justify-between p-2 py-3 shadow-md bg-gray-900 border-b-1 border-white/15 '>
      <div >
        <Link to="/home">
          <img 
            src="/public/images.jpg" 
            alt="Blog Logo" 
            className='pl-2 w-25 h-8'
          />
        </Link>
      </div>

      <div className='flex justify-center items-center w-10 h-10'>
        <Link to="/settings">
          <FiSettings size={20} />
        </Link>
      </div>
    </header>
  );
};



export default Header;