import { Router } from 'express';
import bcrypt from 'bcrypt';
import User from '../model/user.js';

const router = Router();

// Grazinamas visu postu sarasas
router.get('/user', async (req, res) => {
    try {
        // Populate metodas uzpildo schemoje pazymeta raktazodi modelio informacijoje
       res.json(await User
                        .find()
                        // .populate('autorius', ['vardas', 'pavarde', 'partija'])
                        
        );
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});

router.get('/:id', async (req, res) => {
    //vieno iraso paemimas

    // Norint paimti parametro reiksme: req.params
    try {
        res.json(await User.findById(req.params.id));
    } catch {
        res.status(500).json('ivyko klaida');
    }
});

router.post('/register',  async (req, res) => {
    // Patikrinti ar vartotojas yra adminas (pirmininkas)
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
    try {
        
        
        //Slaptazodzio sifravimas
        // hash - yra sifravimo stringas
        req.body.password = await bcrypt.hash(req.body.password, 10);


        // Sukuriam vartotoja
        await User.create(req.body)
        // Graziname zinute
        res.json('Vartotojas sukurtas')
    } catch (e) {     // Su e = error, patikrinam kokia yra klaida, jei ji yra.
        console.log(e)
        // Ivykus klaidai graziname klaidos koda ir zinute
        res.status(500).json('ivyko klaida')
    }
});

router.post('/login', async (req, res) => {
    // Prisijungimui tikimes
    // Email ir password
    try {
        //findOne metodas grazina tik vieno iraso informacija
        const data = await User.findOne({ email: req.body.email });
        // Jei vartotojas nerastas , nutraukiame funkcija ir graziname zinute
        if (!data)
           return res.status(401).json('Neteisingas email adresas');

        // Jei vartotojo slaptazodis nesutampa su ivestu , graziname klaidos koda ir zinute
        if(!await bcrypt.compare(req.body.password, data.password))
            return res.status(401).json('Neteisingas slaptazodis ') 

            // Priskiriame vartotojo informacija prie sesijos
            req.session.user = {
                _id: data._id,
                vardas: data.vardas,
                pavarde: data.pavarde,
                partija: data.partija,
                email: data.email
            }

            res.json(req.session.user)
        

    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});

export default router;