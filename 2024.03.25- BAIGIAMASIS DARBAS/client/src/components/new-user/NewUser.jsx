import { useState, useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MainContext from '../../context/Main.jsx'
import style from './NewUser.module.css'

const NewUser = () => {
    const [message, setMessage] = useState();
    const { setUser, user } = useContext(MainContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //      if(!user.pirmininkas)
    //   return navigate('./login');
    // }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {}


        for (const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        axios.post('http://localhost:3001/users/register', data)
            .then(resp => {
                // setMessage('registracija')
                navigate('/user');
            })
            .catch(err => setMessage(err.response.data.message));
    }

    return (
        <>

            <form className={style.form} onSubmit={handleSubmit}>
                <h1>Naujas seimo narys</h1>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input
                        type="text"
                        className="form-control"
                        name="vardas"
                    />
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input
                        type="text"
                        className="form-control"
                        name="pavarde"
                    />
                </div>
                <div className="mb-3">
                    <label>Partija</label>
                    <input
                        type="text"
                        className="form-control"
                        name="partija"
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <label>Slaptazodis</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                    />
                </div>
                {/* <div className="mb-3">
                    <label>Registracija Data</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="registracijos_data"
                    /> 
                </div> */}
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default NewUser;

