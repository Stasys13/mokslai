import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/uzduotis-vite/First';
import Second from './pages/produktu-sarasas/Second';
import Skaiciuotuvas from './pages/skaiciuotuvas/Skaiciuotuvas';
import Password from './pages/password/Password';
import LocalStorage from './pages/local-storage/LocalStorage';
import Miniblog from './pages/mini-blog/Miniblog';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}/>
          <Route path="/second" element={<Second />}/>           
          <Route path="/skaiciuotuvas" element={<Skaiciuotuvas />}/>           
          <Route path="/password" element={<Password />}/>           
          <Route path="/localstorage" element={<LocalStorage />}/>           
          <Route path="/miniblog" element={<Miniblog />}/>            
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
