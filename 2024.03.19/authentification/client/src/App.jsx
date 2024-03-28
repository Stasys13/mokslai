
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MainContext from './context/Main.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import User from './pages/User.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import NewPost from './components/new-post/NewPost.jsx';
import './App.css'

const App = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/users/check-auth')
      .then(resp => setUser(resp.data))
      .catch(err => console.log('Neprisijunges'));
  }, []);

  const contextValues = {
    showNewPost,
    setShowNewPost,
    user,
    setUser
  }

  return (
    <>
      <MainContext.Provider value={contextValues}>
        <BrowserRouter>
          {/* TIKRINAME AR VARTOTOJAS YRA PRISIJUNGES */}
          {user && 
            <>
              {/* Tikriname ar showNewPost reikšmė teigiama, jei taip atvaizduojame NewPost komponento modalinį langą */}
              {showNewPost && 
                <NewPost />
              }
              <Sidebar />
            </>
          }
          <Routes>
            {/* TIKRINAME AR VARTOTOJAS YRA PRISIJUNGES */}
            {user && 
              <>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/user/:id" 
                  element={<User />} 
                />  
              </>   
            }      
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="*" 
              element={<Login />} 
            />
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </>
  )
}

export default App
