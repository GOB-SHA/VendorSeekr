import React from 'react';
import likeIcon from '../assets/vendorJoe.png';

// handle click funciton send post request to backend to enter information from card into database

const Card = ({ vendorInfo, user }) => {
	const handleLike = () => {
		console.log(vendorInfo.Name, user)
		// fetch('/api/user', {
		// 	method: "POST", body: {
		// 		vendor: vendorInfo.Name,
		// 		user: user
		// 	}
		// })
	}
	return (
		<>
			<div className='vendorCard'>
				<img src={vendorInfo.photo} className='vendorPhoto' />
				<div>
					<button className='likeBtn' onClick={handleLike}>
						<img className='likeIcon' src={likeIcon} />
					</button>
				</div>
				<div className='vendor-details'>
					<p>
						<strong>Name: </strong>
						{vendorInfo.Name}
					</p>
					<p>
						<strong>Description: </strong>
						{vendorInfo.Description}
					</p>
					<p>
						<strong>Next Chance to Shop: </strong>
						{vendorInfo.Dates} @ {vendorInfo.Markets}
					</p>
				</div>
			</div>
		</>
	);
};

export default Card;
