import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../context/Main.jsx';
import style from './Project.module.css';
import axios from 'axios';


const Project = ({ data }) => {

    const { user } = useContext(MainContext);



    return (
        <>

            <div className={style.project}>
                <h2>{data.pavadinimas}</h2>
                <h2>{data.aprasymas}</h2>
                <img src={'http://localhost:3001/uploads/' + data.photo} />
                <h2>{data.created_at}</h2>
                <h2>{data.data_svarstymo}</h2>
                {/* <h2>{data.autorius.vardas}</h2> */}
                <h2>{data.statusas.pavadinimas}</h2>
            </div>



        </>
    );
};


export default Project;