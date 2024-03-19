import { Router } from 'express';
import User from '../model/user.js'



const router = Router()



router.get('/', async (req, res) => {
    // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
    // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
    if(req.session.loggedIn) {
        res.json('Labas Pasauli');
    } else {
        res.status(401).json('Turinys prieinamas tik registruotiems varotojams');
    }
});


router.post('/users', async (req, res) =>  {
    // Gauti vartotojo įvestis iš užklausos
    const { email, password } = req.body;

    // Surasti vartotoją duomenų bazėje
    const user = await User.findOne({ email });

    // Patikrinti ar vartotojas rastas ir ar slaptažodis teisingas
    if (user && user.password === password) {
        req.session.loggedIn = true;
        res.json("Sveikiname prisijungus");
    } else {
        res.status(401).json('Neteisingi prisijungimo duomenys');
    }

});

// app.post('/login', (req, res) => {
//     // Tikrinime ar prisijungimo duomenys yra teisingi.
//     // Jeigu taip: tuomet grąžiname statusą 200, žinutę: "Sveikiname prisijungus" ir prie sesijos duomenų skiriame raktažodį loggedIn su reikšme true
//     // Jeigu ne: tuomet grąžiname statusą 401 ir žinutę: "Neteisingi prisijungimo duomenys"
//     // Teisingi duomenys: 
//     // "admin@vcs.lt" 
//     // "1234"
//     if(req.body.email === 'admin@vcs.lt' && req.body.password === '1234') {
//         req.session.loggedIn = true;
//         res.json("Sveikiname prisijungus")
//     } else {
//         res.status(401).json("neteisingi duomenys")
//     }
    
//     res.send(req.session.labas)
//     // res.send('Labas pasauli');
// });

export default router;