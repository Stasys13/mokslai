import { useState } from 'react';

const Quantity = () => {
    const [count, setCount] = useState(0);

    const handleDeduction = () => {
        // Patikrinimas
        if (count >= 1)
            setCount(count - 1);
    }
    const handleAdd = () => {
        // Patikrinimas
        if (count <= 99)
            setCount(count + 1);
    }

    return (
        <>
            <button onClick={handleDeduction}>-</button>
            <div>{count}</div>
            <button onClick={handleAdd}>+</button>
        </>
    )
}
export default Quantity