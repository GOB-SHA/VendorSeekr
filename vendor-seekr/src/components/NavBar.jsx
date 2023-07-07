import React from "react";
import vsLogo from "../assets/vendorSeekr.png";
import searchIcon from "../assets/search-icon.png"

function NavBar(props) {
	return (
		<>
			<div className="nav-bar">
				{/* <div className="nav-content">VendorSeekr</div> */}
				<img className="logo" id="logo" src={vsLogo}></img>
				<div>
					<input type="text" className="search" placeholder="Search..." />
					<button className="search-btn"><img className="searchIcon" src={searchIcon} alt="lookup glass" /></button>
					<button>Signup</button>
					<button>Login</button>
				</div>
			</div>
		</>
	)
}

export default NavBar;