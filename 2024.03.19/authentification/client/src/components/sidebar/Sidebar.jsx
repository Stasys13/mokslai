import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import logo from './logo.svg';
import style from './Sidebar.module.css';
import axios from 'axios';

const Sidebar = () => {
    const { setShowNewPost, setUser } = useContext(MainContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.get('http://localhost:3000/users/logout')
        .then(resp => {
            setUser(false);
            navigate('/login');
        })
    }

    return (
        <aside className={style.sidebar}>
            <div className={style.logo}>
                <img src={logo} alt="Instagram" />
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li>
                        <Link to="/" className={style.link}>
                            <i className="bi bi-house-door"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.link} 
                            onClick={() => setShowNewPost(true)}
                        >
                            <i className="bi bi-plus-square"></i>
                            <span>Create</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={style.link}
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-left"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;