import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiCompass, FiBookmark, FiUser } from 'react-icons/fi'; // Using Feather Icons

const Footer = () => {
  const location = useLocation();

  // Check if current route matches nav item
  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navContainer}>
      <Link to="/home" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/home') && styles.activeNavItem)}}>
          <FiHome size={20} />
          <span style={styles.navText}>Home</span>
        </div>
      </Link>

      <Link to="/discover" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/discover') && styles.activeNavItem)}}>
          <FiCompass size={20} />
          <span style={styles.navText}>Discover</span>
        </div>
      </Link>

      <Link to="/bookmarks" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/bookmarks') && styles.activeNavItem)}}>
          <FiBookmark size={20} />
          <span style={styles.navText}>Saved</span>
        </div>
      </Link>

      <Link to="/profile" style={styles.navLink}>
        <div style={{...styles.navItem, ...(isActive('/profile') && styles.activeNavItem)}}>
          <FiUser size={20} />
          <span style={styles.navText}>Profile</span>
        </div>
      </Link>
    </nav>
  );
};

const styles = {
  navContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
    zIndex: 100,
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
  },
  activeNavItem: {
    color: '#ff1493',
    transform: 'translateY(-2px)',
  },
  navText: {
    fontSize: '12px',
    marginTop: '4px',
  },
};

export default Footer;