import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {  useParams } from 'react-router-dom';
import axios from 'axios'


const User = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/users/user')
            .then(resp => setUsers(resp.data))
            .catch(error => {
                console.error('Klaida:', error);
                setMessage('Įvyko klaida gaunant duomenis.');
            });
    }, [loader]);

    // const { id } = useParams();

    // const handleDelete = () => {
    //     axios.delete(`http://localhost:3001/projects/` + id)
    //         .then(resp => {
    //             console.log(resp.data);
    //             setUsers(users.filter(user => user._id !== id));
    //             setLoader(false); // įsitikinkite, kad loader būsena pakeičiama atgal į false
    //         })
    //         .catch(error => {
    //             console.error('Klaida:', error);
    //             setMessage('Įvyko klaida trinant vartotoją.');
    //         });
    // }



    return (
        <>
        <div className="bg-success p-2 text-white">
            <h1>Seimo narių sąrašas</h1>
            <Link to="/new-user" className="btn btn-primary">Naujas Vartotojas</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nr.</th>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Partijos pavadinimas</th>
                        <th>El. paštas</th>
                        <th>Slaptažodis</th>
                        <th>Registracijos data</th>
                        {/* <th></th> */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.vardas}</td>
                            <td>{user.pavarde}</td>
                            <td>{user.partija}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{new Date(user.registracijos_data).toLocaleDateString('lt-LT')}</td>
                            {/* <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete()}
                                >
                                    Ištrinti
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {message && <div>{message}</div>} */}
            </div>
        </>
    );
};

export default User;



