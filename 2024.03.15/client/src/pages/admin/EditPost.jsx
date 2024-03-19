import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [form, setForm] = useState({});

   
    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();

      
    }

    return (
        <>
            <h1>Produkto redagavimas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Produkto pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.title}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="photo"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.photo}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Produkto kaina</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="price"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.price}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Kiekis sandėlyje</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        name="qty"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.qty}
                    /> 
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditProduct;