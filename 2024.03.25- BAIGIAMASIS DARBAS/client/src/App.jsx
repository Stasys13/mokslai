import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Pirmininkas from './pages/Pirmininkas.jsx'
import NewProject from './components/new-project/NewProject.jsx'
import NewUser from './components/new-user/NewUser.jsx'
import EditProject from './components/projects/EditProject.jsx'
import User from './pages/User.jsx'
import './App.css'

function App() {

  const [user, setUser] = useState(false);

  const contextValues = {
    // showNewProject,
    // setShowNewProject,
    user,
    setUser
  }

  useEffect(() => {
    axios.get('http://localhost:3001/users/check-auth')
      .then(resp => setUser(resp.data))
      .catch(err => console.log('Neprisijunges'));
  }, []);
  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
        {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/edit-project/:id" element={<EditProject />} />
            <Route path="/new-user" element={<NewUser />} />
            {Pirmininkas && ( <Route path="/pirmininkas" element={<Pirmininkas/>} />)}
            {User && (<Route path="/user" element={<User/>} />)}
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
