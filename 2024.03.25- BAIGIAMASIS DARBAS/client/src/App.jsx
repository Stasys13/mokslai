import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Pirmininkas from './pages/Pirmininkas.jsx'
import './App.css'

function App() {


  return (
    <>
      <MainContext.Provider value>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users/register" element={<Pirmininkas />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
