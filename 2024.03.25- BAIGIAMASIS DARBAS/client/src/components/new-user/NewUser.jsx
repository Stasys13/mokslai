import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const NewUser = () => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();

    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų persiuntimas POST metodu
        axios.post('http://localhost:3001/users/register', {}, {
                headers: {
                          'Content-Type': 'application/json'
                }
        
           
        })

        .then(resp => {
            console.log(resp);
            // Peradresavimo iniciavimas
            navigate('/');
        })
        .catch(err => console.log(err))
        
        
    }

    return (
        <>
            <h1>Naujas seimo narys</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="vardas"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="pavarde"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Partija</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="partija"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Slaptazodis</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default NewUser;