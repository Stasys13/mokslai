import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Pirmininkas from './pages/Pirmininkas.jsx'
import NewProject from './components/new-project/NewProject.jsx'
import NewUser from './components/new-user/NewUser.jsx'
import User from './pages/User.jsx'
import './App.css'

function App() {

  const [user, setUser] = useState();

  const contextValues = {
    // showNewProject,
    // setShowNewProject,
    user,
    setUser
  }


  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/new-user" element={<NewUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pirmininkas" element={<Pirmininkas/>} />
            <Route path="/user/:id" element={<User/>} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
