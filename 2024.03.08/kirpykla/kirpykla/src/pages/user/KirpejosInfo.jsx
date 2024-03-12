import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

const KirpejosInfo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Paimame produktus iš localStorage
        const localData = JSON.parse(localStorage.getItem('data'));
        
        // Patikriname ar informacija egzistuoja
        if(localData) 
            setData(localData); //Priskiriame produktų informaciją prie state'o
    }, []);
    return (
        <>
        <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nuotrauka</th>
                        <th>Vardas</th>
                        <th>Tel nr</th>
                        <th>Email</th>
                        <th>Valandinis ikainis</th>
                        <th>Ivertinimas</th>
                        <th>Aprasymas</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((kirpejos, index) => 
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                                <img src={kirpejos.nuotrauka} style={{ maxWidth: 50 }} />
                            </td>
                            <td>{kirpejos.vardas}</td>
                            <td>{kirpejos.telnr}</td>
                            <td>{kirpejos.email}</td>
                            <td>{kirpejos.ikainis}</td>
                            <td>{kirpejos.ivertinimas}</td>
                            <td>{kirpejos.aprasymas}</td>
                            </tr>
                            )}
                </tbody>
            </table>
        </>
    )
}
export default KirpejosInfo