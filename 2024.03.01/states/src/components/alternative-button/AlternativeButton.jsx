import { useState } from 'react';

const AlternativeButton = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Mygtuko paspaudimas kitaip</h2>
            <div>Rezultatas: {count}</div>
            <button onClick={() => setCount(count + 1)}
            >
                paspauk mane</button>
        </>
    )
}
export default AlternativeButton