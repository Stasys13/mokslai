import { useState } from 'react';
import './Buttons.css'

const Buttons = () => {
     const [value, setValue] = useState('');
    //  const [fieldValue, setFieldValue] = useState('');

    // const handleClick = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
        
    // };

    // const plius = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
    // }
    // const minus = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
    // }
    // const daugyba = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
    // }
    // const dalyba = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
    // }
    // const suma = (e) => {
    //     setFieldValue (fieldValue + e.target.textContent)
    // }
    return (
        <>
         <div className='container' >
        <div className='display'>{value}</div>
        <div className='numbers'>
         <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="/" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
         <input type="button" value="=" onClick={e => setValue(eval(value))} />
        </div>
      </div>
        
        </>
    //     <>
    //      <div className='container' >
    //     <div className='display'>{fieldValue}</div>
    //     <div className='numbers'>
    //       <button onClick={handleClick}>7</button>
    //       <button onClick={handleClick}>8</button>
    //       <button onClick={handleClick}>9</button>
    //       <button onClick={dalyba}>/</button>
    //       <button onClick={handleClick}>4</button>
    //       <button onClick={handleClick}>5</button>
    //       <button onClick={handleClick}>6</button>
    //       <button onClick={daugyba}>*</button>
    //       <button onClick={handleClick}>1</button>
    //       <button onClick={handleClick}>2</button>
    //       <button onClick={handleClick}>3</button>
    //       <button onClick={plius}>+</button>
    //       <button onClick={handleClick}>.</button>
    //       <button onClick={handleClick}>0</button>
    //       <button onClick={suma}>=</button>
    //       <button onClick={minus}>-</button>
    //     </div>
    //   </div>
        
    //     </>
    )
}
export default Buttons 