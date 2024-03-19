

import { Router } from 'express';
import User from '../model/user.js'
import upload from '../middleware/multer.js';

const router = Router();

router.get('/', async (req, res) => {

    // Visu irasu grazinimas
    res.send(await User.find());

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

router.post('/', upload.single('nuotrauka'), async (req, res) => {
    //Naujo vartotojo sukurimas
    if (req.file)
        req.body.photo = req.file.filename;

    await User.create(req.body)

    res.send('irasas issaugotas');
})

// iraso atnaujinimas
router.put('/:id', upload.single('nuotrauka'), async (req, res) => {
    try {
        const updatedPost = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedPost);
    } catch {
        res.send('ivyko klaida')
    }
});

// Iraso istrynimas
router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('istrynta')
})

export default router;