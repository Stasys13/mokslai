import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import user from './controller/user.js';


const app = express();

app.use(session({
    // Slaptos frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: true,
}));
app.set('trustproxy', true);



app.use(express.urlencoded({
    extended: true
}))
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze');

app.use('/', user);




app.listen(3000);