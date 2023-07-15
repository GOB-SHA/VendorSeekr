import CardsDisplay from "./CardsDisplay";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import photos from "./vendors";

const MyVendors = ({ user }) => {
  const [likedVendors, setLikedVendors] = useState([]);
  console.log(user.id);
  const { id } = user;
  const fetchLikedVendors = () => {
    fetch(`api/vendor/getLikedvendors/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((vendor) => {
        console.log("vendorz: ", vendor[0]);
        setLikedVendors(vendor[0]);
      });
  };

  useEffect(()=>fetchLikedVendors(), [likedVendors]);

  const vendorList = likedVendors.map((vendor) => vendor.vendor_name);
  // const markets = vendors.map((vendor) => vendor.Markets);
  // const dates = vendors.map((vendor) => vendor.Dates);

  const templateParams = {
    email: user.email,
    message: vendorList.join(", "),
    user: user.name,
    // market: markets[0],
    // date: dates[0],
  };

  console.log(templateParams);
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form.current);
    emailjs
      .send(
        "service_9pl6vqk",
        "template_xaqppnp",
        templateParams,
        "Aq5vptnbqHy4bzG2w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // send a get request to the backend/database for markets like by specific user
  return (
    <>
      <h1>my vendors</h1>
      <CardsDisplay likedVendors={likedVendors} user={user} />
      <div className="send-list">
        <form onSubmit={sendEmail}>
          <button type="submit">Send Me My List</button>
        </form>
      </div>
    </>
  );
};

export default MyVendors;
