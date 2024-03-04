import { useState } from 'react';

const Button = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
       
         setCount(count + 1)
        // setCount(prev => prev + 1) //tinka abu variantai
      }

    return (
        <>
            <h2>Mygtuko paspaudimai</h2>

            <div>Rezultatas: {count}</div>
            <button
                onClick={handleClick}
            >
                Paspausk mane
            </button>
        </>
    )
}
export default Button