import { useNavigate } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import style from './NewProject.module.css';
import axios from 'axios'

const NewProject = () => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();

    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų persiuntimas POST metodu
        axios.post('http://localhost:3001/projects/project', {}, {
            headers: {
                'Content-Type': 'application/json'
            }


        })

            .then(resp => {
                console.log(resp);
                // Peradresavimo iniciavimas
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={style.newPost}>
            <div className={style.modal}>
                <form onSubmit={handleSubmit}>
                    <h1>Naujas Projektas</h1>

                    <div className="mb-3">
                        <h2 >Projekto pavadinimas</h2>
                        <input type="text" className="form-control" name="description" />
                    </div>

                    <div className="mb-3">
                        <h2>Prideti Nuotrauka</h2>
                        <input
                            type="file"
                            name="photo"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <h2>Projekto aprasymas</h2>
                        <input
                            className="form-control"
                            name="description"
                        ></input>
                    </div>
                    <div className="mb-3">
                        <h2>Talpinimo data</h2>
                        <input
                            type="date"
                            className="form-control"
                            name="description"
                        ></input>
                    </div>
                    <div className="mb-3">
                        <h2>Svarstymo data</h2>
                        <input
                            type="date"
                            className="form-control"
                            name="description"
                        ></input>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default NewProject;