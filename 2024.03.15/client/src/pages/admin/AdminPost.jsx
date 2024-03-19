import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        //Duomenu paemimas is serverio
       fetch('http://localhost:3000/posts')
       .then(resp => resp.json())
       // Duomenu priskyrimas prie state`o
       .then(resp => setData(resp));
    }, [loader]);

    // Ištrynimo funkcija
    const handleDelete = (id) => {
       console.log(id);
       fetch('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
       })
       .then(resp => resp.text())
       .then(resp => {
         console.log(resp)
        setLoader(!loader)
    })
    }     

    return (
        <>  
            <div className="d-flex justify-content-between align-items-center">
                <h2>Admin</h2>
                <Link to="/admin/new-post" className="btn btn-success">Naujas produktas</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nuotrauka</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Author</th>
                        <th>Count_view</th>
                        <th>Created_at</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => 
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>
                                <img src={item.nuotrauka} style={{ maxWidth: 50 }} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.author}</td>
                            <td>{item.view_count}</td>
                            <td>{item.created_at}</td>
                            <td>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Ištrinti
                                </button>
                                <Link 
                                    to={'/admin/edit-post/' + item.id}
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