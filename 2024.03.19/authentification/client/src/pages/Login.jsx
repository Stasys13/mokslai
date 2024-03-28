import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';

const Login = () => {
    const [message, setMessage] = useState();
    const { setUser } = useContext(MainContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1]; 
        }

        axios.post('http://localhost:3000/users/login', data)
        .then(resp => {
            setUser(resp.data);
            navigate('/');
        })
        .catch(err => setMessage(err.response.data));
    }

    return (
        <>
            <h1>Please login</h1>
            {message &&
                <div className="alert alert-danger">
                    {message}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Please enter email address:</label>
                    <input 
                        type="email" 
                        placeholder="name@gmail.com" 
                        className="form-control"
                        name="email"
                    />
                </div>
                <div className="mb-3">
                    <label>Please enter password:</label>
                    <input 
                        type="password" 
                        className="form-control"
                        name="password"
                    />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </>
    );
}

export default Login;