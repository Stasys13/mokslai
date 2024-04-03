import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Projects from '../components/projects/Project.jsx';
import style from './Home.module.css'

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;

        axios.get('http://localhost:3001/projects/project')
            .then(resp => setData(resp.data))
            .catch(err => {
                if (err.response.status === 401) {
                    setUser(false);
                    navigate('/login');
                }
            });
    }, [loading]);

    return (
        <>
    {/* <img src="/foto/seimas.jpg" alt="" /> */}
            <h1 className={style.h1}>Seimo narių pasiulyti projektai</h1>
            <Link to="/new-project" >
                <button type="button" className="btn btn-success">Naujas projektas</button>
            </Link>
    <div className='table-responsive'>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Nuotrauka</th>
                        <th>Pavadinimas</th>
                        <th>Aprasymas</th>
                        <th>Sukurimo data</th>
                        <th>Svarstymo data</th>
                        <th>Statusas</th>
                        <th>Autorius</th>
                        <th></th>
                     
                    </tr>
                </thead>
                <tbody>
                    {data.map(project =>
                        <Projects
                            data={project}
                            setLoading={setLoading}
                            key={project._id}
                        />
                    )}
                </tbody>

            </table>
            </div>
        </>
    );
}

export default Home;