import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        // Paimame produktus iš localStorage
        const localData = JSON.parse(localStorage.getItem('data'));
        
        // Patikriname ar informacija egzistuoja
        if(localData) 
            setData(localData); //Priskiriame produktų informaciją prie state'o
    }, [loader]);

    // Ištrynimo funkcija
    const handleDelete = (index) => {
        if(window.confirm("Do you really want to delete?")) 
            
          
        // Ištrynimas iš masyvo
        data.splice(index, 1);
        // Duomenų priskyrimas į localStorage
        localStorage.setItem('data', JSON.stringify(data));

        // Komponento atnaujinimas
        setLoader(prev => !prev);
    }   

    return (
        <>  
            <div className="d-flex justify-content-between align-items-center">
                <h2>Admin</h2>
                <Link to="/admin/prideti-kirpeja" className="btn btn-success">Prideti Kirpeja</Link>
            </div>
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
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Ištrinti
                                </button>
                                <Link 
                                    to={'/admin/edit-kirpeja/' + index}
                                    className="btn btn-warning"
                                >
                                    Redaguoti
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Admin;