import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();

    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų persiuntimas POST metodu
        fetch('http://localhost:3000/users/', {
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(resp => resp.text())
        .then(resp => {
            console.log(resp);
            // Peradresavimo iniciavimas
            navigate('/admin');
        });
        
        
    }

    return (
        <>
            <h1>Naujas vartotojas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="last_name"
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

export default NewProduct;