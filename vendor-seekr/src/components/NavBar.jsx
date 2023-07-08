import React from 'react';
import vsLogo from '../assets/2.png';
import searchIcon from '../assets/search-icon.png';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <>
      <div className='nav-bar'>
        {/* <div className="nav-content">VendorSeekr</div> */}
        <Link to='/'>
          <img className='logo' id='logo' src={vsLogo} />
        </Link>
        <div className='right-nav'>
          <div className='search-wrap'>
            <input type='text' id='search' placeholder='Search...' />
            {/* <button id='search-btn'> */}
            <img id='searchIcon' alt='lookup glass' />
            {/* </button> */}
          </div>
          <div>
            <Link to='/signup'>
              <button className='signup-btn'>Sign Up</button>
            </Link>
            <Link to='/login'>
              <button className='login-btn'>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
