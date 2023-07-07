import React from "react";
import Card from "./Card.jsx"

const vendors = [
	{ Name: "Food Store", Description: "We sell Food!", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg" },
	{ Name: "Shoe Store", Description: "We sell Shoes!", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg" },
	{ Name: "Book Store", Description: "We sell Books!", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg" }
]

const CardsDisplay = () => {
	const cards =
		vendors.map((vendor, i) => {
			return (
				<Card vendorInfo={vendor} key={i} />
			)
		});
	// do logic to map details as props to cards
	console.log(cards)
	return (
		<div className="card-display">
			{cards}
		</div>
	)
};


export default CardsDisplay;