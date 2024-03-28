import {Router} from 'express';
import Post from '../model/post.js';
import Like from '../model/like.js';
import upload from '../middleware/multer.js';

const router = Router();

// Grazinamas visu postu sarasas
router.get('/', async (req, res) => {
    try {
        // Populate metodas uzpildo schemoje pazymeta raktazodi modelio informacijoje
       res.json(await Post
                        .find()
                        .populate('author', ['user_name', 'photo'])
                        .populate('likes')
        );
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});

// Naujo iraso sukurimas
router.post('/', upload.single('photo'), async (req, res) => {
   if(req.file)
    req.body.photo = req.file.filename;

    try {
        await Post.create(req.body);
        res.json('Irasas issaugotas')
    } catch {
        res.status(500).json('ivyko prisijungimo klaida')
    }
});
export default router;