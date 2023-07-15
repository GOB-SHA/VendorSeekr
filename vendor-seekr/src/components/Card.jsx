import React from "react";
import likeIcon from "../assets/vendorJoe.png";
import { useState } from "react";
import photos from "./vendors";

// handle click funciton send post request to backend to enter information from card into database
// Category is type in the SQL database

const Card = ({ vendorInfo, user, photo_id }) => {
  const handleLike = () => {
    console.log({
      user_id: user.id,
      vendor_id: vendorInfo.id,
      vendorname: vendorInfo.vendor_name,
    });
    //
    fetch("/api/vendor/likevendor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        vendor_id: vendorInfo.id,
        user: user,
      }),
    })
      .then((data) => data.json())
      .then((response) => console.log(response));
  };
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    if (showModal) setShowModal(false);
    else setShowModal(true);
  };

  return !showModal ? (
    <div className="vendorCard">
      <img
        src={photos[photo_id]}
        className="vendorPhoto"
        onClick={handleModal}
      />
      <div>
        <button className="likeBtn" onClick={handleLike}>
          <img className="likeIcon" src={likeIcon} />
        </button>
      </div>
      <div className="vendor-details">
        <p onClick={handleModal}>
          <strong>Name: </strong>
          {vendorInfo.vendor_name}
        </p>
      </div>
    </div>
  ) : (
    <div className="vendorCardModal">
      <div>
        <button className="modal-btn" onClick={handleModal}>
          X
        </button>
      </div>
      <img src={photos[photo_id]} className="vendorPhotoModal" />
      <div>
        <button className="likeBtn" onClick={handleLike}>
          <img className="likeIcon" src={likeIcon} />
        </button>
      </div>
      <div className="vendor-details">
        <p>
          <strong>Name: </strong>
          {vendorInfo.vendor_name}
        </p>
        <p>
          <strong>Category: </strong>
          {vendorInfo.vendor_type}
        </p>
        <p>
          <strong>Description: </strong>
          {vendorInfo.vendor_description}
        </p>
        {/* <p>
          <strong>Next Chance to Shop: </strong>
          {vendorInfo.Dates} @ {vendorInfo.Markets}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
