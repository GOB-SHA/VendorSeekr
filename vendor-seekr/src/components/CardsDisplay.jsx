import React from "react";
import Card from "./Card.jsx";

const vendors = [
  {
    Name: "Food Store",
    Category: "Food",
    Description: "We sell Food!",
    Dates: "July 10, 2023",
    Markets: "Leimert Park",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg",
  },
  {
    Name: "Shoe Store",
    Category: "Clothing & Accessories",
    Description: "We sell Shoes!",
    Dates: "July 10, 2023",
    Markets: "South Street Farmers Market",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg",
  },
  {
    Name: "Book Store",
    Description: "We sell Books!",
    Category: "Books",
    Dates: "July 16, 2023",
    Markets: "Silver Lake Flea",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Fruit_bowl.jpg/640px-Fruit_bowl.jpg",
  },
];
/*
// skeleton fetch to backend >> how do we need to receive this from back end?
// array of objects is how currently set up
const vendorFetch = () => {
	const vendorInfo = [];
	fetch('/api/vendor', { method: 'GET' })
		.then((response) => response.json())
		.then((vendors) => {
			vendorInfo.push(vendors);
		});
};
*/

const CardsDisplay = ({ user }) => {
  const cards = vendors.map((vendor, i) => {
    console.log(<Card vendorInfo={vendor} user={user} key={i} />);
    return <Card vendorInfo={vendor} user={user} key={i} />;
  });
  // do logic to map details as props to cards
  // console.log(cards);
  return <div className="card-display">{cards}</div>;
};

export default CardsDisplay;
