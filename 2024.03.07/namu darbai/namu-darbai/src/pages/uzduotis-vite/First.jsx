import Logo from '../../uzduotis-vite/components/logo/Logo.jsx'
import Search from '../../uzduotis-vite/components/search/Search.jsx'
import Navi from '../../uzduotis-vite/components/navigation/Nav.jsx'
import Picture from '../../uzduotis-vite/components/logo/Picture.jsx'
import './App.css'

function First() {

  return (
    <>
      <header>
        <div className="firstcontainer">
          <div className="firstlogos">
            <div className="firstlogotipas">
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

export default First
