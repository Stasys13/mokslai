import express from 'express';
import session from 'express-session';
import mongoose from "mongoose";
import user from './controller/user.js';
import post from './controller/post.js';
import comment from './controller/comment.js';
import cors from 'cors'
import like from './controller/like.js';



await mongoose.connect('mongodb://localhost:27017/instagram');

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
app.set('trustproxy', true);


// Nustatymas Gauti duomenis x-xwww-form-urlencod formatu
app.use(express.urlencoded({
    extended: true
}));

//
app.use(express.json());

app.use('/users', user);
app.use('/posts', post);
app.use('/comments', comment);
app.use('/uploads', express.static('./uploads'));
app.use('/likes', like);

// Failų atvaizdavimui kreipiantis į route'ą uploads
app.use('/uploads', express.static('./uploads'));




app.listen(3000);