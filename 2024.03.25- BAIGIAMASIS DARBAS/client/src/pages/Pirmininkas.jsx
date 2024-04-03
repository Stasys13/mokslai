import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Projects from "../components/projects/Project.jsx"

const Pirmininkas = () => {
    const [data, setData] = useState([])
    // const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/projects/project')
            .then(resp => {
                // console.log(resp)
                setData(resp.data)
            })
            .catch(resp => console.log('Klaida'))

    }, [])


    return (
        <>
            <Link to="/new-user" className="btn btn-success">Naujas Vartotojas</Link>
            <Link to="/user" className="btn btn-primary">Seimo nariai</Link>
            <div className="d-flex justify-content-between align-items-center flex-column">  </div>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Nuotrauka</th>
                        <th>Pavadinimas</th>
                        <th>Aprasymas</th>
                        <th>Sukurimo data</th>
                        <th>Svarstymo data</th>
                        <th>Statusas</th>
                        <th>Autorius</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(project =>
                        <Projects
                            data={project}
                            // setLoading={setLoading} 
                            key={project._id}
                        />
                    )}
                </tbody>
            </table>

        </>
    );
}

export default Pirmininkas