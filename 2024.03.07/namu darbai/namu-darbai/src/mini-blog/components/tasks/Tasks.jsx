import { useState, useEffect } from 'react';

const Tasks = ({ reload }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('tasks')

        if(!data) return;

        setData(JSON.parse(data));
    }, [reload]);
    
    return (
        <>
            <h3>Tasks List</h3>
            {data.map((value, index) => <li key={index}>{value}</li>)}
        </>
    )
}

export default Tasks;