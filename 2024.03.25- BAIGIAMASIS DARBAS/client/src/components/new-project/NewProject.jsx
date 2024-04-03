import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import style from './NewProject.module.css';
import axios from 'axios'


const NewProject = ({data}) => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();


    const [message, setMessage] = useState();
    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        //Laikinas sprendimas
         formData.append('author', '6602a7ca5568d44f27bc869c');


        axios.post('http://localhost:3001/projects/project/', formData)
            .then(resp => {
                navigate('/')
            })
            .catch(err => setMessage(err.response.data.message));

    }

    return (
        <div className={style.newPost}>
            <div className={style.modal}>
                <form onSubmit={handleSubmit}>
                    <h1>Naujas Projektas</h1>

                    <div className="mb-3">
                        <h2 >Projekto pavadinimas</h2>
                        <input type="text"
                            className="form-control"
                            name="pavadinimas"
                        />
                    </div>

                    <div className="mb-3">
                        <h2>Prideti Nuotrauka</h2>
                        <input
                            type="file"
                            name="foto"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h2>Projekto aprasymas</h2>
                        <input
                            type="text"
                            className="form-control"
                            name="aprasymas"
                        ></input>
                    </div>
                    <div className="mb-3">
                        <h2>Svarstymo data</h2>
                        <input
                            type="date"
                            className="form-control"
                            name="data_svarstymo"
                        ></input>
                    </div>
                    
                    <button className="btn btn-primary">Submit</button>
                </form>
                {/* <div>{data.statusas?.statusas}</div> */}
            </div>
        </div>
    );
}
export default NewProject;