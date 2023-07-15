// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import CardsDisplay from './components/CardsDisplay';
import Signup from './components/Signup';
import Login from './components/Login';
import MyVendors from './components/MyVendors';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: 'tomato bob',
    email: 'lcchrty@gmail.com',
  });
  // const fetchUserVerfification = () => {
  //   fetch("/api/user", { method: "GET" })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setIsLoggedIn(response.loggedIn); //need res.locals objects from back end?
  //       setUser(response.username);
  //       console.log("verified user");
  //     });
  // };
  // useEffect(() => fetchUserVerfification(), []);
  return (
    <>
      <NavBar loggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<CardsDisplay user={user} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myvendors' element={<MyVendors user={user} />} />
      </Routes>
    </>
  );
}

export default App;
