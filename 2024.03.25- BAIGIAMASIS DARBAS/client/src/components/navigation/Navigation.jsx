
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';

import style from './Navigation.module.css';
// import axios from 'axios';

const Navigation = () => {
    const { setShowNewProject, setUser } = useContext(MainContext);
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     axios.get('http://localhost:3000/users/logout')
    //     .then(resp => {
    //         setUser(false);
    //         navigate('/login');
    //     })
    // }

    return (
        <div className={style.sidebar}>

            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link to="/" className={style.link}>
                            <i className="bi bi-house-door"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/" className={style.link}>
                            <i className="bi bi-house-door"></i>
                            <span>Seimo nariai</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={style.link}
                            onClick={() => setShowNewProject(true)}
                        >
                            <i className="bi bi-plus-square"></i>
                            <span>Naujas projektas</span>
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link 
                            className={style.link}
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-left"></i>
                            <span>Logout</span>
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;