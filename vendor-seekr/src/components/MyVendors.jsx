import CardsDisplay from "./CardsDisplay";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import vendors from "./vendors";

const MyVendors = ({ vendorInfo, user }) => {
  // const form = useRef();
  const vendorList = vendors.map((vendor) => vendor.Name);
  const markets = vendors.map((vendor) => vendor.Markets);
  const dates = vendors.map((vendor) => vendor.Dates);
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
      <CardsDisplay vendorInfo={vendorInfo} user={user} />
      <div className="send-list">
        <form onSubmit={sendEmail}>
          <button type="submit">Send Me My List</button>
        </form>
      </div>
    </>
  );
};

export default MyVendors;
