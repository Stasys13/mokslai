import { useState, useContext } from 'react';
import MainContext from '../../context/Main.jsx';
import style from './NewProject.module.css';
import axios from 'axios'

const NewProject = () => {
    const [message, setMessage] = useState();
    const { setShowNewProject, user } = useContext(MainContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
      
        formData.append('author', user._id);

        axios.post('http://localhost:3001/projects/project', formData)
            .then(resp => setShowNewProject(false))
            .catch(err => setMessage(err.message));
    }
    return (
        <div className={style.newPost}>
            <div className={style.close}
                onClick={() => setShowNewProject(false)}
            >
                <i className='bi bi-x'></i>
            </div>
            <div className={style.modal}>
                <h2>Create new post</h2>
                <form onSubmit={handleSubmit}>
                    {message &&
                        <div className='alert alert-danger'>{message}</div>
                    }
                    <div className="mb-3">
                        <input
                            type="file"
                            name="photo"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="description"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default NewProject;