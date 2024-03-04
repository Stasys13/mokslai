import Logo from './components/logo/Logo.jsx'
import Search from './components/search/Search.jsx'
import Navi from './components/navigation/Nav.jsx'
import Picture from './components/logo/Picture.jsx'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className="container">
          <div className="logos">
            <div className="logotipas">
              <Logo />
              <div className='search'>
                <Search />
              </div>
            </div>
            <div className="nav">
              <nav>
                <Navi />
              </nav>
            </div>
          </div>
          <div className="intro">
            <div className="text">

            </div>
            <div className="buttons">

            </div>
            <div className="picture">
              <Picture />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
