import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Projects from '../components/projects/Project.jsx';
import NewProject from '../components/new-project/NewProject.jsx';


const User = () => {
    const [data, setData] = useState([])
    // const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/projects/project')
            .then(resp => {
                console.log(resp)
                setData(resp.data)
            })
            .catch(resp => console.log('Klaida'))

    }, [])


    return (
        <>
            <div >
                <NewProject />
                {data.map(project =>
                    <Projects
                        data={project}
                        // setLoading={setLoading} 
                        key={project._id}
                    />
                )}
            </div>
        </>
    );
}

export default User;
