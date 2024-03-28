import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import style from './Project.module.css';
import axios from 'axios';


const Project = ({ data }) => {
   
    const { user } = useContext(MainContext);



    return (
        <>
            <h2>{data.pavadinimas}</h2>
            <h2>{data.aprasymas}</h2>
            <img src={'http://localhost:3001/uploads/' + data.photo} />
            <h2>{data.created_at}</h2>
            <h2>{data.data_svarstymo}</h2>
            {/* <h2>{data.autorius.vardas}</h2> */}
            <h2>{data.statusas.pavadinimas}</h2>



            {/* <div className={style.post}>
                <div className={style.user}>
                    <div className={style.userPhoto}>
                        <img src={'http://localhost:3001/uploads/' + data.author.photo} />
                    </div>
                    <div className={style.userName}>
                        <Link to={'/user/' + data.author._id}>
                            {data.author.user_name}
                        </Link>
                    </div>
                </div>
                <div className={style.photo}>
                    <img src={'http://localhost:3001/uploads/' + data.photo} />
                </div> */}
                {/* <div className={style.actions}>
                    <ul>
                        <li
                            onClick={handleLike}
                        >
                            <i className="bi bi-heart"></i>
                        </li>
                       
                    </ul>
                </div> */}
               
                {/* <div className={style.description}>
                    <Link to={'/user/' + data.author._id}>
                        <strong className={style.userName}>
                            {data.author.user_name}
                        </strong>
                    </Link>
                    {data.description}
                </div> */}
               
               
            {/* </div> */}
            </>
            );
    };


            export default Project;