import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Admin from './pages/admin/Admin';
import NewPost from './pages/admin/NewPost';
import EditPost from './pages/admin/EditPost';
import './App.css'

function App() {
  

  return (
    <>
         <BrowserRouter>
        <Routes>
          {/* Route'ų (kelių) registravimas */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-post" element={<NewPost />} />
          <Route path="/admin/edit-post/:indentifikatorius" element={<EditPost/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
