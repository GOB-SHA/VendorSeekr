import React from "react";



const Card = ({ vendorInfo }) => {
	<>
		<div className="vendorCard">
			<img src={vendorInfo.photo} />
			<div className="vendor-details">
				<p>Name: {vendorInfo.Name}</p>
				<p>Description: {vendorInfo.description}</p>
			</div>
		</div>
	</>
}

export default Card