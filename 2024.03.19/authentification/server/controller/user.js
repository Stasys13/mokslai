import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js';
import bcrypt from 'bcrypt';
import auth from '../middleware/auth.js';


const router = Router();

router.get('/check-auth', (req, res) => {
    if(req.session.user) {
        res.json(req.session.user);
    } else {
        res.sendStatus(401);
    }
});
router.get('/logout', auth, (req, res) => {
    req.session.destroy();
    res.json('Sveikiname sėkmingai atsijungus');
});


router.get('/:id', async (req, res) => {
    
    try {
        res.json(
            await User.findById(req.params.id)
            .select(['user_name', 'photo', 'bio', 'email'])
            .populate('posts')
            .populate('postCount')
        );
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
})


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

            // Priskiriame vartotoja informacija prie sesijos
            req.session.user = {
                _id: data._id,
                user_name: data.user_name,
                photo: data.photo,
                bio: data.bio,
                email: data.email
            }

            res.json(req.session.user)
        

    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});


router.get('/', async (req, res) => {
    // Tikriname ar vartotojas yra prisijungęs, jeigu ne, grąžinsime statusą 401 ir žinutę: "Turinys prieinamas tik registruotiems varotojams"
    // Jeigu taip: Tuomet grąžinsime statusą 200 ir pasisveikinimo žinutę: "Labas Pasauli"
    if (req.session.loggedIn) {
        res.json('Labas Pasauli');
    } else {
        res.status(401).json('Turinys prieinamas tik registruotiems varotojams');
    }
});


router.post('/', async (req, res) => {
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

router.post('/register', upload.single('photo'), async (req, res) => {
    console.log(req.body)
    try {
        // Jeigu turime persiunciama nuotrauka
        if (req.file)
            req.body.photo = req.file.filename; // Priskiriame failo pavadinima prie mongodb irasomu duomenu

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

export default router;







