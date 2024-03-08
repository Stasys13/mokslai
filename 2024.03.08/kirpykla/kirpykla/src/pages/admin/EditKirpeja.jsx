import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditKirpeja = () => {
    const [form, setForm] = useState({});

    // Peradresavimo (redirect) kūrimas
    const navigate = useNavigate();
    // Reikšmės patalpintos url adrese paėmimas 
    const { indentifikatorius } = useParams();
    
    useEffect(() => {
        // Duomenų iš localStorage paėmimas
        const localData = JSON.parse(localStorage.getItem('data'));

        // Patikrinimas ar jie buvo priskirti
        if(!localData)
            return;

        // Duomenų priskyrimas prie state'o, tam, kad formoje matytume anksčiau buvusias reikšmes
        setForm(localData[indentifikatorius]);
    }, []);

    // Formos duomenų įrašymas
    const handleSubmit = (e) => {
        e.preventDefault();

        // Formos duomenų paėmimo pradžia
        const formData = new FormData(e.target);
        const data = {};

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        // Formos duomenų paėmimo pabaiga

        // 1. Paimame duomenis iš localStorage
        // 2. Konvertuojam duomenis
        // 3. Redaguojame duomenis
        // 4. Konvertuojame duomenis iš naujos
        // 5. Išsaugojame duomenis
        const localData = JSON.parse(localStorage.getItem('data'));
        localData[indentifikatorius] = data;
        localStorage.setItem('data', JSON.stringify(localData));

        // Peradresavimo iniciavimas
        navigate('/admin');
    }

    return (
        <>
            <h1>Kirpejos info redagavimas</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nuotrauka</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="nuotrauka"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.nuotrauka}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Vardas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="vardas"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.vardas}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Tel nr</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="telnr"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.telnr}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="email"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.email}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Valandinis ikainis</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="ikainis"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.ikainis}
                    /> 
                </div>
                <div className="mb-3">
                    <label>Ivertinimas</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="ivertinimas"
                        // Reikšmės atvaizdavimas laukelyje
                        defaultValue={form.ivertinimas}
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
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    );
}

export default EditKirpeja;