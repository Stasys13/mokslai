import { Router } from 'express';
import Post from '../model/posts.js'
import upload from '../middleware/multer.js';
import { rm } from 'node:fs/promises'
const router = Router();

router.get('/total', async (req, res) => {
    const obj = await Post.find();
    // res.send({count: obj.length})
     res.send({count: await Post.countDocuments()})
});

router.get('/:id' , async (req, res) => {
    //Vieno iraso paemimas 
    //Norint paimti parametro reiksme: req.params

   const view =  await Post.findById(req.params.id)
   view.view_count += 1
    await Post.findByIdAndUpdate(req.params.id, view);
    res.send(await Post.findById(req.params.id));
   
});

router.get('/', async (req, res) => {

    // Visu irasu perziurejimas
    res.send(await Post.find());
});


router.post('/', upload.single('nuotrauka'), async (req, res) => {
    // console.log(req.body);
    // await Post.create({ ...req.body, created_at: Date.now() });
    req.body.photo = req.file?.filename
     req.body.created_at = new Date();
     const result = await Post.create(req.body);
    res.send( result)
});

// iraso atnaujinimas
router.put('/:id', upload.single('nuotrauka'), async (req, res) => {

    if(req.file) {
       const oldPost =  await Post.findById(req.params.id);
       if(oldPost.photo) {
        try {
            await rm('./uploads/' + oldPost.photo);
        } catch {
            console.log('Tokios nuotraukos nera');
        }
       }
       req.body.photo = req.file?.filename    
    }
   const updated = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
   res.send(updated);

   
});

// Iraso istrynimas
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.send('istrynta')
})



export default router;

