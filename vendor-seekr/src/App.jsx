// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import CardsDisplay from './components/CardsDisplay';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CardsDisplay />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
