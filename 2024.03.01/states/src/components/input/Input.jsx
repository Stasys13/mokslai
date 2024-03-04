import { useState } from 'react';


const Input = () => {
    const [fieldValue, setFieldValue] = useState();
    const handleChange = (e) => {
        setFieldValue(e.target.value);
    }

    return (
        <>
            <h2>Laukelio reiksme</h2>

            <input type="text"
                onChange={handleChange}
            />
            <div>{fieldValue}</div>
        </>
    )
}
export default Input