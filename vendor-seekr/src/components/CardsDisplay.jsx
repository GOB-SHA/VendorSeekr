import React from "react";
import Card from "./Card.jsx";
import vendorsTwo from "./vendors.js";
import { useEffect, useState } from "react";

// skeleton fetch to backend >> how do we need to receive this from back end?
// array of objects is how currently set up

const CardsDisplay = ({ user }) => {
  const [vendors, setVendors] = useState([]);
  const vendorFetch = () => {
    fetch("/api/vendor", { method: "GET" })
      .then((response) => response.json())
      .then((vendors) => {
        console.log("vendors: ", vendors);
        // vendorInfo.push(vendors);
        // const vendor = vendors[0];
        setVendors(vendors[0]);
        // return vendors[0];
      });
    // return vendor;
  };
  useEffect(() => vendorFetch(), []);
  console.log("fetchVendors: ", vendors);
  const cards = vendors.map((vendor, i) => {
    console.log(<Card vendorInfo={vendor} user={user} key={i} />);
    return <Card vendorInfo={vendor} user={user} key={i} />;
  });
  // do logic to map details as props to cards
  // console.log(cards);
  return <div className="card-display">{cards}</div>;
};

export default CardsDisplay;
