import { useState } from 'react';

const CreateTask = ({ setReload }) => {
    const [task, setTask] = useState();

    const handleSubmit = (e) => {
        // Standartinio veikimo sustabdymas
        e.preventDefault();

        let data = localStorage.getItem('tasks');

        if(data) {
            // Atnaujinimas
            data = JSON.parse(data);
            data.push(task);
            localStorage.setItem('tasks', JSON.stringify(data));
        } else {
            // Pridėjimas
            localStorage.setItem('tasks', JSON.stringify([task]));
        }

        setReload((prev) => !prev);
    }

    return(
        <>
            <h3>New Task</h3>
            <form 
                className="input-group mb-5"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    className="form-control" 
                    // State'o task reikšmės pakeitimas
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-primary">Add</button>
            </form>
        </>
    )
}

export default CreateTask;