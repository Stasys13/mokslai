import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/header/Header';
import './App.css'

function App() {

  return (
    <>
      {/* 
        <h3>https://www.delfi.lt/lietuva/naujienos/?referer=google&ad=gemius</h3>
        <p>https:// (http://) - Protokolas</p>
        <p>127.0.0.1 - Lokalus Ip adresas</p>
        <p>delfi.lt - domenas (domain)</p>
        <p>www - subdomenas (subdomain)</p>
        <p>/lietuva/naujienos/ - parametrai. Pvz du parametrai: lietuva, naujienos</p>
        <p>?referer=google&ad=gemius - query parametrai. Pvz du parametrai key: referer = google, key: ad = gemius000</p>
        <h3>http://localhost:5174/</h3>
        <p>:5174 - portas (port)</p> 
      */}
      {/* BrowserRouter komponentas privalo apgliaubti visą turinį kuriame naudosime nuorodas */}
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            {/* 
              Kelio registravimas. path nurodo kelią už domeno. 
              Element nurodo komponentą kuris turės būti atvaizduojamas 
            */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
