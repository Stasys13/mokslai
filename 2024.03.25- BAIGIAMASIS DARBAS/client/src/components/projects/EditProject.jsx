import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const EditProject = () => {
    const [form, setForm] = useState({});
    const [message, setMessage] = useState();

    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    // Reikšmės patalpintos url adrese paėmimas 
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:3001/projects/' + id)
        .then(resp => {
            console.log(resp.data);
            setForm(resp.data)
        })
        .catch(err => setMessage(err.response.data));

       
    }, []);

    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų paėmimo pradžia
        const formData = new FormData(e.target);
        // const data = {};

        // for(const input of formData.entries()) {
        //     data[input[0]] = input[1];
        // }

        axios.put('http://localhost:3001/projects/project/' + id, formData)
        .then(resp => navigate('/'))
        .catch(err => setMessage(err.response.data));
       
    }

    return (
        <>
            <h1>Projekto redagavimas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="file" 
                        className="form-control" 
                        name="nuotrauka"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.photo}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Pavadinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="pavadinimas"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.pavadinimas}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Aprasymas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="aprasymas"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.aprasymas}
                    /> 
                </div>
      
                <div className="mb-3">
                    <label>Svarstymo data</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        name="data_svarstymo"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={new Date(form.data_svarstymo).toLocaleDateString('lt-LT')}
                    /> 
                </div>
                {/* <div className="mb-3">
                    <label>Statusas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="statusas"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.statusas}
                    /> 
                </div> */}
                <button className="btn btn-primary">Atnaujinti</button>
            </form>
        </>
    );
}

export default EditProject;