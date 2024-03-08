import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home';
import Admin from './pages/admin/Admin';
import NewProduct from './pages/admin/NewProduct';
import EditProduct from './pages/admin/EditProduct';
import './App.css'

const App = () => {
  // CRUD:
  // CREATE
  // READ
  // UPDATE
  // DELETE

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route'ų (kelių) registravimas */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/new-product" element={<NewProduct />} />
          <Route path="/admin/edit-product/:indentifikatorius" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
