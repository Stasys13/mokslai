import Products from './components/cart/Products.jsx'
import data from './data/data.js'
import './App.css'

function App() {

  return (
    <>
   
    {data.map((value, index) => 
       <Products key={index} data={value} />
    )}
    
    </>
  )
}

export default App
