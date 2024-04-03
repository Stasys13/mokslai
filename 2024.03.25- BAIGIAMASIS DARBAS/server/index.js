import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import cors from 'cors';
import project from './controller/project.js'
import user from './controller/user.js'
import status from './controller/status.js'




await mongoose.connect('mongodb://localhost:27017/baigiamasis-darbas');

const app = express();


app.set('trust proxy', true);

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}
));

app.use(session({
    // Slaptos frazes nustatymas
    secret: 'labai slapta fraze',
    resave: false,
    saveUninitialized: false,
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use('/users', user);
// app.use('/admins', admin);
app.use('/projects', project);
app.use('/status', status);

// Failų atvaizdavimui kreipiantis į route'ą uploads
app.use('/uploads', express.static('./uploads'));

app.listen(3001);
