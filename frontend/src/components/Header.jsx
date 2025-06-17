import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 min-w-full flex items-center justify-between p-2 shadow-md bg-black '>
      {/* Logo on the left */}
      <div >
        <Link to="/home">
          {/* <img 
            src="/public/images.jpg" 
            alt="Blog Logo" 
            className='w-15'
          /> */}
        </Link>
      </div>

      {/* Settings icon on the right */}
      <div className='flex justify-center items-center w-10 h-10'>
        <Link to="/settings">
          <FiSettings size={20} />
        </Link>
      </div>
    </header>
  );
};



export default Header;