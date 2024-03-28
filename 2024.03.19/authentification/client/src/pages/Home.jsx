import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../context/Main.jsx';
import axios from 'axios';
import Post from '../components/post/Post.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { showNewPost, setUser } = useContext(MainContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) return;

        axios.get('http://localhost:3000/posts/')
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
            <h1>Streamas</h1>
            {data.map(post => 
                <Post 
                    data={post} 
                    setLoading={setLoading} 
                    key={post._id} 
                />
            )}
        </>
    );
}

export default Home;