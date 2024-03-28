import { Router } from 'express';
import Like from '../model/like.js';

const router = Router();



// Naujo iraso sukurimas
router.post('/', async (req, res) => {

    try {
        const data = await Like.findOne(req.body)
        console.log(data);
       if(data) {
            // Jeigu Like`s jau buvo pridetas, tada noresime ji pasalinti
            await data.deleteOne();
        } else {
            // Jeigu nebuvo, tuomet noresime prideti
            await Like.create(req.body)
       }
        // await Like.create(req.body);
        res.json('Irasas issaugotas')
    } catch {
        // Ivykus klaidai 
        res.status(500).json('ivyko prisijungimo klaida')
    }
});



export default router;