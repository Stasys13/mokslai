import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();

    // Produkto formos submitas
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/posts/', {
            method: 'POST', 
            body: new FormData(e.target)
        })
           .then(resp => resp.text)
           .then(resp => {
             console.log(resp)
             // Peradresavimo iniciavimas
            navigate('/admin');
    
            });
        
      
    }

    return (
        <>
            <h1>Naujas Produktas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Produkto pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto kaina</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                    /> 
                </div>
                <div className="mb-3">
                    <label>Kiekis sandėlyje</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="qty"
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default NewProduct;