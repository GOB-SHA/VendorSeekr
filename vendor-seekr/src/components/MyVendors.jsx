import CardsDisplay from "./CardsDisplay";

const MyVendors = ({ vendorInfo, user }) => {
  // send a get request to the backend/database for markets like by specific user
  return (
    <>
      <h1>my vendors</h1>
      <CardsDisplay vendorInfo={vendorInfo} user={user} />
      <div>
        <input type="text" name="email" placeholder="Email Address"></input>
        <button>Send Me My List</button>
      </div>
    </>
  );
};

export default MyVendors;
