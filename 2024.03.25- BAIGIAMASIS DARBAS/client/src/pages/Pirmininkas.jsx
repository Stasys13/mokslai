import { useEffect, useState } from 'react';
import axios from 'axios';
import NewUser from "../components/new-user/NewUser.jsx"
import Projects from "../components/projects/Project.jsx"

const Pirmininkas = () => {
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
        <NewUser />
             {data.map(project => 
                <Projects 
                    data={project} 
                    // setLoading={setLoading} 
                    key={project._id} 
                />
            )}
        </>
    );
}

export default Pirmininkas