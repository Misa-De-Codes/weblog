import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Logo on the left */}
      <div style={styles.logoContainer}>
        <Link to="/">
          <img 
            src="https://via.placeholder.com/150x50?text=Blog+Logo" 
            alt="Blog Logo" 
            style={styles.logo}
          />
        </Link>
      </div>

      {/* Settings icon on the right */}
      <div style={styles.settingsContainer}>
        <Link to="/settings" style={styles.settingsLink}>
          <FiSettings size={24} style={styles.settingsIcon} />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '12px 20px',
    zIndex: 100,
  },
  logoContainer: {
    height: '40px', // Match your logo aspect ratio
  },
  logo: {
    height: '100%',
    width: 'auto',
  },
  settingsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  settingsLink: {
    color: '#333',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  settingsIcon: {
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'rotate(30deg)',
      color: '#ff1493',
    },
  },
};

export default Header;