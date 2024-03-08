import Products from '../../produktu-sarasas/components/cart/Products.jsx'
import data from '../../produktu-sarasas/data/data.js'
import './App.css'

function Second() {

  return (
    <>
   
    {data.map((value, index) => 
       <Products key={index} data={value} />
    )}
    
    </>
  )
}

export default Second;
