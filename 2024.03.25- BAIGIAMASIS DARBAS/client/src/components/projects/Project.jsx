import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import style from './Project.module.css';
import axios from 'axios';
import { useContext } from 'react';



const Project = ({ data }) => {

    const { user } = useContext(MainContext)

    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('')
    const [loding, setLoader] = useState()

    // useEffect(() => {
    //     axios.get('http://localhost:3001/users/')
    //       .then(resp => setUsers(resp.data))
    //       .catch(error => {
    //         console.error('Klaida:', error);
    //         setMessage('Įvyko klaida gaunant duomenis.');
    //       });
    //   }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/projects/` + id)
            .then(resp => {
                console.log(resp.data);
                setUsers(users.filter(data => data._id !== id));
                setLoader(false); // įsitikinkite, kad loader būsena pakeičiama atgal į false
            })
            .catch(error => {
                console.error('Klaida:', error);
                setMessage('Įvyko klaida trinant vartotoją.');
            });
    }

    return (
        <>
            {/* <div className="d-flex justify-content-between align-items-center"></div> */}
            <tr>
                {/* <td>{data._id}</td> */}
                <td>
                    <img src={'http://localhost:3001/uploads/' + data.photo} style={{ maxWidth: 50 }} />
                </td>
                <td>{data.pavadinimas}</td>
                <td>{data.aprasymas}</td>
                <td> {new Date(data.created_at).toLocaleDateString('lt-LT')}</td>
                <td>{new Date(data.data_svarstymo).toLocaleDateString('lt-LT')}</td>
                <td>{data.statusas && (<>{data.statusas?.statusas}</>)}</td>
                <td>
                    {data.autorius && (
                        <>
                            <span>{data.autorius?.vardas}</span>
                            <span>{data.autorius?.pavarde}</span>
                            <span>{data.autorius?.partija}</span>
                        </>
                    )}
                </td>
                {/* {data.autorius._id === user._id && ( */}
                    <>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(data._id)}
                            >
                                Ištrinti
                            </button>
                            <Link
                                to={'/edit-project/' + (data._id)}
                                className="btn btn-warning"
                            >
                                Redaguoti
                            </Link>
                        </td>
                    </>
                {/* )} */}
            </tr>

        </>
    );
}

export default Project;



