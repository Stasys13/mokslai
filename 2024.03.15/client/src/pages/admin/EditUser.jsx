import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const [form, setForm] = useState({});
    const [loader, setLoader] = useState(false);


    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    // Reikšmės patalpintos url adrese paėmimas 
    const { id } = useParams();

    useEffect(() => {
        //Vartotoju duomenu paemimas
        fetch('http://localhost:3000/users/' + id)
        .then(resp => resp.json())
        // Duomenu priskyrimas prie state`o
        .then(resp => {
            console.log(resp);
            setForm(resp)
        });

        // AXIOS UZKLAUSOS FORMAVIMAS
        Axios.get('http://localhost:3000/users/' + id)
        .then(resp => setForm(resp.data))
        .then()
    }, [loader]);

    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        axios.put()

        //Vartotojo issaugojimas
        fetch('http://localhost:3000/users/' + id,  {
            method: 'PUT',
            body: new FormData(e.target)
        })
            .then(resp => resp.text)
            .then(resp => {
                console.log(resp)

                // Peradresavimo iniciavimas
                navigate('/admin');
                setLoader(!loader)
            })
        }

        return (
            <>
                <h1>Informacijos redagavimas</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Vardas</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                        // Reikšmės atvaizdavimas laukelyje
                         defaultValue={form.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Nuotrauka</label>
                        <input
                            type="text"
                            className="form-control"
                            name="photo"
                        // Reikšmės atvaizdavimas laukelyje
                         defaultValue={form.photo}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Pavarde</label>
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                        // Reikšmės atvaizdavimas laukelyje
                         defaultValue={form.last_name}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                        // Reikšmės atvaizdavimas laukelyje
                         defaultValue={form.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Slaptazodis</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                        // Reikšmės atvaizdavimas laukelyje
                         defaultValue={form.password}
                        />
                    </div>
                    <button className="btn btn-primary">Pridėti</button>
                </form>
            </>
        );
    }

    export default EditProduct;