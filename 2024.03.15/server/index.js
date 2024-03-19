import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import post from './controller/posts.js';
import cors from 'cors';
import upload from './middleware/multer.js';

// MVC
// Model - Atsakingas uz informacijos paemima is duomenu bazes
// View - Atsakingas uz is controlerio gautos informacijos atvaizdavima
// Controller - Atsakingas uz modelio informacijos apdorojima


// Prisijungimas prie mongodb duomenu bazes pavadinimu: pirma_duombaze
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

// Aplikacijos iniciavimas
const app = express()

//Perduodamu reiksmiu urlencoded formatu paemimo nustatymas
app.use(express.urlencoded({
  extended: true
}));

// Leidimo kreiptis i serveri is kito adreso priskyrimas
app.use(cors());

app.use('/files', express.static('./uploads'));
// Controlerio registravimas
app.use('/users/', user);
app.use('/posts/', post);
// app.use(upload.array());



app.listen(3000);