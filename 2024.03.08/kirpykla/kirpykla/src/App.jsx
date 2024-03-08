
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kirpejos from './pages/user/Kirpejos';
import Admin from './pages/admin/Admin';
import PridetiKirpeja from './pages/admin/PridetiKirpeja';
import EditKirpeja from './pages/admin/EditKirpeja';
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
          <Route path="/" element={<Kirpejos />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/prideti-kirpeja" element={<PridetiKirpeja />} /> 
          <Route path="/admin/edit-kirpeja/:indentifikatorius" element={<EditKirpeja />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
