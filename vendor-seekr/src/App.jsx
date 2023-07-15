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

  const fetchUserVerfification = () => {
    fetch("/api/user/getsession", { method: "GET" })
      .then((response) => response.json())
      .then((response) => {
        console.log("response.user: ", response.user);
        if (response.user) {
          setIsLoggedIn(true);
          setUser({
            name: response.user.username,
            email: response.user.email,
            id: response.user.id,
          });
        } 
        else setIsLoggedIn(false);
        console.log("verified user: ", user);
      });
  };

  useEffect(() => fetchUserVerfification(), [isLoggedIn]);

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
