import React from 'react';
import likeIcon from '../assets/vendorJoe.png';

const Card = ({ vendorInfo }) => {
  return (
    <>
      <div className='vendorCard'>
        <img src={vendorInfo.photo} className='vendorPhoto' />
        <div>
          <button className='likeBtn' onClick={() => console.log('liked!')}>
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
