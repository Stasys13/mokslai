import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';
import Projects from '../components/projects/Project.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { showNewPost, setUser } = useContext(MainContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;

        axios.get('http://localhost:3001/projects/project')
        .then(resp => setData(resp.data))
        .catch(err => {
            if(err.response.status === 401) {
                setUser(false);
                navigate('/login');
            }
        });
    }, [showNewPost, loading]);

    return (
        <>
     
            <h1>Seimo narių pasiulyti projektai</h1>

            
            {data.map(project => 
                <Projects 
                    data={project} 
                    setLoading={setLoading} 
                    key={project._id} 
                />
            )}
        </>
    );
}

export default Home;