import { Router } from 'express';
import upload from '../middleware/multer.js';
import project from '../model/project.js'
import {rm} from 'node:fs/promises'
import auth from '../middleware/auth.js'





const router = Router();

// Grazinamas visu postu sarasas
router.get('/project',  async (req, res) => {
    try {
        // Populate metodas uzpildo schemoje pazymeta raktazodi modelio informacijoje
       res.json(await project
                        .find()
                        .populate('autorius', ['vardas', 'pavarde', 'partija'])
                        .populate('statusas')
                        
        );
    } catch(e) {
        console.log(e);
        res.status(500).json('ivyko prisijungimo klaida')
    }
});

router.get('/:id', async (req, res) => {
    //vieno iraso paemimas

    // Norint paimti parametro reiksme: req.params
    try {
        res.json(await project.findById(req.params.id));
    } catch {
        res.status(500).json('ivyko klaida');
    }
});

// Naujo iraso sukurimas
router.post('/project', upload.single('foto'), async (req, res) => {


    if(req.file)
     req.body.photo = req.file.filename;
 
     try {
       
         await project.create(req.body);
         res.json('Irasas issaugotas')
     } catch(e) {
        console.log(e);
         res.status(500).json('ivyko prisijungimo klaida')
     }
 });

 router.put('/project/:id', auth,  upload.single('nuotrauka'), async (req, res) => {
    console.log(req.body);
    try {
        if(req.file) {
        const oldPost =  await project.findById(req.params.id);
        if(oldPost.photo) {
            try {
                await rm('./uploads/' + oldPost.photo);
            } catch {
                console.log('Tokios nuotraukos nera');
            }
        }
        req.body.photo = req.file?.filename    
        }
        const updated = await project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
    } catch(e) {
        // console.log(e);
        res.sendStatus(500);
    }

   
});

router.delete('/:id', auth, async (req, res) => {
    try {
        await project.deleteOne({ _id: req.params.id });
        res.json('Projektas sėkmingai pašalintas');
    } catch {
        res.status(500).json('Įvyko klaida');
    }
});

export default router;