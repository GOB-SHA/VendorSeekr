import React from 'react';
import vsLogo from '../assets/vendorJoeLogo.png';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


// nav-bar rednders diferently depending on if logged in or not


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
						<div className='search-btn'><SearchIcon /></div>
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
