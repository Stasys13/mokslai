import './App.css';
import logo from './assets/react.svg';
import Button from './components/button/Button.jsx';


//Komponentai (Component)
function App() {
  // Grazinamas turinys
  // JSX sintakse
  // Kiekvienas komponentas privalo grazinti tik vienaJSX elementa
  // <></> yra fragmentas (fragment)
  return (
    <>
    <div className="header">
      <img src={logo} />
      <input type="text" placeholder='search'/>
      <div>

      </div>
      </div>
    </>
  );
}

export default App;
