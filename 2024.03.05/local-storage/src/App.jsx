import { useState, useEffect } from 'react';
import Products from './componenets/products/Products';
import './App.css'

function App() {

  const  [value, setValue] = useState();

  useEffect(() => {
    //info paemimas is localStorage vos tik uzsikrovus komponentui
    setValue(localStorage.getItem('text'));
  }, []);

  const setLocalValue = (e) => {
    // info patalpinimas i lokalu podeli (localStorage)
  localStorage.setItem('text', 'Hello World'); 
 }

 const getLocalValue = (e) => {
  setValue(localStorage.getItem('text'));
 }

  return (
    <>
     <h1>Local Storage</h1>
     <div className='my-3'>{value}</div>
     <button className='btn btn-primary'
     onClick={setLocalValue}
     >
      Set local value
      </button>
      <button className='btn btn-primary'
     onClick={getLocalValue}
     >
      Get Local Value
     </button>
     <Products />
    </>
  )
}

export default App
