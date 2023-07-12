import CardsDisplay from "./CardsDisplay";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import vendors from "./vendors";

const MyVendors = ({ vendorInfo, user }) => {
  // const form = useRef();
  const vendorList = vendors.map((vendor) => vendor.Name);
  const templateParams = {
    email: user.email,
    message: vendorList,
    user: user,
  };
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
    console.log(vendorInfo),
    (
      <>
        <h1>my vendors</h1>
        <form onSubmit={sendEmail}>
          <div name="message">
            <CardsDisplay vendorInfo={vendorInfo} user={user} />
            <input type="text" name="email" placeholder="Email Address"></input>
          </div>
          <button type="submit">Send Me My List</button>
        </form>
        <div></div>
      </>
    )
  );
};

export default MyVendors;
